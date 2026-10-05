"""
Stitch HTML -> React JSX Converter
Properly extracts body content from Stitch-generated HTML files
and creates valid React functional components.
"""
import re
import os
import sys

SCREENS = {
    "bhu_explorer": "BhuExplorer",
    "bhu_locker": "BhuLocker",
    "property_ingestion": "PropertyIngestion",
    "smart_ledger": "SmartLedger",
    "market_radar": "MarketRadar",
    "nyaya_bhumi": "NyayaBhumi",
}

INPUT_DIR = "c:/landrecords/stitch_html"
OUTPUT_DIR = "c:/landrecords/frontend/src/pages"

def html_to_jsx(html_content):
    """Convert raw HTML body content to valid JSX."""
    # Extract only the content inside <body ...>...</body>
    body_match = re.search(r'<body[^>]*>(.*)</body>', html_content, re.DOTALL)
    if not body_match:
        print("  WARNING: No <body> tag found!")
        return html_content
    
    body = body_match.group(1)
    
    # Remove <svg class="inline-defs-container" ...>...</svg> (empty defs)
    body = re.sub(r'<svg\s+class="inline-defs-container"[^>]*>.*?</svg>', '', body, flags=re.DOTALL)
    
    # Remove <meta>, <link>, <style>, <script> tags that are inside body
    body = re.sub(r'<meta[^>]*/?>', '', body)
    body = re.sub(r'<link[^>]*/?>', '', body)
    body = re.sub(r'<style[^>]*>.*?</style>', '', body, flags=re.DOTALL)
    body = re.sub(r'<script[^>]*>.*?</script>', '', body, flags=re.DOTALL)
    
    # HTML -> JSX attribute conversions
    body = re.sub(r'\bclass=', 'className=', body)
    body = re.sub(r'\bfor=', 'htmlFor=', body)
    body = re.sub(r'\btabindex=', 'tabIndex=', body)
    body = re.sub(r'\bviewbox=', 'viewBox=', body)
    body = re.sub(r'\bstroke-width=', 'strokeWidth=', body)
    body = re.sub(r'\bstroke-dasharray=', 'strokeDasharray=', body)
    body = re.sub(r'\bstroke-linecap=', 'strokeLinecap=', body)
    body = re.sub(r'\bstroke-linejoin=', 'strokeLinejoin=', body)
    body = re.sub(r'\bstroke-miterlimit=', 'strokeMiterlimit=', body)
    body = re.sub(r'\bfill-rule=', 'fillRule=', body)
    body = re.sub(r'\bclip-rule=', 'clipRule=', body)
    body = re.sub(r'\bfill-opacity=', 'fillOpacity=', body)
    body = re.sub(r'\bstop-color=', 'stopColor=', body)
    body = re.sub(r'\bstop-opacity=', 'stopOpacity=', body)
    body = re.sub(r'\bfont-size=', 'fontSize=', body)
    body = re.sub(r'\btext-anchor=', 'textAnchor=', body)
    body = re.sub(r'\bxml:space=', 'xmlSpace=', body)
    body = re.sub(r'\bxlink:href=', 'xlinkHref=', body)
    body = re.sub(r'\baria-hidden=', 'ariaHidden=', body)
    body = re.sub(r'\baria-label=', 'ariaLabel=', body)
    body = re.sub(r'\baria-current=', 'ariaCurrent=', body)
    body = re.sub(r'\bcellpadding=', 'cellPadding=', body)
    body = re.sub(r'\bcellspacing=', 'cellSpacing=', body)
    body = re.sub(r'\bcolspan=', 'colSpan=', body)
    body = re.sub(r'\browspan=', 'rowSpan=', body)
    body = re.sub(r'\bmaxlength=', 'maxLength=', body)
    body = re.sub(r'\bminlength=', 'minLength=', body)
    body = re.sub(r'\breadonly\b', 'readOnly', body)
    body = re.sub(r'\bautocomplete=', 'autoComplete=', body)
    body = re.sub(r'\bpatternunits=', 'patternUnits=', body)
    body = re.sub(r'\bpatternUnits=', 'patternUnits=', body)

    # Self-close void elements: <input ...> -> <input ... />
    for tag in ['input', 'img', 'br', 'hr', 'meta', 'link', 'source', 'embed', 'area', 'col', 'wbr']:
        body = re.sub(rf'<({tag}\b[^>]*?)(?<!/)\s*>', rf'<\1 />', body)
    
    # Convert inline style="..." to JSX style objects
    def convert_style(m):
        style_str = m.group(1)
        pairs = []
        for prop_val in re.split(r';\s*', style_str):
            prop_val = prop_val.strip()
            if not prop_val or ':' not in prop_val:
                continue
            prop, val = prop_val.split(':', 1)
            prop = prop.strip()
            val = val.strip()
            # Convert CSS property to camelCase
            camel = re.sub(r'-([a-z])', lambda x: x.group(1).upper(), prop)
            pairs.append(f'"{camel}":"{val}"')
        return 'style={{' + ','.join(pairs) + '}}'
    
    body = re.sub(r'style="([^"]*)"', convert_style, body)
    
    # Remove onclick/oninput/onchange handlers (they reference undefined functions)
    body = re.sub(r'\s+onclick="[^"]*"', '', body)
    body = re.sub(r'\s+oninput="[^"]*"', '', body)
    body = re.sub(r'\s+onchange="[^"]*"', '', body)
    body = re.sub(r'\s+onmouseover="[^"]*"', '', body)
    body = re.sub(r'\s+onmouseout="[^"]*"', '', body)
    body = re.sub(r'\s+onsubmit="[^"]*"', '', body)
    body = re.sub(r'\s+onfocus="[^"]*"', '', body)
    body = re.sub(r'\s+onblur="[^"]*"', '', body)
    
    # Fix boolean attributes: selected="" -> defaultValue approach handled, disabled="" -> disabled
    body = re.sub(r'\bdisabled=""', 'disabled', body)
    body = re.sub(r'\bselected=""', 'defaultValue=""', body)
    body = re.sub(r'\bchecked=""', 'defaultChecked', body)
    
    # Replace &amp; -> {"&"} is not necessary, JSX handles &amp; fine
    # But we do need to handle {/* comments */} properly - HTML comments to JSX
    body = re.sub(r'<!--\s*(.*?)\s*-->', r'{/* \1 */}', body)
    
    return body.strip()


def create_component(name, jsx_body):
    """Wrap JSX body in a React component."""
    return f"""import React from 'react';

export default function {name}() {{
  return (
    <>
      {jsx_body}
    </>
  );
}}
"""


def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    for filename, component_name in SCREENS.items():
        input_path = os.path.join(INPUT_DIR, f"{filename}.html")
        output_path = os.path.join(OUTPUT_DIR, f"{component_name}.jsx")
        
        print(f"Converting {filename}.html -> {component_name}.jsx ...")
        
        with open(input_path, 'r', encoding='utf-8') as f:
            html = f.read()
        
        jsx_body = html_to_jsx(html)
        component = create_component(component_name, jsx_body)
        
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(component)
        
        print(f"  Written: {output_path} ({len(component)} bytes)")
    
    print(f"\nDone! Created {len(SCREENS)} components.")


if __name__ == '__main__':
    main()

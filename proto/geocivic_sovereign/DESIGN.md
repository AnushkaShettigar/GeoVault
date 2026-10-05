---
name: GeoCivic Sovereign
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#444651'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#757682'
  outline-variant: '#c5c5d3'
  surface-tint: '#4059aa'
  primary: '#00236f'
  on-primary: '#ffffff'
  primary-container: '#1e3a8a'
  on-primary-container: '#90a8ff'
  inverse-primary: '#b6c4ff'
  secondary: '#006c4e'
  on-secondary: '#ffffff'
  secondary-container: '#97f5cc'
  on-secondary-container: '#007353'
  tertiary: '#4a1d00'
  on-tertiary: '#ffffff'
  tertiary-container: '#6c2e00'
  on-tertiary-container: '#ff8e49'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b6c4ff'
  on-primary-fixed: '#00164e'
  on-primary-fixed-variant: '#264191'
  secondary-fixed: '#97f5cc'
  secondary-fixed-dim: '#7bd8b1'
  on-secondary-fixed: '#002115'
  on-secondary-fixed-variant: '#00513a'
  tertiary-fixed: '#ffdbca'
  tertiary-fixed-dim: '#ffb68e'
  on-tertiary-fixed: '#331200'
  on-tertiary-fixed-variant: '#763300'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
  surface-pearl: '#F8F9FA'
  surface-card: '#FFFFFF'
  border-subtle: '#E2E8F0'
  border-muted: '#CBD5E1'
  gis-polygon-clear: '#04785726'
  gis-polygon-clear-stroke: '#047857'
  gis-polygon-disputed: '#B4530926'
  gis-polygon-disputed-stroke: '#B45309'
  gis-polygon-encumbered: '#DC262626'
  gis-polygon-encumbered-stroke: '#DC2626'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  title-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-code:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
---

## Brand & Style

This design system establishes a high-integrity, forward-looking aesthetic tailored for mission-critical Digital Public Infrastructure (DPI) in cadastral and spatial land governance. It blends **Corporate Precision** with **Tactile GIS Utility**—shedding the cumbersome, bureaucratic visual debt of legacy institutional portals in favor of crisp, authoritative clarity.

### Personality & Tone
- **Authoritative & Uncompromising:** Visual rhythms prioritize trust, data provenance, and spatial exactitude.
- **Civic & Organic:** Grounded in real geography through balanced earth tones, representing surveyed terrain, agriculture, and municipal boundaries.
- **High-Velocity Utility:** Engineered for prolonged operational sessions by revenue surveyors, municipal registrars, and landholders seeking frictionless verification.

### Design Principles
1. **Cartographic Primacy:** The interface yields screen real estate to geospatial contexts. Overlays, panels, and side-sheets act as translucent physical sheets over a living map plane.
2. **Deterministic Clarity:** High-contrast semantic states eliminate ambiguity—clear demarcations separate surveyed, dispute-flagged, and government-vested titles.
3. **Institutional Durability:** Clean typographic hierarchy, measured paddings, and deliberate border structures ensure accessible operations under demanding desktop and field conditions.

## Colors

The palette directly communicates statutory authenticity and cadastral land states.

### Core Semantic Roles
- **Primary Civic Blue (`#1E3A8A`):** The institutional anchor. Used for primary navigation frames, dominant state-level actions, verified institutional crests, and critical identification tokens (such as 14-digit ULPIN identifiers).
- **Secondary Land Green (`#047857`):** The affirmation color. Designates verified cadastral parcels, successful spatial mutations, undisputed title deeds, and live registry health.
- **Tertiary Earth Brown (`#B45309`):** The alert and inspection color. Used exclusively for boundary demarcations under survey review, pending encumbrance verifications, and spatial alerts.
- **Neutral Slate (`#64748B`):** System scaffolding. Provides foundational balance through precise typographic grading, divider lines, and deactivated control surfaces.

### Surface and GIS Applications
- **Surfaces:** Clean separation is maintained between the operational background canvas (`#F8F9FA`) and elevated data cards (`#FFFFFF`).
- **Cadastral Polygon Rills:** Map vectors utilize translucent color fills (15% alpha) paired with solid 2px stroke edges to preserve satellite and vector basemap legibility underneath parcel boundaries.

## Typography

The design system adopts **Inter** exclusively across headline, body, and micro-label hierarchies. This unified choice provides structural neutrality, exceptional rendering performance at sub-pixel sizes on high-DPI mapping canvasses, and seamless tabular numeric parsing.

### Cadastral & Numerical Conventions
- **Tabular Figures:** All land dimensions, coordinates (lat/long), survey numbers, and 14-digit ULPIN codes must be displayed with tabular numerals (`tnum`) enabled via font-feature-settings to ensure vertical digit alignment in tables and split sidebars.
- **Letter Spacing:** Headlines utilize subtle negative tracking (`-0.01em` to `-0.02em`) to ground dense government data, while micro-labels and identifiers utilize expanded tracking (`+0.02em` to `+0.05em`) for immediate scannability.

## Layout & Spacing

The layout architecture employs a dual model: an unconstrained, edge-to-edge spatial canvas for map exploration, paired with a disciplined 12-column responsive grid for administrative registries and vault dashboards.

### Breakpoints & Canvas Logic
- **Mobile (< 768px):** Single-column stack. Modals and side-panels convert into bottom sheets covering 85% viewport height. Grid margins collapse to `1rem`.
- **Tablet (768px - 1024px):** 8-column layout. Split GIS view allocates 40% pane to land records and 60% to interactive vector map.
- **Desktop (> 1024px):** 12-column layout. Map canvases extend to 100vw/100vh with floating HUD controls (search bar top-center, layer toggles bottom-right), and sliding land detail cards dock flush to the right viewport rail (`440px` fixed width).

### Rhythm
Components follow a standard 8px grid foundation (`0.5rem` stepping). Data-dense rows use compact 4px spacing (`space-xs`) to maintain dense legibility without vertical sprawl.

## Elevation & Depth

Visual hierarchy relies on crisp surface layering and ambient spatial shadow diffusion, minimizing visual noise over satellite imagery and vector data tiles.

### Depth Hierarchy
- **Level 0 (Basemap Canvas):** Raw map render or `#F8F9FA` background plate. Zero shadow.
- **Level 1 (Card & Registry Surfaces):** Resting white surface (`#FFFFFF`) with a structural 1px border (`#E2E8F0`) and an ambient, low-contrast shadow: `0 1px 3px 0 rgba(15, 23, 42, 0.05)`.
- **Level 2 (Floating Controls & Dropdowns):** Layer switchers, search bars, and filter menus: `0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.06)`. Border color elevated to `#CBD5E1`.
- **Level 3 (Cadastral Drawers & Deep Vault Sheets):** Sliding review panels, deed inspection cards: `0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.05)`.

Backdrop filters (`backdrop-filter: blur(8px)`) are permitted strictly on top navigation rails and floating GIS hud bars using `rgba(255, 255, 255, 0.92)` to maintain spatial orientation underneath interface elements.

## Shapes

The design system employs **Level 1 (Soft)** roundedness. Elements utilize `0.25rem` (4px) to `0.5rem` (8px) corner geometry.

### Rationale
In a geographic information system dominated by irregular land parcel polygons, coordinate arcs, and legal cartography, aggressive circular rounding creates visual conflict. Tight, disciplined corners reflect engineering accuracy, architectural boundary pins, and legal paper documentation.

- **Inputs, Buttons, and Data Cells:** `0.25rem` (4px) radius.
- **Vault Cards, Dialog Windows, and Panels:** `0.5rem` (8px) radius.
- **GIS Map HUD Modules:** `0.5rem` (8px) radius with precise 1px perimeter outlines.
- **Verification Badges:** `0.25rem` (4px) structural tag style—never fully pill-shaped.

## Components

### Buttons
- **Primary Civic Button:** Background `#1E3A8A`, text `#FFFFFF`, border-radius `4px`. Hover state: `#172554`. Focus state: 2px ring offset with `#1E3A8A`.
- **Secondary Action Button:** Background `#047857`, text `#FFFFFF`. Hover state: `#065F46`. Reserved for legal approvals, successful deeds, and ledger commitments.
- **Tertiary / Outlined Action:** Background `#FFFFFF`, border 1px solid `#CBD5E1`, text `#1E3A8A`. Hover state: `#F8F9FA`.
- **Destructive / Dispute Action:** Background `#FFFFFF`, border 1px solid `#B45309`, text `#B45309`. Hover state: `#FEF3C7`.

### Cadastral Chips & Badges
- **Verified ULPIN Tag:** Background `#ECFDF5`, text `#047857`, border 1px solid `#A7F3D0`. Includes official verified tick icon.
- **Disputed / Pending Tag:** Background `#FFFBEB`, text `#B45309`, border 1px solid `#FDE68A`.
- **Encumbrance / Lien Tag:** Background `#FEF2F2`, text `#B91C1C`, border 1px solid `#FECACA`.
- **Classification Chips (e.g., Agricultural, Urban):** Background `#F1F5F9`, text `#475569`, border 1px solid `#E2E8F0`.

### Input Fields & Search Bars
- Standard height `40px` for optimal density. Background `#FFFFFF`, border 1px solid `#CBD5E1`, radius `4px`, padding `0 12px`.
- Active focus state applies a crisp 1.5px border in `#1E3A8A` with no offset glow.
- **Global GIS Search Bar:** Elevated height `48px`, Level 2 shadow, prefix icon for location/ULPIN pinning, and suffix indicator for rapid coordinate mode toggle (`EPSG:4326`).

### Property & Deed Cards
- Built on `#FFFFFF` base with 1px border `#E2E8F0`. Padding `16px`.
- Card header features 14-digit ULPIN rendered in bold monospace tabular format (`label-code`).
- Contains mini spatial canvas thumbnail (`120px` height) previewing parcel polygon geometry overlaid on subtle cadastral boundary grids.
- Metadata footer displays boundary area (Hectares/Sq. Ft) paired with verified owner status tokens.

### Specialized GIS Components
- **Spatial Tool Palette:** Vertical icon strip floating on map left edge. Dark slate inactive states, primary blue selection fill, 4px corner rounding.
- **Polygon Slice Guide:** Active boundary splitting lines rendered with dynamic dashed markers in `#B45309` alongside live square footage computation badges hovering over the cursor vector.
- **Chain-of-Custody Timeline:** Connected vertical node track in `#E2E8F0` with solid `#1E3A8A` nodes for registry mutations and `#047857` nodes for cleared encumbrance deeds.
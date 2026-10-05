import React from 'react';

export default function BhuExplorer() {
  return (
    <>
      <header className="sticky top-0 w-full z-50 bg-[#1E3A8A] text-white shadow-md border-b border-[#2d4fa6] overflow-visible"><div className="w-full px-6 py-3 flex items-center justify-between gap-4 overflow-visible"><div className="flex items-center gap-3 shrink-0"><div className="p-1 rounded bg-white shadow-xs flex items-center justify-center shrink-0"><img alt="Bhu-Aadhaar DPI Official Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1XAyoe1btKmWX40__8XMVq9Xfy8pMlvsYrE9xAmxj2tWMBU9OKOeo-jCT2r3bEF2cmKQ0oD2uZzgjqKM6UCUbYWT3xNdbOTHMBSzkOZ6QPVNqDzVLrZBtGBbeEuMZOx9v-BFGkUV7UD-MwbMsjFYdqyazkT_gvHEj1TfQlznQq2ao_GxkTCmq223PGVDKIweNu9EFvlMQpPhCpnT3tJsinfBhJqoTvCoeDRDzMHFEaZyXYwUdOsmM8xAaxE" /></div><div className="flex flex-col shrink-0"><div className="flex items-center gap-2"><span className="font-bold text-base lg:text-lg tracking-tight text-white uppercase leading-none">BHU-AADHAAR</span><span className="bg-[#047857] text-white text-[10px] font-semibold px-2 py-0.5 rounded-full tracking-wide leading-tight">SIH26014</span></div><span className="text-[9px] lg:text-[10px] text-blue-200 tracking-wider uppercase font-medium mt-0.5">National Digital Public Infrastructure for Land Records | Govt of India</span></div></div><nav className="hidden xl:flex items-center gap-1 p-1 bg-[#172e6d] rounded-lg shrink-0"><a ariaCurrent="page" className="px-3 py-1.5 rounded-md transition-all bg-white text-[#1E3A8A] font-bold shadow-xs text-xs shrink-0" data-path="bhu-explorer" href="#">Bhu-Explorer (GIS Map)</a><a className="px-2.5 py-1.5 rounded-md text-blue-100 hover:text-white hover:bg-white/10 text-xs font-medium transition-colors shrink-0" data-path="my-bhu-locker" href="#">My Bhu-Locker</a><a className="px-2.5 py-1.5 rounded-md text-blue-100 hover:text-white hover:bg-white/10 text-xs font-medium transition-colors shrink-0" data-path="property-ingestion" href="#">Property Ingestion</a><a className="px-2.5 py-1.5 rounded-md text-blue-100 hover:text-white hover:bg-white/10 text-xs font-medium transition-colors shrink-0" data-path="smart-ledger" href="#">Smart Ledger (Mutation)</a><a className="px-2.5 py-1.5 rounded-md text-blue-100 hover:text-white hover:bg-white/10 text-xs font-medium transition-colors shrink-0" data-path="market-radar" href="#">Market Radar</a><a className="px-2.5 py-1.5 rounded-md text-blue-100 hover:text-white hover:bg-white/10 text-xs font-medium transition-colors shrink-0" data-path="nyaya-bhumi" href="#">Nyaya-Bhumi (Disputes)</a></nav><div className="flex items-center gap-3 shrink-0"><div className="relative flex items-center shrink-0"><span className="material-symbols-outlined absolute left-3 text-blue-200 pointer-events-none text-[18px]">search</span><input className="w-64 pl-9 pr-3 py-1.5 bg-white/10 border border-white/25 rounded-md text-white placeholder:text-blue-200 text-xs focus:outline-none focus:ring-2 focus:ring-white/40 focus:bg-white/15 transition-all" placeholder="Search ULPIN / Aadhaar / Survey No..." type="text" /></div><button className="flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-white/10 border border-white/20 text-white hover:bg-white/20 text-xs transition-colors shrink-0"><span className="material-symbols-outlined text-[16px] text-blue-200">translate</span><span className="">English / हिंदी</span></button><div className="relative flex items-center justify-center shrink-0"><button className="p-1.5 text-blue-200 hover:text-white hover:bg-white/10 rounded-md transition-colors relative" title="Notifications"><span className="material-symbols-outlined text-[20px]">notifications</span><span className="absolute top-0.5 right-0.5 w-4 h-4 bg-amber-400 text-slate-900 text-[10px] leading-none rounded-full flex items-center justify-center font-bold ring-2 ring-[#1E3A8A]">2</span></button></div><div className="flex items-center gap-2 pl-2 border-l border-white/20 shrink-0"><div className="flex flex-col text-right hidden md:flex"><span className="text-xs font-semibold text-white leading-tight">Rameshwar Sharma</span><span className="text-[11px] text-blue-200 font-medium">Citizen</span></div><img alt="Rameshwar Sharma Profile" className="w-8 h-8 rounded-full object-cover ring-2 ring-white/50 shadow-sm shrink-0" src="https://lh3.googleusercontent.com/aida/AEtjO1Vdhm5Obr5JPlCOVQe0rrS2LzBMWcd4aXEC4AYmTE6SLnMToWXvjwHf3vzdYRMTaxyJJhHimyXjekBoT1SnUQ07DDdCOz2WuoazPKACbgxHwBcdb-LPW5PR00rXCZGbOJ8KUhJS_KCCFB9Dq6kkiuB1B2MmcVxL9mQAsVctLrFxkkbcrl2VGTzHNOxJVsOXCo1PU2AY6GYAXcJV3eS_LxZ6C77GzXCeFxWfAtrs6FrcmJbd2DpL0tGkAlY" /></div></div></div><div className="h-8 w-full bg-[#182f6e] px-6 lg:px-10 flex items-center justify-between border-t border-white/10"><div className="flex items-center gap-2 text-xs text-blue-200"><span className="material-symbols-outlined text-[15px] text-emerald-400">explore</span><span className="text-white font-medium">Sovereign Cadastral Registry</span><span className="text-blue-300/40">/</span><span className="text-white">National Land Grid</span><span className="text-blue-300/40">/</span><span className="text-blue-200 font-mono text-[11px]">EPSG:4326 (WGS 84 Cadastral Mesh)</span></div><div className="flex items-center gap-space-lg text-xs text-blue-200"><div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-400"></span><span className="text-blue-100">Clear Title: <span className="text-white font-semibold">89.4%</span></span></div><div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-400"></span><span className="text-blue-100">Mutation Queue: <span className="text-white font-semibold">12,408</span></span></div><div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-red-400"></span><span className="text-blue-100">Active Liens: <span className="text-red-200 font-semibold">1.2%</span></span></div></div></div></header><main className="w-full bg-[#f8f9ff] flex flex-col flex-1 pb-20">
{/* Top Hero & Search Section */}
<section className="w-full bg-gradient-to-b from-white to-[#f8f9ff] border-b border-slate-200/80 pt-10 pb-8 px-6">
<div className="max-w-7xl mx-auto flex flex-col gap-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div className="space-y-2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#1E3A8A] text-xs font-semibold">
<span className="material-symbols-outlined text-[16px] text-[#047857]">satellite_alt</span>
            Spatial Cadastral Engine &amp; Sovereign Registry
          </div>
<h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Bhu-Explorer: National Sovereign Cadastral GIS Engine
          </h1>
<p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            Instantaneous cryptographic parcel demarcation, geo-referenced RoR verification, and mutation lineage ledger across India’s digitized cadastral fabric.
          </p>
</div>
<div className="flex flex-wrap items-center gap-2.5 shrink-0">
<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-[#047857] text-xs font-semibold shadow-xs">
<span className="w-2 h-2 rounded-full bg-[#047857] animate-pulse"></span>
<span className="">Sovereign Sync 100%</span>
</div>
<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-[#1E3A8A] text-xs font-semibold shadow-xs">
<span className="material-symbols-outlined text-[15px]">tag</span>
<span className="">14-Digit ULPIN Standard</span>
</div>
<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-medium shadow-xs">
<span className="material-symbols-outlined text-[15px] text-slate-500">public</span>
<span className="">EPSG:4326 Datum</span>
</div>
</div>
</div>
{/* Search HUD & Filter Bar */}
<div className="bg-white rounded-xl p-3 shadow-md border border-slate-200/90 flex flex-col gap-3">
<div className="flex flex-col md:flex-row items-center gap-2">
<div className="flex items-center w-full bg-slate-50 rounded-lg px-3.5 py-2.5 border border-slate-200 focus-within:ring-2 focus-within:ring-[#1E3A8A] focus-within:bg-white transition-all">
<span className="material-symbols-outlined text-[#1E3A8A] text-[22px] mr-2.5">pin_drop</span>
<input className="w-full bg-transparent text-slate-900 font-mono text-sm placeholder:text-slate-400 focus:outline-none tracking-wide" id="ulpin-input" placeholder="Search by 14-digit ULPIN, Aadhaar, Survey/Khasra No., Village..." type="text" value="58J92A41890214" />
</div>
<div className="flex items-center gap-2 w-full md:w-auto shrink-0">
<button className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#1E3A8A] hover:bg-[#172e6d] text-white px-6 py-2.5 rounded-lg font-semibold text-xs tracking-wide transition-all shadow-sm">
<span className="material-symbols-outlined text-[18px]">travel_explore</span>
<span className="">Locate Parcel</span>
</button>
<button className="p-2.5 text-slate-600 hover:text-[#1E3A8A] hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors" title="Spatial Bounds Filter">
<span className="material-symbols-outlined text-[20px]">tune</span>
</button>
</div>
</div>
{/* Filter Pills Strip */}
<div className="flex items-center gap-2 overflow-x-auto pt-1 pb-0.5 no-scrollbar text-xs">
<button className="px-3.5 py-1.5 rounded-lg bg-[#1E3A8A] text-white font-medium shadow-xs flex items-center gap-2 shrink-0">
<span className="w-2 h-2 rounded-full bg-emerald-400"></span>
<span className="">All Parcels (1,420)</span>
</button>
<button className="px-3.5 py-1.5 rounded-lg bg-white hover:bg-slate-50 text-slate-700 font-medium shadow-xs flex items-center gap-2 shrink-0 border border-slate-200 border-l-4 border-l-[#047857]">
<span className="material-symbols-outlined text-[16px] text-[#047857]">verified</span>
<span className="">Clear Sovereign Title</span>
</button>
<button className="px-3.5 py-1.5 rounded-lg bg-white hover:bg-slate-50 text-slate-700 font-medium shadow-xs flex items-center gap-2 shrink-0 border border-slate-200 border-l-4 border-l-amber-600">
<span className="material-symbols-outlined text-[16px] text-amber-600">error_outline</span>
<span className="">Disputed / In Enquiry</span>
</button>
<button className="px-3.5 py-1.5 rounded-lg bg-white hover:bg-slate-50 text-slate-600 font-medium shadow-xs flex items-center gap-1.5 shrink-0 border border-slate-200">
<span className="material-symbols-outlined text-[16px] text-slate-500">agriculture</span>
<span className="">Agricultural</span>
</button>
<button className="px-3.5 py-1.5 rounded-lg bg-white hover:bg-slate-50 text-slate-600 font-medium shadow-xs flex items-center gap-1.5 shrink-0 border border-slate-200">
<span className="material-symbols-outlined text-[16px] text-slate-500">apartment</span>
<span className="">Commercial / Abadi</span>
</button>
<button className="px-3.5 py-1.5 rounded-lg bg-white hover:bg-slate-50 text-slate-600 font-medium shadow-xs flex items-center gap-1.5 shrink-0 border border-slate-200">
<span className="material-symbols-outlined text-[16px] text-slate-500">account_balance</span>
<span className="">Gram Sabha / State</span>
</button>
</div>
</div>
</div>
</section>
{/* Spacious Dedicated Map Section */}
<section className="max-w-7xl w-full mx-auto px-6 py-8">
<div className="flex items-center justify-between mb-3 px-1">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[#1E3A8A]">map</span>
<h2 className="text-base font-bold text-slate-900 tracking-tight">Active Cadastral Viewport</h2>
<span className="text-xs text-slate-500 font-mono">Bilaspur Kalan, Pataudi, Gurugram (HR)</span>
</div>
<div className="flex items-center gap-4 text-xs font-mono text-slate-600">
<span className="hidden sm:inline"><strong className="text-slate-900">Centroid:</strong> 28.4595° N, 77.0266° E</span>
<span className="hidden md:inline"><strong className="text-slate-900">Scale:</strong> 1:2,500</span>
<span className="inline-flex items-center gap-1 text-[#047857] font-semibold"><span className="w-2 h-2 rounded-full bg-[#047857]"></span> Live GIS Feed</span>
</div>
</div>
{/* Rounded Map Container */}
<div className="relative w-full h-[600px] rounded-2xl overflow-hidden border border-slate-300 shadow-xl bg-[#E5ECF4]" id="gis-viewport">
{/* Base Cartographic Raster */}
<div className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-700 ease-out transform scale-100 filter brightness-[1.02] contrast-[1.05]" data-location="Bilaspur Kalan, Pataudi, Gurugram, Haryana" id="basemap-tile" style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuCK9LPx76MANW4O8BVnQnTFlXC7FxYD4ifPPIX54ENQeac-2Gboh2CdGDPPVZ-mQ3I0XK0y8sddS_Le7w4-ewLNRQQXzmp2oG-RGtVjmtHD1zJsN9ENdoX6Ju3eeLNR98SE9rWEHJc6kKs0hJjK9O_MRY0Tb3OYwtdJu0Iz2rCMz_aQ-O7rV9wOVxTD_lzOA-xSy04L4KJ3lPM5JPsw6OhGMmMkaOZRLfboZvqxIYu0NkRyGuYF8Qn1gw')"}}></div>
{/* Soft Light Overlay */}
<div className="absolute inset-0 pointer-events-none bg-blue-950/15 mix-blend-multiply"></div>
{/* Cadastral Grid Lines */}
<div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,rgba(30,58,138,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,58,138,0.25)_1px,transparent_1px)] bg-[size:48px_48px]" id="cadastral-mesh"></div>
{/* SVG Overlay */}
<svg className="absolute inset-0 w-full h-full pointer-events-auto" preserveAspectRatio="none" viewBox="0 0 1440 600">
<defs>
<pattern height="8" id="disputed-hatch" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse" width="8">
<line stroke="#B45309" stroke-opacity="0.45" strokeWidth="1.5" x1="0" x2="0" y1="0" y2="8"></line>
</pattern>
<filter height="140%" id="glow-clear-green" width="140%" x="-20%" y="-20%">
<feDropShadow dx="0" dy="0" flood-color="#047857" flood-opacity="0.5" stdDeviation="6"></feDropShadow>
</filter>
<filter height="130%" id="glow-dispute-amber" width="130%" x="-15%" y="-15%">
<feDropShadow dx="0" dy="0" flood-color="#B45309" flood-opacity="0.4" stdDeviation="5"></feDropShadow>
</filter>
</defs>
{/* Adjacent Neutral Parcels */}
<polygon className="cursor-pointer hover:fill-opacity-30 transition-all" fill="#1E3A8A" fillOpacity="0.08" points="80,50 300,40 270,180 50,160" stroke="#1E3A8A" strokeDasharray="4 3" stroke-opacity="0.4" strokeWidth="1.5"></polygon>
<polygon className="cursor-pointer hover:fill-opacity-30 transition-all" fill="#1E3A8A" fillOpacity="0.08" points="300,40 540,20 510,190 270,180" stroke="#1E3A8A" strokeDasharray="4 3" stroke-opacity="0.4" strokeWidth="1.5"></polygon>
{/* Disputed Parcel */}
<g className="cursor-pointer group" id="parcel-disputed-group">
<polygon className="transition-all duration-300 group-hover:stroke-[3.5]" fill="url(#disputed-hatch)" filter="url(#glow-dispute-amber)" points="270,180 620,160 580,380 230,420" stroke="#B45309" strokeWidth="2.5"></polygon>
<polygon className="group-hover:fill-opacity-30 transition-all" fill="#B45309" fillOpacity="0.12" points="270,180 620,160 580,380 230,420"></polygon>
{/* Pin Tag */}
<foreignObject className="overflow-visible pointer-events-none" height="42" width="220" x="320" y="240">
<div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-slate-800 shadow-lg rounded-md border border-amber-600/40 text-xs font-medium">
<span className="material-symbols-outlined text-[15px] text-amber-700">warning</span>
<span className="font-bold text-slate-900">Khasra 142/3A</span>
<span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 text-[10px] uppercase font-bold tracking-wider">Disputed</span>
</div>
</foreignObject>
</g>
{/* Active Selected Clear Title Parcel */}
<g className="cursor-pointer group" id="parcel-active-group">
<polygon className="transition-all duration-300 group-hover:fill-opacity-30" fill="#047857" fillOpacity="0.22" filter="url(#glow-clear-green)" id="primary-polygon" points="620,160 980,130 920,440 580,380" stroke="#047857" strokeWidth="3"></polygon>
{/* Vertices */}
<circle className="animate-pulse shadow-sm" cx="620" cy="160" fill="#047857" r="5.5" stroke="#FFFFFF" strokeWidth="2"></circle>
<circle className="animate-pulse shadow-sm" cx="980" cy="130" fill="#047857" r="5.5" stroke="#FFFFFF" strokeWidth="2"></circle>
<circle className="animate-pulse shadow-sm" cx="920" cy="440" fill="#047857" r="5.5" stroke="#FFFFFF" strokeWidth="2"></circle>
<circle className="animate-pulse shadow-sm" cx="580" cy="380" fill="#047857" r="5.5" stroke="#FFFFFF" strokeWidth="2"></circle>
{/* Quick floating badge */}
<foreignObject className="overflow-visible pointer-events-none" height="70" width="230" x="690" y="235">
<div className="flex flex-col items-center justify-center p-2.5 rounded-lg bg-white/95 backdrop-blur-xs border border-[#047857]/50 text-slate-800 shadow-xl transition-transform hover:scale-105">
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-full bg-[#047857] animate-ping"></span>
<span className="font-mono text-xs font-bold text-[#047857] tracking-wide">0.85 Ha (2.10 Acres)</span>
</div>
<span className="font-mono text-[10px] text-slate-500 font-semibold mt-0.5">ULPIN: 58J9-2A41-8902-14</span>
<span className="mt-1 px-1.5 py-0.5 rounded bg-emerald-50 text-[9px] font-bold uppercase tracking-wider text-[#047857]">Verified Clear Title</span>
</div>
</foreignObject>
</g>
{/* Adjacent Community Parcel */}
<polygon className="cursor-pointer hover:fill-opacity-25 transition-all" fill="#0284C7" fillOpacity="0.12" points="980,130 1340,110 1280,410 920,440" stroke="#0284C7" strokeDasharray="6 3" stroke-opacity="0.6" strokeWidth="1.5"></polygon>
</svg>
{/* Floating Left Map Tools */}
<div className="absolute left-4 top-4 z-20 flex flex-col gap-1.5 bg-white/95 backdrop-blur-xs border border-slate-200 p-1.5 rounded-xl shadow-lg">
<button className="p-2 rounded-lg bg-[#1E3A8A] text-white shadow-xs flex items-center justify-center" title="Identify Parcel Info">
<span className="material-symbols-outlined text-[19px]">near_me</span>
</button>
<button className="p-2 rounded-lg hover:bg-slate-100 text-slate-600 hover:text-[#1E3A8A] transition-colors flex items-center justify-center" title="Linear Distance Measure">
<span className="material-symbols-outlined text-[19px]">straighten</span>
</button>
<button className="p-2 rounded-lg hover:bg-slate-100 text-slate-600 hover:text-[#1E3A8A] transition-colors flex items-center justify-center" title="Polygon Area Calculation">
<span className="material-symbols-outlined text-[19px]">square_foot</span>
</button>
<button className="p-2 rounded-lg hover:bg-slate-100 text-amber-700 transition-colors flex items-center justify-center" title="Cadastral Splitting Guide">
<span className="material-symbols-outlined text-[19px]">call_split</span>
</button>
<div className="w-full h-px bg-slate-200"></div>
<button className="p-2 rounded-lg hover:bg-slate-100 text-slate-600 hover:text-[#1E3A8A] transition-colors flex items-center justify-center" title="Drone Orthomosaic Overlay">
<span className="material-symbols-outlined text-[19px]">flight</span>
</button>
<button className="p-2 rounded-lg hover:bg-slate-100 text-slate-600 hover:text-[#1E3A8A] transition-colors flex items-center justify-center" title="Export GeoJSON / KML">
<span className="material-symbols-outlined text-[19px]">download</span>
</button>
</div>
{/* Floating Bottom Legend */}
<div className="absolute left-4 bottom-4 z-20 flex flex-wrap items-center gap-2 bg-white/95 backdrop-blur-xs border border-slate-200 px-3 py-2 rounded-xl shadow-lg text-xs text-slate-700">
<div className="flex items-center gap-1.5">
<span className="w-3 h-3 rounded-full bg-[#047857] ring-2 ring-emerald-200"></span>
<span className="font-medium">Clear Sovereign Title</span>
</div>
<span className="text-slate-300">|</span>
<div className="flex items-center gap-1.5">
<span className="w-3 h-3 rounded-full bg-[#B45309] ring-2 ring-amber-200"></span>
<span className="font-medium">Disputed / Mutation In-Progress</span>
</div>
<span className="text-slate-300">|</span>
<div className="flex items-center gap-1.5">
<span className="w-3 h-3 rounded-full bg-slate-400 ring-2 ring-slate-200"></span>
<span className="font-medium">Gram Sabha / State Land</span>
</div>
</div>
{/* Floating Right Map Controls (Zoom, 3D, Layer) */}
<div className="absolute right-4 bottom-4 z-20 flex flex-col items-end gap-2.5">
<div className="flex items-center gap-2 bg-white/95 backdrop-blur-xs border border-slate-200 px-3 py-1.5 rounded-lg shadow-lg text-xs font-semibold text-slate-800 cursor-pointer hover:bg-slate-50 transition-colors">
<span className="material-symbols-outlined text-[#1E3A8A] text-[18px]">layers</span>
<span className="">Satellite Hybrid</span>
</div>
<div className="flex flex-col bg-white/95 backdrop-blur-xs border border-slate-200 rounded-xl shadow-lg overflow-hidden">
<button className="p-2.5 hover:bg-slate-100 text-slate-700 hover:text-[#1E3A8A] transition-colors flex items-center justify-center" title="Zoom In">
<span className="material-symbols-outlined text-[19px]">add</span>
</button>
<div className="w-full h-px bg-slate-200"></div>
<button className="p-2.5 hover:bg-slate-100 text-slate-700 hover:text-[#1E3A8A] transition-colors flex items-center justify-center" title="Zoom Out">
<span className="material-symbols-outlined text-[19px]">remove</span>
</button>
<div className="w-full h-px bg-slate-200"></div>
<button className="p-2.5 hover:bg-slate-100 text-[#1E3A8A] transition-colors flex items-center justify-center" title="Reset North Rotation">
<span className="material-symbols-outlined text-[19px]">explore</span>
</button>
<div className="w-full h-px bg-slate-200"></div>
<button className="p-2 hover:bg-slate-100 text-[#1E3A8A] transition-colors flex items-center justify-center font-mono text-xs font-bold" title="3D Pitch View Toggle">
            3D
          </button>
</div>
</div>
</div>
</section>
{/* Expansive Dedicated Deep Inspection Sections (Below the Map) */}
<div className="max-w-7xl w-full mx-auto px-6 space-y-12">
{/* Section 1: Selected Parcel Deep Inspection */}
<section className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-8" id="parcel-deep-inspection">
{/* Header Strip */}
<div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-[#1E3A8A] flex items-center justify-center">
<span className="material-symbols-outlined text-[24px]">verified</span>
</div>
<div>
<div className="flex items-center gap-2">
<span className="text-xs font-bold uppercase tracking-wider text-slate-400">Selected Parcel Deep Inspection</span>
<span className="px-2 py-0.5 rounded-full bg-emerald-50 text-[#047857] text-[11px] font-semibold border border-emerald-200">Verified Sovereign Title</span>
</div>
<div className="flex items-center gap-2 mt-0.5">
<h3 className="text-xl sm:text-2xl font-bold font-mono text-slate-900 tracking-wide" id="card-ulpin-display">
                  58J9-2A41-8902-14
                </h3>
<button className="p-1 text-slate-400 hover:text-[#1E3A8A] transition-colors" title="Copy ULPIN">
<span className="material-symbols-outlined text-[18px]">content_copy</span>
</button>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 transition-colors">
<span className="material-symbols-outlined text-[17px]">share</span>
<span className="">Share Parcel</span>
</button>
<button className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#1E3A8A] hover:bg-[#172e6d] text-white text-xs font-semibold shadow-xs transition-colors">
<span className="material-symbols-outlined text-[17px]">download</span>
<span className="">Export Cadastral Dossier</span>
</button>
</div>
</div>
{/* 3-Column Bento Layout */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-8">
{/* Column 1: Cadastral Boundary & Metric Geometry */}
<div className="flex flex-col gap-4 p-6 rounded-xl bg-slate-50/70 border border-slate-200">
<div className="flex items-center justify-between">
<span className="flex items-center gap-2 text-sm font-bold text-slate-900">
<span className="material-symbols-outlined text-[20px] text-[#1E3A8A]">polyline</span>
                Boundary &amp; Metric Geometry
              </span>
<span className="text-[11px] font-mono font-semibold text-[#047857] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">100% Synced</span>
</div>
{/* Mini vector preview */}
<div className="w-full h-36 bg-white rounded-lg border border-slate-200 p-2 flex items-center justify-center relative overflow-hidden">
<svg className="w-full h-full" viewBox="0 0 300 120">
<polygon fill="rgba(4, 120, 87, 0.12)" points="40,20 250,15 220,105 70,100" stroke="#047857" strokeWidth="2"></polygon>
<line stroke="#047857" strokeDasharray="3 3" x1="40" x2="250" y1="20" y2="15"></line>
<text fill="#047857" font-family="Inter, sans-serif" fontSize="9" font-weight="600" x="125" y="32">88.4 m (North)</text>
<text fill="#047857" font-family="Inter, sans-serif" fontSize="9" font-weight="600" x="48" y="65">94.2 m</text>
<text fill="#047857" font-family="Inter, sans-serif" fontSize="9" font-weight="600" x="235" y="65">91.8 m</text>
<text fill="#047857" font-family="Inter, sans-serif" fontSize="9" font-weight="600" x="125" y="96">86.1 m (South)</text>
<circle cx="40" cy="20" fill="#047857" r="3"></circle>
<circle cx="250" cy="15" fill="#047857" r="3"></circle>
<circle cx="220" cy="105" fill="#047857" r="3"></circle>
<circle cx="70" cy="100" fill="#047857" r="3"></circle>
</svg>
<span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-white/90 border border-slate-200 text-slate-500 text-[10px] font-mono">
                Lat: 28.4595° N
              </span>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="p-3 bg-white rounded-lg border border-slate-200">
<span className="text-[11px] text-slate-400 uppercase font-semibold">Total Area</span>
<div className="text-lg font-bold text-[#1E3A8A] mt-0.5">2.10 Acres</div>
<div className="text-xs text-slate-500 font-mono">0.85 Ha (8,498.4 m²)</div>
</div>
<div className="p-3 bg-white rounded-lg border border-slate-200">
<span className="text-[11px] text-slate-400 uppercase font-semibold">Survey / Khasra</span>
<div className="text-lg font-bold text-[#1E3A8A] mt-0.5">142/3B</div>
<div className="text-xs text-slate-500 font-mono">Khewat No. 24</div>
</div>
</div>
<div className="space-y-1.5 text-xs text-slate-600 bg-white p-3 rounded-lg border border-slate-200">
<div className="flex justify-between"><span className="">North Boundary Vector:</span><span className="font-mono font-semibold text-slate-800">88.4 m (Khasra 141)</span></div>
<div className="flex justify-between"><span className="">South Boundary Vector:</span><span className="font-mono font-semibold text-slate-800">86.1 m (Village Road)</span></div>
<div className="flex justify-between"><span className="">East Boundary Vector:</span><span className="font-mono font-semibold text-slate-800">91.8 m (Canal Feeder)</span></div>
<div className="flex justify-between"><span className="">West Boundary Vector:</span><span className="font-mono font-semibold text-slate-800">94.2 m (Khasra 142/3A)</span></div>
</div>
</div>
{/* Column 2: Revenue & Administrative Jurisdiction */}
<div className="flex flex-col gap-4 p-6 rounded-xl bg-slate-50/70 border border-slate-200">
<div className="flex items-center justify-between">
<span className="flex items-center gap-2 text-sm font-bold text-slate-900">
<span className="material-symbols-outlined text-[20px] text-[#1E3A8A]">location_city</span>
                Revenue Jurisdiction
              </span>
<span className="text-xs font-semibold text-slate-500">Jamabandi: 2023-24</span>
</div>
<div className="space-y-3 bg-white p-4 rounded-lg border border-slate-200 text-xs">
<div>
<div className="text-[11px] text-slate-400 uppercase font-semibold">State / Union Territory</div>
<div className="text-sm font-bold text-slate-900 mt-0.5">Haryana (HR-06)</div>
</div>
<div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
<div>
<div className="text-[11px] text-slate-400 uppercase font-semibold">District</div>
<div className="font-bold text-slate-900 mt-0.5">Gurugram</div>
</div>
<div>
<div className="text-[11px] text-slate-400 uppercase font-semibold">Tehsil / Sub-District</div>
<div className="font-bold text-slate-900 mt-0.5">Pataudi</div>
</div>
</div>
<div className="pt-2 border-t border-slate-100">
<div className="text-[11px] text-slate-400 uppercase font-semibold">Revenue Village / Hadbast</div>
<div className="text-sm font-bold text-slate-900 mt-0.5">Bilaspur Kalan (#42)</div>
<div className="text-slate-500 text-[11px] mt-0.5">Kanungo Circle: Manesar | Patwar Halka: Bilaspur</div>
</div>
<div className="pt-2 border-t border-slate-100">
<div className="text-[11px] text-slate-400 uppercase font-semibold">Land Classification</div>
<div className="flex items-center justify-between mt-0.5">
<span className="font-semibold text-slate-900">Agricultural</span>
<span className="text-[#047857] font-semibold bg-emerald-50 px-2 py-0.5 rounded">Chahi (Irrigated)</span>
</div>
</div>
</div>
<div className="p-3 bg-white rounded-lg border border-slate-200 flex items-center justify-between text-xs">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[#1E3A8A] text-[18px]">gavel</span>
<span className="text-slate-700 font-medium">Revenue Court Litigation Status:</span>
</div>
<span className="text-[#047857] font-bold">NIL Pending</span>
</div>
</div>
{/* Column 3: Sovereign Title & Ownership Rights */}
<div className="flex flex-col gap-4 p-6 rounded-xl bg-slate-50/70 border border-slate-200">
<div className="flex items-center justify-between">
<span className="flex items-center gap-2 text-sm font-bold text-slate-900">
<span className="material-symbols-outlined text-[20px] text-[#1E3A8A]">badge</span>
                Sovereign Title &amp; Ownership
              </span>
<span className="text-xs text-[#047857] font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">100% Share</span>
</div>
<div className="bg-white p-4 rounded-lg border border-slate-200 flex flex-col gap-3">
<div className="flex items-center justify-between">
<div>
<div className="text-base font-bold text-slate-900">R**** S****</div>
<div className="text-xs text-slate-500 font-mono mt-0.5">Aadhaar Linked: •••• •••• 8912</div>
</div>
<span className="px-2.5 py-1 rounded bg-blue-50 border border-blue-200 text-[#1E3A8A] text-[11px] font-semibold">
                  Primary Citizen Holder
                </span>
</div>
<div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between">
<span className="text-slate-600 text-xs">Identity masked under Sovereign DPI Protocol.</span>
<button className="px-2.5 py-1 bg-white hover:bg-slate-100 text-[#1E3A8A] rounded-md text-xs font-semibold border border-slate-300 shadow-xs transition-colors">
                  Unlock via OTP
                </button>
</div>
</div>
<div className="space-y-2 bg-white p-4 rounded-lg border border-slate-200 text-xs">
<div className="flex items-center justify-between">
<span className="text-slate-500">Financial Encumbrance:</span>
<span className="text-[#047857] font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[15px]">check_circle</span>
                  Clean Title (Zero Liens)
                </span>
</div>
<div className="flex items-center justify-between pt-2 border-t border-slate-100">
<span className="text-slate-500">Latest Mutation Deed:</span>
<span className="font-mono font-medium text-slate-800">#2024-HR-9810</span>
</div>
<div className="flex items-center justify-between pt-2 border-t border-slate-100">
<span className="text-slate-500">Ledger Merkle Hash:</span>
<span className="font-mono text-slate-500 text-[11px]">0x9f4a8b...73c2</span>
</div>
</div>
<div className="p-3 bg-emerald-50/80 border border-emerald-200 rounded-lg text-xs text-[#047857] flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">verified_user</span>
<span className="">Cryptographic RoR Verified on Blockchain Ledger</span>
</div>
</div>
</div>
</section>
{/* Section 2: Cadastral Geo-Verification & Land Health Status */}
<section className="space-y-4">
<div className="flex items-center justify-between px-1">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-[#1E3A8A] text-[24px]">fact_check</span>
<h3 className="text-xl font-bold text-slate-900 tracking-tight">Cadastral Geo-Verification &amp; Land Health Status</h3>
</div>
<span className="text-xs text-slate-500">Continuous Satellite &amp; Ground Audit System</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
{/* Card 1: Drone Precision */}
<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between hover:border-blue-200 transition-all">
<div className="space-y-3">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1E3A8A] flex items-center justify-center">
<span className="material-symbols-outlined text-[22px]">flight</span>
</div>
<div>
<div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Survey Precision</div>
<div className="text-xl font-bold text-slate-900 mt-0.5">±2.0 cm Tolerance</div>
</div>
<p className="text-xs text-slate-600 leading-relaxed">
              Drone Orthophoto high-definition mosaic mapped via SVAMITVA survey guidelines with sub-decimeter ground controls.
            </p>
</div>
<div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
<span className="text-slate-400">Last Ortho Run:</span>
<span className="font-semibold text-slate-700">18 Nov 2024</span>
</div>
</div>
{/* Card 2: Satellite InSAR */}
<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between hover:border-blue-200 transition-all">
<div className="space-y-3">
<div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#047857] flex items-center justify-center">
<span className="material-symbols-outlined text-[22px]">terrain</span>
</div>
<div>
<div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Ground Stability</div>
<div className="text-xl font-bold text-[#047857] mt-0.5">InSAR: Stable (0 mm)</div>
</div>
<p className="text-xs text-slate-600 leading-relaxed">
              Sentinel-1 radar interferometry shows zero subsidence or seasonal alluvial drift over 24-month rolling interval.
            </p>
</div>
<div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
<span className="text-slate-400">Subsidence Index:</span>
<span className="font-semibold text-[#047857]">Nominal (Class A)</span>
</div>
</div>
{/* Card 3: DGPS Triangulation */}
<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between hover:border-blue-200 transition-all">
<div className="space-y-3">
<div className="w-10 h-10 rounded-lg bg-indigo-50 text-[#1E3A8A] flex items-center justify-center">
<span className="material-symbols-outlined text-[22px]">radar</span>
</div>
<div>
<div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Geodetic Base</div>
<div className="text-xl font-bold text-slate-900 mt-0.5">DGPS Station #04</div>
</div>
<p className="text-xs text-slate-600 leading-relaxed">
              Tied directly to SOI (Survey of India) CORS network benchmark pillar #42 with dual-frequency RTK baseline lock.
            </p>
</div>
<div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
<span className="text-slate-400">CORS Signal:</span>
<span className="font-semibold text-slate-700">Carrier Lock 100%</span>
</div>
</div>
{/* Card 4: NJDG Clearance */}
<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between hover:border-blue-200 transition-all">
<div className="space-y-3">
<div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
<span className="material-symbols-outlined text-[22px]">gavel</span>
</div>
<div>
<div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Legal Encumbrance</div>
<div className="text-xl font-bold text-[#047857] mt-0.5">NJDG Clear Seal</div>
</div>
<p className="text-xs text-slate-600 leading-relaxed">
              Auto-queried against National Judicial Data Grid &amp; CERSAI. No stay orders, court attachments, or bank mortgage claims.
            </p>
</div>
<div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
<span className="text-slate-400">Audit Status:</span>
<span className="font-semibold text-[#047857]">Clean Title Certified</span>
</div>
</div>
</div>
</section>
{/* Section 3: Immediate Cadastral Actions & Workflows */}
<section className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-8">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
<div className="space-y-1">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[#1E3A8A]">bolt</span>
<h3 className="text-xl font-bold text-slate-900 tracking-tight">Immediate Cadastral Actions &amp; Workflows</h3>
</div>
<p className="text-xs sm:text-sm text-slate-600">
            Execute sovereign land deeds, launch tamper-proof boundary re-surveys, or retrieve legal documentation.
          </p>
</div>
<span className="text-xs font-mono text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg shrink-0">
          Target Parcel: 142/3B (Bilaspur Kalan)
        </span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
{/* Action 1 */}
<div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-[#1E3A8A] hover:shadow-md transition-all flex flex-col justify-between gap-4">
<div className="space-y-2">
<div className="w-10 h-10 rounded-lg bg-blue-100 text-[#1E3A8A] flex items-center justify-center">
<span className="material-symbols-outlined text-[22px]">verified_user</span>
</div>
<h4 className="font-bold text-slate-900 text-sm">Initiate Fast-Track Mutation</h4>
<p className="text-xs text-slate-600 leading-relaxed">
              Submit digital mutation petition backed by Aadhaar e-Sign and automated Patwari workflow trigger.
            </p>
</div>
<button className="w-full bg-[#1E3A8A] hover:bg-[#172e6d] text-white py-2 px-3 rounded-lg text-xs font-semibold transition-all shadow-xs flex items-center justify-center gap-1.5">
<span className="">Launch Mutation</span>
<span className="material-symbols-outlined text-[15px]">arrow_forward</span>
</button>
</div>
{/* Action 2 */}
<div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-[#1E3A8A] hover:shadow-md transition-all flex flex-col justify-between gap-4">
<div className="space-y-2">
<div className="w-10 h-10 rounded-lg bg-indigo-100 text-[#1E3A8A] flex items-center justify-center">
<span className="material-symbols-outlined text-[22px]">folder_special</span>
</div>
<h4 className="font-bold text-slate-900 text-sm">View in Bhu-Locker Dossier</h4>
<p className="text-xs text-slate-600 leading-relaxed">
              Open the AES-256 encrypted sovereign deed repository containing past sale deeds and tax challans.
            </p>
</div>
<button className="w-full bg-white hover:bg-slate-50 text-[#1E3A8A] border border-[#1E3A8A] py-2 px-3 rounded-lg text-xs font-semibold transition-all shadow-xs flex items-center justify-center gap-1.5">
<span className="">Open Bhu-Locker</span>
<span className="material-symbols-outlined text-[15px]">open_in_new</span>
</button>
</div>
{/* Action 3 */}
<div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-[#1E3A8A] hover:shadow-md transition-all flex flex-col justify-between gap-4">
<div className="space-y-2">
<div className="w-10 h-10 rounded-lg bg-emerald-100 text-[#047857] flex items-center justify-center">
<span className="material-symbols-outlined text-[22px]">picture_as_pdf</span>
</div>
<h4 className="font-bold text-slate-900 text-sm">Download RoR Certificate (PDF)</h4>
<p className="text-xs text-slate-600 leading-relaxed">
              Generate officially stamped, digitally signed Jamabandi copy with embedded QR code for banking and court proof.
            </p>
</div>
<button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 py-2 px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 border border-slate-300">
<span className="">Download PDF Copy</span>
<span className="material-symbols-outlined text-[15px]">download</span>
</button>
</div>
{/* Action 4 */}
<div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-[#1E3A8A] hover:shadow-md transition-all flex flex-col justify-between gap-4">
<div className="space-y-2">
<div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
<span className="material-symbols-outlined text-[22px]">my_location</span>
</div>
<h4 className="font-bold text-slate-900 text-sm">Request Drone Nishan-Dehi</h4>
<p className="text-xs text-slate-600 leading-relaxed">
              Order on-ground physical boundary demarcation with DGPS rovers and Patwari field verification presence.
            </p>
</div>
<button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 py-2 px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 border border-slate-300">
<span className="">Book Nishan-Dehi</span>
<span className="material-symbols-outlined text-[15px]">event</span>
</button>
</div>
</div>
</section>
</div>
</main><footer className="w-full bg-white text-slate-600 shadow-sm border-t border-slate-200"><div className="w-full max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-space-md"><div className="flex items-center gap-space-md"><div className="flex flex-col"><span className="text-xs font-bold text-[#1E3A8A] tracking-wider uppercase">BHU-AADHAAR DPI PLATFORM</span><span className="text-[11px] text-slate-500">Designed and architected under SIH26014 for Sovereign Digital Land Governance</span></div></div><div className="flex flex-wrap items-center gap-space-lg text-xs text-slate-500"><a className="hover:text-[#1E3A8A] transition-colors" href="#">National Informatics Centre (NIC) Standards</a><a className="hover:text-[#1E3A8A] transition-colors" href="#">Digital India Land Records Modernization Programme (DILRMP)</a><a className="hover:text-[#1E3A8A] transition-colors" href="#">ULPIN Verification API</a><a className="hover:text-[#1E3A8A] transition-colors" href="#">Data Security &amp; Provenance</a></div><div className="flex items-center gap-1.5 text-xs text-[#047857] font-medium"><span className="material-symbols-outlined text-[16px] text-[#047857]">verified_user</span><span className="">ISO 27001 Certified DPI Node</span></div></div></footer>
    </>
  );
}

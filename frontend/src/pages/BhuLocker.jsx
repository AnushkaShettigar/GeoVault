import React from 'react';

export default function BhuLocker() {
  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-primary-container shadow-[0_1px_8px_rgba(0,0,0,0.04)] text-on-primary">
  {/* Primary Navigation Bar */}
  <div className="w-full px-6 py-3 flex items-center justify-between gap-space-md">
    {/* 1. Left Brand */}
    <div className="flex items-center gap-space-md min-w-max flex-shrink-0">
      <img alt="Bhu-Aadhaar DPI Official Logo" className="h-9 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1XLmmfkBQ0m__jZyvJ0pGv8ridqmNc002FYLoYiYkRnt9z6N64gRnAavahvC8K3SEq3uT0Ta1v_6ll0cX6thSe_vHJRs2rCEFslgejhHNIS-X2K6BuOn2zgwr2EQHaL2XdCutT9GmgQxbgVvNE3i89tuxktCbWiKvx4gZG-jR9mo18_v3LvSZ0pDCMemdkkh4JXFQRzIuGo_gcGm9sR4EsqSlKb3TCSMLUQ9tRE-8b5RGFtrcVUVVLPU5Oe" />
      <div className="flex flex-col">
        <div className="flex items-center gap-space-xs">
          <span className="font-title-lg text-title-lg font-bold tracking-tight text-on-primary uppercase">BHU-AADHAAR</span>
          <span className="bg-secondary-container text-on-secondary-container px-space-xs py-0.5 rounded-lg font-label-md text-[11px] font-semibold tracking-wide">SIH26014</span>
        </div>
        <span className="font-body-sm text-[11px] text-on-primary-container tracking-tight">National Digital Public Infrastructure for Land Records | Govt of India</span>
      </div>
    </div>

    {/* 2. Center Navigation Tabs (6 Tabs) */}
    <nav className="hidden xl:flex items-center gap-1 p-1 bg-primary/40 rounded-lg backdrop-blur-md flex-shrink-0">
      <a className="px-2.5 py-1 rounded text-on-primary/90 font-label-md text-[12px] transition-colors hover:bg-surface-container-high hover:text-on-surface" data-path="bhu-explorer" href="#">Bhu-Explorer (GIS Map)</a>
      <a ariaCurrent="page" className="px-2.5 py-1 rounded transition-colors bg-surface-container-lowest text-primary shadow-sm font-label-lg font-bold text-[12px]" data-path="my-bhu-locker" href="#">My Bhu-Locker</a>
      <a className="px-2.5 py-1 rounded text-on-primary/90 font-label-md text-[12px] transition-colors hover:bg-surface-container-high hover:text-on-surface" data-path="property-ingestion" href="#">Property Ingestion</a>
      <a className="px-2.5 py-1 rounded text-on-primary/90 font-label-md text-[12px] transition-colors hover:bg-surface-container-high hover:text-on-surface" data-path="smart-ledger" href="#">Smart Ledger (Mutation)</a>
      <a className="px-2.5 py-1 rounded text-on-primary/90 font-label-md text-[12px] transition-colors hover:bg-surface-container-high hover:text-on-surface" data-path="market-radar" href="#">Market Radar</a>
      <a className="px-2.5 py-1 rounded text-on-primary/90 font-label-md text-[12px] transition-colors hover:bg-surface-container-high hover:text-on-surface" data-path="nyaya-bhumi" href="#">Nyaya-Bhumi (Disputes)</a>
    </nav>

    {/* 3. Search Bar & Right Side Actions */}
    <div className="flex items-center gap-space-md flex-shrink-0">
      {/* Search Bar */}
      <div className="relative flex items-center w-64 md:w-72">
        <span className="material-symbols-outlined absolute left-3 text-on-primary-container pointer-events-none text-[18px]">search</span>
        <input className="w-full pl-9 pr-space-md py-1.5 bg-primary/30 rounded-lg text-on-primary placeholder:text-on-primary-container font-body-sm text-[12px] focus:outline-none focus:bg-primary-container focus:ring-1 focus:ring-secondary-fixed transition-all" placeholder="Search ULPIN / Aadhaar / Survey No..." type="text" />
      </div>

      {/* Language Selector */}
      <button className="flex items-center gap-1 px-space-sm py-1.5 rounded-lg bg-primary/20 text-on-primary hover:bg-primary/40 font-label-md text-body-sm transition-colors">
        <span className="material-symbols-outlined text-[16px]">translate</span>
        <span className="text-[12px] font-medium">English / हिंदी</span>
      </button>

      {/* Notification Badge */}
      <button className="p-1.5 text-on-primary hover:bg-primary/30 rounded-lg transition-colors relative">
        <span className="material-symbols-outlined text-[20px]">notifications</span>
        <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-error text-on-error font-label-md text-[10px] leading-none rounded-full flex items-center justify-center font-bold">2</span>
      </button>

      {/* Citizen User Avatar & Name */}
      <div className="flex items-center gap-space-sm pl-space-sm border-l border-on-primary/10">
        <div className="flex flex-col text-right hidden sm:flex">
          <span className="font-label-lg text-label-lg font-semibold text-on-primary leading-tight">Rameshwar Sharma</span>
          <span className="font-label-code text-[11px] text-on-primary-container tracking-wider">•••• 8912 | Citizen</span>
        </div>
        <img alt="Citizen Profile" className="w-8 h-8 rounded-full object-cover ring-2 ring-secondary-fixed/50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNUJ7q9qf7o1FYO2BlPq3_5QYYS2g1mEZCjTnjczHKuXKbLovStdPX8u_PUWBqG7ZgUPAqvB5DtSAZd4YJIoZCvXcXyDVXtqrdBDXlGCwz0o_VfQXnClx1X0nAk5gBlRUxQPPX14wT8jYch8wV6Nyk2LBvtTP4PYkPbQ48qJ_T6qf32qs1Rb7eWWnJ-819BcylFlpjYQRbSWyIs_121HfqAQze1glfkP7_S7788RDXktWKl4l0C7ENvg" />
      </div>
    </div>
  </div>

  {/* 5. Secondary Sub-header Ribbon */}
  <div className="h-9 w-full bg-surface-container-high/60 backdrop-blur-md px-6 flex items-center justify-between border-t border-on-primary/5 text-on-surface-variant">
    <div className="flex items-center gap-space-sm font-label-md text-body-sm">
      <span className="material-symbols-outlined text-[16px] text-primary">explore</span>
      <span className="font-medium">Sovereign Cadastral Registry</span>
      <span className="text-outline-variant">/</span>
      <span className="text-on-surface font-semibold">National Land Grid</span>
      <span className="text-outline-variant">/</span>
      <span className="font-label-code text-on-surface-variant">EPSG:4326 (WGS 84)</span>
    </div>
    <div className="flex items-center gap-space-lg font-label-md text-body-sm">
      <div className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-gis-polygon-clear-stroke"></span>
        <span className="text-on-surface font-medium">Clear Title: 89.4%</span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-gis-polygon-disputed-stroke"></span>
        <span className="text-on-surface font-medium">Mutation Queue: 12,408</span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-gis-polygon-encumbered-stroke"></span>
        <span className="text-on-surface font-medium">Active Liens: 1.2%</span>
      </div>
    </div>
  </div>
</header><main className="w-full pt-20 bg-surface min-h-[calc(100vh-140px)] flex flex-col"><div className="flex flex-col w-full">
<div className="w-full px-margin py-space-2xl space-y-space-2xl">
{/* Top Identity & Vault Metrics Band */}
<div className="w-full bg-surface-container-lowest rounded-xl shadow-sm p-space-xl flex flex-col xl:flex-row xl:items-center justify-between gap-space-xl border-t border-border-subtle">
<div className="space-y-space-sm max-w-xl">
<div className="flex items-center gap-space-sm flex-wrap">
<span className="px-space-sm py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-body-sm flex items-center gap-1 font-semibold">
<span className="material-symbols-outlined text-[16px]">verified</span>
            Sovereign DigiLocker Vault
          </span>
<span className="font-label-code text-body-sm text-outline">ANCHOR: UIDAI •••• 8912</span>
<span className="px-space-xs py-1 rounded bg-surface-container text-on-surface-variant font-label-code text-[11px]">DILRMP-NODE-HR08</span>
</div>
<h1 className="font-headline-xl text-headline-xl text-primary tracking-tight">My Land Assets Vault</h1>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          Cryptographically signed cadastral registry entries, verified against Haryana Land Records Information System (HALRIS) &amp; Bhu-Aadhaar National DPI Core.
        </p>
</div>
{/* Quick Action Buttons */}
<div className="flex flex-wrap items-center gap-space-md">
<button className="flex items-center gap-space-xs px-space-lg py-space-sm rounded bg-primary text-on-primary font-label-lg text-label-lg shadow hover:bg-primary-container transition-all">
<span className="material-symbols-outlined text-[18px]">add_location_alt</span>
<span className="">Link New Survey Parcel</span>
</button>
<button className="flex items-center gap-space-xs px-space-lg py-space-sm rounded bg-surface-container text-primary font-label-lg text-label-lg hover:bg-surface-container-high transition-all shadow-sm">
<span className="material-symbols-outlined text-[18px]">history_edu</span>
<span className="">Audit Provenance Log</span>
</button>
</div>
</div>
{/* 4 High Impact Stats Bento Cards */}
<div className="space-y-space-md">
<div className="flex items-center justify-between">
<div>
<h2 className="font-title-lg text-title-lg text-primary font-bold">Portfolio Overview</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Verified land metrics across active cadastral registers</p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
{/* Total Holdings */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group">
<div className="absolute -right-3 -bottom-3 text-surface-container-high text-[80px] select-none opacity-40 group-hover:scale-105 transition-transform pointer-events-none">
<span className="material-symbols-outlined text-[80px]">layers</span>
</div>
<div className="flex items-center justify-between">
<span className="font-label-md text-body-sm text-on-surface-variant uppercase tracking-wider">Total Holdings</span>
<span className="material-symbols-outlined text-primary text-[20px]">terrain</span>
</div>
<div className="my-space-md">
<div className="font-headline-xl text-headline-xl text-on-surface font-bold">4.65 <span className="font-body-md text-title-md text-on-surface-variant font-normal">Acres</span></div>
<div className="font-body-sm text-body-sm text-secondary font-medium flex items-center gap-1 mt-1">
<span className="material-symbols-outlined text-[14px]">grid_view</span>
<span className="">3 Registered Cadastral Parcels</span>
</div>
</div>
<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden mt-space-xs">
<div className="bg-primary h-full w-[78%] rounded-full"></div>
</div>
</div>
{/* Estimated Guideline Value */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group">
<div className="absolute -right-3 -bottom-3 text-surface-container-high text-[80px] select-none opacity-40 group-hover:scale-105 transition-transform pointer-events-none">
<span className="material-symbols-outlined text-[80px]">currency_rupee</span>
</div>
<div className="flex items-center justify-between">
<span className="font-label-md text-body-sm text-on-surface-variant uppercase tracking-wider">Est. Guideline Value</span>
<span className="material-symbols-outlined text-primary text-[20px]">account_balance</span>
</div>
<div className="my-space-md">
<div className="font-headline-xl text-headline-xl text-on-surface font-bold">₹1.84 <span className="font-body-md text-title-md text-on-surface-variant font-normal">Crore</span></div>
<div className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-1">
<span className="">Circle Rate (2024-25 Gazette)</span>
</div>
</div>
<div className="flex items-center justify-between font-label-code text-[11px] text-outline mt-space-xs">
<span className="">Collector Baseline Verified</span>
<span className="text-secondary font-semibold">+4.2% YoY</span>
</div>
</div>
{/* Clean Encumbrance Rate */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group">
<div className="absolute -right-3 -bottom-3 text-secondary-container text-[80px] select-none opacity-30 group-hover:scale-105 transition-transform pointer-events-none">
<span className="material-symbols-outlined text-[80px]">verified_user</span>
</div>
<div className="flex items-center justify-between">
<span className="font-label-md text-body-sm text-on-surface-variant uppercase tracking-wider">Title Integrity</span>
<span className="material-symbols-outlined text-secondary text-[20px]">gavel</span>
</div>
<div className="my-space-md">
<div className="font-headline-xl text-headline-xl text-secondary font-bold">100% <span className="font-body-md text-title-md text-on-surface-variant font-normal">Clean Title</span></div>
<div className="font-body-sm text-body-sm text-secondary font-medium flex items-center gap-1 mt-1">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
<span className="">Zero Litigations / Form 15 Clear</span>
</div>
</div>
<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden mt-space-xs">
<div className="bg-secondary h-full w-full rounded-full"></div>
</div>
</div>
{/* Sovereign e-Sign Status */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group">
<div className="absolute -right-3 -bottom-3 text-surface-container-high text-[80px] select-none opacity-40 group-hover:scale-105 transition-transform pointer-events-none">
<span className="material-symbols-outlined text-[80px]">fingerprint</span>
</div>
<div className="flex items-center justify-between">
<span className="font-label-md text-body-sm text-on-surface-variant uppercase tracking-wider">Aadhaar e-Sign</span>
<span className="material-symbols-outlined text-primary text-[20px]">shield</span>
</div>
<div className="my-space-md">
<div className="font-headline-xl text-headline-xl text-primary font-bold">Active <span className="font-body-md text-title-md text-secondary font-semibold">● LIVE</span></div>
<div className="font-label-code text-[12px] text-on-surface-variant truncate mt-1">
            Cert: C-DAC 2024/UIDAI-PKI
          </div>
</div>
<div className="flex items-center justify-between font-label-md text-body-sm text-outline mt-space-xs">
<span className="">Digital RoR Synced</span>
<span className="text-primary font-bold">Today, 06:30</span>
</div>
</div>
</div>
</div>
{/* Section 2: Cadastral Holdings & Filter Bar */}
<div className="space-y-space-lg pt-space-md border-t border-border-subtle">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div>
<h2 className="font-title-lg text-title-lg text-primary font-bold">Cadastral Property Catalog</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Select a parcel to inspect complete provenance, GIS vector boundaries, and digitally signed deeds</p>
</div>
<div className="flex items-center gap-space-sm font-label-code text-[12px] text-outline">
<span className="">Total Registry Parcels: 3</span>
<span className="">•</span>
<span className="text-secondary font-semibold">All Geo-Tagged</span>
</div>
</div>
{/* Filter Bar & Grid Selector */}
<div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-space-md bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
{/* Tabs */}
<div className="flex items-center gap-space-xs bg-surface-container-low p-1.5 rounded-lg">
<button className="px-space-md py-2 rounded bg-surface-card text-primary font-label-md text-label-md shadow-sm font-semibold">
          All Properties (3)
        </button>
<button className="px-space-md py-2 rounded text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors">
          Agricultural (2)
        </button>
<button className="px-space-md py-2 rounded text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors">
          Residential/Urban (1)
        </button>
</div>
<div className="flex items-center justify-between md:justify-end gap-space-md">
<div className="flex items-center bg-surface-container-low px-space-md py-2 rounded-lg text-on-surface-variant font-label-md text-body-sm">
<span className="material-symbols-outlined text-[18px] mr-1 text-primary">swap_vert</span>
<span className="">Sort: Primary Holding</span>
</div>
<div className="flex items-center bg-surface-container-low p-1.5 rounded-lg gap-1">
<button className="p-1.5 rounded bg-surface-card text-primary shadow-sm" title="Grid View">
<span className="material-symbols-outlined text-[18px]">grid_view</span>
</button>
<button className="p-1.5 rounded text-on-surface-variant hover:text-primary transition-colors" title="List View">
<span className="material-symbols-outlined text-[18px]">format_list_bulleted</span>
</button>
</div>
</div>
</div>
{/* 3 Properties Horizontal Grid */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-space-xl">
{/* PROPERTY CARD 1: Bilaspur Kalan (Active Selected Item) */}
<div className="bg-surface-card rounded-xl p-space-lg shadow-md flex flex-col justify-between relative transform scale-[1.01] transition-transform">
<div className="absolute -top-3 left-4 bg-primary text-on-primary font-label-md text-[11px] px-2.5 py-0.5 rounded shadow">
          SELECTED PARCEL • DEEP DIVE ACTIVE
        </div>
<div>
{/* Header and ULPIN */}
<div className="flex items-start justify-between gap-space-xs mt-1">
<div>
<div className="font-label-code text-label-code font-bold text-primary tracking-wide">
                58J9-2A41-8902-14
              </div>
<div className="font-title-md text-title-md text-on-surface font-bold mt-1">Bilaspur Kalan</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Tehsil Pataudi, District Gurugram</div>
</div>
<span className="px-2.5 py-1 rounded bg-secondary-container text-on-secondary-container font-label-md text-[11px] font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">check_circle</span> Verified
            </span>
</div>
{/* Parcel Geometry Map Snippet */}
<div className="mt-space-lg rounded-lg overflow-hidden relative h-36 bg-surface-container">
<div className="w-full h-full bg-cover bg-center" data-location="Bilaspur Kalan, Gurugram, Haryana"></div>
{/* Cadastral Polygon Overlay Visual (SVG) */}
<svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 150">
<polygon className="fill-gis-polygon-clear stroke-gis-polygon-clear-stroke" points="50,20 180,15 250,75 190,135 60,110" strokeDasharray="0" strokeWidth="2.5"></polygon>
<circle cx="50" cy="20" fill="#047857" r="4"></circle>
<circle cx="180" cy="15" fill="#047857" r="4"></circle>
<circle cx="250" cy="75" fill="#047857" r="4"></circle>
<circle cx="190" cy="135" fill="#047857" r="4"></circle>
<circle cx="60" cy="110" fill="#047857" r="4"></circle>
<text fill="#047857" font-family="Inter" fontSize="11" font-weight="700" x="110" y="75">2.10 ACRES</text>
</svg>
<div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-surface-card/90 backdrop-blur text-primary font-label-code text-[10px] font-semibold">
              Khasra 42//18/2
            </div>
</div>
{/* Metrics Row */}
<div className="grid grid-cols-2 gap-space-sm mt-space-lg pt-space-xs">
<div className="bg-surface-container-low p-space-sm rounded">
<span className="font-body-sm text-[11px] text-on-surface-variant block">Holding Size</span>
<span className="font-label-lg text-label-lg font-bold text-on-surface mt-0.5 block">2.10 Acres</span>
</div>
<div className="bg-surface-container-low p-space-sm rounded">
<span className="font-body-sm text-[11px] text-on-surface-variant block">Encumbrance</span>
<span className="font-label-lg text-label-lg font-bold text-secondary flex items-center gap-1 mt-0.5">
<span className="material-symbols-outlined text-[16px]">verified</span> Nil / Clean
              </span>
</div>
</div>
</div>
<div className="mt-space-lg pt-space-sm flex items-center justify-between">
<span className="font-label-code text-body-sm text-outline">Category: Agri (Chahi)</span>
<button className="px-space-md py-2 rounded bg-primary text-on-primary font-label-md text-label-md flex items-center gap-1 hover:bg-primary-container transition-colors shadow-sm">
<span className="">Inspecting</span>
<span className="material-symbols-outlined text-[16px]">visibility</span>
</button>
</div>
</div>
{/* PROPERTY CARD 2: Manesar Rural (With Bank Charge) */}
<div className="bg-surface-card rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
<div>
{/* Header and ULPIN */}
<div className="flex items-start justify-between gap-space-xs">
<div>
<div className="font-label-code text-label-code font-bold text-primary tracking-wide">
                72K1-9B82-3310-09
              </div>
<div className="font-title-md text-title-md text-on-surface font-bold mt-1">Manesar Rural</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Tehsil Manesar, District Gurugram</div>
</div>
<span className="px-2.5 py-1 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-[11px] font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">account_balance</span> SBI Agri Loan
            </span>
</div>
{/* Parcel Geometry Map Snippet */}
<div className="mt-space-lg rounded-lg overflow-hidden relative h-36 bg-surface-container">
<div className="w-full h-full bg-cover bg-center" data-location="Manesar, Gurugram, Haryana"></div>
<svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 150">
<polygon className="fill-gis-polygon-disputed stroke-gis-polygon-disputed-stroke" points="60,30 220,40 200,120 40,90" strokeWidth="2"></polygon>
<text fill="#B45309" font-family="Inter" fontSize="11" font-weight="700" x="100" y="80">1.75 ACRES</text>
</svg>
<div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-surface-card/90 backdrop-blur text-primary font-label-code text-[10px] font-semibold">
              Khasra 19//4/1
            </div>
</div>
{/* Metrics Row */}
<div className="grid grid-cols-2 gap-space-sm mt-space-lg pt-space-xs">
<div className="bg-surface-container-low p-space-sm rounded">
<span className="font-body-sm text-[11px] text-on-surface-variant block">Holding Size</span>
<span className="font-label-lg text-label-lg font-bold text-on-surface mt-0.5 block">1.75 Acres</span>
</div>
<div className="bg-surface-container-low p-space-sm rounded">
<span className="font-body-sm text-[11px] text-on-surface-variant block">Active Mortgage</span>
<span className="font-label-lg text-label-lg font-bold text-tertiary mt-0.5 block">₹4.50 Lakh (KCC)</span>
</div>
</div>
</div>
<div className="mt-space-lg pt-space-sm flex items-center justify-between">
<span className="font-label-code text-body-sm text-outline">Category: Agri / Tube-well</span>
<button className="px-space-md py-2 rounded bg-surface-container text-primary font-label-md text-label-md flex items-center gap-1 hover:bg-surface-container-high transition-colors">
<span className="">Select Vault</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</button>
</div>
</div>
{/* PROPERTY CARD 3: Sector 14 Urban Plot */}
<div className="bg-surface-card rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
<div>
{/* Header and ULPIN */}
<div className="flex items-start justify-between gap-space-xs">
<div>
<div className="font-label-code text-label-code font-bold text-primary tracking-wide">
                14M3-4F55-1102-77
              </div>
<div className="font-title-md text-title-md text-on-surface font-bold mt-1">Sector 14 Urban Plot</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">HSVP Enclave, Gurugram Urban</div>
</div>
<span className="px-2.5 py-1 rounded bg-secondary-container text-on-secondary-container font-label-md text-[11px] font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">check_circle</span> Verified
            </span>
</div>
{/* Parcel Geometry Map Snippet */}
<div className="mt-space-lg rounded-lg overflow-hidden relative h-36 bg-surface-container">
<div className="w-full h-full bg-cover bg-center" data-location="Sector 14, Gurugram, Haryana"></div>
<svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 150">
<rect className="fill-gis-polygon-clear stroke-gis-polygon-clear-stroke" height="90" rx="3" strokeWidth="2" width="150" x="75" y="30"></rect>
<text fill="#047857" font-family="Inter" fontSize="11" font-weight="700" x="105" y="80">350 SQ. YDS</text>
</svg>
<div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-surface-card/90 backdrop-blur text-primary font-label-code text-[10px] font-semibold">
              Plot 842-P
            </div>
</div>
{/* Metrics Row */}
<div className="grid grid-cols-2 gap-space-sm mt-space-lg pt-space-xs">
<div className="bg-surface-container-low p-space-sm rounded">
<span className="font-body-sm text-[11px] text-on-surface-variant block">Holding Size</span>
<span className="font-label-lg text-label-lg font-bold text-on-surface mt-0.5 block">350 Sq. Yards</span>
</div>
<div className="bg-surface-container-low p-space-sm rounded">
<span className="font-body-sm text-[11px] text-on-surface-variant block">Encumbrance</span>
<span className="font-label-lg text-label-lg font-bold text-secondary mt-0.5 block">Freehold / NIL</span>
</div>
</div>
</div>
<div className="mt-space-lg pt-space-sm flex items-center justify-between">
<span className="font-label-code text-body-sm text-outline">Category: Residential Plot</span>
<button className="px-space-md py-2 rounded bg-surface-container text-primary font-label-md text-label-md flex items-center gap-1 hover:bg-surface-container-high transition-colors">
<span className="">Select Vault</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
{/* Section 3: Deep Dive Inspection Panel: Bilaspur Kalan (ULPIN: 58J9-2A41-8902-14) */}
<div className="pt-space-md border-t border-border-subtle">
<div className="w-full bg-surface-card rounded-xl p-space-xl shadow-md space-y-space-xl">
{/* Panel Header Bar */}
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md pb-space-lg border-b border-border-subtle">
<div className="space-y-space-xs">
<div className="flex items-center gap-space-sm flex-wrap">
<span className="px-space-sm py-1 rounded bg-primary text-on-primary font-label-code text-body-sm font-bold">
              PARCEL DOSSIER
            </span>
<span className="font-label-code text-headline-md text-primary font-bold">
              ULPIN: 58J9-2A41-8902-14
            </span>
<span className="px-space-sm py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-label-md text-body-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">shield</span> Live Sync to HALRIS
            </span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Bilaspur Kalan, Tehsil Pataudi, Gurugram • 2.10 Acres (16 Kanal 16 Marla) • Registered Khata No. 128/194
          </p>
</div>
{/* Utility Action Buttons */}
<div className="flex items-center gap-space-sm flex-wrap">
<button className="flex items-center gap-1.5 px-space-lg py-2.5 rounded bg-surface-container text-primary font-label-md text-label-md hover:bg-surface-container-high transition-colors shadow-sm">
<span className="material-symbols-outlined text-[18px]">share</span>
<span className="">Share Vault via DigiLocker</span>
</button>
<button className="flex items-center gap-1.5 px-space-lg py-2.5 rounded bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow">
<span className="material-symbols-outlined text-[18px]">download_for_offline</span>
<span className="">Download All Signed Deeds (.ZIP)</span>
</button>
</div>
</div>
{/* Main Inspection Grid (2 Columns: Documents + Financials/Timeline) */}
<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-xl">
{/* Left Side: Official Digital Vault Documents (7 Cols) */}
<div className="xl:col-span-7 space-y-space-xl">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[22px]">lock</span>
<h2 className="font-title-lg text-title-lg text-primary font-bold">Official Verifiable Documents</h2>
</div>
<span className="font-label-code text-body-sm text-outline">4 Digitally Signed Instruments</span>
</div>
{/* Document Cards 2x2 Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-lg">
{/* DOC 1: Sale Deed */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
<div>
<div className="flex items-start justify-between">
<div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">description</span>
</div>
<span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-md text-[10px] font-bold">
                    DIGITALLY SEALED
                  </span>
</div>
<div className="font-title-md text-title-md font-bold text-on-surface mt-space-md">Registered Sale Deed</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Reg. No. 8920/2012, Sub-Registrar Gurugram</div>
<div className="mt-space-md flex items-center gap-space-xs font-label-code text-[11px] text-outline">
<span className="">PDF • 3.2 MB</span>
<span className="">•</span>
<span className="">SHA256: 7f8c..9d12</span>
</div>
</div>
<div className="mt-space-xl pt-space-sm flex items-center gap-space-sm">
<button className="flex-1 py-2 px-space-sm rounded bg-surface-container text-primary hover:bg-surface-container-high font-label-md text-body-sm text-center transition-colors">
                  Preview
                </button>
<button className="flex-1 py-2 px-space-sm rounded bg-primary text-on-primary hover:bg-primary-container font-label-md text-body-sm flex items-center justify-center gap-1 transition-colors">
<span className="material-symbols-outlined text-[14px]">download</span>
<span className="">Signed Copy</span>
</button>
</div>
</div>
{/* DOC 2: Digital Khata Uni-Card */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
<div>
<div className="flex items-start justify-between">
<div className="w-12 h-12 rounded-lg bg-secondary-container/40 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[24px]">badge</span>
</div>
<span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-md text-[10px] font-bold">
                    RoR EXTRACT
                  </span>
</div>
<div className="font-title-md text-title-md font-bold text-on-surface mt-space-md">Digital Khata Uni-Card</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Consolidated Jamabandi Sovereign Token</div>
<div className="mt-space-md flex items-center gap-space-xs font-label-code text-[11px] text-outline">
<span className="">QR Authenticated</span>
<span className="">•</span>
<span className="">Aadhaar Anchored</span>
</div>
</div>
<div className="mt-space-xl pt-space-sm flex items-center gap-space-sm">
<button className="flex-1 py-2 px-space-sm rounded bg-surface-container text-primary hover:bg-surface-container-high font-label-md text-body-sm text-center transition-colors">
                  QR Inspect
                </button>
<button className="flex-1 py-2 px-space-sm rounded bg-secondary text-on-secondary hover:bg-on-secondary-container font-label-md text-body-sm flex items-center justify-center gap-1 transition-colors">
<span className="material-symbols-outlined text-[14px]">download</span>
<span className="">e-Card</span>
</button>
</div>
</div>
{/* DOC 3: RTC / Pahani */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
<div>
<div className="flex items-start justify-between">
<div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">agriculture</span>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container text-primary font-label-md text-[10px] font-bold">
                    CROP YR 2024-25
                  </span>
</div>
<div className="font-title-md text-title-md font-bold text-on-surface mt-space-md">RTC / Pahani (Girdawari)</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Rabi 2024: Wheat / Mustard Cultivation Active</div>
<div className="mt-space-md flex items-center gap-space-xs font-label-code text-[11px] text-outline">
<span className="">Patwari Inspected: Oct 2024</span>
</div>
</div>
<div className="mt-space-xl pt-space-sm flex items-center gap-space-sm">
<button className="flex-1 py-2 px-space-sm rounded bg-surface-container text-primary hover:bg-surface-container-high font-label-md text-body-sm text-center transition-colors">
                  Crop Inspection
                </button>
<button className="flex-1 py-2 px-space-sm rounded bg-primary text-on-primary hover:bg-primary-container font-label-md text-body-sm flex items-center justify-center gap-1 transition-colors">
<span className="material-symbols-outlined text-[14px]">download</span>
<span className="">Get Pahani</span>
</button>
</div>
</div>
{/* DOC 4: Geo-Boundary Survey Map (FMB) */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
<div>
<div className="flex items-start justify-between">
<div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">polyline</span>
</div>
<span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-md text-[10px] font-bold">
                    SURVEY OF INDIA
                  </span>
</div>
<div className="font-title-md text-title-md font-bold text-on-surface mt-space-md">Geo-Boundary Map (FMB)</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Field Measurement Book Vector Coordinates</div>
<div className="mt-space-md flex items-center gap-space-xs font-label-code text-[11px] text-outline">
<span className="">GeoJSON / CAD Approved</span>
</div>
</div>
<div className="mt-space-xl pt-space-sm flex items-center gap-space-sm">
<button className="flex-1 py-2 px-space-sm rounded bg-surface-container text-primary hover:bg-surface-container-high font-label-md text-body-sm text-center transition-colors">
                  GIS Layers
                </button>
<button className="flex-1 py-2 px-space-sm rounded bg-primary text-on-primary hover:bg-primary-container font-label-md text-body-sm flex items-center justify-center gap-1 transition-colors">
<span className="material-symbols-outlined text-[14px]">download</span>
<span className="">FMB Vector</span>
</button>
</div>
</div>
</div>
{/* Encumbrance & CERSAI Status Strip */}
<div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-on-secondary shadow-sm">
<span className="material-symbols-outlined text-[28px]">verified</span>
</div>
<div>
<div className="font-label-lg text-label-lg font-bold text-on-surface">NIL Encumbrance Verified (Form 15 &amp; 16)</div>
<div className="font-body-sm text-body-sm text-on-surface-variant leading-normal mt-0.5">
                  Zero pending attachments, civil decrees, or mortgage charges on Khasra 42//18/2.
                </div>
</div>
</div>
<div className="flex items-center gap-space-sm font-label-code text-body-sm text-secondary bg-surface-card px-space-md py-2 rounded-lg shadow-sm">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="">CERSAI Sync: Realtime</span>
</div>
</div>
</div>
{/* Right Side: Chain of Custody Provenance Timeline (5 Cols) */}
<div className="xl:col-span-5 bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between space-y-space-md">
<div>
<div className="flex items-center justify-between pb-space-sm border-b border-border-subtle">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">account_tree</span>
<h3 className="font-title-md text-title-md text-primary font-bold">Chain-of-Custody Timeline</h3>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container font-label-code text-[11px] text-primary">Immutable Trace</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant my-space-md leading-relaxed">
              Complete chronological audit trail preserved on sovereign consensus registry.
            </p>
{/* Vertical Timeline Track */}
<div className="relative pl-6 space-y-space-lg before:content-[''] before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-surface-container-high">
{/* Event 1 (2024) */}
<div className="relative group">
<div className="absolute -left-[1.85rem] top-1 w-3.5 h-3.5 rounded-full bg-secondary ring-4 ring-surface-card"></div>
<div className="bg-surface-container-low p-space-md rounded-lg space-y-1">
<div className="flex items-center justify-between">
<span className="font-label-code text-[12px] font-bold text-secondary">2024 • AUGUST</span>
<span className="font-label-md text-[10px] px-1.5 py-0.2 rounded bg-secondary-container text-on-secondary-container">Biometric Anchored</span>
</div>
<div className="font-label-lg text-body-md font-bold text-on-surface">ULPIN Assigned &amp; Aadhaar e-KYC Linked</div>
<p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed">
                    14-digit unique identifier 58J9-2A41-8902-14 generated via satellite coordinates and sealed with owner UIDAI token.
                  </p>
</div>
</div>
{/* Event 2 (2018) */}
<div className="relative group">
<div className="absolute -left-[1.85rem] top-1 w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-surface-card"></div>
<div className="bg-surface-container-low p-space-md rounded-lg space-y-1">
<div className="flex items-center justify-between">
<span className="font-label-code text-[12px] font-bold text-primary">2018 • MARCH</span>
<span className="font-label-md text-[10px] px-1.5 py-0.2 rounded bg-surface-container text-primary">Lien Released</span>
</div>
<div className="font-label-lg text-body-md font-bold text-on-surface">Agri Mortgage Discharge Recorded</div>
<p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed">
                    NOC issued by Punjab National Bank (Bilaspur Branch). Charge satisfaction registered in Jamabandi remarks column.
                  </p>
</div>
</div>
{/* Event 3 (2012) */}
<div className="relative group">
<div className="absolute -left-[1.85rem] top-1 w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-surface-card"></div>
<div className="bg-surface-container-low p-space-md rounded-lg space-y-1">
<div className="flex items-center justify-between">
<span className="font-label-code text-[12px] font-bold text-primary">2012 • OCTOBER</span>
<span className="font-label-md text-[10px] px-1.5 py-0.2 rounded bg-surface-container text-primary">Revenue Mutation</span>
</div>
<div className="font-label-lg text-body-md font-bold text-on-surface">Mutation Sanctioned (Order No. MUT-8812)</div>
<p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed">
                    Sanctioned by Tehsildar Pataudi in open revenue court without objections; transferred in name of Rameshwar Sharma.
                  </p>
</div>
</div>
{/* Event 4 (2012) */}
<div className="relative group">
<div className="absolute -left-[1.85rem] top-1 w-3.5 h-3.5 rounded-full bg-outline ring-4 ring-surface-card"></div>
<div className="bg-surface-container-low p-space-md rounded-lg space-y-1">
<div className="flex items-center justify-between">
<span className="font-label-code text-[12px] font-bold text-outline">2012 • JUNE</span>
<span className="font-label-md text-[10px] px-1.5 py-0.2 rounded bg-surface-container text-outline">Sale Deed</span>
</div>
<div className="font-label-lg text-body-md font-bold text-on-surface">Registered Conveyance Deed Executed</div>
<p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed">
                    Book 1, Volume 412, Pages 45-52. Consideration ₹62,00,000 paid with stamp duty certificate receipt #8920.
                  </p>
</div>
</div>
{/* Event 5 (1984) */}
<div className="relative group">
<div className="absolute -left-[1.85rem] top-1 w-3.5 h-3.5 rounded-full bg-outline-variant ring-4 ring-surface-card"></div>
<div className="bg-surface-container-low p-space-md rounded-lg space-y-1">
<div className="flex items-center justify-between">
<span className="font-label-code text-[12px] font-bold text-outline">1984 • SEED</span>
<span className="font-label-md text-[10px] px-1.5 py-0.2 rounded bg-surface-container text-outline">Ancestral Division</span>
</div>
<div className="font-label-lg text-body-md font-bold text-on-surface">Khasra Partition Registry</div>
<p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed">
                    Joint Khewat partitioned amongst legal heirs under Punjab Land Revenue Act, demarcating Sub-plot 42//18/2.
                  </p>
</div>
</div>
</div>
</div>
{/* Timeline Footer */}
<div className="mt-space-lg pt-space-md border-t border-border-subtle flex items-center justify-between font-label-code text-[11px] text-on-surface-variant">
<span className="">Genesis Block ID: GUR-REV-1984</span>
<span className="text-primary font-bold">100% Cryptographic Continuity</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div></main><footer className="w-full bg-surface-container-lowest text-on-surface-variant shadow-[0_1px_8px_rgba(0,0,0,0.04)] mt-auto"><div className="w-full px-margin py-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md border-t border-border-subtle"><div className="flex items-center gap-space-md"><div className="flex flex-col"><span className="font-label-lg text-label-lg font-bold text-primary">BHU-AADHAAR DPI PLATFORM</span><span className="font-body-sm text-body-sm text-on-surface-variant">Designed and architected under SIH26014 for Digital Public Land Governance</span></div></div><div className="flex flex-wrap items-center gap-space-lg font-body-sm text-body-sm text-on-surface-variant"><a className="hover:text-primary transition-colors" href="#">National Informatics Centre (NIC) Standards</a><a className="hover:text-primary transition-colors" href="#">Digital India Land Records Modernization Programme (DILRMP)</a><a className="hover:text-primary transition-colors" href="#">ULPIN Verification API</a><a className="hover:text-primary transition-colors" href="#">Data Security &amp; Provenance</a></div><div className="flex items-center gap-space-sm font-label-md text-body-sm text-on-surface-variant"><span className="material-symbols-outlined text-[18px] text-secondary">verified_user</span><span className="">ISO 27001 Certified DPI Node</span></div></div></footer>
    </>
  );
}

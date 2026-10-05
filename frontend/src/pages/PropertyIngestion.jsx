import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PropertyIngestion() {
  const navigate = useNavigate();

  // Wizard state: default to Step 2 as shown in the DPI pipeline screenshot
  const [currentStep, setCurrentStep] = useState(2);
  const [autoSnapped, setAutoSnapped] = useState(false);
  const [auditConsent, setAuditConsent] = useState(true);
  const [uploadedFile, setUploadedFile] = useState({
    name: 'Haryana_Revenue_Deed_1984_Fard.pdf',
    confidence: '98.4%',
    size: '4.2 MB',
  });
  const [khasraValue, setKhasraValue] = useState('182//4/1');
  const [draftSaved, setDraftSaved] = useState(false);
  const [isMinting, setIsMinting] = useState(false);
  const [isTitleMinted, setIsTitleMinted] = useState(false);
  const [checklist, setChecklist] = useState({
    walk: true,
    noc: true,
    encroachment: true,
  });

  const stepsMeta = [
    {
      num: 1,
      id: '01',
      title: 'Identity & Land Details',
      subtitle: 'Aadhaar eKYC Verified',
      pipelineTitle: 'Citizen Submission',
      pipelineDesc: 'Aadhaar eKYC verified, ownership claimed and identity registered.',
      icon: 'badge',
    },
    {
      num: 2,
      id: '02',
      title: 'AI OCR & Boundary Fit',
      subtitle: 'Autonomous Deed OCR & Mesh Fit',
      pipelineTitle: 'AI OCR & Boundary Fit',
      pipelineDesc: 'Geometry delineated and ready for sovereign deed cross-match.',
      icon: 'polyline',
    },
    {
      num: 3,
      id: '03',
      title: 'Surveyor Field Audit',
      subtitle: 'DGPS Ground-Truthing Sign-Off',
      pipelineTitle: 'Revenue Surveyor Audit',
      pipelineDesc: 'Field DGPS ground-truthing and boundary beacon sign-off.',
      icon: 'engineering',
    },
    {
      num: 4,
      id: '04',
      title: 'Official Verification Track',
      subtitle: 'Tehsildar Sovereign Minting',
      pipelineTitle: 'Tehsildar eSign & ULPIN',
      pipelineDesc: 'Tamper-proof Bhu-Aadhaar 14-digit token minting on sovereign ledger.',
      icon: 'verified',
    },
  ];

  const handleSaveDraft = () => {
    setDraftSaved(true);
    setTimeout(() => setDraftSaved(false), 3500);
  };

  const handleMintToken = () => {
    setIsMinting(true);
    setTimeout(() => {
      setIsMinting(false);
      setIsTitleMinted(true);
    }, 1800);
  };

  const getEstimatedDuration = () => {
    if (currentStep === 1) return '5-7 Working Days';
    if (currentStep === 2) return '3-5 Working Days';
    if (currentStep === 3) return '1-2 Working Days';
    return 'Immediate (Real-Time Mint)';
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      {/* 1. Official DPI Top Header Bar */}
      <header className="sticky top-0 w-full z-50 bg-[#1E3A8A] text-white shadow-md border-b border-[#2d4fa6]">
        <div className="w-full px-6 py-2.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-1 rounded bg-white shadow-xs flex items-center justify-center shrink-0">
              <img
                alt="Bhu-Aadhaar DPI Official Logo"
                className="h-8 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida/AEtjO1XLmmfkBQ0m__jZyvJ0pGv8ridqmNc002FYLoYiYkRnt9z6N64gRnAavahvC8K3SEq3uT0Ta1v_6ll0cX6thSe_vHJRs2rCEFslgejhHNIS-X2K6BuOn2zgwr2EQHaL2XdCutT9GmgQxbgVvNE3i89tuxktCbWiKvx4gZG-jR9mo18_v3LvSZ0pDCMemdkkh4JXFQRzIuGo_gcGm9sR4EsqSlKb3TCSMLUQ9tRE-8b5RGFtrcVUVVLPU5Oe"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-[15px] tracking-tight text-white uppercase">
                  BHU-AADHAAR
                </span>
                <span className="bg-[#006c4e] text-white px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wide">
                  SIH26014
                </span>
              </div>
              <span className="text-[11px] text-blue-200 tracking-tight hidden lg:inline">
                National Digital Public Infrastructure for Land Records | Govt of India
              </span>
            </div>
          </div>

          {/* Navigation items matching Stitch & App layout */}
          <nav className="hidden xl:flex items-center gap-1 p-1 bg-[#172e6d] rounded-lg shrink-0">
            <button
              onClick={() => navigate('/bhu-explorer')}
              className="px-2.5 py-1 rounded text-blue-100 hover:text-white hover:bg-white/10 text-xs font-medium transition-colors"
            >
              Bhu-Explorer (GIS Map)
            </button>
            <button
              onClick={() => navigate('/bhu-locker')}
              className="px-2.5 py-1 rounded text-blue-100 hover:text-white hover:bg-white/10 text-xs font-medium transition-colors"
            >
              My Bhu-Locker
            </button>
            <button
              onClick={() => navigate('/property-ingestion')}
              className="px-2.5 py-1 rounded bg-white text-[#1E3A8A] font-bold shadow-xs text-xs"
            >
              Property Ingestion
            </button>
            <button
              onClick={() => navigate('/smart-ledger')}
              className="px-2.5 py-1 rounded text-blue-100 hover:text-white hover:bg-white/10 text-xs font-medium transition-colors"
            >
              Smart Ledger (Mutation)
            </button>
            <button
              onClick={() => navigate('/market-radar')}
              className="px-2.5 py-1 rounded text-blue-100 hover:text-white hover:bg-white/10 text-xs font-medium transition-colors"
            >
              Market Radar
            </button>
            <button
              onClick={() => navigate('/nyaya-bhumi')}
              className="px-2.5 py-1 rounded text-blue-100 hover:text-white hover:bg-white/10 text-xs font-medium transition-colors"
            >
              Nyaya-Bhumi (Disputes)
            </button>
          </nav>

          <div className="flex items-center gap-2.5 shrink-0">
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-2.5 text-blue-200 pointer-events-none text-[18px]">
                search
              </span>
              <input
                className="w-48 sm:w-56 md:w-64 pl-8 pr-3 py-1.5 bg-white/10 rounded-lg text-white placeholder:text-blue-200 text-xs focus:outline-none focus:bg-white/15 focus:ring-1 focus:ring-[#97f5cc] border border-white/15 transition-all"
                placeholder="Search ULPIN / Aadhaar / Survey No..."
                type="text"
              />
            </div>
            <button
              className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 text-xs transition-colors shrink-0"
              type="button"
            >
              <span className="material-symbols-outlined text-[15px]">translate</span>
              <span>English / हिंदी</span>
            </button>
            <div className="relative flex items-center justify-center shrink-0">
              <button
                className="p-1.5 text-white hover:bg-white/10 rounded-lg transition-colors relative"
                type="button"
              >
                <span className="material-symbols-outlined text-[20px]">notifications</span>
                <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-red-600 text-white text-[10px] leading-none rounded-full flex items-center justify-center font-bold">
                  2
                </span>
              </button>
            </div>
            <div className="flex items-center gap-2 pl-2 border-l border-white/20 shrink-0">
              <div className="flex flex-col text-right hidden md:flex">
                <span className="text-xs font-semibold text-white leading-tight">
                  Rameshwar Sharma
                </span>
                <span className="text-[11px] text-blue-200 tracking-wider">
                  •••• 8912 | Citizen
                </span>
              </div>
              <img
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-[#97f5cc]/60"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNUJ7q9qf7o1FYO2BlPq3_5QYYS2g1mEZCjTnjczHKuXKbLovStdPX8u_PUWBqG7ZgUPAqvB5DtSAZd4YJIoZCvXcXyDVXtqrdBDXlGCwz0o_VfQXnClx1X0nAk5gBlRUxQPPX14wT8jYch8wV6Nyk2LBvtTP4PYkPbQ48qJ_T6qf32qs1Rb7eWWnJ-819BcylFlpjYQRbSWyIs_121HfqAQze1glfkP7_S7788RDXktWKl4l0C7ENvg"
              />
            </div>
          </div>
        </div>

        {/* Cadastral Secondary Status Strip */}
        <div className="h-9 w-full bg-[#182f6e] px-6 flex items-center justify-between border-t border-white/10">
          <div className="flex items-center gap-2 text-xs text-blue-200">
            <span className="material-symbols-outlined text-[16px] text-emerald-400">explore</span>
            <span>Sovereign Cadastral Registry</span>
            <span className="text-white/30">/</span>
            <span className="text-white font-semibold">National Land Grid</span>
            <span className="text-white/30">/</span>
            <span className="font-mono text-blue-200">EPSG:4326 (WGS 84)</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-blue-200">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span className="text-white">Clear Title: 89.4%</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              <span className="text-white">Mutation Queue: 12,408</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
              <span className="text-white">Active Liens: 1.2%</span>
            </div>
          </div>
        </div>
      </header>

      {/* Draft Notification Toast */}
      {draftSaved && (
        <div className="fixed top-24 right-6 z-50 p-4 rounded-xl bg-emerald-600 text-white shadow-xl flex items-center gap-3 animate-fade-in">
          <span className="material-symbols-outlined text-[20px]">check_circle</span>
          <div className="flex flex-col">
            <span className="text-xs font-bold">Draft Package Saved Locally</span>
            <span className="text-[11px] text-emerald-100">
              Form DPI-7B (#DRFT-9042) synced to sovereign session 0x8B7...F32A
            </span>
          </div>
        </div>
      )}

      {/* Main Container */}
      <main className="w-full pb-20 bg-surface flex flex-col flex-1">
        <div className="w-full max-w-7xl mx-auto px-6 py-6 flex flex-col gap-8">
          {/* Top Hero & Progress Header */}
          <section className="flex flex-col gap-6">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2 border-b border-border-subtle">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-[#1E3A8A] text-xs font-bold uppercase tracking-wider">
                    Form DPI-7B // Revenue Act 2024
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="text-emerald-700 text-xs flex items-center gap-1.5 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block animate-pulse"></span>
                    Real-Time DGPS Node Synchronized
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl text-on-surface font-extrabold tracking-tight">
                  Digital Property Ingestion &amp; ULPIN Minting
                </h1>
                <p className="text-sm md:text-base text-on-surface-variant max-w-3xl mt-1.5 leading-relaxed">
                  Digitize legacy paper deeds, validate geo-cadastral boundaries against sovereign
                  orthophoto vectors, and mint a tamper-proof 14-digit Bhu-Aadhaar ID.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0 self-start lg:self-auto">
                <button
                  onClick={handleSaveDraft}
                  className="px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-xs hover:bg-slate-50 text-[#1E3A8A] text-xs font-bold flex items-center gap-2 transition-all cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">restore_page</span>
                  Resume Draft (ID: #DRFT-9042)
                </button>
                <div className="px-3 py-2 rounded-xl bg-blue-50 text-slate-700 text-xs font-mono border border-blue-100">
                  Session Token: <span className="font-bold text-[#1E3A8A]">0x8B7...F32A</span>
                </div>
              </div>
            </div>

            {/* Dynamic 4-Stage Stepper */}
            <div className="w-full p-4 rounded-2xl bg-white border border-border-subtle shadow-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stepsMeta.map((s) => {
                  const isCompleted = s.num < currentStep;
                  const isActive = s.num === currentStep;

                  if (isCompleted) {
                    return (
                      <div
                        key={s.num}
                        onClick={() => setCurrentStep(s.num)}
                        className="cursor-pointer flex items-center gap-3.5 p-3 rounded-xl bg-emerald-50/70 border border-emerald-300 hover:border-emerald-500 transition-all hover:shadow-xs"
                      >
                        <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                          <span
                            className="material-symbols-outlined text-[20px]"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            check_circle
                          </span>
                        </div>
                        <div className="flex flex-col min-w-0">
                          <div className="flex items-center gap-1">
                            <span className="font-mono text-[11px] text-emerald-800 font-bold uppercase tracking-wider">
                              Stage {s.id}
                            </span>
                            <span className="material-symbols-outlined text-emerald-700 text-[13px]">
                              lock
                            </span>
                          </div>
                          <span className="text-xs text-slate-800 truncate font-bold">{s.title}</span>
                          <span className="text-[11px] text-emerald-700 truncate font-medium">
                            {s.subtitle}
                          </span>
                        </div>
                      </div>
                    );
                  }

                  if (isActive) {
                    return (
                      <div
                        key={s.num}
                        onClick={() => setCurrentStep(s.num)}
                        className="cursor-pointer flex items-center gap-3.5 p-3 rounded-xl bg-blue-50/80 border-2 border-[#1E3A8A] shadow-xs ring-4 ring-blue-500/10 transition-all"
                      >
                        <div className="w-10 h-10 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center shrink-0 shadow-xs">
                          <span className="material-symbols-outlined text-[20px]">{s.icon}</span>
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="font-mono text-[11px] text-[#1E3A8A] font-bold uppercase tracking-wider">
                            Stage {s.id} • Active
                          </span>
                          <span className="text-xs text-[#1E3A8A] font-bold truncate">
                            {s.title}
                          </span>
                          <span className="text-[11px] text-slate-600 truncate font-medium">
                            {s.subtitle}
                          </span>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <div
                      key={s.num}
                      onClick={() => setCurrentStep(s.num)}
                      className="cursor-pointer flex items-center gap-3.5 p-3 rounded-xl bg-slate-50/70 border border-dashed border-slate-300 opacity-80 hover:opacity-100 hover:border-slate-400 transition-all"
                    >
                      <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[20px]">{s.icon}</span>
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="font-mono text-[11px] text-slate-500 font-semibold uppercase tracking-wider">
                          Stage {s.id} • Upcoming
                        </span>
                        <span className="text-xs text-slate-700 truncate font-semibold">
                          {s.title}
                        </span>
                        <span className="text-[11px] text-slate-500 truncate">{s.subtitle}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Administrative & Spatial Identifiers */}
          <section className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-6 bg-[#1E3A8A] rounded-full inline-block"></span>
                <h2 className="text-xl md:text-2xl text-on-surface font-bold tracking-tight">
                  Administrative &amp; Spatial Identifiers
                </h2>
              </div>
              <span className="font-mono text-xs text-on-surface-variant uppercase tracking-wider font-semibold">
                Validated Against Revenue Master
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Card A: Revenue Jurisdiction */}
              <div className="p-6 rounded-2xl bg-white border border-border-subtle shadow-xs flex flex-col justify-between gap-4">
                <div className="flex items-center justify-between border-b border-border-subtle pb-3">
                  <div className="flex items-center gap-2 text-[#1E3A8A] font-bold text-sm">
                    <span className="material-symbols-outlined text-[20px]">account_balance</span>
                    <span>Revenue Jurisdiction</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#1E3A8A] font-mono text-xs font-bold">
                    STATE CODE: 06 (HR)
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-xs text-on-surface-variant block uppercase tracking-wider font-medium">
                      State
                    </span>
                    <span className="text-sm text-on-surface font-bold">Haryana</span>
                  </div>
                  <div>
                    <span className="text-xs text-on-surface-variant block uppercase tracking-wider font-medium">
                      District
                    </span>
                    <span className="text-sm text-on-surface font-bold">Gurugram (21)</span>
                  </div>
                  <div>
                    <span className="text-xs text-on-surface-variant block uppercase tracking-wider font-medium">
                      Tehsil / Sub-Division
                    </span>
                    <span className="text-sm text-on-surface font-bold">Farrukhnagar</span>
                  </div>
                  <div>
                    <span className="text-xs text-on-surface-variant block uppercase tracking-wider font-medium">
                      Cadastral Village
                    </span>
                    <span className="text-sm text-on-surface font-bold">Sultanpur (083)</span>
                  </div>
                </div>
              </div>

              {/* Card B: Survey / Khasra Identifier */}
              <div className="p-6 rounded-2xl bg-white border border-border-subtle shadow-xs flex flex-col justify-between gap-4">
                <div className="flex items-center justify-between border-b border-border-subtle pb-3">
                  <div className="flex items-center gap-2 text-[#1E3A8A] font-bold text-sm">
                    <span className="material-symbols-outlined text-[20px]">pin_drop</span>
                    <span>Cadastral Survey Unit</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono text-xs font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[13px]">verified</span> Recorded Match
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    className="text-xs text-on-surface-variant uppercase tracking-wider font-medium"
                    htmlFor="khasraInput"
                  >
                    Survey / Khasra Identifier
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3.5 text-on-surface-variant text-[18px]">
                      search
                    </span>
                    <input
                      className="w-full pl-10 pr-24 py-2.5 bg-slate-50 rounded-xl text-on-surface font-mono text-base font-bold focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#1E3A8A] border border-border-subtle transition-all"
                      id="khasraInput"
                      type="text"
                      value={khasraValue}
                      onChange={(e) => setKhasraValue(e.target.value)}
                    />
                    <span className="absolute right-2.5 px-2 py-1 rounded-md bg-blue-100 text-[#1E3A8A] font-mono text-xs font-bold">
                      PARCEL ID
                    </span>
                  </div>
                  <p className="text-xs text-on-surface-variant">
                    Validated against Sovereign Mauza Sheet 14, Farrukhnagar Circle.
                  </p>
                </div>
              </div>

              {/* Card C: Deed Extent & Metrics */}
              <div className="p-6 rounded-2xl bg-white border border-border-subtle shadow-xs flex flex-col justify-between gap-4">
                <div className="flex items-center justify-between border-b border-border-subtle pb-3">
                  <div className="flex items-center gap-2 text-[#1E3A8A] font-bold text-sm">
                    <span className="material-symbols-outlined text-[20px]">straighten</span>
                    <span>Deed Extent &amp; Area Metrics</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-mono text-xs font-semibold">
                    Bandobast #14
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-xl bg-slate-50 border border-border-subtle">
                    <span className="text-xs text-on-surface-variant block uppercase tracking-wider font-medium">
                      Imperial Area
                    </span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-xl font-extrabold text-on-surface">1.25</span>
                      <span className="font-mono text-xs text-on-surface-variant font-semibold">
                        Acres
                      </span>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-border-subtle">
                    <span className="text-xs text-on-surface-variant block uppercase tracking-wider font-medium">
                      Metric Equivalent
                    </span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-xl font-extrabold text-on-surface">5,058.5</span>
                      <span className="font-mono text-xs text-on-surface-variant font-semibold">
                        m²
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cadastral GIS Boundary Delineation Canvas */}
          <section className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-6 bg-[#1E3A8A] rounded-full inline-block"></span>
                  <h2 className="text-xl md:text-2xl text-on-surface font-bold tracking-tight">
                    Cadastral GIS Boundary Delineation Canvas
                  </h2>
                </div>
                <p className="text-xs md:text-sm text-on-surface-variant mt-0.5">
                  High-accuracy satellite orthophoto canvas integrated with sub-meter land registry mesh.
                </p>
              </div>

              {/* Toolbar */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  className="px-3.5 py-2 rounded-xl bg-[#1E3A8A] text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs hover:bg-blue-900 transition-all cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[17px]">add_location_alt</span>
                  Drop GPS Marker Pin
                </button>
                <button
                  className="px-3.5 py-2 rounded-xl bg-white border border-border-subtle text-[#1E3A8A] text-xs font-semibold flex items-center gap-1.5 hover:bg-slate-50 transition-all shadow-xs cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[17px]">draw</span>
                  Trace Polygon Boundary
                </button>
                <button
                  onClick={() => setAutoSnapped(!autoSnapped)}
                  className="px-3.5 py-2 rounded-xl bg-white border border-border-subtle text-emerald-800 text-xs font-semibold flex items-center gap-1.5 hover:bg-slate-50 transition-all shadow-xs cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[17px]">join_inner</span>
                  {autoSnapped ? 'Snapped to Cadastre' : 'Snap to Adjacent Cadastre'}
                </button>
                <button
                  className="px-3.5 py-2 rounded-xl bg-white border border-border-subtle text-slate-700 text-xs font-medium flex items-center gap-1.5 hover:bg-slate-50 transition-all shadow-xs cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[17px]">cloud_upload</span>
                  Upload KML / GeoJSON
                </button>
              </div>
            </div>

            {/* GIS Map & Overlay */}
            <div className="relative w-full h-[520px] rounded-2xl overflow-hidden shadow-lg bg-slate-900 border border-border-subtle">
              {/* Static GIS Satellite Imagery */}
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBo7vjKfyLhydOYChQqkPitBYLfbTq3NzKz9pbxQJOtZv1N1r4714pJwpw7ZtoY_dVnfJTJ4ezt5P4-08YD5AL9jlVj5gTddxuzXDPtzO8oAaFLsFG1eIVmDS6XRG6v1eE0655uSeWrUUPWi0y7KFIu2L_UjQhNPXHYuukIMrrzAmAG0jKMLjx-OPgNhRoogGDKbwVnYZdzq2NrhN9uBBvk02Z3RmcXaLGdD3pPDfDlbny6lS22qUEtiA')",
                }}
              ></div>

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#00236f]/60 via-transparent to-[#00236f]/30 pointer-events-none"></div>

              {/* SVG Cadastral Overlay */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-auto"
                id="cadastralSvg"
                preserveAspectRatio="none"
                viewBox="0 0 1000 540"
              >
                {/* Surrounding Non-Active Plots */}
                <polygon
                  fill="none"
                  points="60,50 280,40 250,220 50,200"
                  stroke="#FFFFFF"
                  strokeDasharray="4 2"
                  strokeOpacity="0.45"
                  strokeWidth="1.5"
                ></polygon>
                <polygon
                  fill="none"
                  points="280,40 650,30 620,200 250,220"
                  stroke="#FFFFFF"
                  strokeOpacity="0.45"
                  strokeWidth="1.5"
                ></polygon>
                <polygon
                  fill="none"
                  points="650,30 940,55 920,240 620,200"
                  stroke="#FFFFFF"
                  strokeDasharray="4 2"
                  strokeOpacity="0.45"
                  strokeWidth="1.5"
                ></polygon>
                <polygon
                  fill="none"
                  points="620,200 920,240 880,480 560,450"
                  stroke="#FFFFFF"
                  strokeOpacity="0.45"
                  strokeWidth="1.5"
                ></polygon>
                <polygon
                  fill="none"
                  points="50,200 250,220 220,460 30,430"
                  stroke="#FFFFFF"
                  strokeOpacity="0.45"
                  strokeWidth="1.5"
                ></polygon>

                {/* Adjacent Verified Parcel with Label */}
                <polygon
                  fill="#04785735"
                  points="220,460 560,450 540,520 200,520"
                  stroke="#047857"
                  strokeWidth="2.5"
                ></polygon>
                <text
                  fill="#FFFFFF"
                  fontFamily="Inter"
                  fontSize="12"
                  fontWeight="600"
                  letterSpacing="0.5"
                  x="250"
                  y="490"
                >
                  ULPIN: 58J9-2A41-8902-14 (CLEAR REGISTERED TITLE)
                </text>

                {/* Dynamic Target Ingestion Parcel (Survey 182//4/1) */}
                <polygon
                  fill={autoSnapped ? '#04785730' : '#1e3a8a50'}
                  id="activeParcel"
                  points="250,220 620,200 560,450 220,460"
                  stroke={autoSnapped ? '#047857' : '#90a8ff'}
                  strokeWidth="3.5"
                ></polygon>

                {/* Active Polygon Dimension Markers */}
                <line
                  stroke="#ff8e49"
                  strokeDasharray="4 3"
                  strokeWidth="2.5"
                  x1="250"
                  x2="620"
                  y1="220"
                  y2="200"
                ></line>
                <text
                  className="select-none font-bold"
                  fill="#ffdbca"
                  fontFamily="Inter"
                  fontSize="12"
                  x="410"
                  y="195"
                >
                  72.4 m (North Face)
                </text>
                <line
                  stroke="#ff8e49"
                  strokeDasharray="4 3"
                  strokeWidth="2.5"
                  x1="620"
                  x2="560"
                  y1="200"
                  y2="450"
                ></line>
                <text
                  className="select-none font-bold"
                  fill="#ffdbca"
                  fontFamily="Inter"
                  fontSize="12"
                  x="600"
                  y="325"
                >
                  71.8 m (East Face)
                </text>
                <line
                  stroke="#ff8e49"
                  strokeDasharray="4 3"
                  strokeWidth="2.5"
                  x1="560"
                  x2="220"
                  y1="450"
                  y2="460"
                ></line>
                <text
                  className="select-none font-bold"
                  fill="#ffdbca"
                  fontFamily="Inter"
                  fontSize="12"
                  x="370"
                  y="470"
                >
                  70.9 m (South Face)
                </text>
                <line
                  stroke="#ff8e49"
                  strokeDasharray="4 3"
                  strokeWidth="2.5"
                  x1="220"
                  x2="250"
                  y1="460"
                  y2="220"
                ></line>
                <text
                  className="select-none font-bold"
                  fill="#ffdbca"
                  fontFamily="Inter"
                  fontSize="12"
                  x="190"
                  y="335"
                >
                  71.2 m (West Face)
                </text>

                {/* Vertex Handle Nodes */}
                <circle
                  className="cursor-crosshair shadow-md"
                  cx="250"
                  cy="220"
                  fill="#FFFFFF"
                  r="7"
                  stroke="#00236f"
                  strokeWidth="3"
                ></circle>
                <circle
                  className="cursor-crosshair shadow-md"
                  cx="620"
                  cy="200"
                  fill="#FFFFFF"
                  r="7"
                  stroke="#00236f"
                  strokeWidth="3"
                ></circle>
                <circle
                  className="cursor-crosshair shadow-md"
                  cx="560"
                  cy="450"
                  fill="#FFFFFF"
                  r="7"
                  stroke="#00236f"
                  strokeWidth="3"
                ></circle>
                <circle
                  className="cursor-crosshair shadow-md"
                  cx="220"
                  cy="460"
                  fill="#FFFFFF"
                  r="7"
                  stroke="#00236f"
                  strokeWidth="3"
                ></circle>

                {/* Centroid Target Marker */}
                <circle cx="410" cy="330" fill="#ff8e49" r="5"></circle>
                <circle
                  cx="410"
                  cy="330"
                  fill="none"
                  r="14"
                  stroke="#ff8e49"
                  strokeDasharray="3 2"
                  strokeWidth="2"
                ></circle>
              </svg>

              {/* Top-Left Floating Info HUD */}
              <div className="absolute top-5 left-5 p-3 rounded-xl bg-slate-900/90 text-white backdrop-blur-md shadow-lg flex items-center gap-4 border border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#97f5cc] animate-ping"></span>
                  <span className="font-mono text-xs font-bold text-white">PARCEL 182//4/1</span>
                </div>
                <div className="h-4 w-[1px] bg-white/20"></div>
                <div className="font-mono text-xs">
                  LAT: <span className="font-bold text-[#97f5cc]">28.4319° N</span> | LON:{' '}
                  <span className="font-bold text-[#97f5cc]">76.8834° E</span>
                </div>
                <div className="h-4 w-[1px] bg-white/20"></div>
                <span className="px-2 py-0.5 rounded bg-white/10 font-mono text-xs text-blue-200">
                  EPSG:4326 (WGS 84)
                </span>
              </div>

              {/* Top-Right Controls */}
              <div className="absolute top-5 right-5 flex items-center gap-2 p-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md shadow-lg border border-white/10">
                <button
                  className="px-3 py-1.5 rounded-lg bg-[#1E3A8A] text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">satellite_alt</span>
                  Ortho 10cm
                </button>
                <button
                  className="px-3 py-1.5 rounded-lg hover:bg-white/10 text-white text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">layers</span>
                  Cadastre Overlay
                </button>
                <button
                  className="p-1.5 rounded-lg hover:bg-white/10 text-white transition-colors cursor-pointer"
                  title="Toggle Fullscreen"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">fullscreen</span>
                </button>
              </div>

              {/* Left Precision Tool Palette */}
              <div className="absolute left-5 top-24 flex flex-col gap-1.5 p-1.5 rounded-xl bg-slate-900/95 backdrop-blur-md shadow-xl text-white border border-white/10">
                <button
                  className="p-2.5 rounded-lg bg-[#1E3A8A] text-white hover:bg-blue-800 transition-colors shadow-xs cursor-pointer"
                  title="Select / Move Polygon"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">pan_tool</span>
                </button>
                <button
                  className="p-2.5 rounded-lg hover:bg-white/10 text-white transition-colors cursor-pointer"
                  title="Add New Vertex Point"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">add_circle</span>
                </button>
                <button
                  onClick={() => setAutoSnapped(!autoSnapped)}
                  className={`p-2.5 rounded-lg transition-colors cursor-pointer ${
                    autoSnapped ? 'bg-emerald-600 text-white' : 'hover:bg-white/10 text-white'
                  }`}
                  title="Snap to Edge"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">qr_code_2</span>
                </button>
                <button
                  className="p-2.5 rounded-lg hover:bg-white/10 text-white transition-colors cursor-pointer"
                  title="Angle Snap 90°"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">square_foot</span>
                </button>
                <button
                  className="p-2.5 rounded-lg hover:bg-white/10 text-white transition-colors cursor-pointer"
                  title="Undo Spatial Point"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">undo</span>
                </button>
                <div className="h-[1px] w-full bg-white/20 my-1"></div>
                <button
                  className="p-2.5 rounded-lg hover:bg-red-900/40 text-red-400 transition-colors cursor-pointer"
                  title="Clear Polygon"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">delete_sweep</span>
                </button>
              </div>

              {/* AI Cadastral Assistant Recommendation Floating Pill */}
              <div className="absolute top-24 right-5 max-w-sm p-4 rounded-2xl bg-slate-900/95 backdrop-blur-md border border-[#97f5cc]/40 shadow-2xl text-white flex flex-col gap-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="material-symbols-outlined text-[#97f5cc] text-[20px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      auto_fix_high
                    </span>
                    <span className="text-xs font-bold text-white">AI Cadastral Match</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 font-mono text-[11px] font-bold">
                    98.4% CONFIDENCE
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Unassigned plot matches{' '}
                  <span className="font-bold text-white font-mono">Survey 182//4/1</span> against
                  recorded revenue bandobast sheet.
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={() => setAutoSnapped(!autoSnapped)}
                    className="flex-1 px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-all flex items-center justify-center gap-1 shadow-xs cursor-pointer"
                    id="snapBtn"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[15px]">magic_button</span>
                    <span>{autoSnapped ? 'Geometry Aligned (100%)' : 'Auto-Snap Geometry'}</span>
                  </button>
                  <button
                    className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs transition-colors cursor-pointer"
                    type="button"
                  >
                    Inspect
                  </button>
                </div>
              </div>

              {/* Bottom Live Computed Area HUD */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-slate-900/95 backdrop-blur-md shadow-2xl text-white flex flex-col md:flex-row items-center justify-between gap-4 border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white/10 text-[#97f5cc] shrink-0">
                    <span className="material-symbols-outlined text-[26px]">straighten</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-xs text-[#97f5cc] uppercase tracking-wider font-semibold">
                      Live Computed Boundary Area
                    </span>
                    <div className="flex flex-wrap items-baseline gap-2.5 mt-0.5">
                      <span className="text-2xl text-white font-extrabold">
                        {autoSnapped ? '1.250 Acres' : '1.252 Acres'}
                      </span>
                      <span className="font-mono text-xs text-slate-300 font-medium">
                        {autoSnapped ? '(5,058.5 m²)' : '(5,066.0 m²)'}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-950 text-emerald-300 font-mono text-xs font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">
                          {autoSnapped ? 'verified' : 'trending_up'}
                        </span>
                        {autoSnapped
                          ? '0.00% Exact Match (Deed Aligned)'
                          : '+0.16% Deed Variance (Tolerable < 0.5%)'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto border-t md:border-t-0 md:border-l border-white/15 pt-3 md:pt-0 md:pl-5">
                  <div className="flex flex-col min-w-0">
                    <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider">
                      ADJACENT REGISTERED BOUNDARY
                    </span>
                    <span className="font-mono text-xs text-white truncate font-bold">
                      ULPIN 58J9-2A41-8902-14
                    </span>
                    <span className="text-xs text-slate-300 truncate">
                      Owner: Rameshwar Sharma (Verified Title)
                    </span>
                  </div>
                  <button
                    className="ml-auto px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs shrink-0 transition-colors border border-white/10 cursor-pointer"
                    type="button"
                  >
                    View Mesh
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Dynamic Wizard Step Content Area */}
          <div className="flex flex-col gap-6 transition-all duration-300">
            {/* STEP 1: Citizen Submission */}
            {currentStep === 1 && (
              <section className="p-8 rounded-2xl bg-white border border-border-subtle shadow-xs flex flex-col gap-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-border-subtle">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#1E3A8A] text-white flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[22px]">badge</span>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-xl text-on-surface font-extrabold">
                        Initial Property &amp; Identity Registration
                      </h3>
                      <span className="text-xs text-on-surface-variant">
                        Verify ownership identities and link Aadhaar DPI credentials for sovereign deed
                        matching.
                      </span>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-mono text-xs font-bold flex items-center gap-1 self-start md:self-auto">
                    <span className="material-symbols-outlined text-[14px]">verified</span> UIDAI e-KYC
                    Ready
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-wider text-on-surface-variant font-bold">
                      Full Name (as per ID)
                    </label>
                    <div className="relative flex items-center">
                      <span className="material-symbols-outlined absolute left-3.5 text-on-surface-variant text-[18px]">
                        person
                      </span>
                      <input
                        type="text"
                        defaultValue="Rameshwar Dayal Sharma"
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 rounded-xl text-on-surface text-sm font-semibold border border-border-subtle focus:bg-white focus:ring-2 focus:ring-[#1E3A8A] focus:outline-none transition-all"
                      />
                    </div>
                    <span className="text-xs text-emerald-700 font-medium flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">check_circle</span> Name
                      verified with Aadhaar Demographics
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-wider text-on-surface-variant font-bold">
                      12-digit Aadhaar Number
                    </label>
                    <div className="relative flex items-center">
                      <span className="material-symbols-outlined absolute left-3.5 text-on-surface-variant text-[18px]">
                        fingerprint
                      </span>
                      <input
                        type="text"
                        defaultValue="XXXX-XXXX-7841 (e-KYC Synced)"
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 rounded-xl text-on-surface font-mono text-sm font-bold border border-border-subtle focus:bg-white focus:ring-2 focus:ring-[#1E3A8A] focus:outline-none transition-all"
                      />
                      <span className="absolute right-3 px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-mono text-[11px] font-bold">
                        VERIFIED
                      </span>
                    </div>
                    <span className="text-xs text-on-surface-variant">
                      Linked to Digilocker Sovereign Certificate Archive.
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-wider text-on-surface-variant font-bold">
                      State / District Jurisdiction
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <select
                        defaultValue="Haryana"
                        className="px-3 py-2.5 bg-slate-50 rounded-xl text-on-surface text-sm font-semibold border border-border-subtle focus:bg-white focus:ring-2 focus:ring-[#1E3A8A] focus:outline-none transition-all"
                      >
                        <option>Haryana</option>
                        <option>Punjab</option>
                        <option>Rajasthan</option>
                        <option>Uttar Pradesh</option>
                      </select>
                      <select
                        defaultValue="Gurugram"
                        className="px-3 py-2.5 bg-slate-50 rounded-xl text-on-surface text-sm font-semibold border border-border-subtle focus:bg-white focus:ring-2 focus:ring-[#1E3A8A] focus:outline-none transition-all"
                      >
                        <option>Gurugram</option>
                        <option>Faridabad</option>
                        <option>Rewari</option>
                        <option>Jhajjar</option>
                      </select>
                    </div>
                    <span className="text-xs text-on-surface-variant">
                      Farrukhnagar Tehsil / Sultanpur (083) Revenue Circle.
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-wider text-on-surface-variant font-bold">
                      Survey / Khasra Number
                    </label>
                    <div className="relative flex items-center">
                      <span className="material-symbols-outlined absolute left-3.5 text-on-surface-variant text-[18px]">
                        pin_drop
                      </span>
                      <input
                        type="text"
                        value={khasraValue}
                        onChange={(e) => setKhasraValue(e.target.value)}
                        className="w-full pl-10 pr-24 py-2.5 bg-slate-50 rounded-xl text-on-surface font-mono text-sm font-bold border border-border-subtle focus:bg-white focus:ring-2 focus:ring-[#1E3A8A] focus:outline-none transition-all"
                      />
                      <span className="absolute right-2.5 px-2 py-0.5 rounded bg-blue-100 text-[#1E3A8A] font-mono text-xs font-bold">
                        VALIDATED
                      </span>
                    </div>
                    <span className="text-xs text-on-surface-variant">
                      Referenced in Jamabandi register 2021-2022 page 142.
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-end pt-4 border-t border-border-subtle">
                  <button
                    onClick={() => setCurrentStep(2)}
                    type="button"
                    className="w-full sm:w-auto px-7 py-3 rounded-xl bg-[#1E3A8A] text-white text-sm font-bold hover:bg-blue-900 transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                  >
                    <span>Verify Identity via e-KYC &amp; Proceed</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              </section>
            )}

            {/* STEP 2: AI OCR & Boundary Fit (Matching Screenshot from User) */}
            {currentStep === 2 && (
              <>
                {/* 3 Ground Truth Veracity Cards */}
                <section className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-6 bg-emerald-600 rounded-full inline-block"></span>
                    <h2 className="text-xl md:text-2xl text-on-surface font-bold tracking-tight">
                      Ground-Truth &amp; Veracity Checks
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Veracity Card 1 */}
                    <div className="p-6 rounded-2xl bg-white border border-border-subtle shadow-xs flex items-start gap-4 hover:shadow-sm transition-shadow">
                      <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                        <span
                          className="material-symbols-outlined text-[24px]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          verified
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-on-surface">
                            Zero Overlap Detected
                          </span>
                          <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                        </div>
                        <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                          0 encroachments detected with sovereign government reserves, forest land, or
                          public water corridors.
                        </p>
                      </div>
                    </div>

                    {/* Veracity Card 2 */}
                    <div className="p-6 rounded-2xl bg-white border border-border-subtle shadow-xs flex items-start gap-4 hover:shadow-sm transition-shadow">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#1E3A8A] flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[24px]">satellite</span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-on-surface">Survey OFI: Q2 2024</span>
                          <span className="px-2 py-0.5 rounded bg-blue-50 font-mono text-xs text-[#1E3A8A] font-bold">
                            10cm Drone Mesh
                          </span>
                        </div>
                        <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                          High-resolution drone orthophoto synchronized with the National Spatial Data
                          Infrastructure grid.
                        </p>
                      </div>
                    </div>

                    {/* Veracity Card 3 */}
                    <div className="p-6 rounded-2xl bg-white border border-border-subtle shadow-xs flex items-start gap-4 hover:shadow-sm transition-shadow">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#1E3A8A] flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[24px]">share_location</span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-on-surface">
                            DGPS Triangulation Node
                          </span>
                          <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-mono text-xs font-bold">
                            ±2cm RTK
                          </span>
                        </div>
                        <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                          Continuous CORS benchmark station Sultanpur 04 validated carrier phase
                          positioning lock.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Dashed Deed OCR Upload Zone & Statutory Affirmation */}
                <section className="p-8 rounded-2xl bg-white border border-border-subtle shadow-xs flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg text-on-surface font-extrabold">
                      Upload Scanned Property Deed for AI OCR (PDF/JPG)
                    </h3>
                    <p className="text-xs text-on-surface-variant">
                      Autonomous neural OCR extracts boundaries, seller-buyer identities, and schedule
                      dimensions directly into the cadastral mesh.
                    </p>
                  </div>

                  {/* Drag and drop zone */}
                  <div className="p-8 rounded-2xl border-2 border-dashed border-[#1E3A8A]/35 bg-blue-50/40 hover:bg-blue-50/70 transition-all flex flex-col items-center justify-center text-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-blue-100 text-[#1E3A8A] flex items-center justify-center shadow-xs">
                      <span className="material-symbols-outlined text-[30px]">cloud_upload</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-on-surface">
                        Drag &amp; drop deed files, or{' '}
                        <label className="text-[#1E3A8A] hover:underline font-extrabold cursor-pointer">
                          browse from computer
                          <input
                            type="file"
                            className="hidden"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={(e) => {
                              if (e.target.files && e.target.files[0]) {
                                setUploadedFile({
                                  name: e.target.files[0].name,
                                  confidence: '99.1%',
                                  size: `${(e.target.files[0].size / 1024 / 1024).toFixed(1)} MB`,
                                });
                              }
                            }}
                          />
                        </label>
                      </span>
                      <span className="text-xs text-on-surface-variant mt-1">
                        Supports scanned sale deeds, Registry Sanad, Fard, or Jamabandi copies (up to
                        25MB)
                      </span>
                    </div>

                    {/* Uploaded file preview badge */}
                    {uploadedFile && (
                      <div className="mt-2 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-border-subtle shadow-xs">
                        <span className="material-symbols-outlined text-emerald-600 text-[18px]">
                          description
                        </span>
                        <span className="font-mono text-xs font-bold text-on-surface">
                          {uploadedFile.name}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono text-[11px] font-bold">
                          {uploadedFile.confidence} Confidence
                        </span>
                        <button
                          type="button"
                          onClick={() => setUploadedFile(null)}
                          className="text-slate-400 hover:text-red-600 ml-1 cursor-pointer transition-colors"
                          title="Remove file"
                        >
                          <span className="material-symbols-outlined text-[16px]">close</span>
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Statutory Certification Checkbox */}
                  <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-border-subtle">
                    <input
                      checked={auditConsent}
                      onChange={(e) => setAuditConsent(e.target.checked)}
                      className="mt-1 w-5 h-5 rounded text-[#1E3A8A] focus:ring-[#1E3A8A] cursor-pointer shrink-0"
                      id="auditConsent"
                      type="checkbox"
                    />
                    <label
                      className="text-xs text-on-surface-variant leading-relaxed cursor-pointer select-none"
                      htmlFor="auditConsent"
                    >
                      <span className="font-bold text-on-surface">
                        Statutory Certification under Section 43 of Digital Public Infrastructure Act:
                      </span>{' '}
                      I certify that this coordinate delineation represents the exact factual boundaries
                      of the registered title deed and submit this spatial package to sovereign GIS
                      audit and revenue inspection.
                    </label>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-border-subtle">
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <button
                        onClick={handleSaveDraft}
                        className="w-1/2 sm:w-auto px-5 py-3 rounded-xl bg-slate-50 border border-border-subtle text-slate-700 text-xs font-bold hover:bg-slate-100 transition-all flex items-center justify-center gap-2 cursor-pointer"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[18px]">save</span>
                        Save Draft
                      </button>
                      <button
                        onClick={() => setCurrentStep(1)}
                        className="w-1/2 sm:w-auto px-5 py-3 rounded-xl bg-slate-50 border border-border-subtle text-[#1E3A8A] text-xs font-bold hover:bg-slate-100 transition-all flex items-center justify-center gap-2 cursor-pointer"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                        Back to Step 1
                      </button>
                    </div>
                    <button
                      onClick={() => setCurrentStep(3)}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#1E3A8A] text-white text-sm font-bold hover:bg-blue-900 transition-all flex items-center justify-center gap-3 shadow-md hover:shadow-lg cursor-pointer"
                      type="button"
                    >
                      <span>Proceed to Surveyor Audit</span>
                      <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                    </button>
                  </div>
                </section>
              </>
            )}

            {/* STEP 3: Revenue Surveyor Audit */}
            {currentStep === 3 && (
              <section className="p-8 rounded-2xl bg-white border border-border-subtle shadow-xs flex flex-col gap-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-border-subtle">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#1E3A8A] text-white flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[22px]">engineering</span>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl text-on-surface font-extrabold">
                          Field Inspection &amp; Ground-Truthing
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono text-xs font-bold">
                          In-Person Audit
                        </span>
                      </div>
                      <span className="text-xs text-on-surface-variant">
                        On-ground beacon demarcation and adjoining boundary no-objection verification.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 border border-border-subtle self-start md:self-auto">
                    <span className="material-symbols-outlined text-emerald-600 text-[18px]">
                      verified_user
                    </span>
                    <span className="text-xs text-on-surface font-semibold">Assigned Surveyor:</span>
                    <span className="font-mono text-xs font-bold text-[#1E3A8A]">
                      Kanungo Sunil Varma (ID: #KNG-8831)
                    </span>
                  </div>
                </div>

                {/* Read-only Checklist Style UI */}
                <div className="flex flex-col gap-3">
                  <span className="font-mono text-xs text-on-surface-variant font-bold uppercase tracking-wider">
                    Field Audit Checklist (Pre-Signed)
                  </span>
                  <div className="grid grid-cols-1 gap-3">
                    <div
                      onClick={() => setChecklist({ ...checklist, walk: !checklist.walk })}
                      className="cursor-pointer flex items-center gap-3 p-4 rounded-xl bg-emerald-50/50 border border-emerald-200"
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                          checklist.walk ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-500'
                        }`}
                      >
                        <span className="material-symbols-outlined text-[16px]">check</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-on-surface">
                          Physical DGPS boundary walk completed (RTK ±1.2cm).
                        </span>
                        <span className="text-[11px] text-on-surface-variant">
                          Benchmarked against Triangulation Pillar #4; 4 permanent geo-coordinates
                          locked.
                        </span>
                      </div>
                    </div>

                    <div
                      onClick={() => setChecklist({ ...checklist, noc: !checklist.noc })}
                      className="cursor-pointer flex items-center gap-3 p-4 rounded-xl bg-emerald-50/50 border border-emerald-200"
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                          checklist.noc ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-500'
                        }`}
                      >
                        <span className="material-symbols-outlined text-[16px]">check</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-on-surface">
                          Neighboring plot NOCs verified (North: #182/3, South: #182/5).
                        </span>
                        <span className="text-[11px] text-on-surface-variant">
                          Adjoining co-owners counter-signed physical Nishan-Dehi panchnama on site.
                        </span>
                      </div>
                    </div>

                    <div
                      onClick={() =>
                        setChecklist({ ...checklist, encroachment: !checklist.encroachment })
                      }
                      className="cursor-pointer flex items-center gap-3 p-4 rounded-xl bg-emerald-50/50 border border-emerald-200"
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                          checklist.encroachment
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-200 text-slate-500'
                        }`}
                      >
                        <span className="material-symbols-outlined text-[16px]">check</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-on-surface">
                          Encroachment check cleared (Zero public land overlap).
                        </span>
                        <span className="text-[11px] text-on-surface-variant">
                          Validated against Gram Panchayat water bodies, public pathways, and sovereign
                          grazing reserve buffers.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Input/Upload Field for FMB */}
                <div className="p-5 rounded-xl bg-slate-50 border border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-border-subtle flex items-center justify-center text-[#1E3A8A] shrink-0">
                      <span className="material-symbols-outlined text-[22px]">draw</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-on-surface">
                        Signed Field Measurement Book (FMB)
                      </span>
                      <span className="text-[11px] text-on-surface-variant">
                        Surveyor geo-signed field drawing with chainage dimensions.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 w-full md:w-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-border-subtle">
                      <span className="material-symbols-outlined text-emerald-600 text-[16px]">
                        picture_as_pdf
                      </span>
                      <span className="font-mono text-xs font-bold text-on-surface">
                        FMB_NishanDehi_SurveyorSigned.pdf
                      </span>
                      <span className="material-symbols-outlined text-emerald-600 text-[15px]">
                        check_circle
                      </span>
                    </div>
                    <button
                      type="button"
                      className="px-3 py-1.5 rounded-lg bg-[#1E3A8A] text-white text-xs font-bold hover:bg-blue-900 transition-all flex items-center gap-1 shrink-0 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[16px]">file_upload</span>
                      <span>Upload Signed FMB</span>
                    </button>
                  </div>
                </div>

                {/* Action Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-border-subtle">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-50 border border-border-subtle text-[#1E3A8A] text-xs font-bold hover:bg-slate-100 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                    Back to Step 2
                  </button>
                  <button
                    onClick={() => setCurrentStep(4)}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#1E3A8A] text-white text-sm font-bold hover:bg-blue-900 transition-all flex items-center justify-center gap-3 shadow-md hover:shadow-lg cursor-pointer"
                    type="button"
                  >
                    <span>Submit for Final Tehsildar Approval</span>
                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                  </button>
                </div>
              </section>
            )}

            {/* STEP 4: Tehsildar eSign & ULPIN */}
            {currentStep === 4 && (
              <section className="p-8 rounded-2xl bg-white border border-border-subtle shadow-xs flex flex-col gap-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-border-subtle">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[22px]">verified</span>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-xl text-on-surface font-extrabold">
                        Sovereign Title Minting &amp; Cryptographic e-Sign
                      </h3>
                      <span className="text-xs text-on-surface-variant">
                        Executive clearance stage under the jurisdiction of Tehsildar, Farrukhnagar
                        Revenue Court.
                      </span>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-mono text-xs font-bold flex items-center gap-1.5 self-start md:self-auto">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                    Authorized Officer Session Active
                  </span>
                </div>

                {/* Summary Box */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-2xl bg-slate-50 border border-border-subtle">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-white border border-border-subtle flex items-center justify-center text-[#1E3A8A] shrink-0">
                      <span className="material-symbols-outlined text-[22px]">person</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-mono text-xs text-on-surface-variant uppercase tracking-wider font-semibold">
                        Registered Title Owner
                      </span>
                      <span className="text-base text-on-surface font-bold">
                        Rameshwar Dayal Sharma
                      </span>
                      <span className="text-xs text-on-surface-variant">
                        Aadhaar Linked: •••• 8912 | Share: 100% Sole Freehold
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-white border border-border-subtle flex items-center justify-center text-[#1E3A8A] shrink-0">
                      <span className="material-symbols-outlined text-[22px]">square_foot</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-mono text-xs text-on-surface-variant uppercase tracking-wider font-semibold">
                        Verified Title Extent
                      </span>
                      <span className="text-base text-on-surface font-bold">
                        1.252 Acres / 5,058.5 m²
                      </span>
                      <span className="text-xs text-on-surface-variant">
                        Survey Unit: 182//4/1 | Mauza Sultanpur (HR-06)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Prominent Minting Status Card */}
                <div className="p-6 rounded-2xl bg-slate-900 text-white flex flex-col items-center justify-center text-center gap-4 relative overflow-hidden border border-slate-700 shadow-inner">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-[#1E3A8A]/20 to-emerald-900/20 pointer-events-none"></div>

                  {isTitleMinted ? (
                    <div className="flex flex-col items-center gap-3 relative z-10">
                      <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg animate-bounce">
                        <span className="material-symbols-outlined text-[32px]">check</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-emerald-400 font-mono text-xs font-bold tracking-widest uppercase">
                          SOVEREIGN TITLE MINTED SUCCESSFULLY
                        </span>
                        <h4 className="text-2xl font-mono font-bold tracking-wider mt-1 text-white">
                          ULPIN: 06-HR-2024-58J9-2A41-8902
                        </h4>
                        <span className="text-xs text-slate-300 mt-1">
                          Anchored on Hyperledger Sovereign Cadastral Mesh (Block #849,201)
                        </span>
                      </div>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => navigate('/bhu-locker')}
                          className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md"
                        >
                          <span className="material-symbols-outlined text-[18px]">lock</span>
                          View in Bhu-Locker Vault
                        </button>
                        <button
                          onClick={() => window.print()}
                          className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center gap-2 transition-all cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-[18px]">download</span>
                          Download Sovereign Sanad PDF
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-3 relative z-10">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center border border-blue-400/40">
                        <span className="material-symbols-outlined text-[28px]">token</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-blue-300 font-mono text-xs font-bold uppercase tracking-wider">
                          Ready for Sovereign Cryptographic Minting
                        </span>
                        <p className="text-xs text-slate-300 max-w-md mt-1">
                          Both e-KYC demographics and Surveyor DGPS coordinates match 100%. Click below to
                          mint the unique 14-digit Bhu-Aadhaar token.
                        </p>
                      </div>
                      <button
                        onClick={handleMintToken}
                        disabled={isMinting}
                        className="mt-2 px-8 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold flex items-center gap-2 transition-all shadow-md cursor-pointer disabled:opacity-60"
                      >
                        {isMinting ? (
                          <>
                            <span className="material-symbols-outlined text-[20px] animate-spin">
                              sync
                            </span>
                            <span>Minting 14-Digit ULPIN on State Ledger…</span>
                          </>
                        ) : (
                          <>
                            <span className="material-symbols-outlined text-[20px]">vpn_key</span>
                            <span>Mint Sovereign Bhu-Aadhaar ULPIN</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>

                {/* Action Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-border-subtle">
                  <button
                    onClick={() => setCurrentStep(3)}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-50 border border-border-subtle text-[#1E3A8A] text-xs font-bold hover:bg-slate-100 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                    Back to Step 3
                  </button>
                  <button
                    onClick={() => navigate('/bhu-locker')}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#1E3A8A] text-white text-sm font-bold hover:bg-blue-900 transition-all flex items-center justify-center gap-3 shadow-md hover:shadow-lg cursor-pointer"
                    type="button"
                  >
                    <span>View All Ingested Properties in Bhu-Locker</span>
                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                  </button>
                </div>
              </section>
            )}
          </div>

          {/* End-to-End Sovereign Ingestion Pipeline Section */}
          <section className="p-8 rounded-2xl bg-white border border-border-subtle shadow-xs flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-border-subtle">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1E3A8A] text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px]">account_tree</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-base text-on-surface font-bold">
                      End-to-End Sovereign Ingestion Pipeline
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-[#1E3A8A] font-mono text-xs font-bold">
                      Stage {currentStep} of 4 Active
                    </span>
                  </div>
                  <span className="text-xs text-on-surface-variant">
                    Tamper-evident audit trail backed by sovereign state registry node
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 border border-border-subtle self-start md:self-auto">
                <span className="material-symbols-outlined text-[#1E3A8A] text-[18px]">
                  hourglass_top
                </span>
                <span className="text-xs text-on-surface-variant">Estimated Pipeline Clearance:</span>
                <span className="font-mono text-xs font-bold text-[#1E3A8A]">
                  {getEstimatedDuration()}
                </span>
              </div>
            </div>

            {/* 4 Pipeline Step Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stepsMeta.map((s) => {
                const isCompleted = s.num < currentStep;
                const isActive = s.num === currentStep;

                if (isCompleted) {
                  return (
                    <div
                      key={s.num}
                      onClick={() => setCurrentStep(s.num)}
                      className="cursor-pointer flex flex-col gap-2 p-5 rounded-xl bg-emerald-50/70 border border-emerald-300 hover:border-emerald-500 transition-all shadow-xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs text-emerald-800 font-bold uppercase tracking-wider">
                          {s.id} • COMPLETE
                        </span>
                        <span
                          className="material-symbols-outlined text-emerald-700 text-[20px]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          check_circle
                        </span>
                      </div>
                      <span className="text-sm text-on-surface font-bold">{s.pipelineTitle}</span>
                      <span className="text-xs text-emerald-900/80 leading-relaxed">
                        {s.pipelineDesc}
                      </span>
                    </div>
                  );
                }

                if (isActive) {
                  return (
                    <div
                      key={s.num}
                      onClick={() => setCurrentStep(s.num)}
                      className="cursor-pointer flex flex-col gap-2 p-5 rounded-xl bg-blue-50/80 border-2 border-blue-600 ring-2 ring-blue-500/20 shadow-xs transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs text-blue-800 font-bold uppercase tracking-wider">
                          {s.id} • CURRENT STEP
                        </span>
                        <span className="material-symbols-outlined text-blue-700 text-[20px] animate-spin">
                          sync
                        </span>
                      </div>
                      <span className="text-sm text-blue-900 font-extrabold">{s.pipelineTitle}</span>
                      <span className="text-xs text-blue-950/80 leading-relaxed">
                        {s.pipelineDesc}
                      </span>
                    </div>
                  );
                }

                return (
                  <div
                    key={s.num}
                    onClick={() => setCurrentStep(s.num)}
                    className="cursor-pointer flex flex-col gap-2 p-5 rounded-xl bg-slate-50 border border-slate-200 text-slate-400 hover:bg-slate-100/70 hover:border-slate-300 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-slate-500 font-bold uppercase tracking-wider">
                        {s.id} • QUEUED
                      </span>
                      <span className="material-symbols-outlined text-slate-400 text-[20px]">
                        schedule
                      </span>
                    </div>
                    <span className="text-sm text-slate-700 font-semibold">{s.pipelineTitle}</span>
                    <span className="text-xs text-slate-500 leading-relaxed">{s.pipelineDesc}</span>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </main>

      {/* Official Footer */}
      <footer className="w-full bg-white text-on-surface-variant shadow-[0_1px_8px_rgba(0,0,0,0.04)] mt-auto border-t border-border-subtle">
        <div className="w-full px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#1E3A8A]">BHU-AADHAAR DPI PLATFORM</span>
              <span className="text-[11px] text-on-surface-variant">
                Designed and architected under SIH26014 for Digital Public Land Governance
              </span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs text-on-surface-variant">
            <a className="hover:text-[#1E3A8A] transition-colors" href="#">
              National Informatics Centre (NIC) Standards
            </a>
            <a className="hover:text-[#1E3A8A] transition-colors" href="#">
              Digital India Land Records Modernization Programme (DILRMP)
            </a>
            <a className="hover:text-[#1E3A8A] transition-colors" href="#">
              ULPIN Verification API
            </a>
            <a className="hover:text-[#1E3A8A] transition-colors" href="#">
              Data Security &amp; Provenance
            </a>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-on-surface-variant">
            <span className="material-symbols-outlined text-[18px] text-emerald-600">
              verified_user
            </span>
            <span>ISO 27001 Certified DPI Node</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

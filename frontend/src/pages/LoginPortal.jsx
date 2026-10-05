import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function LoginPortal() {
  const navigate = useNavigate();
  const { loginCitizen, loginOfficial } = useAuth();

  // Active persona: 'citizen' | 'official'
  const [persona, setPersona] = useState('citizen');
  // Citizen subtab: 'login' | 'register'
  const [citizenSubtab, setCitizenSubtab] = useState('login');

  // Citizen login state
  const [usernameAadhaar, setUsernameAadhaar] = useState('5482-9901-4412');
  const [citizenPassword, setCitizenPassword] = useState('••••••••••••');
  const [showCitizenPassword, setShowCitizenPassword] = useState(false);
  const [rememberSession, setRememberSession] = useState(true);

  // Official login state
  const [serviceId, setServiceId] = useState('HR-GUR-REV-2024-098');
  const [cadre, setCadre] = useState('revenue');
  const [officialPassword, setOfficialPassword] = useState('••••••••••••');
  const [showOfficialPassword, setShowOfficialPassword] = useState(false);
  const [totp, setTotp] = useState(['5', '9', '1', '4', '8', '2']);

  // Registration state
  const [regFullName, setRegFullName] = useState('');
  const [regAge, setRegAge] = useState('');
  const [regGender, setRegGender] = useState('');
  const [regUsername, setRegUsername] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirmPassword, setRegConfirmPassword] = useState('');
  const [regAadhaar, setRegAadhaar] = useState('');
  const [regAffirm, setRegAffirm] = useState(false);

  // Status & modal states
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [authStatusMessage, setAuthStatusMessage] = useState('');
  const [activeModal, setActiveModal] = useState(null); // 'digilocker' | 'aadhaar_otp' | null
  const [otpInput, setOtpInput] = useState(['8', '4', '1', '9', '2', '0']);

  // Handle Aadhaar formatting
  const handleAadhaarChange = (val, setter) => {
    const raw = val.replace(/\D/g, '').substring(0, 12);
    const parts = [];
    for (let i = 0; i < raw.length; i += 4) {
      parts.push(raw.substring(i, i + 4));
    }
    setter(parts.join(' - '));
  };

  // Perform Citizen Login
  const handleCitizenLogin = (e) => {
    if (e) e.preventDefault();
    setIsAuthenticating(true);
    setAuthStatusMessage('Authenticating with Sovereign UIDAI & State NIC Node…');

    setTimeout(() => {
      loginCitizen({
        name: 'Rameshwar Sharma',
        fullAadhaar: usernameAadhaar || '5482-9901-4412',
      });
      setIsAuthenticating(false);
      navigate('/bhu-locker');
    }, 850);
  };

  // Perform Official Login
  const handleOfficialLogin = (e) => {
    if (e) e.preventDefault();
    setIsAuthenticating(true);
    setAuthStatusMessage('Verifying Hardware Terminal Hash & FIPS 140-3 Token…');

    setTimeout(() => {
      loginOfficial({
        serviceId: serviceId || 'HR-GUR-REV-2024-098',
        department: cadre === 'revenue' 
          ? 'Department of Revenue & Land Records'
          : cadre === 'survey'
          ? 'National Cadastral Survey & Geo-Mapping Wing'
          : cadre === 'registrar'
          ? 'Office of Sub-Registrar'
          : 'Tehsildar / Executive Magistrate Court',
      });
      setIsAuthenticating(false);
      navigate('/bhu-locker');
    }, 850);
  };

  // Handle Registration Submit
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setIsAuthenticating(true);
    setAuthStatusMessage('Minting Sovereign Citizen Identity Keypair & Archiving with UIDAI…');

    setTimeout(() => {
      loginCitizen({
        name: regFullName || 'Citizen Applicant',
        fullAadhaar: regAadhaar || '9921-4412-8831',
        title: 'Registered Citizen • UIDAI Verified',
      });
      setIsAuthenticating(false);
      navigate('/bhu-locker');
    }, 1100);
  };

  // Simulate DigiLocker
  const handleDigiLockerSuccess = () => {
    setActiveModal(null);
    setIsAuthenticating(true);
    setAuthStatusMessage('DigiLocker Token Validated. Loading Land Assets Vault…');
    setTimeout(() => {
      loginCitizen({ name: 'Rameshwar Sharma', title: 'Citizen • DigiLocker Verified' });
      setIsAuthenticating(false);
      navigate('/bhu-locker');
    }, 750);
  };

  // Simulate Aadhaar OTP
  const handleAadhaarOtpSuccess = () => {
    setActiveModal(null);
    setIsAuthenticating(true);
    setAuthStatusMessage('Aadhaar OTP e-KYC Approved by UIDAI Gateway…');
    setTimeout(() => {
      loginCitizen({ name: 'Rameshwar Sharma', title: 'Citizen • Aadhaar e-KYC Verified' });
      setIsAuthenticating(false);
      navigate('/bhu-locker');
    }, 750);
  };

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen flex flex-col justify-between selection:bg-primary-container selection:text-on-primary-container relative">
      
      {/* Top Banner on Mobile */}
      <div className="lg:hidden bg-primary px-4 py-3 flex items-center justify-between text-white border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary-fixed text-lg">shield</span>
          <span className="font-bold text-sm tracking-tight uppercase">BHU-AADHAAR DPI</span>
        </div>
        <span className="text-[11px] bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded font-semibold">
          SIH26014
        </span>
      </div>

      <main className="w-full flex-1 flex flex-col items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8">
        <div className="flex flex-col w-full max-w-7xl">
          <div className="w-full min-h-[88vh] flex flex-col lg:flex-row bg-surface-pearl rounded-2xl shadow-2xl overflow-hidden border border-border-subtle">
            
            {/* ================= LEFT PANE: Sovereign Trust & Cadastral GIS Brand Canvas ================= */}
            <div className="lg:w-1/2 w-full bg-primary relative p-8 lg:p-14 flex flex-col justify-between overflow-hidden shadow-xl text-white">
              
              {/* Subtle Geodetic Contour & Cadastral Grid Vector Layer */}
              <div className="absolute inset-0 pointer-events-none opacity-15">
                <svg className="w-full h-full object-cover" fill="none" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern height="60" id="cadastral-mesh" patternUnits="userSpaceOnUse" width="60">
                      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#FFFFFF" strokeDasharray="2,3" strokeWidth="0.8" />
                      <circle cx="0" cy="0" fill="#FFFFFF" r="1.5" />
                    </pattern>
                  </defs>
                  <rect fill="url(#cadastral-mesh)" height="100%" width="100%" />
                  <path d="M-100 250 C 150 180, 280 340, 520 220 C 690 140, 750 310, 950 260" stroke="#FFFFFF" strokeLinecap="round" strokeWidth="1.2" />
                  <path d="M-80 420 C 120 340, 310 510, 580 390 C 720 330, 810 490, 980 430" stroke="#FFFFFF" strokeWidth="1" />
                  <path d="M-50 600 C 180 520, 360 670, 620 560 C 780 490, 850 630, 1020 580" stroke="#FFFFFF" strokeDasharray="4,4" strokeWidth="0.75" />
                  <polygon fill="#006c4e" fillOpacity="0.15" points="120,180 260,140 310,240 180,280" stroke="#97f5cc" strokeWidth="1.2" />
                  <polygon fill="#6c2e00" fillOpacity="0.12" points="410,320 580,270 630,410 470,440" stroke="#ffb68e" strokeWidth="1.2" />
                  <circle cx="260" cy="140" fill="#97f5cc" r="4" />
                  <circle cx="410" cy="320" fill="#ffb68e" r="4" />
                </svg>
              </div>

              {/* Ambient Glow Accents */}
              <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary-container rounded-full blur-3xl opacity-40 pointer-events-none" />
              <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-secondary rounded-full blur-3xl opacity-20 pointer-events-none" />

              {/* Top Header & National Emblem Identity */}
              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center p-2 border border-white/20 shadow-md">
                    {/* Hexagonal Cadastral Emblem */}
                    <svg className="w-full h-full" fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <polygon fill="#00236f" points="50,4 92,27 92,73 50,96 8,73 8,27" stroke="#FF9933" strokeWidth="7" />
                      <path d="M50 22 L76 46 L64 46 L64 74 L36 74 L36 46 L24 46 Z" fill="#047857" />
                      <circle cx="50" cy="52" fill="#ffffff" r="10" />
                      <path d="M22 52 L50 70 L78 52" stroke="#90a8ff" strokeLinecap="round" strokeWidth="5" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-secondary-fixed animate-ping" />
                      <p className="font-label-code text-[11px] tracking-widest uppercase text-primary-fixed">
                        GOVERNMENT OF INDIA • DEPT OF LAND RESOURCES
                      </p>
                    </div>
                    <h2 className="font-title-md text-[17px] text-white font-semibold">
                      National Land Informatics Center
                    </h2>
                  </div>
                </div>

                {/* Main Portal Title */}
                <div className="mt-10 lg:mt-14">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-secondary-fixed font-label-md text-xs mb-4 border border-white/10">
                    <span className="material-symbols-outlined text-sm">verified_user</span>
                    <span>SIH26014 Sovereign Cadastral Protocol</span>
                  </div>
                  <h1 className="font-display-lg text-3xl lg:text-4xl text-white font-bold leading-tight tracking-tight">
                    Bhu-Aadhaar <br />
                    <span className="text-primary-fixed font-extrabold">DPI Portal</span>
                  </h1>
                  <p className="font-body-lg text-sm lg:text-base text-primary-fixed mt-3 max-w-lg leading-relaxed opacity-90">
                    National Digital Public Infrastructure orchestrating geodetic land intelligence, immutable parcel identities (ULPIN), and citizen title custody.
                  </p>
                </div>

                {/* Live DPI Stats Grid */}
                <div className="grid grid-cols-3 gap-3 mt-8 max-w-lg">
                  <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10 flex flex-col">
                    <span className="font-label-code text-[10px] text-primary-fixed uppercase tracking-wider">Demarcated Titles</span>
                    <span className="font-headline-md text-xl font-bold text-white mt-1">89.4%</span>
                    <span className="font-body-sm text-[11px] text-secondary-fixed flex items-center gap-1 mt-0.5">
                      <span className="material-symbols-outlined text-xs">arrow_upward</span> +2.1% Q3
                    </span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10 flex flex-col">
                    <span className="font-label-code text-[10px] text-primary-fixed uppercase tracking-wider">Mutations Live</span>
                    <span className="font-headline-md text-xl font-bold text-white mt-1">12,408</span>
                    <span className="font-body-sm text-[11px] text-primary-fixed mt-0.5">Zero Backlog</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10 flex flex-col">
                    <span className="font-label-code text-[10px] text-primary-fixed uppercase tracking-wider">Spatial EPSG</span>
                    <span className="font-headline-md text-xl font-bold text-white mt-1">4326</span>
                    <span className="font-body-sm text-[11px] text-secondary-fixed mt-0.5">WGS84 High-Res</span>
                  </div>
                </div>

                {/* Trust Badges & Feature Pills */}
                <div className="mt-8 space-y-3 max-w-lg">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-secondary/30 flex items-center justify-center text-secondary-fixed shrink-0">
                      <span className="material-symbols-outlined text-lg">layers</span>
                    </div>
                    <div>
                      <p className="font-label-lg text-xs font-semibold text-white">Micro-Cadastral GIS Layering</p>
                      <p className="font-body-sm text-[11px] text-primary-fixed">Sub-centimeter Nishan-Dehi geo-coordinates verified by drone survey data.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-secondary/30 flex items-center justify-center text-secondary-fixed shrink-0">
                      <span className="material-symbols-outlined text-lg">enhanced_encryption</span>
                    </div>
                    <div>
                      <p className="font-label-lg text-xs font-semibold text-white">Zero-Knowledge Ledger Security</p>
                      <p className="font-body-sm text-[11px] text-primary-fixed">AES-256 encrypted mutations authenticated via National UIDAI & State NIC nodes.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Sovereign Stamp & Support */}
              <div className="relative z-10 pt-6 mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-primary-fixed border-t border-white/10">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-fixed text-lg">shield</span>
                  <span className="font-label-md text-xs">MeitY & NIC Standard 3.4 Sovereign Certified</span>
                </div>
                <div className="flex items-center gap-1 font-label-code text-xs text-white bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                  <span className="material-symbols-outlined text-sm">support_agent</span>
                  <span>1800-11-BHU (Toll Free)</span>
                </div>
              </div>
            </div>

            {/* ================= RIGHT PANE: Modern Civic Access Gateway ================= */}
            <div className="lg:w-1/2 w-full flex items-center justify-center p-4 sm:p-8 lg:p-12 bg-surface-pearl">
              <div className="w-full max-w-xl bg-surface-card rounded-2xl shadow-xl p-6 sm:p-9 transition-all duration-300 border border-border-subtle">
                
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="font-label-code text-xs uppercase tracking-wider text-secondary font-semibold">
                      Access Point 01-NIC
                    </span>
                    <h3 className="font-headline-lg text-2xl text-on-surface font-bold tracking-tight">
                      Sovereign Access Gateway
                    </h3>
                    <p className="font-body-md text-xs text-on-surface-variant mt-1">
                      Select your authorized portal persona to proceed.
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-primary-container shadow-sm border border-border-subtle">
                    <span className="material-symbols-outlined text-2xl">fingerprint</span>
                  </div>
                </div>

                {/* Persona Segmented Controller */}
                <div className="grid grid-cols-2 p-1.5 bg-surface-container-low rounded-xl mb-6 shadow-inner border border-border-subtle">
                  <button
                    type="button"
                    onClick={() => setPersona('citizen')}
                    className={`py-2.5 px-4 rounded-lg font-label-lg text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                      persona === 'citizen'
                        ? 'bg-primary-container text-white shadow-md'
                        : 'text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    <span className="material-symbols-outlined text-lg">person</span>
                    <span>Citizen Portal</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPersona('official')}
                    className={`py-2.5 px-4 rounded-lg font-label-lg text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                      persona === 'official'
                        ? 'bg-primary-container text-white shadow-md'
                        : 'text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    <span className="material-symbols-outlined text-lg">admin_panel_settings</span>
                    <span>Official Desk</span>
                  </button>
                </div>

                {/* Authenticating Loading Overlay */}
                {isAuthenticating && (
                  <div className="mb-6 p-4 rounded-xl bg-blue-50 border border-blue-200 flex items-center gap-3 animate-pulse">
                    <div className="w-6 h-6 border-2 border-primary-container border-t-transparent rounded-full animate-spin shrink-0" />
                    <span className="text-xs font-semibold text-primary-container">{authStatusMessage}</span>
                  </div>
                )}

                {/* ---------------- PERSONA 1: CITIZEN PANE ---------------- */}
                {persona === 'citizen' && (
                  <div className="space-y-6">
                    {/* Sub-Tab Switcher: Login vs Register */}
                    <div className="flex items-center space-x-6 border-b border-border-subtle pb-2">
                      <button
                        type="button"
                        onClick={() => setCitizenSubtab('login')}
                        className={`pb-1 font-title-md text-sm font-bold relative transition-colors ${
                          citizenSubtab === 'login'
                            ? 'text-primary-container'
                            : 'text-on-surface-variant hover:text-on-surface'
                        }`}
                      >
                        Citizen Sign In
                        {citizenSubtab === 'login' && (
                          <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary-container rounded-full" />
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={() => setCitizenSubtab('register')}
                        className={`pb-1 font-title-md text-sm font-bold relative transition-colors ${
                          citizenSubtab === 'register'
                            ? 'text-primary-container'
                            : 'text-on-surface-variant hover:text-on-surface'
                        }`}
                      >
                        New Citizen Registration
                        {citizenSubtab === 'register' && (
                          <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary-container rounded-full" />
                        )}
                      </button>
                    </div>

                    {/* CITIZEN LOGIN FORM */}
                    {citizenSubtab === 'login' && (
                      <form onSubmit={handleCitizenLogin} className="space-y-4">
                        {/* Quick Demo Pre-fill Pill */}
                        <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-50 border border-emerald-200">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
                            <span className="text-[11px] font-semibold text-emerald-800">Demo Persona: Rameshwar Sharma</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              setUsernameAadhaar('5482-9901-4412');
                              setCitizenPassword('SecretPassword123');
                            }}
                            className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-white px-2 py-0.5 rounded shadow-xs hover:bg-emerald-100"
                          >
                            Auto-Fill
                          </button>
                        </div>

                        <div>
                          <label className="block font-label-md text-xs font-semibold text-on-surface mb-1.5">
                            Username / 12-Digit Aadhaar / Virtual ID (VID)
                          </label>
                          <div className="relative flex items-center">
                            <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-xl pointer-events-none">
                              badge
                            </span>
                            <input
                              type="text"
                              value={usernameAadhaar}
                              onChange={(e) => handleAadhaarChange(e.target.value, setUsernameAadhaar)}
                              placeholder="e.g. 5482-9901-4412 or username"
                              className="w-full h-11 pl-10 pr-4 bg-surface-pearl rounded-lg font-body-md text-sm text-on-surface placeholder:text-on-surface-variant/60 border border-border-subtle focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary-container transition-all"
                            />
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <label className="block font-label-md text-xs font-semibold text-on-surface">
                              Password
                            </label>
                            <a
                              href="#forgot"
                              onClick={(e) => { e.preventDefault(); alert('In production, password recovery OTP is sent to your UIDAI registered mobile number.'); }}
                              className="font-label-md text-xs text-primary-container hover:underline"
                            >
                              Forgot Password?
                            </a>
                          </div>
                          <div className="relative flex items-center">
                            <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-xl pointer-events-none">
                              lock
                            </span>
                            <input
                              type={showCitizenPassword ? 'text' : 'password'}
                              value={citizenPassword}
                              onChange={(e) => setCitizenPassword(e.target.value)}
                              placeholder="Enter confidential passphrase"
                              className="w-full h-11 pl-10 pr-11 bg-surface-pearl rounded-lg font-body-md text-sm text-on-surface placeholder:text-on-surface-variant/60 border border-border-subtle focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary-container transition-all"
                            />
                            <button
                              type="button"
                              onClick={() => setShowCitizenPassword(!showCitizenPassword)}
                              className="absolute right-3 text-on-surface-variant hover:text-on-surface focus:outline-none p-1"
                            >
                              <span className="material-symbols-outlined text-lg">
                                {showCitizenPassword ? 'visibility_off' : 'visibility'}
                              </span>
                            </button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between py-1">
                          <label className="flex items-center gap-2 cursor-pointer select-none">
                            <input
                              type="checkbox"
                              checked={rememberSession}
                              onChange={(e) => setRememberSession(e.target.checked)}
                              className="w-4 h-4 rounded text-primary-container accent-primary-container focus:ring-0 cursor-pointer"
                            />
                            <span className="font-body-sm text-xs text-on-surface-variant">
                              Remember session on this device
                            </span>
                          </label>
                          <span className="font-label-code text-xs text-secondary flex items-center gap-1 font-medium">
                            <span className="material-symbols-outlined text-xs">gpp_good</span> SSL 256-Bit
                          </span>
                        </div>

                        <button
                          type="submit"
                          disabled={isAuthenticating}
                          className="w-full h-11 bg-primary-container hover:bg-primary text-white font-label-lg text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-[0.99] cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-lg">login</span>
                          <span>Secure Citizen Login</span>
                        </button>

                        {/* Alternate E-Gov Logins */}
                        <div className="relative my-5">
                          <div className="absolute inset-0 flex items-center">
                            <div className="w-full bg-border-subtle h-[1px]" />
                          </div>
                          <div className="relative flex justify-center">
                            <span className="px-3 bg-surface-card font-label-md text-xs text-on-surface-variant">
                              Or authenticate with trusted credentials
                            </span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <button
                            type="button"
                            onClick={() => setActiveModal('digilocker')}
                            className="h-11 px-3 bg-surface-pearl hover:bg-surface-container-low text-on-surface font-label-md text-xs font-semibold rounded-lg flex items-center justify-center gap-2 shadow-xs border border-border-subtle transition-all cursor-pointer"
                          >
                            <span className="material-symbols-outlined text-primary text-lg">lock_clock</span>
                            <span>DigiLocker Auth</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setActiveModal('aadhaar_otp')}
                            className="h-11 px-3 bg-surface-pearl hover:bg-surface-container-low text-on-surface font-label-md text-xs font-semibold rounded-lg flex items-center justify-center gap-2 shadow-xs border border-border-subtle transition-all cursor-pointer"
                          >
                            <span className="material-symbols-outlined text-secondary text-lg">sms</span>
                            <span>Aadhaar OTP e-KYC</span>
                          </button>
                        </div>
                      </form>
                    )}

                    {/* CITIZEN REGISTER FORM (3-step wizard) */}
                    {citizenSubtab === 'register' && (
                      <form onSubmit={handleRegisterSubmit} className="space-y-4 max-h-[520px] overflow-y-auto pr-1">
                        {/* Step 1: Personal Info */}
                        <div className="bg-surface-pearl p-4 rounded-xl space-y-3 border border-border-subtle">
                          <div className="flex items-center justify-between">
                            <span className="font-label-lg text-xs text-primary-container font-bold flex items-center gap-1.5">
                              <span className="material-symbols-outlined text-base">person_outline</span>
                              1. Personal Information
                            </span>
                            <span className="font-label-code text-[11px] text-secondary font-semibold">Step 1 of 3</span>
                          </div>
                          <div>
                            <label className="block font-label-md text-xs text-on-surface mb-1">Full Legal Name (as per Govt ID)</label>
                            <input
                              type="text"
                              required
                              value={regFullName}
                              onChange={(e) => setRegFullName(e.target.value)}
                              placeholder="e.g. Ramesh Kumar Verma"
                              className="w-full h-10 px-3 bg-white rounded-lg text-xs text-on-surface border border-border-subtle focus:outline-none focus:ring-1 focus:ring-primary-container"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label className="block font-label-md text-xs text-on-surface mb-1">Age</label>
                              <input
                                type="number"
                                min="18"
                                max="110"
                                value={regAge}
                                onChange={(e) => setRegAge(e.target.value)}
                                placeholder="e.g. 34"
                                className="w-full h-10 px-3 bg-white rounded-lg text-xs text-on-surface border border-border-subtle focus:outline-none focus:ring-1 focus:ring-primary-container"
                              />
                            </div>
                            <div>
                              <label className="block font-label-md text-xs text-on-surface mb-1">Gender</label>
                              <select
                                value={regGender}
                                onChange={(e) => setRegGender(e.target.value)}
                                className="w-full h-10 px-3 bg-white rounded-lg text-xs text-on-surface border border-border-subtle focus:outline-none focus:ring-1 focus:ring-primary-container"
                              >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Third Gender / Other</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        {/* Step 2: Account Credentials */}
                        <div className="bg-surface-pearl p-4 rounded-xl space-y-3 border border-border-subtle">
                          <div className="flex items-center justify-between">
                            <span className="font-label-lg text-xs text-primary-container font-bold flex items-center gap-1.5">
                              <span className="material-symbols-outlined text-base">key</span>
                              2. Account Credentials
                            </span>
                            <span className="font-label-code text-[11px] text-secondary font-semibold">Step 2 of 3</span>
                          </div>
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <label className="font-label-md text-xs text-on-surface">Choose Unique Username</label>
                              <span className="font-label-code text-[11px] text-secondary">Verified Available</span>
                            </div>
                            <div className="relative flex items-center">
                              <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-base">
                                alternate_email
                              </span>
                              <input
                                type="text"
                                value={regUsername}
                                onChange={(e) => setRegUsername(e.target.value)}
                                placeholder="ramesh.verma24"
                                className="w-full h-10 pl-9 pr-3 bg-white rounded-lg text-xs text-on-surface border border-border-subtle focus:outline-none focus:ring-1 focus:ring-primary-container"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="block font-label-md text-xs text-on-surface mb-1">Create Password</label>
                              <input
                                type="password"
                                value={regPassword}
                                onChange={(e) => setRegPassword(e.target.value)}
                                placeholder="Min. 8 characters"
                                className="w-full h-10 px-3 bg-white rounded-lg text-xs text-on-surface border border-border-subtle focus:outline-none focus:ring-1 focus:ring-primary-container"
                              />
                            </div>
                            <div>
                              <label className="block font-label-md text-xs text-on-surface mb-1">Confirm Password</label>
                              <input
                                type="password"
                                value={regConfirmPassword}
                                onChange={(e) => setRegConfirmPassword(e.target.value)}
                                placeholder="Re-enter password"
                                className="w-full h-10 px-3 bg-white rounded-lg text-xs text-on-surface border border-border-subtle focus:outline-none focus:ring-1 focus:ring-primary-container"
                              />
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5 pt-1">
                            <div className="h-1 flex-1 rounded-full bg-secondary" />
                            <div className="h-1 flex-1 rounded-full bg-secondary" />
                            <div className="h-1 flex-1 rounded-full bg-secondary" />
                            <div className="h-1 flex-1 rounded-full bg-surface-container" />
                            <span className="font-label-code text-[11px] text-secondary ml-1">Strong Passphrase</span>
                          </div>
                        </div>

                        {/* Step 3: Sovereign Identity Verification */}
                        <div className="bg-surface-pearl p-4 rounded-xl space-y-3 border border-border-subtle">
                          <div className="flex items-center justify-between">
                            <span className="font-label-lg text-xs text-primary-container font-bold flex items-center gap-1.5">
                              <span className="material-symbols-outlined text-base">verified</span>
                              3. Sovereign Identity Verification
                            </span>
                            <span className="font-label-code text-[11px] text-secondary font-semibold">Step 3 of 3</span>
                          </div>
                          <div>
                            <label className="block font-label-md text-xs text-on-surface mb-1">Aadhaar Card Number (12 Digits)</label>
                            <div className="relative flex items-center">
                              <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-base">pin</span>
                              <input
                                type="text"
                                maxLength={19}
                                value={regAadhaar}
                                onChange={(e) => handleAadhaarChange(e.target.value, setRegAadhaar)}
                                placeholder="XXXX - XXXX - XXXX"
                                className="w-full h-10 pl-9 pr-3 bg-white rounded-lg font-label-code text-xs text-on-surface border border-border-subtle focus:outline-none focus:ring-1 focus:ring-primary-container"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block font-label-md text-xs text-on-surface mb-1">
                              Upload Sovereign Document Proof (PDF / JPG)
                            </label>
                            <div className="p-4 bg-white rounded-xl text-center border-2 border-dashed border-border-subtle hover:bg-surface-container-low transition-all cursor-pointer">
                              <span className="material-symbols-outlined text-2xl text-primary-container">cloud_upload</span>
                              <p className="font-label-md text-xs text-on-surface font-semibold mt-1">Click to browse or drag & drop document</p>
                              <p className="font-body-sm text-[11px] text-on-surface-variant mt-0.5">Voter ID, Passport, or Certified Deed (Max 5MB)</p>
                            </div>
                          </div>
                        </div>

                        <label className="flex items-start gap-2 pt-1 cursor-pointer select-none">
                          <input
                            type="checkbox"
                            checked={regAffirm}
                            onChange={(e) => setRegAffirm(e.target.checked)}
                            className="w-4 h-4 mt-0.5 rounded text-secondary accent-secondary focus:ring-0 cursor-pointer"
                          />
                          <span className="font-body-sm text-[11px] text-on-surface-variant leading-tight">
                            I solemnly affirm that demographic and biographic information supplied matches official UIDAI and revenue archives under the Aadhaar Act, 2016.
                          </span>
                        </label>

                        <button
                          type="submit"
                          disabled={!regAffirm || isAuthenticating}
                          className="w-full h-11 bg-secondary hover:bg-on-secondary-container text-white font-label-lg text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-[0.99] cursor-pointer disabled:opacity-50"
                        >
                          <span className="material-symbols-outlined text-lg">how_to_reg</span>
                          <span>Register & Create Sovereign Profile</span>
                        </button>
                      </form>
                    )}
                  </div>
                )}

                {/* ---------------- PERSONA 2: OFFICIAL DESK PANE ---------------- */}
                {persona === 'official' && (
                  <form onSubmit={handleOfficialLogin} className="space-y-4">
                    {/* Restricted Badge */}
                    <div className="p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-900">
                      <span className="material-symbols-outlined text-2xl text-red-700">policy</span>
                      <div>
                        <p className="font-label-md text-xs font-bold tracking-tight">RESTRICTED GOVERNMENT PORTAL</p>
                        <p className="font-body-sm text-[11px] text-red-800">
                          Authorized for State Revenue, Sub-Registrars, and Cadastral Survey Officers only.
                        </p>
                      </div>
                    </div>

                    <div className="p-2.5 bg-surface-container-low rounded-lg text-on-surface-variant font-body-sm text-xs flex items-center gap-2 border border-border-subtle">
                      <span className="material-symbols-outlined text-primary-container text-base">lock_clock</span>
                      <span>Cryptographic audit active: Hardware terminal hash & IP logged.</span>
                    </div>

                    {/* Quick Demo Pre-fill Pill */}
                    <div className="flex items-center justify-between p-2 rounded-lg bg-blue-50 border border-blue-200">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                        <span className="text-[11px] font-semibold text-blue-900">Demo Persona: Vikramaditya Rao (Tehsildar)</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setServiceId('HR-GUR-REV-2024-098');
                          setCadre('revenue');
                          setOfficialPassword('OfficialToken2026');
                          setTotp(['5', '9', '1', '4', '8', '2']);
                        }}
                        className="text-[10px] font-bold uppercase tracking-wider text-blue-800 bg-white px-2 py-0.5 rounded shadow-xs hover:bg-blue-100"
                      >
                        Auto-Fill
                      </button>
                    </div>

                    <div>
                      <label className="block font-label-md text-xs font-semibold text-on-surface mb-1.5">
                        Official Service ID / Designation Code
                      </label>
                      <div className="relative flex items-center">
                        <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-xl">badge</span>
                        <input
                          type="text"
                          value={serviceId}
                          onChange={(e) => setServiceId(e.target.value)}
                          placeholder="e.g. HR-GUR-REV-2024-098"
                          className="w-full h-11 pl-10 pr-4 bg-surface-pearl rounded-lg font-label-code text-xs text-on-surface placeholder:text-on-surface-variant/60 border border-border-subtle focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary-container transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-label-md text-xs font-semibold text-on-surface mb-1.5">
                        Department Cadre & Jurisdiction
                      </label>
                      <div className="relative flex items-center">
                        <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-xl">account_balance</span>
                        <select
                          value={cadre}
                          onChange={(e) => setCadre(e.target.value)}
                          className="w-full h-11 pl-10 pr-8 bg-surface-pearl rounded-lg font-body-md text-xs text-on-surface border border-border-subtle focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary-container transition-all appearance-none cursor-pointer"
                        >
                          <option value="revenue">Department of Revenue & Land Records</option>
                          <option value="survey">National Cadastral Survey & Geo-Mapping Wing</option>
                          <option value="registrar">Office of Sub-Registrar (Deed Authentication)</option>
                          <option value="tehsildar">Tehsildar / Executive Magistrate Cadastral Court</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3 text-on-surface-variant text-lg pointer-events-none">
                          expand_more
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block font-label-md text-xs font-semibold text-on-surface">
                          Officer Confidential Token / Password
                        </label>
                        <span className="font-label-code text-xs text-secondary flex items-center gap-1">
                          <span className="material-symbols-outlined text-xs">encrypted</span> FIPS 140-3
                        </span>
                      </div>
                      <div className="relative flex items-center">
                        <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-xl">key</span>
                        <input
                          type={showOfficialPassword ? 'text' : 'password'}
                          value={officialPassword}
                          onChange={(e) => setOfficialPassword(e.target.value)}
                          placeholder="Enter administrative passphrase"
                          className="w-full h-11 pl-10 pr-11 bg-surface-pearl rounded-lg font-body-md text-xs text-on-surface placeholder:text-on-surface-variant/60 border border-border-subtle focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary-container transition-all"
                        />
                        <button
                          type="button"
                          onClick={() => setShowOfficialPassword(!showOfficialPassword)}
                          className="absolute right-3 text-on-surface-variant hover:text-on-surface focus:outline-none p-1"
                        >
                          <span className="material-symbols-outlined text-lg">
                            {showOfficialPassword ? 'visibility_off' : 'visibility'}
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* 2FA TOTP Token Input */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block font-label-md text-xs font-semibold text-on-surface">
                          2FA Time-based Hardware Token (TOTP)
                        </label>
                        <button
                          type="button"
                          onClick={() => alert('New 6-digit TOTP token generated: 928341')}
                          className="font-label-md text-xs text-primary-container hover:underline"
                        >
                          Resend Hardware OTP (38s)
                        </button>
                      </div>
                      <div className="grid grid-cols-6 gap-2">
                        {totp.map((digit, idx) => (
                          <input
                            key={idx}
                            type="text"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => {
                              const newTotp = [...totp];
                              newTotp[idx] = e.target.value;
                              setTotp(newTotp);
                            }}
                            className="h-11 text-center font-label-code text-base font-bold bg-surface-pearl rounded-lg border border-border-subtle focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary-container text-on-surface"
                          />
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isAuthenticating}
                      className="w-full h-11 bg-primary-container hover:bg-primary text-white font-label-lg text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-[0.99] mt-2 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-lg">verified_user</span>
                      <span>Authenticate Official Terminal</span>
                    </button>

                    <div className="p-3 bg-surface-pearl rounded-lg text-on-surface-variant font-body-sm text-[11px] leading-relaxed text-center border border-border-subtle">
                      Official logins are subject to Indian IT Act 2000 §43A & National Digital Data Protection protocols. Unauthorized intrusions are strictly prohibited and legally prosecuted.
                    </div>
                  </form>
                )}

                {/* Footer Card Security Note */}
                <div className="mt-6 pt-4 flex items-center justify-between font-label-md text-xs text-on-surface-variant border-t border-border-subtle">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    <span>Sovereign Ledger Node Online</span>
                  </div>
                  <a
                    href="#status"
                    onClick={(e) => { e.preventDefault(); alert('All 14 Sovereign Cadastral Nodes in Haryana & Delhi-NCR are operational with 99.98% uptime.'); }}
                    className="text-primary-container hover:underline font-medium"
                  >
                    System Compliance & Status
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Global Bottom Footer */}
      <footer className="w-full py-3 bg-surface-container-low border-t border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-on-surface-variant font-label-md text-xs">
          <span>National Land Records Modernization Programme (NLRMP) • Department of Land Resources</span>
          <span className="font-label-code text-[11px]">SOVEREIGN CERTIFIED LAYER • ISO/IEC 27001</span>
        </div>
      </footer>

      {/* ================= MODAL: DigiLocker Auth ================= */}
      {activeModal === 'digilocker' && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-blue-100 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-700 text-2xl">lock_clock</span>
                <h4 className="font-bold text-base text-gray-900">DigiLocker Consent Gateway</h4>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="text-gray-400 hover:text-gray-600 p-1 rounded-full"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>
            <div className="py-4 space-y-3 text-xs text-gray-600">
              <p>
                <strong>Bhu-Aadhaar DPI</strong> is requesting permission to fetch your verified land registry records and identity assertion from your DigiLocker repository.
              </p>
              <div className="bg-blue-50 p-3 rounded-xl border border-blue-200 text-[11px] space-y-1">
                <div className="font-semibold text-blue-900">Requested Credentials:</div>
                <div className="flex items-center gap-1.5 text-blue-800">
                  <span className="material-symbols-outlined text-sm">check_circle</span> Aadhaar Card (UIDAI)
                </div>
                <div className="flex items-center gap-1.5 text-blue-800">
                  <span className="material-symbols-outlined text-sm">check_circle</span> Registered Land Deed (DL-GGN-2024-001)
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 pt-3 border-t border-gray-100">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded-lg"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDigiLockerSuccess}
                className="px-5 py-2 text-xs font-bold text-white bg-blue-800 hover:bg-blue-900 rounded-lg shadow-sm"
              >
                Allow & Proceed to Dashboard
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL: Aadhaar OTP e-KYC ================= */}
      {activeModal === 'aadhaar_otp' && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-emerald-100 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-emerald-700 text-2xl">sms</span>
                <h4 className="font-bold text-base text-gray-900">Aadhaar OTP e-KYC</h4>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="text-gray-400 hover:text-gray-600 p-1 rounded-full"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>
            <div className="py-4 space-y-3 text-xs text-gray-600">
              <p>
                An OTP has been dispatched to your mobile number registered with Aadhaar (<strong>•••••••8912</strong>).
              </p>
              <div>
                <label className="block font-semibold text-gray-800 mb-2">Enter 6-Digit UIDAI OTP</label>
                <div className="grid grid-cols-6 gap-2">
                  {otpInput.map((val, idx) => (
                    <input
                      key={idx}
                      type="text"
                      maxLength={1}
                      value={val}
                      onChange={(e) => {
                        const copy = [...otpInput];
                        copy[idx] = e.target.value;
                        setOtpInput(copy);
                      }}
                      className="h-10 text-center font-mono font-bold text-base border border-gray-300 rounded-lg focus:border-emerald-600 focus:outline-none"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <span className="text-[11px] text-gray-400">Resend OTP in 24s</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="px-3 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleAadhaarOtpSuccess}
                  className="px-4 py-2 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm"
                >
                  Verify & Enter
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import LoginPortal from './pages/LoginPortal';
import './index.css';

/* Lazy-load all 6 Stitch screens */
const BhuExplorer = React.lazy(() => import('./pages/BhuExplorer'));
const BhuLocker = React.lazy(() => import('./pages/BhuLocker'));
const PropertyIngestion = React.lazy(() => import('./pages/PropertyIngestion'));
const SmartLedger = React.lazy(() => import('./pages/SmartLedger'));
const MarketRadar = React.lazy(() => import('./pages/MarketRadar'));
const NyayaBhumi = React.lazy(() => import('./pages/NyayaBhumi'));

const NAV_ITEMS = [
  { path: '/bhu-locker',          label: 'My Bhu-Locker (Vault)',     icon: 'lock' },
  { path: '/bhu-explorer',        label: 'Bhu-Explorer (GIS Map)',    icon: 'satellite_alt' },
  { path: '/property-ingestion',  label: 'Property Ingestion',        icon: 'add_home_work' },
  { path: '/smart-ledger',        label: 'Smart Ledger (Mutation)',    icon: 'swap_horiz' },
  { path: '/market-radar',        label: 'Market Radar',              icon: 'monitoring' },
  { path: '/nyaya-bhumi',         label: 'Nyaya-Bhumi (Disputes)',    icon: 'gavel' },
];

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-full w-full bg-surface p-12">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-primary-container border-t-transparent rounded-full animate-spin"></div>
        <span className="text-xs text-on-surface-variant font-medium">Loading sovereign module…</span>
      </div>
    </div>
  );
}

function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const displayName = user?.name || 'Rameshwar Sharma';
  const displayRole = user?.title || (user?.role === 'official' ? 'Official Desk' : 'Citizen • Haryana');
  const displayId = user?.serviceId || user?.aadhaar || '•••• 8912';

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-surface">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          w-64 bg-[#1E3A8A] text-white flex flex-col shrink-0
          transform transition-transform duration-200 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10">
          <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-xl text-white">home_work</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight uppercase">BHU-AADHAAR</span>
            <span className="text-[10px] text-blue-200 tracking-wider">DPI • SIH26014</span>
          </div>
          <button
            className="ml-auto lg:hidden p-1 hover:bg-white/10 rounded"
            onClick={() => setSidebarOpen(false)}
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Access Gateway Switcher Link */}
        <div className="px-3 pt-3">
          <NavLink
            to="/login"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-blue-100 transition-colors"
          >
            <span className="material-symbols-outlined text-base text-secondary-fixed">shield_lock</span>
            <div className="flex flex-col text-left">
              <span>Sovereign Access Gateway</span>
              <span className="text-[10px] text-blue-200 font-normal">Switch Persona / Sign In</span>
            </div>
          </NavLink>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          <div className="px-3 pb-1 text-[10px] font-bold uppercase tracking-wider text-blue-300">
            Citizen Modules
          </div>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition-all
                ${isActive
                  ? 'bg-white text-[#1E3A8A] font-bold shadow-sm'
                  : 'text-blue-100 hover:bg-white/10 hover:text-white'
                }`
              }
            >
              <span className="material-symbols-outlined text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Bottom user profile info & Logout */}
        <div className="p-3 border-t border-white/10 bg-black/10">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-sm">
                  {user?.role === 'official' ? 'badge' : 'person'}
                </span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-semibold truncate text-white">{displayName}</span>
                <span className="text-[10px] text-blue-200 truncate">{displayRole} • {displayId}</span>
              </div>
            </div>
            <button
              onClick={handleLogout}
              title="Logout / Switch Account"
              className="p-1.5 hover:bg-white/20 rounded-md text-blue-200 hover:text-white transition-colors shrink-0"
            >
              <span className="material-symbols-outlined text-base">logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top bar (mobile hamburger & status) */}
        <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-[#1E3A8A] text-white border-b border-white/10">
          <div className="flex items-center gap-2">
            <button
              className="p-1 hover:bg-white/10 rounded"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="material-symbols-outlined text-xl">menu</span>
            </button>
            <span className="text-sm font-bold tracking-tight uppercase">BHU-AADHAAR DPI</span>
          </div>
          <button
            onClick={() => navigate('/login')}
            className="text-[11px] font-semibold bg-white/15 px-2.5 py-1 rounded hover:bg-white/25 flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-sm">shield</span> Gateway
          </button>
        </div>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">
          <React.Suspense fallback={<LoadingSpinner />}>
            {children}
          </React.Suspense>
        </main>
      </div>
    </div>
  );
}

// Protected or Redirect helper
function RootRoute() {
  const { isAuthenticated } = useAuth();
  // If authenticated, go directly to user dashboard (/bhu-locker), otherwise to /login
  return isAuthenticated ? <Navigate to="/bhu-locker" replace /> : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Sovereign Access Gateway / Login Route (Full Screen) */}
          <Route path="/login" element={<LoginPortal />} />

          {/* User Dashboard Routes (Nested in DashboardLayout) */}
          <Route path="/" element={<RootRoute />} />
          <Route
            path="/bhu-locker"
            element={
              <DashboardLayout>
                <BhuLocker />
              </DashboardLayout>
            }
          />
          <Route
            path="/bhu-explorer"
            element={
              <DashboardLayout>
                <BhuExplorer />
              </DashboardLayout>
            }
          />
          <Route
            path="/property-ingestion"
            element={
              <DashboardLayout>
                <PropertyIngestion />
              </DashboardLayout>
            }
          />
          <Route
            path="/smart-ledger"
            element={
              <DashboardLayout>
                <SmartLedger />
              </DashboardLayout>
            }
          />
          <Route
            path="/market-radar"
            element={
              <DashboardLayout>
                <MarketRadar />
              </DashboardLayout>
            }
          />
          <Route
            path="/nyaya-bhumi"
            element={
              <DashboardLayout>
                <NyayaBhumi />
              </DashboardLayout>
            }
          />
          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

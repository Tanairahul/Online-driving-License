import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./Navbar";
import Secondnav from "./Secondnav";
import Footer from "./footer";

/* Pages */
import Home from "./Home";
import About from "./About";
import Diplomatic from "./diplomatic";
import ChangeAdress from "./ChangeAdress";
import Duplicate from "./Duplicate";
import Parmanentraj from "./Parmanent";
import Display from "./Display";
import Renewal from "./Rewal";
import Advisory from "./Advisory";
import Draft from "./Draft";
import Addition from "./AdditionClass";
import Duplinces from "./Duplinces";
import Lerners from "./Lerners";
import Perlicense from "./Parlicense";
import TouristPermit from "./TouristPermit";
import Contect from "./Contectus";
import Fcontectus from "./Fcontect";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import Nicui from "./Nicui";
import MORTHUI from "./Morth";
import DelhiTrafficUI from "./Delhi";
import Analytsis from "./Analytis";
import Sarathi from "./Sarathi";
import Vahan from "./Vahanreport";
import Homo from "./Homo";
import Sarthi4 from "./Sarathi4";
import Vahan4 from "./Vahan4";
import Pucc from "./Pucc";
import Trade from "./Trade";
import Echallan from "./Echallan";
import Licenserelated from "./Licenserelated";
import Nationpermit from "./Nationpermit";
import Sld from "./Sld";
import Cng from "./Cngmaker";
import Online from "./Online";
import Lerner from "./Lerner";
import Driving from "./Drivingschool";
import Other from "./Other";
import ApplyLicense from "./ApplyLicense";
import AdminPage from "./AdminPage";
import AdminLogin from "./AdminLogin";
import ViewLicense from "./ViewLicense";

/* 🔐 Protected Route */
function ProtectedRoute({ user, children }) {
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ✅ Reload par login restore */
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  if (loading) return null;

  return (
    <>
      <Navbar />
      <Secondnav />

      <Routes>
        {/* 🔐 AUTH */}
        <Route
          path="/login"
          element={
            user ? <Navigate to="/dashboard" replace /> : <Login onLogin={setUser} />
          }
        />

        <Route
          path="/Register"
          element={
            user ? <Navigate to="/dashboard" replace /> : <Register setUser={setUser} />
          }
        />

        {/* 🔐 USER DASHBOARD */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute user={user}>
              <Dashboard user={user} setUser={setUser} />
            </ProtectedRoute>
          }
        />

        {/* 🔐 ADMIN LOGIN */}
        <Route
          path="/admin-login"
          element={<AdminLogin setUser={setUser} />}
        />

        {/* 🔐 ADMIN PANEL */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute user={user}>
              {user?.role === "admin" ? (
                <AdminPage />
              ) : (
                <Navigate to="/dashboard" replace />
              )}
            </ProtectedRoute>
          }
        />

        {/* 🌍 PUBLIC ROUTES */}
        <Route path="/" element={<Parmanentraj />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/diplomatic" element={<Diplomatic />} />
        <Route path="/Change of Address" element={<ChangeAdress />} />
        <Route path="/Duplicate" element={<Duplicate />} />
        <Route path="/display" element={<Display />} />
        <Route path="/Renewal Of RC" element={<Renewal />} />
        <Route path="/Advisory" element={<Advisory />} />
        <Route path="/Draft Notification" element={<Draft />} />
        <Route path="/Adition of Class" element={<Addition />} />
        <Route path="/Duplication of license" element={<Duplinces />} />
        <Route path="/Learner's License" element={<Lerners />} />
        <Route path="/Permanent License" element={<Perlicense />} />
        <Route path="/All India Tourist Permit" element={<TouristPermit />} />
        <Route path="/Contect" element={<Contect />} />
        <Route path="/Fcontectus" element={<Fcontectus />} />
        <Route path="/National Informatice Center" element={<Nicui />} />
        <Route path="/MoRth" element={<MORTHUI />} />
        <Route path="/Services" element={<DelhiTrafficUI />} />
        <Route path="/Analytics" element={<Analytsis />} />
        <Route path="/Sarathi Reprot" element={<Sarathi />} />
        <Route path="/Vahan" element={<Vahan />} />
        <Route path="/Homologation dashboard" element={<Homo />} />
        <Route path="/Sarathi4 Dashboard" element={<Sarthi4 />} />
        <Route path="/Vahan4 Dashboard" element={<Vahan4 />} />
        <Route path="/PUCC Dashboard" element={<Pucc />} />
        <Route path="/Trade Certificate Report" element={<Trade />} />
        <Route path="/Paid NR Services" element={<Echallan />} />
        <Route path="/Driving license related" element={<Licenserelated />} />
        <Route path="/Nation permit" element={<Nationpermit />} />
        <Route path="/SLD Makers" element={<Sld />} />
        <Route path="/CNG Makers" element={<Cng />} />
        <Route path="/online" element={<Online />} />
        <Route path="/Drivingschool" element={<Driving />} />
        <Route path="/other" element={<Other />} />
        <Route path="/apply-license" element={<ApplyLicense />} />
        <Route path="/Lerner" element={<Lerner />} />
        
<Route path="/view-license" element={<ViewLicense />} />

        {/* ❌ UNKNOWN */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </>
  );
}

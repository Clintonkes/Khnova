import { Toaster } from "@/components/ui/sonner";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClientInstance } from "@/lib/query-client";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import PageNotFound from "./lib/PageNotFound";
import { AuthProvider } from "@/lib/AuthContext";
import ScrollToTop from "./components/ScrollToTop";

import Layout from "@/components/Layout";
import IbeHome from "@/pages/KhnHome";
import IbeServices from "@/pages/KhnServices";
import IbeAbout from "@/pages/KhnAbout";
import IbeContact from "@/pages/KhnContact";
import IbeQuote from "@/pages/KhnQuote";
import ProtectedRoute from "@/components/ProtectedRoute";
import Login from "@/pages/Login";
import Admin from "@/pages/Admin";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IbeHome />} />
        <Route path="services" element={<IbeServices />} />
        <Route path="about" element={<IbeAbout />} />
        <Route path="contact" element={<IbeContact />} />
        <Route path="quote" element={<IbeQuote />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute unauthenticatedElement={<Navigate to="/login?returnTo=/admin" replace />} />}>
        <Route path="/admin" element={<Admin />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <ScrollToTop />
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
        <Toaster />
      </Router>
    </QueryClientProvider>
  );
}

export default App;

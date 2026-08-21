import React, { useState } from "react";
import { useNavigate, useSearchParams, Navigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useAuth } from "@/lib/AuthContext";
import NovaMark from "@/components/NovaMark";

export default function Login() {
  const { admin, isLoadingAuth, login } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const returnTo = searchParams.get("returnTo") || "/admin";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  if (isLoadingAuth) return null;
  if (admin) return <Navigate to={returnTo} replace />;

  async function onSubmit(e) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      await login(email, password);
      navigate(returnTo, { replace: true });
    } catch {
      setError("Invalid email or password.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-ibe-bone px-6">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center mb-8">
          <span className="w-12 h-12 rounded-xl bg-knova-midnight grid place-items-center mb-4"><NovaMark className="text-knova-cyan" size={22} /></span>
          <h1 className="font-lora text-knova-midnight text-2xl font-bold">Admin Sign In</h1>
          <p className="text-ibe-bark/60 font-mulish text-sm mt-1">KH NOVA LLC</p>
        </div>
        <form onSubmit={onSubmit} className="bg-ibe-cream rounded-2xl p-7 border border-ibe-bark/5 shadow-lg shadow-ibe-bark/5 space-y-5">
          <label className="block">
            <span className="block text-knova-midnight/60 text-xs font-mulish font-bold uppercase tracking-[0.15em] mb-2">Email</span>
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="ib-input" placeholder="admin@khnovalawn.com" />
          </label>
          <label className="block">
            <span className="block text-knova-midnight/60 text-xs font-mulish font-bold uppercase tracking-[0.15em] mb-2">Password</span>
            <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="ib-input" placeholder="••••••••" />
          </label>
          {error && <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
          <button type="submit" disabled={submitting} className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-knova-cyan text-ibe-bark font-mulish font-bold hover:bg-knova-midnight hover:text-ibe-cream transition disabled:opacity-60">
            {submitting ? <><Loader2 size={18} className="animate-spin" /> Signing in…</> : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}

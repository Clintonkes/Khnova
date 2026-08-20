import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { apiGet, apiPost } from "@/lib/api";

const TOKEN_KEY = "ibe_admin_token";
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [admin, setAdmin] = useState(null);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) {
      setIsLoadingAuth(false);
      return;
    }
    apiGet("/api/admin/me")
      .then((data) => setAdmin(data))
      .catch(() => localStorage.removeItem(TOKEN_KEY))
      .finally(() => setIsLoadingAuth(false));
  }, []);

  const login = useCallback(async (email, password) => {
    const { access_token } = await apiPost("/api/admin/login", { email, password });
    localStorage.setItem(TOKEN_KEY, access_token);
    const me = await apiGet("/api/admin/me");
    setAdmin(me);
    return me;
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY);
    setAdmin(null);
  }, []);

  return (
    <AuthContext.Provider value={{ admin, isLoadingAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

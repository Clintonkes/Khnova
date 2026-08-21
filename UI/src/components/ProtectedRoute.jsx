import React from "react";
import { Outlet } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useAuth } from "@/lib/AuthContext";

export default function ProtectedRoute({ unauthenticatedElement }) {
  const { admin, isLoadingAuth } = useAuth();

  if (isLoadingAuth) {
    return (
      <div className="min-h-screen grid place-items-center bg-ibe-bone">
        <Loader2 className="animate-spin text-knova-midnight" size={32} />
      </div>
    );
  }

  return admin ? <Outlet /> : unauthenticatedElement;
}

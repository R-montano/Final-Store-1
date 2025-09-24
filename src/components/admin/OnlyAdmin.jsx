// components/admin/OnlyAdmin.jsx
"use client";

import { useAuth } from "@clerk/nextjs";

export default function OnlyAdmin({ children }) {
  const { sessionClaims } = useAuth();
  const isAdmin = sessionClaims?.metadata?.role === "admin";

  if (!isAdmin) {
    return (
      <div className="text-red-600 font-bold text-2xl mt-10 text-center">
        No estás autorizado para ver esta página.
      </div>
    );
  }

  return children;
}


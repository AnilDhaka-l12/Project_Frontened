import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  children: ReactNode;
  requireAdmin?: boolean;
};

export default function ProtectedRoute({
  children,
  requireAdmin = false,
}: ProtectedRouteProps) {
  const auth = localStorage.getItem("auth");

  if (!auth) {
    return <Navigate to="/login" replace />;
  }

  const parsedAuth = JSON.parse(auth);

  // Admin check
  if (requireAdmin && parsedAuth.user !== "admin") {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
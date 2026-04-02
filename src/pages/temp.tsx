import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiRequest } from "../utils/api";
import { getToken, logoutUser } from "../utils/auth";

type AdminResponse = {
  message: string;
  user?: {
    id: number;
    email: string;
    role: string;
    aud: string;
  };
};

function Admin() {
  const navigate = useNavigate();

  const [data, setData] = useState<AdminResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = getToken();

    if (!token) {
      navigate("/login");
      return;
    }

    const fetchAdminData = async () => {
      try {
        const result = await apiRequest<AdminResponse>("/api/admin/dashboard", {
          method: "GET",
        });

        setData(result);
      } catch (err) {
        if (err instanceof Error) {
          if (err.message === "Unauthorized") {
            logoutUser();
            navigate("/login");
            return;
          }

          if (err.message === "Forbidden") {
            setError("You are not allowed to access this page.");
            return;
          }

          setError(err.message);
        } else {
          setError("Something went wrong.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAdminData();
  }, [navigate]);

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  // Loading state
  if (loading) {
    return <p style={{ padding: "2rem" }}>Loading...</p>;
  }

  // Error state
  if (error) {
    return (
      <div style={{ padding: "2rem" }}>
        <h1>Admin Page</h1>
        <p style={{ color: "red" }}>{error}</p>
        <button onClick={handleLogout}>Go to Login</button>
      </div>
    );
  }

  // Success state
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Admin Dashboard</h1>

      <p>{data?.message || "Welcome to admin panel"}</p>

      {data?.user && (
        <div>
          <p><strong>Email:</strong> {data.user.email}</p>
          <p><strong>Role:</strong> {data.user.role}</p>
          <p><strong>Audience:</strong> {data.user.aud}</p>
        </div>
      )}

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Admin;
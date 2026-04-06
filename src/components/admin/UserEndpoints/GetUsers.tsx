import { useState } from "react";
import { apiRequest } from "../../../utils/api";
import "./GetUsers.css";

function GetUsers() {
  const [users, setUsers] = useState<any[]>([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleClick = async () => {
    try {
      setShow(true);
      setLoading(true);
      setError("");

      const data = await apiRequest<any[]>("/api/Users", {
        method: "GET",
      });

      setUsers(data);
    } catch (err: any) {
      setError(err.message || "Something failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="endpoint-card get-card" onClick={handleClick}>
        <span className="endpoint-method get-method">GET</span>
        <span className="endpoint-path">/api/Users</span>
      </div>

      {show && (
        <div className="endpoint-response">
          {loading && <p className="loading-text">Loading users...</p>}

          {error && <p className="error-text">{error}</p>}

          {!loading && !error && Array.isArray(users) && users.length > 0 && (
            <div className="users-table">
              <div className="users-header">
                <div>ID</div>
                <div>Name</div>
                <div>Surname</div>
                <div>Email</div>
                <div>Occupation</div>
                <div>Organization</div>
                <div>Full Name</div>
                <div>Status</div>
              </div>

              {users.map((user) => (
                <div key={user.id} className="user-grid-row">
                  <div className="user-cell">{user.id}</div>
                  <div className="user-cell">{user.name}</div>
                  <div className="user-cell">{user.surname}</div>
                  <div className="user-cell">{user.email}</div>
                  <div className="user-cell">{user.occupation}</div>
                  <div className="user-cell">{user.organization}</div>
                  <div className="user-cell">{user.fullName}</div>
                  <div
                    className={`user-cell ${
                      user.isActive ? "status-active" : "status-inactive"
                    }`}
                  >
                    {user.isActive ? "Active" : "Inactive"}
                  </div>
                </div>
              ))}
            </div>
          )}

          {!loading && !error && Array.isArray(users) && users.length === 0 && (
            <p className="empty-text">No users found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default GetUsers;
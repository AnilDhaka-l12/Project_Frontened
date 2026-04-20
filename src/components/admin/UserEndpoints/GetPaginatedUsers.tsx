import { useEffect, useState } from "react";
import { apiRequest } from "../../../utils/api";
import "./GetPaginatedUsers.css";

type User = {
  id: string;
  name: string;
  surname: string;
  fullName: string;
  email: string;
  occupation: string;
  organization: string;
  createdAt: string;
  updatedAt?: string;
  isActive: boolean;
};

type PaginatedResponse = {
  items: User[];
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
};

function GetPaginatedUsers() {
  const [data, setData] = useState<PaginatedResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [pageNumber, setPageNumber] = useState(1);
  const [organization, setOrganization] = useState("");

  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [editOpen, setEditOpen] = useState(false);
  const [editLoading, setEditLoading] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);

  const [editForm, setEditForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    organization: "",
    isActive: false,
  });

  const fetchUsers = async (page = pageNumber) => {
    try {
      setLoading(true);
      setError("");

      const query = new URLSearchParams();
      query.append("PageNumber", String(page));
      query.append("PageSize", "10");

      if (organization.trim()) {
        query.append("Organization", organization.trim());
      }

      const response = await apiRequest<PaginatedResponse>(
        `/api/Users/paginated?${query.toString()}`
      );

      setData(response);
      setPageNumber(page);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : "Failed to load users.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(1);
  }, []);

  const handleEditClick = async (userId: string) => {
    try {
      setEditLoading(true);
      setError("");

      const user = await apiRequest<User>(`/api/Users/${userId}`);

      setSelectedUser(user);
      setEditForm({
        firstName: user.name || "",
        lastName: user.surname || "",
        email: user.email || "",
        occupation: user.occupation || "",
        organization: user.organization || "",
        isActive: user.isActive,
      });

      setEditOpen(true);
    } catch (err) {
      console.error(err);
      alert(err instanceof Error ? err.message : "Failed to fetch user details.");
    } finally {
      setEditLoading(false);
    }
  };

  const handleDeleteClick = async (userId: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmed) return;

    try {
      await apiRequest(`/api/Users/${userId}`, {
        method: "DELETE",
      });

      const shouldGoPreviousPage =
        data && data.items.length === 1 && data.pageNumber > 1;

      await fetchUsers(
        shouldGoPreviousPage ? data.pageNumber - 1 : data?.pageNumber || 1
      );
    } catch (err) {
      console.error(err);
      alert(err instanceof Error ? err.message : "Failed to delete user.");
    }
  };

  const handleSaveEdit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedUser) return;

    try {
      setSaveLoading(true);

      const payload = {
        name: editForm.firstName.trim(),
        surname: editForm.lastName.trim(),
        email: editForm.email.trim(),
        occupation: editForm.occupation.trim(),
        organization: editForm.organization.trim(),
      };

      await apiRequest(`/api/Users/${selectedUser.id}`, {
        method: "PUT",
        body: JSON.stringify(payload),
      });

      setEditOpen(false);
      setSelectedUser(null);

      await fetchUsers(pageNumber);
    } catch (err) {
      console.error(err);
      alert(err instanceof Error ? err.message : "Failed to update user.");
    } finally {
      setSaveLoading(false);
    }
  };

  const closeEditModal = () => {
    setEditOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="paginated-users-card">
      <h2 className="paginated-users-title">Get Paginated Users</h2>

      <div className="paginated-users-filters">
        <input
          type="text"
          placeholder="Filter by organization"
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
        />

        <button onClick={() => fetchUsers(1)} disabled={loading}>
          {loading ? "Loading..." : "Apply"}
        </button>
      </div>

      {error && <p className="paginated-users-error">{error}</p>}

      {data && (
        <div className="paginated-users-summary">
          <span>Total: {data.totalCount}</span>
          <span>
            Page {data.pageNumber} / {data.totalPages}
          </span>
        </div>
      )}

      {data && (
        <div className="paginated-users-table-wrap">
          <table className="paginated-users-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Organization</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {data.items.length > 0 ? (
                data.items.map((u) => (
                  <tr key={u.id}>
                    <td>{u.fullName || `${u.name} ${u.surname}`.trim()}</td>
                    <td>{u.email}</td>
                    <td>{u.organization}</td>
                    <td>
                      <span
                        className={
                          u.isActive
                            ? "paginated-badge-active"
                            : "paginated-badge-inactive"
                        }
                      >
                        {u.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td>
                      <div className="paginated-actions">
                        <button
                          type="button"
                          className="paginated-edit-btn"
                          onClick={() => handleEditClick(u.id)}
                          disabled={editLoading}
                        >
                          Edit
                        </button>

                        <button
                          type="button"
                          className="paginated-delete-btn"
                          onClick={() => handleDeleteClick(u.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="paginated-empty">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {data && (
        <div className="paginated-users-pagination">
          <button
            onClick={() => fetchUsers(pageNumber - 1)}
            disabled={!data.hasPreviousPage || loading}
          >
            Prev
          </button>

          <span>
            Page {data.pageNumber} / {data.totalPages}
          </span>

          <button
            onClick={() => fetchUsers(pageNumber + 1)}
            disabled={!data.hasNextPage || loading}
          >
            Next
          </button>
        </div>
      )}

      {editOpen && (
        <div className="edit-user-modal-overlay">
          <div className="edit-user-modal">
            <div className="edit-user-modal-header">
              <h3>Edit User</h3>
              <button
                type="button"
                className="edit-user-close-btn"
                onClick={closeEditModal}
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSaveEdit} className="edit-user-form">
              <div className="name-row">
                <div className="edit-user-form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    value={editForm.firstName}
                    onChange={(e) =>
                      setEditForm((prev) => ({
                        ...prev,
                        firstName: e.target.value,
                      }))
                    }
                    required
                  />
                </div>

                <div className="edit-user-form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    value={editForm.lastName}
                    onChange={(e) =>
                      setEditForm((prev) => ({
                        ...prev,
                        lastName: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>

              <div className="edit-user-form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={editForm.email}
                  onChange={(e) =>
                    setEditForm((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  required
                />
              </div>

              <div className="edit-user-form-group">
                <label>Occupation</label>
                <input
                  type="text"
                  value={editForm.occupation}
                  onChange={(e) =>
                    setEditForm((prev) => ({
                      ...prev,
                      occupation: e.target.value,
                    }))
                  }
                />
              </div>

              <div className="edit-user-form-group">
                <label>Organization</label>
                <input
                  type="text"
                  value={editForm.organization}
                  onChange={(e) =>
                    setEditForm((prev) => ({
                      ...prev,
                      organization: e.target.value,
                    }))
                  }
                />
              </div>

              <div className="edit-user-checkbox-row">
                <label>
                  <input
                    type="checkbox"
                    checked={editForm.isActive}
                    onChange={(e) =>
                      setEditForm((prev) => ({
                        ...prev,
                        isActive: e.target.checked,
                      }))
                    }
                  />
                  Active
                </label>
              </div>

              <div className="edit-user-modal-actions">
                <button
                  type="button"
                  className="edit-user-cancel-btn"
                  onClick={closeEditModal}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="edit-user-save-btn"
                  disabled={saveLoading}
                >
                  {saveLoading ? "Saving..." : "Update User"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default GetPaginatedUsers;
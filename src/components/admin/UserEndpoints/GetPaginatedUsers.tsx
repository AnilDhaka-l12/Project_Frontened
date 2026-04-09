import { useEffect, useState } from "react";
import { apiRequest } from "../../../utils/api";
import "./GetPaginatedUsers.css";

type User = {
  id: string;
  fullName: string;
  email: string;
  occupation: string;
  organization: string;
  createdAt: string;
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

  const [pageNumber, setPageNumber] = useState(1);
  const [organization, setOrganization] = useState("");

  const fetchUsers = async (page = pageNumber) => {
    try {
      setLoading(true);

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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(1);
  }, []);

  return (
    <div className="paginated-users-card">
      <h2 className="paginated-users-title">Get Paginated Users</h2>

      {/* FILTER */}
      <div className="paginated-users-filters">
        <input
          type="text"
          placeholder="Filter by organization"
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
        />

        <button onClick={() => fetchUsers(1)}>
          {loading ? "Loading..." : "Apply"}
        </button>
      </div>

      {/* SUMMARY */}
      {data && (
        <div className="paginated-users-summary">
          <span>Total: {data.totalCount}</span>
          <span>
            Page {data.pageNumber} / {data.totalPages}
          </span>
        </div>
      )}

      {/* TABLE */}
      {data && (
        <div className="paginated-users-table-wrap">
          <table className="paginated-users-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Organization</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {data.items.map((u) => (
                <tr key={u.id}>
                  <td>{u.fullName}</td>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* PAGINATION */}
      {data && (
        <div className="paginated-users-pagination">
          <button
            onClick={() => fetchUsers(pageNumber - 1)}
            disabled={!data.hasPreviousPage}
          >
            Prev
          </button>

          <span>
            Page {data.pageNumber} / {data.totalPages}
          </span>

          <button
            onClick={() => fetchUsers(pageNumber + 1)}
            disabled={!data.hasNextPage}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default GetPaginatedUsers;
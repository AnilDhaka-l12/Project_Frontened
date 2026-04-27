import "./UserEndpoints.css";
import GetPaginatedUsers from "./GetPaginatedUsers";

type UserEndpointsProps = {
  searchTerm?: string;
};

function UserEndpoints({ searchTerm }: UserEndpointsProps) {
  // keep it so TS doesn't complain if passed from parent
  void searchTerm;

  return (
    <div className="user-endpoints-container">
      <div className="user-endpoints-header">
        <h2 className="user-endpoints-title">Users</h2>
        <p className="user-endpoints-subtitle">
          Manage and view users from your system
        </p>
      </div>

      <div className="user-endpoints-content">
        <GetPaginatedUsers />
      </div>
    </div>
  );
}

export default UserEndpoints;
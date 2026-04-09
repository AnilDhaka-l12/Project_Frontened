import "./UserEndpoints.css";
import GetPaginatedUsers from "./GetPaginatedUsers";
import PostUser from "./PostUser";
import GetUserById from "./GetUserById";
import PutUser from "./PutUser";
import DeleteUser from "./DeleteUser";
import GetUserByEmail from "./GetUserByEmail";
import GetUserByOrganization from "./GetUserByOrganization";
import GetActiveUsers from "./GetActiveUsers";

type UserEndpointsProps = {
  searchTerm: string;
};

function UserEndpoints({ searchTerm }: UserEndpointsProps) {
  const normalizedSearch = searchTerm.toLowerCase().trim();

  const endpoints = [
    { label: "Get Users", component: <GetPaginatedUsers /> },
    { label: "Post User", component: <PostUser /> },
    { label: "Get User By Id", component: <GetUserById /> },
    { label: "Put User", component: <PutUser /> },
    { label: "Delete User", component: <DeleteUser /> },
    { label: "Get User By Email", component: <GetUserByEmail /> },
    { label: "Get User By Organization", component: <GetUserByOrganization /> },
    { label: "Get Active Users", component: <GetActiveUsers /> },
  ];

  const filteredEndpoints = endpoints.filter((item) =>
    item.label.toLowerCase().includes(normalizedSearch)
  );

  return (
    <div className="user-endpoints-container">
      <h2 className="user-endpoints-title">Users</h2>

      {filteredEndpoints.length > 0 ? (
        filteredEndpoints.map((item, index) => (
          <div key={index}>{item.component}</div>
        ))
      ) : (
        <p className="no-results">No results found</p>
      )}
    </div>
  );
}

export default UserEndpoints;
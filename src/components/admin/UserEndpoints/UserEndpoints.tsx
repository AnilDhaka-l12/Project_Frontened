import "./UserEndpoints.css";
import GetUsers from "./GetUsers";
import PostUser from "./PostUser";
import GetUserById from "./GetUserById";
import PutUser from "./PutUser";
import DeleteUser from "./DeleteUser";
import GetUserByEmail from "./GetUserByEmail";
import GetUserByOrganization from "./GetUserByOrganization";
import GetActiveUsers from "./GetActiveUsers";

function UserEndpoints() {
  return (
    <div className="user-endpoints-container">
      <h2 className="user-endpoints-title">Users</h2>

      <GetUsers />
      <PostUser />
      <GetUserById />
      <PutUser />
      <DeleteUser />
      <GetUserByEmail />
      <GetUserByOrganization />
      <GetActiveUsers />
    </div>
  );
}

export default UserEndpoints;
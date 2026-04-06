function DeleteUser() {
  return (
    <div className="endpoint-card delete-card">
      <span className="endpoint-method delete-method">DELETE</span>
      <span className="endpoint-path">/api/Users/{"{id}"}</span>
    </div>
  );
}

export default DeleteUser;
function GetActiveUsers() {
  return (
    <div className="endpoint-card get-card">
      <span className="endpoint-method get-method">GET</span>
      <span className="endpoint-path">/api/Users/active</span>
    </div>
  );
}

export default GetActiveUsers;
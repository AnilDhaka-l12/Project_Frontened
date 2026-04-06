function GetUserByOrganization() {
  return (
    <div className="endpoint-card get-card">
      <span className="endpoint-method get-method">GET</span>
      <span className="endpoint-path">
        /api/Users/organization/{"{organization}"}
      </span>
    </div>
  );
}

export default GetUserByOrganization;
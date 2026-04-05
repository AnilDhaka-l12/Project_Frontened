import "./UserStats.css";

function UserStats() {
  const dailyActiveUsers = 1248;

  const yearlyDownloads = [45, 60, 80, 75, 95, 120, 110, 130, 125, 140, 150, 170];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const maxValue = Math.max(...yearlyDownloads);

  return (
    <div className="userstats-grid">
      <div className="userstats-card">
        <p className="userstats-label">Daily Active Users</p>
        <h2 className="userstats-value">{dailyActiveUsers}</h2>
        <p className="userstats-note">Static demo data for now</p>
      </div>

      <div className="userstats-card userstats-graph-card">
        <p className="userstats-label">Yearly User Download Reports</p>

        <div className="userstats-graph">
          {yearlyDownloads.map((value, index) => (
            <div className="userstats-graph-item" key={months[index]}>
              <div
                className="userstats-graph-bar"
                style={{ height: `${(value / maxValue) * 160}px` }}
                title={`${months[index]}: ${value}`}
              />
              <span className="userstats-graph-label">{months[index]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserStats;
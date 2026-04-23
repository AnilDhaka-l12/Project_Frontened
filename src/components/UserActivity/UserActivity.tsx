import "./UserActivity.css";

function UserActivity() {
  
  const hourlyData = [
    { time: "00:00", users: 5 },
    { time: "01:00", users: 3 },
    { time: "02:00", users: 2 },
    { time: "03:00", users: 1 },
    { time: "04:00", users: 2 },
    { time: "05:00", users: 4 },
    { time: "06:00", users: 8 },
    { time: "07:00", users: 12 },
    { time: "08:00", users: 18 },
    { time: "09:00", users: 25 },
    { time: "10:00", users: 30 },
    { time: "11:00", users: 28 },
    { time: "12:00", users: 24 },
    { time: "13:00", users: 20 },
    { time: "14:00", users: 26 },
    { time: "15:00", users: 22 },
    { time: "16:00", users: 27 },
    { time: "17:00", users: 21 },
    { time: "18:00", users: 19 },
    { time: "19:00", users: 16 },
    { time: "20:00", users: 14 },
    { time: "21:00", users: 12 },
    { time: "22:00", users: 9 },
    { time: "23:00", users: 6 },
  ];

  const getLevelClass = (users: number) => {
    if (users >= 20) return "high";
    if (users >= 10) return "medium";
    return "low";
  };

  return (
    <section className="user-activity">
      <div className="user-activity__panel">
        <div className="user-activity__header">
          <h3>Hourly Activity</h3>
          <p>24 hour breakdown</p>
        </div>

        <div className="user-activity__grid">
          {hourlyData.map((item) => (
            <div
              key={item.time}
              className={`user-activity__card ${getLevelClass(item.users)}`}
            >
              <span className="user-activity__time">{item.time}</span>

              <div className="user-activity__content">
                <span className="user-activity__count">{item.users}</span>
                <span className="user-activity__text">users</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UserActivity;
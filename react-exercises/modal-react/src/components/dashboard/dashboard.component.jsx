import React from "react";
import { useHistory } from "react-router-dom";

const Dashboard = (props) => {
  const history = useHistory();
  const logout = () => {
    history.push("/");
  };
  return (
    <div className="header">
      <button className="btn home">Modal</button>
      <button className="btn" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;

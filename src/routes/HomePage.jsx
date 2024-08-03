import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Link to="/dashboard" className="text-white">
        Dasboard
      </Link>
    </div>
  );
};

export default HomePage;

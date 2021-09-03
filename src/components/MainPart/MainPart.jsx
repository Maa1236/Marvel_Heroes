import React from "react";
import "./MainPart.css";

const MainPart = () => {
  return (
    <div className="mainClass">
      <div className="allHeros">
        <div class="card">
          <h5 class="card-title">Card title</h5>
          <img class="card-img-top" src="..." alt="slka " />
          <div class="card-body">
            <button class="card-link">Info</button>
            <button class="card-link">Add</button>
          </div>
        </div>
      </div>

      <div className="myTeam"></div>
    </div>
  );
};

export default MainPart;

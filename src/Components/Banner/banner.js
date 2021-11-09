import React from "react";
import bgimage from "../../Assets/Images/work.png";
function banner() {
  return (
    <div className="App">
      <div className="bannerClasse">
        <img className="bannerImage" alt="bannerimage" src={bgimage}></img>
      </div>
    </div>
  );
}

export default banner;

import "../../styles/BackgroundStarEffect.css";
import { useEffect } from "react";

export default function BackgroundStarEffect() {

  function pickNum() {
    return Math.random() * 7;
  }

  return (
    <div className="star-container">
      <div className="star">
        <span style={{ "--i": pickNum() }} />
        <span style={{ "--i": pickNum() }} />
        <span style={{ "--i": pickNum() }} />
      </div>
      <div className="star">
        <span style={{ "--i": pickNum() }} />
        <span style={{ "--i": pickNum() }} />
        <span style={{ "--i": pickNum() }} />
      </div>
    </div>
  );
}

import { DownArrow, UpArrow } from "../icons/arrows";
import { useState } from "react";

export function Vote({ score }) {
  const [scoreState, setScoreState] = useState(score);
  const [voteType, setVoteType] = useState("none");

  const handleUpClick = () => {
    if (voteType === "up") {
      setScoreState(scoreState - 1);
      setVoteType("none");
    } else {
      setScoreState(scoreState + 1);
      setVoteType("up");
    }
  };

  const handleDownClick = () => {
    if (voteType === "down") {
      setScoreState(scoreState + 1);
      setVoteType("none");
    } else {
      setScoreState(scoreState - 1);
      setVoteType("down");
    }
  };

  return (
    <div className="post__voting">
      <UpArrow handleUpClick={handleUpClick} votedUp={voteType === "up"} />
      <span
        className="post__voting-counter"
        style={{
          color:
            voteType === "up"
              ? "green"
              : voteType === "down"
              ? "red"
              : "#2f2021",
        }}
      >
        {scoreState > 1000
          ? `${(Math.floor(scoreState / 100) / 10).toFixed(1)}k`
          : scoreState}
      </span>
      <DownArrow
        handleDownClick={handleDownClick}
        votedDown={voteType === "down"}
      />
    </div>
  );
}

import moment from "moment";
import React from "react";
import "./card.css";
const Repo = ({
  name,
  description,
  stars,
  issues,
  avatar,
  ownerName,
  createdAt,
}) => {
  const duration = moment(createdAt).fromNow();
  return (
    <div className="repo-box">
      <img src={avatar} alt="repo-owner-img" className="repo-img" />
      <div className="repo-info-box">
        <p className="repo-name">{name}</p>
        <p className="repo-description">{description}</p>
        <aside className="repo-secondary-info">
          <div className="repo-stars">
            <ion-icon name="star-outline"></ion-icon>
            <p>{stars} stars</p>
          </div>
          <div className="repo-issues">
            <ion-icon name="bug-outline"></ion-icon>
            <p>{issues} Issues</p>
          </div>
          <p className="repo-submit">
            Submitted {duration} by <span>{ownerName}</span>
          </p>
        </aside>
      </div>
    </div>
  );
};

export default Repo;

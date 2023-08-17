import React, { useEffect, useState } from "react";
import "./Card.css";
import Loader from "./Loader";

const Card = ({ result }) => {
  const loaderImage =
    "https://github.githubassets.com/images/mona-loading-default.gif"; // Path to your loader GIF image

  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowLoader(false);
    }, 1000); // 1000 milliseconds = 1 second

    return () => clearTimeout(delay);
  }, []);

  // if (showLoader) {
  //   return;
  // }

  return (
    <div className="card-container">
      {!showLoader ? (
        <>
          <div className="card-image">
            <img
              className="card-img"
              src={result.owner.avatarUrl}
              alt={result.name}
            />
          </div>
          <div className="card-content">
            <h1>{result.name}</h1>
            <h4>{result.nameWithOwner}</h4>
            <p>
              <span>Created At : </span>
              {new Date(result.createdAt).getUTCFullYear()}
            </p>
            <p>
              <span>visibility : </span>
              {result.visibility}
            </p>
            <p>
              <span>Stars : </span>
              {result.stargazers.totalCount}
            </p>
            <div className="card-link">
              <a href={result.url} target="_blank" rel="noreferrer">
                Open
              </a>
            </div>
          </div>
        </>
      ) : (
        <Loader loaderImage={loaderImage} />
      )}
    </div>
  );
};

export default Card;

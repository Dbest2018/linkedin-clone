import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__leftarticle">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__rightarticle">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linkedin news</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        "Oxford University to grant more scholarships",
        "Education- 15k readers"
      )}
      {newsArticle("New Coin Dodge falls", "Crypto- 7k readers")}
      {newsArticle(
        "Netflix has cancelled final space",
        "entertainment- 200k readers"
      )}
      {newsArticle(
        "New corona virus variant emerged",
        "Top news- 6million readers"
      )}
      {newsArticle("Ronaldo joins Man utd", "Sports- 160k readers")}
    </div>
  );
};

export default Widgets;

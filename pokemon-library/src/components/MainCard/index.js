import React from "react";

function MainCard({ pokemon }) {
  //pokemon prop is passed in from App.js
  return (
    <div>
      {/* <div className="search"> */}
      <h1>Choose Your Pokemon:</h1>
      {/* add a search function to be able to search by name/id of pokemon and have it render in this card */}
      {/* </div> */}
      {/* <main> */}{" "}
      {/* get the info for the main pokemon and diplay this here */}
      <p>this is where the main pokemon card will be</p>
      {/* </main> */}
    </div>
  );
}
export default MainCard;

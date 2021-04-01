import React from "react";

function Search(props) {

  //Things I need
  //keep track of input text
  //Something to reference names(first and last) - some form of matching 
  //Something to reference country - some form of matching
  //Display everything referenced this.setState will be used

  return (
    <input
      type="text"
      className="form-control"
      placeholder=""
      aria-label="Example text with button addon"
      aria-describedby="button-addon1"
      onChange={props.filter}
    />
  );
}

export default Search;

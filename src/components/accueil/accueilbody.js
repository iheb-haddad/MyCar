import React from "react";
import {FormBox,CarList} from "../index"

function AccueilBody(props) {
  return (
    <div style={{ display: "flex",flexWrap:"wrap",padding:"2vh 5vw",justifyContent:'space-evenly',alignItems:"center"}}>
        <CarList />
        <FormBox />
    </div>
  );
}

export default AccueilBody;

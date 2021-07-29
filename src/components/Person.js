import React, { useState } from "react";

const Person = ({ person }) => {
  const [nameInfo, setNameInfo] = useState("");
  console.log(nameInfo);
  if (nameInfo) {
    return (
      <>
        <div class="container-card">
          <p id="name">{person.name}</p>
          <p class="data">Hair Colour : {person.hair_color}</p>
          <p class="data">Eye Colour : {person.eye_color}</p>

          <p class="data">Height :{person.height}</p>
          <p class="data">Mass : {person.mass}</p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="contacts">
          <div className="contact-left">{person.name}</div>
          <div className="contact-right">
            <div className="btn" onClick={() => setNameInfo(person.name)}>
              View
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Person;

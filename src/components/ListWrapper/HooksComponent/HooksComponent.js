import React, { useState } from "react";

const HooksComponent = () => {
  const [name, setName] = useState("Kuba");
  const [surname, setSurname] = useState("Hermyt");

  const resetPerson = (e) => {
    e.preventDefault();

    setName("Name");
    setSurname("Surname");
  };

  return (
    <>
      <form onSubmit={resetPerson}>
        <input onChange={(e) => setName(e.target.value)} value={name} />
        <input onChange={(e) => setSurname(e.target.value)} value={surname} />
        <button type="submit">Submit</button>
      </form>
      <span>
        {name} {surname}
      </span>
    </>
  );
};

export default HooksComponent;

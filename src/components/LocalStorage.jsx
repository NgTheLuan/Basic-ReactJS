import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const LocalStorage = () => {
  const [name, setName] = useLocalStorage("name", "Luân");

  return (
    <React.Fragment>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </React.Fragment>
  );
};

export default LocalStorage;

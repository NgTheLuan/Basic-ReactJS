import React, { useEffect } from "react";
import useHash from "../hooks/useHash";

const Hash = () => {
  const [hash, setHash] = useHash();
  useEffect(() => {
    setHash("");
  }, []);

  return (
    <>
      <p>window.location.href: {window.location.href}</p>
      <p>Edit hash: </p>
      <input value={hash} onChange={(e) => setHash(e.target.value)} />
    </>
  );
};

export default Hash;

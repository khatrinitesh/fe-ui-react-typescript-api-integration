import { useEffect, useState } from "react";

const Preloader = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 2000);
    return () => clearTimeout(timeout);
  });
  return <>{show ? <div>Loading...</div> : null}</>;
};

export default Preloader;

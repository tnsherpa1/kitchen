import React from "react";

const Home = () => {
  var a = "asd";
  const [state, setState] = React.useState("asd");

  React.useEffect(() => {
    console.log("iu am here");
  }, [state]);

  return <div>Welcome world</div>;
};

export default Home;

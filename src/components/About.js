import { Outlet } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      This is Food Orderdering app
      <Outlet />
    </div>
  );
};

export default AboutUs;

import React from "react";
import SideMenu from "./Shared/SideMenu";
import Header from "./Shared/Header";

const MainLayout = () => {
  return (
    <div className="main_Layout">
      <Header />
      <div>
        <SideMenu />
        {/* Here it should be all the pages(routes) */}
      </div>
    </div>
  );
};

export default MainLayout;

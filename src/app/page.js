// app/page.js
import React from "react";
import SideBar from "../components/dashboard/sideBar";

const Page = () => {
  return (
    <div className=" w-full h-full min-h-screen bg-backgroundPrimary">
      <div className="flex w-full h-full">
        <SideBar />
        <div>Dashboard</div>
      </div>
    </div>
  );
};

export default Page;

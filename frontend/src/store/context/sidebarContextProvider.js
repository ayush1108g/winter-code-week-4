import SidebarContext from "./sidebar-context";
import { useState } from "react";

const SidebarContextProvider = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    //console.log(!sidebarOpen);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
    //console.log("close-sidebar");
  };

  const context = {
    isSidebarOpen: sidebarOpen,
    toggleSidebar: toggleSidebar,
    closeSidebar: closeSidebar,
  };

  return (
    <SidebarContext.Provider value={context}>
      {props.children}
    </SidebarContext.Provider>
  );
};
export default SidebarContextProvider;

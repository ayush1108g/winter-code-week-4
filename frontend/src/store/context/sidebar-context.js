import React from "react";

const SidebarContext = React.createContext({
  isSidebarOpen: false,
  toggleSidebar: () => {},
  closeSidebar: () => {},
});

export default SidebarContext;

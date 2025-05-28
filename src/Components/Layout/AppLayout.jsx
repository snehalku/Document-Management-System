import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [parentScroll, setParentScroll] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex" style={{ marginTop: "64px" }}>
        {" "}
        <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
        <main
          className="flex-1 p-4 bg-gray-100"
          style={{
            marginLeft: "145px",
            // paddingTop: "10px",
            overflowY: parentScroll ? "auto" : "hidden",
            // height: "calc(100vh - 64px)", // ✅ FIX: Ensure content fits within the screen
          }}
        >
          <Outlet context={{ setParentScroll }} />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;

// import React, { useState } from "react";
// import { Box, Toolbar } from "@mui/material";
// import Header from "./Header";
// import Sidebar from "./Sidebar";
// import { Outlet } from "react-router-dom";

// function AppLayout() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [parentScroll, setParentScroll] = useState(true);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <Box display="flex" flexDirection="column">
//       <Header toggleSidebar={toggleSidebar} />

//       <Box display="flex" sx={{ marginTop: "64px" }}>
//         {" "}
//         <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
//         <Box
//           component="main"
//           sx={{
//             bgcolor: "#f3f4f6",
//             marginLeft: "145px",
//             overflowY: parentScroll ? "auto" : "hidden",
//             // height: "calc(100vh - 64px)", // ✅ FIX: Ensure content fits within the screen
//           }}
//         >
//           <Outlet context={{ setParentScroll }} />
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// export default AppLayout;

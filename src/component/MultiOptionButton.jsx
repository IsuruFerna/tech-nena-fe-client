import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import PrintIcon from "@mui/icons-material/Print";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

const MultiOptionButton = () => {
   const navigate = useNavigate();
   const actions = [
      { icon: <ArrowUpwardIcon />, name: "Go on top" },
      { icon: <PersonIcon />, name: "Account" },
      { icon: <PrintIcon />, name: "Print" },
      { icon: <AddIcon />, name: "New Article" },
   ];

   const doSomething = (action) => {
      switch (action) {
         case "Go on top": {
            window.scrollTo(0, 0);
            break;
         }
         case "Account": {
            navigate("/profile");
            break;
         }
         case "Print": {
            console.log("print to embed");
            break;
         }
         case "New Article": {
            console.log("Create new article! to embed");
            navigate("/create");
            break;
         }
         default:
            window.scrollTo(0, 0);
      }
   };

   return (
      <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
         <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: "absolute", bottom: 16, right: 10 }}
            icon={<SpeedDialIcon />}
         >
            {actions.map((action) => (
               <SpeedDialAction
                  className="bg-warning"
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  onClick={() => {
                     doSomething(action.name);
                  }}
               />
            ))}
         </SpeedDial>
      </Box>
   );
};

export { MultiOptionButton };

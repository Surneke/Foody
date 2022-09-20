import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  shadows: {
    1: "none",
    0: "none",
    4: "none",
  },
  palette: {
    primary: {
      main: "#66B60F",
    },
    info: {
      main: "#DFE0EB",
    },
    secondary: {
      main: "#73bcec",
    },
    success: {
      main: "#000723",
    },
    error: {
      main: "#FF0000",
    },
    background: {
      default: " #f5f5f7",
    },
    text: {
      primary: "#383838",
    },
  },
});

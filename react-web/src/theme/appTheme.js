import { createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#6c63ff",
      dark: "#554bd8",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f7f8fc",
      paper: "#ffffff",
    },
    text: {
      primary: "#202235",
      secondary: "#85889a",
    },
    divider: "#ececf3",
  },
  typography: {
    fontFamily: '"Inter", "Noto Sans Thai", Arial, sans-serif',
    h4: {
      fontWeight: 800,
      letterSpacing: "-0.03em",
    },
    h5: {
      fontWeight: 800,
      letterSpacing: "-0.02em",
    },
    button: {
      fontWeight: 700,
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 14,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          minHeight: 44,
          borderRadius: 12,
          boxShadow: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid #ececf3",
          boxShadow: "0 12px 35px rgba(43, 45, 66, 0.05)",
        },
      },
    },
  },
});

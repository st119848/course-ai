import { CssBaseline, ThemeProvider } from "@mui/material";
import DashboardLayout from "./components/layout/DashboardLayout";
import TodoPage from "./pages/TodoPage";
import { appTheme } from "./theme/appTheme";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <DashboardLayout>
        <TodoPage />
      </DashboardLayout>
    </ThemeProvider>
  );
}

export default App;

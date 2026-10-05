import { Box, Container } from "@mui/material";
import Header from "./Header";

function DashboardLayout({ children }) {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <Header />
      <Container maxWidth="xl" sx={{ py: { xs: 3, md: 5 } }}>
        {children}
      </Container>
    </Box>
  );
}

export default DashboardLayout;

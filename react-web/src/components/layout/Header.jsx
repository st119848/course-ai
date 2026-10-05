import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

function Header() {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ borderBottom: "1px solid", borderColor: "divider" }}
    >
      <Toolbar sx={{ minHeight: { xs: 68, md: 76 } }}>
        <IconButton
          aria-label="Open menu"
          sx={{ display: { xs: "inline-flex", md: "none" }, mr: 1 }}
        >
          <MenuRoundedIcon />
        </IconButton>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <CheckCircleOutlineRoundedIcon color="primary" fontSize="large" />
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: 800, color: "text.primary" }}
          >
            taskly
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Avatar
          sx={{
            width: 38,
            height: 38,
            bgcolor: "primary.main",
            fontSize: "0.9rem",
            fontWeight: 700,
          }}
        >
          JD
        </Avatar>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

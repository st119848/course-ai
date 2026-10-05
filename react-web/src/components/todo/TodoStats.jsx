import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import PendingActionsRoundedIcon from "@mui/icons-material/PendingActionsRounded";
import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";

const statItems = [
  { key: "total", label: "Total tasks", icon: FormatListBulletedRoundedIcon },
  { key: "active", label: "In progress", icon: PendingActionsRoundedIcon },
  { key: "completed", label: "Completed", icon: CheckRoundedIcon },
];

function TodoStats({ stats }) {
  return (
    <Grid container spacing={2} sx={{ mb: 3 }}>
      {statItems.map(({ key, label, icon: Icon }) => (
        <Grid item xs={12} sm={4} key={key}>
          <Card>
            <CardContent sx={{ p: 2.5 }}>
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    width: 42,
                    height: 42,
                    color: "primary.main",
                    bgcolor: "rgba(108, 99, 255, 0.1)",
                    borderRadius: 2,
                  }}
                >
                  <Icon />
                </Stack>
                <BoxedStat value={stats[key]} label={label} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

function BoxedStat({ value, label }) {
  return (
    <Stack spacing={0.25}>
      <Typography variant="h5">{value}</Typography>
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
    </Stack>
  );
}

export default TodoStats;

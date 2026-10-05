import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import {
  Checkbox,
  Chip,
  IconButton,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

const categoryColors = {
  Work: "primary",
  Personal: "success",
  Study: "warning",
};

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <ListItem
      disableGutters
      secondaryAction={
        <IconButton
          edge="end"
          aria-label={`Delete ${todo.title}`}
          onClick={() => onDelete(todo.id)}
          color="error"
        >
          <DeleteOutlineRoundedIcon />
        </IconButton>
      }
      sx={{
        px: { xs: 0, sm: 1 },
        py: 1.25,
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Checkbox
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        inputProps={{ "aria-label": `Complete ${todo.title}` }}
        sx={{ mr: 1 }}
      />
      <ListItemText
        primary={
          <Typography
            sx={{
              fontWeight: 700,
              textDecoration: todo.completed ? "line-through" : "none",
              color: todo.completed ? "text.secondary" : "text.primary",
              overflowWrap: "anywhere",
            }}
          >
            {todo.title}
          </Typography>
        }
        secondary={
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 0.75 }}>
            <Chip
              label={todo.category}
              color={categoryColors[todo.category] || "default"}
              size="small"
              variant="outlined"
            />
            <Typography variant="caption" color="text.secondary">
              {todo.dueDate}
            </Typography>
          </Stack>
        }
        sx={{ mr: 6 }}
      />
    </ListItem>
  );
}

export default TodoItem;

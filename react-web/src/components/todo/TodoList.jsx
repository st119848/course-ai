import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import {
  Card,
  CardContent,
  InputAdornment,
  List,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onToggle, onDelete }) {
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      const matchesFilter =
        filter === "all" ||
        (filter === "active" && !todo.completed) ||
        (filter === "completed" && todo.completed);
      const matchesQuery = todo.title
        .toLowerCase()
        .includes(query.toLowerCase().trim());

      return matchesFilter && matchesQuery;
    });
  }, [filter, query, todos]);

  return (
    <Card component="section">
      <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "stretch", sm: "center" }}
          spacing={2}
          sx={{ mb: 1 }}
        >
          <Typography variant="h6" sx={{ fontWeight: 800 }}>
            My tasks
          </Typography>
          <TextField
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search tasks"
            size="small"
            sx={{ width: { xs: "100%", sm: 220 } }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchRoundedIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
          />
        </Stack>

        <ToggleButtonGroup
          value={filter}
          exclusive
          onChange={(_, value) => value && setFilter(value)}
          size="small"
          sx={{ mb: 1, overflowX: "auto", maxWidth: "100%" }}
        >
          <ToggleButton value="all">All</ToggleButton>
          <ToggleButton value="active">Active</ToggleButton>
          <ToggleButton value="completed">Completed</ToggleButton>
        </ToggleButtonGroup>

        {filteredTodos.length > 0 ? (
          <List disablePadding>
            {filteredTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={onToggle}
                onDelete={onDelete}
              />
            ))}
          </List>
        ) : (
          <Stack alignItems="center" spacing={1} sx={{ py: 6 }}>
            <Typography variant="h6">No tasks found</Typography>
            <Typography color="text.secondary">
              Try another filter or add a new task.
            </Typography>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
}

export default TodoList;

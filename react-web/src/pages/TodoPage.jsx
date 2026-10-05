import { Grid, Stack, Typography } from "@mui/material";
import TodoForm from "../components/todo/TodoForm";
import TodoList from "../components/todo/TodoList";
import TodoStats from "../components/todo/TodoStats";
import { useTodos } from "../hooks/useTodos";

function TodoPage() {
  const { todos, stats, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <Stack spacing={3}>
      <Grid
        container
        alignItems={{ xs: "flex-start", md: "center" }}
        justifyContent="space-between"
        spacing={2}
      >
        <Grid item xs={12} md={8}>
          <Typography variant="h4" component="h1" sx={{ mb: 0.75 }}>
            Good morning, Jordan
          </Typography>
          <Typography color="text.secondary">
            Stay organized and get things done.
          </Typography>
        </Grid>
        <Grid item xs={12} md="auto">
          <Typography variant="body2" color="text.secondary">
            {stats.active} tasks left to complete
          </Typography>
        </Grid>
      </Grid>

      <TodoStats stats={stats} />
      <TodoForm onAddTodo={addTodo} />
      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </Stack>
  );
}

export default TodoPage;

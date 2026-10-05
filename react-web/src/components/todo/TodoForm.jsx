import AddRoundedIcon from "@mui/icons-material/AddRounded";
import {
  Button,
  Card,
  CardContent,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { TODO_CATEGORIES } from "../../types/todo";

const initialForm = {
  title: "",
  category: "Work",
  dueDate: "Today",
};

function TodoForm({ onAddTodo }) {
  const [form, setForm] = useState(initialForm);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.title.trim()) return;

    onAddTodo(form);
    setForm(initialForm);
  };

  return (
    <Card component="section">
      <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 800 }}>
          Add a new task
        </Typography>
        <Stack
          component="form"
          onSubmit={handleSubmit}
          direction={{ xs: "column", sm: "row" }}
          spacing={1.5}
        >
          <TextField
            name="title"
            value={form.title}
            onChange={updateField}
            placeholder="What needs to be done?"
            label="Task name"
            size="small"
            fullWidth
            required
          />
          <TextField
            name="category"
            value={form.category}
            onChange={updateField}
            label="Category"
            size="small"
            select
            sx={{ minWidth: { sm: 130 } }}
          >
            {TODO_CATEGORIES.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            name="dueDate"
            value={form.dueDate}
            onChange={updateField}
            label="Due"
            size="small"
            select
            sx={{ minWidth: { sm: 130 } }}
          >
            <MenuItem value="Today">Today</MenuItem>
            <MenuItem value="Tomorrow">Tomorrow</MenuItem>
            <MenuItem value="Next week">Next week</MenuItem>
          </TextField>
          <Button
            type="submit"
            variant="contained"
            startIcon={<AddRoundedIcon />}
            sx={{ flexShrink: 0 }}
          >
            Add task
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default TodoForm;

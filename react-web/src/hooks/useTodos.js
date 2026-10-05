import { useMemo, useState } from "react";
import { initialTodos } from "../data/initialTodos";

export function useTodos() {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = ({ title, category, dueDate }) => {
    setTodos((currentTodos) => [
      {
        id: Date.now(),
        title: title.trim(),
        category,
        dueDate,
        completed: false,
      },
      ...currentTodos,
    ]);
  };

  const toggleTodo = (todoId) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (todoId) => {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== todoId),
    );
  };

  const stats = useMemo(() => {
    const completed = todos.filter((todo) => todo.completed).length;

    return {
      total: todos.length,
      completed,
      active: todos.length - completed,
    };
  }, [todos]);

  return { todos, stats, addTodo, toggleTodo, deleteTodo };
}

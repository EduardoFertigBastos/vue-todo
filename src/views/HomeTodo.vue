<script setup>
  import TodoList from '../components/TodoList.vue'
  // import '../assets/todo.css'
  import { v4 as uuidv4 } from 'uuid';

  const tasks = [
    {
      id: uuidv4(),
      title: 'Task 1',
      completed: false
    },
    {
      id: uuidv4(),
      title: 'Task 2',
      completed: false
    },
    {
      id: uuidv4(),
      title: 'Task 3',
      completed: false
    }
  ]
</script>

<template>
  <main>
    <TodoList :tasks="tasks" />
  </main>
</template>


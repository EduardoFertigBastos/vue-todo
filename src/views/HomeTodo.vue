<script setup>
import TodoList from '../components/TodoList.vue'
</script>

<template>
  <main>
    <TodoList :preTasks="preTasks" />
  </main>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'HomeTodo',
  data() {
    return {
      preTasks: [
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
    }
  }
}
</script>

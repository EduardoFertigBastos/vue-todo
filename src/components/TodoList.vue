<template>
  <div class="container">
    <div class="task">
      <!-- title -->
      <div class="title">
        <h1>To Do List</h1>
      </div>
      <!-- form -->
      <div class="form">
        <input type="text" placeholder="New Task" v-model="newTask" @keyup.enter="addTask" />
        <button @click="addTask"><i class="fas fa-plus"></i></button>
      </div>
      <!-- task lists -->
      <div class="taskItems">
        <ul>
          <TaskItem
            v-for="(task, index) in tasks"
            :key="index"
            :task="task"
            @editTask="editTask(task.id)"
            @removeTask="removeTask(task.id)"
            @completeTask="completeTask(task.id)"
          ></TaskItem>
        </ul>
      </div>
      <!-- buttons -->
      <div class="clearBtns">
        <button @click="clearCompleted">Clear completed</button>
        <button @click="clearAll">Clear all</button>
      </div>
      <!-- pending task -->
      <div class="pendingTasks">
        <span>Pending Tasks: {{ incomplete }} </span>
      </div>
    </div>
  </div>
</template>

<script>
import TaskItem from './TaskItem.vue'
import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'TodoList',
  props: {
    preTasks: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    incomplete() {
      return this.tasks.filter((task) => !task.completed).length;
    },
  },
  data() {
    return {
      newTask: '',
      tasks: this.preTasks,
    }
  },
  methods: {
    findById(id) {
      const element = this.tasks.find(el => el.id === id);

      return element;
    },
    locateIndexOfTask(task) {
      const index = this.tasks.indexOf(task);

      return index;
    },
    addTask() {
      if (this.newTask) {
        this.tasks.push({
          id: uuidv4(),
          title: this.newTask,
          completed: false,
        });

        this.newTask = '';
      }
    },
    removeTask(id) {
      const elementRemoved = this.findById(id);

      this.tasks.splice(
        this.locateIndexOfTask(elementRemoved), 
        1
      );
    },
    editTask(id) {
      const element = this.findById(id);

      console.log(element)
    },

    clearCompleted() {
      this.tasks = this.tasks.filter((task) => !task.completed);
    },
    clearAll() {
      this.tasks = [];
    },
    completeTask(id) {
      const element = this.findById(id);
      const index = this.locateIndexOfTask(element);
      
      this.tasks[index].completed = !this.tasks[index].completed;
    }
  },
  components: { TaskItem }
}
</script>






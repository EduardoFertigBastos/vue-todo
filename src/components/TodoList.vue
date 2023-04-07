<template>
  <div class="container">
    <div class="task">
      <!-- title -->
      <div class="title">
        <h1>To Do List</h1>
      </div>
      <!-- form -->
      <div class="form">
        <input type="text" placeholder="New Task" 
          ref="myInput"
          v-model="newTask" 
          v-focus 
          @keyup.enter="addTask" />
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
            @setIsModalOpen="setIsModalOpen(true)"
            @setModalTask="setModalTask(task)"
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
  <TaskModal ref="taskModal"
    @editTask="editTask" 
    :task="modalTask">
  </TaskModal>

</template>

<script>
import TaskItem from './TaskItem.vue';
import TaskModal from './TaskModal/index.vue';

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
      isModalOpen: false,
      modalTask: {},
    }
  },
  methods: {
    setModalTask(task) {
      this.modalTask = task;
    },
    setIsModalOpen(value) {
      this.$refs.taskModal.isOpen = value;
    },
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
    },
    editTask(task) {
      const element = this.findById(task.id);
      const index = this.locateIndexOfTask(element);

      this.tasks[index].title = task.title;
    }
  },
  mounted() {
    this.$refs.myInput.focus();
  },
  components: { TaskItem, TaskModal }
}
</script>






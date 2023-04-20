<script setup>
  import TaskItem from './TaskItem.vue';
  import TaskModal from './TaskModal/index.vue';

  import { defineProps, ref, computed, onMounted } from 'vue';
  
  const props = defineProps({
    tasks: {
      type: Array,
      default: () => []
    }
  })

  const newTask = ref('');
  const tasks = ref(props.tasks);
  const modalTask = ref({});
  const myInput = ref();
  const taskModal = ref();

  const incomplete = computed(() => {
    return tasks.value.filter((task) => !task.completed).length;
  });

  function setModalTask(task) {
    modalTask.value = task;
  }

  function setIsModalOpen(value) {
    taskModal.value.isOpen = value;
  }
   
  function findById(id) {
    return tasks.value.find((el) => el.id === id);
  }

  function locateIndexOfTask(task) {
    return tasks.value.indexOf(task);
  }
   
  function addTask() {
    if (newTask.value) {
      tasks.value.push({
        id: new Date().getTime(),
        title: newTask.value,
        completed: false,
      });

      newTask.value = '';
    }
  }

  function removeTask(id) {
    const elementRemoved = findById(id);

    tasks.value.splice(
      locateIndexOfTask(elementRemoved), 
      1
    );
  }

  function clearCompleted() {
    tasks.value = tasks.value.filter((task) => !task.completed);
  }
  
  function clearAll() {
    tasks.value = [];
  }
    
  function completeTask(id) {
    const element = findById(id);
    const index = locateIndexOfTask(element);
    
    tasks.value[index].completed = !tasks.value[index].completed;
  }
   
  function editTask(task) {
    const element = findById(task.id);
    const index = locateIndexOfTask(element);

    tasks.value[index].title = task.title;
  }
  
  function focusInput() {
    myInput.value.focus();
  }

  onMounted(() => {
    focusInput();
  });
</script>

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
    @focusInput="focusInput" 
    :task="modalTask">
  </TaskModal>

</template>

<script setup>
  import { defineProps, defineEmits } from 'vue'

  const props = defineProps({
    task: Object
  })

  const emits = defineEmits(['completeTask', 'removeTask', 'setIsModalOpen', 'setModalTask'])

  function className() {
    let classes = ['toggle']

    if (props.task.completed) {
      classes.push('toggle-completed')
    }

    return classes
  }

  function editTask() {
    emits('setIsModalOpen', true)
    emits('setModalTask', props.task)
  }

  function completeTask() {
    emits('completeTask', props.task.id)
  }

  function removeTask() {
    emits('removeTask', props.task.id)
  }
</script>

<template>
  <li>
    <button @click="completeTask()"
      :class="className()">
      <i :class="task.completed
        ? 'fa-solid fa-circle'
        : 'far fa-circle'
      "></i>
      {{ task.title }}
    </button>

    <div class="buttonGroup">
      <button @click="editTask">
        <i class="fa-regular fa-pen-to-square"></i>
      </button>
  
      <button @click="removeTask">
        <i class="far fa-trash-alt"></i>
      </button>
    </div>
  </li>
</template>

<template>
  <li>
    <button @click="$emit('completeTask', task.id)"
      :class="className">
      <i class="far fa-circle"></i>
      {{ task.title }}
    </button>

    <div class="buttonGroup">
      <button @click="$event => $emit('editTask', task.id)">
        <i class="fa-regular fa-pen-to-square"></i>
      </button>
  
      <button @click="$event => $emit('removeTask', task.id)">
        <i class="far fa-trash-alt"></i>
      </button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'TaskItem',
  props: {
    task: Object
  },
  data() {
    return {}
  },
  computed: {
    className() {
      let classes = ['toggle']

      if (this.task.completed) {
        classes.push('toggle-completed')
      }

      return classes
    }
  }
}
</script>

<template>
  <li>
    <button @click="$emit('completeTask', task.id)"
      :class="className">
      <i :class=" this.task.completed
        ? 'fa-solid fa-circle'
        : 'far fa-circle'
      "></i>
      {{ task.title }}
    </button>

    <div class="buttonGroup">
      <button @click="handleEditTask">
        <i class="fa-regular fa-pen-to-square"></i>
      </button>
  
      <button @click="$emit('removeTask', task.id)">
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
  },
  methods: {
    handleEditTask() {
      this.$emit('setIsModalOpen', true);
      this.$emit('setModalTask', this.task);
    }
  }
}
</script>

<template>

  <div class="model-background" 
    v-show="isOpen" 
    @click="handleClickBackground" 
    @keydown.esc="closeModal">
    <section class="modal-container">
      <div class="modal-header">
        <h2 class="modal-title">
          Edit Task
        </h2>
        <button @click="closeModal">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <section class="modal-body">
        
        <small>
          Are you sure do you wanna edit the task "{{ task?.title }}"?
        </small>
        <div class="modal-form">
          <input type="text" 
            placeholder="Task" 
            name="Task" 
            ref="taskTitleInput"
            :value="task?.title"
            @keyup.enter="editTask"
            tabindex="-1"
            autofocus
          >

          <div class="form-button-group">
            <button class="modal-submit" 
              type="submit"
              @click="editTask"
            >
              Submit
            </button>
          </div>
        </div>
      </section>
    </section>
  </div>

</template>

<script>
import './style.css';

export default {
  name: 'TaskModal',
  props: {
    task: {
      type: Object,
      default: () => {
        return {
          id: '',
          title: '',
          completed: false
        }
      }
    },   
  },
  data() {
    return {
      isOpen: false,
      taskTitle: this.task.title
    };
  },
  computed: {
  },
  methods: {
    openModal() {
      console.log('abc')
      this.isOpen = true;
      this.$refs.taskTitleInput.focus();
    },
    closeModal() {
      console.log('aaaaaaaaaaaaaaaaaa goooo')
      this.isOpen = false;
    },
    handleClickBackground(event) {
      if (event.target == event.currentTarget) {
        this.closeModal();
      }
    },
    editTask() {
      const taskEdited = {
        ...this.task,
        title: this.$refs.taskTitleInput.value
      };

      this.$emit('editTask', taskEdited);
      this.closeModal();
    }
  },
}
</script>

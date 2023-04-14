<script setup>
  import './style.css';
  import { nextTick, defineProps, ref, watch } from 'vue';

  const emits = defineEmits(['editTask', 'focusInput'])

  const props = defineProps({
    task: {
      type: Object,
      default: () => {
        return {
          id: '',
          title: '',
          completed: false
        }
      }
    }
  });
  
  const isOpen = ref(false);
  const taskTitleInput = ref();

  function closeModal() {
    isOpen.value = false;
    emits('focusInput');
  }

  function handleClickBackground(event) {
    if (event.target == event.currentTarget) {
      closeModal();
    }
  }

  function editTask() {
    const taskEdited = {
      ...props.task,
      title: taskTitleInput.value.value
    };

    emits('editTask', taskEdited);
    closeModal();
  }

  watch(isOpen, (value) => {
    if (value) {
      nextTick(() => {
        taskTitleInput.value.focus();
      });
    }
  });

  defineExpose({
    isOpen,
  });
</script>

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
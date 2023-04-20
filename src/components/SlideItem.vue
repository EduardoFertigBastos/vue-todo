<template>
  <div class="slide" :style="{ width: singleWidth + 'px'}">
    <slot></slot>
  </div>
</template>


<script >
  export default {
    mounted() {
      let singleWidth = 
        this.$parent.$el.clientWidth / this.$parent.itemsPerSlide
      this.singleWidth = singleWidth;
      
    }
  }
</script>

<style scoped>
.slide {
  display: inline-block;
}
</style>

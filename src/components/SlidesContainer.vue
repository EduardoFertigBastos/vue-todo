<template>
  <div class="slides">

    <div class="slides-inner"
      :style="{ 
        width: `${innerWidth}px`,
        marginLeft: `-${slidesInnerMarginLeft}px`
      }" 
    >
      <slot></slot>
    </div>

    <div class="navigation">
      <button @click="goToPrev">Prev</button>
      <button v-for="(slide, index) in (new Array(quantityItems))" 
        :key="index"  
        class="nav-number"
        :class="[currentIndex === index ? 'current' : '']"
        @click="goToSlideIndex(index)"
      >
        {{ index+1 }}
      </button>
      <button @click="goToNext">Next</button>
    </div>
  </div>

</template>


<script >
  export default {
    data() {
      return {
        innerWidth: 0,
        singleWidth: 0,
        currentIndex: 0
      }
    },
    props: {
      itemsPerSlide: {
        type: null,
        default: 1
      }
    },
    computed: {
      slidesInnerMarginLeft() {
        return this.currentIndex * this.singleWidth
      }
    },
    mounted() {
      let quantityItems = this.$slots.default()[0].children.length
      let singleWidth  = this.$el.clientWidth / this.itemsPerSlide;
      
      this.quantityItems = quantityItems;
      this.singleWidth = singleWidth;
      this.innerWidth  = singleWidth * quantityItems;
    },
    methods: {
      goToPrev() {
        if (this.currentIndex === 0) {
          return;
        }
        this.currentIndex--;
      },
      goToSlideIndex(index) {
        this.currentIndex = index;
      },
      goToNext() {
        if (this.currentIndex === this.quantityItems - 1) {
          return;
        }

        this.currentIndex++;
      }
    }
  }
</script>

<style >

.slides {
  border: 1px solid red;
  overflow-x: hidden;
  text-align: center;
}

.slides-inner {
  transition: margin 0.6s ease-out;
}

img {
  max-width: 100%;
  height: 300px;
  object-fit: cover;
} 
.nav-number {
  margin: 0 5px;
  background-color: white;
  padding: 0 5px;
  border: 1px solid black;
  cursor: pointer;
}

.nav-number.current {
  color: white;
  background-color: black;
}

</style>

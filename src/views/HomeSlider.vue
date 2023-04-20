<script setup>
  import SlideItem from '../components/SlideItem.vue';
  import SlidesContainer from '../components/SlidesContainer.vue'
  
  const slides = [
    { src: 'https://media.gazetadopovo.com.br/2021/10/13173105/1920x1080-pets-rotina-960x540.jpg' },
    { src: 'https://www.daxia.com.br/ptbr/wp-content/uploads/2021/05/iStock-1271494334-750x325.jpg' },
    { src: 'https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2022/12/18/1070249539-pets-verao-cuidados.jpg' },
    { src: 'https://cdn.mindminers.com/blog/uploads/2022/11/pets.png' },
    { src: 'https://campanha.condor.com.br/wp-content/uploads/2022/07/mes_pet_condor.png' },
    { src: 'https://c.files.bbci.co.uk/0B0C/production/_106482820_animals_gradient.jpg' },
  ];
</script>

<template>
  <main>
    <SlidesContainer 
      items-per-slide="3"
    >

      <SlideItem v-for="(slide, index) in slides"
        :key="index"  
      >
        <img :src="slide.src">
      </SlideItem>
    </SlidesContainer>
  </main>
</template>

<style>


.slide {
  display: inline-block;
}
img {
  max-width: 100%;
  height: 300px;
  object-fit: cover;
} 

</style>
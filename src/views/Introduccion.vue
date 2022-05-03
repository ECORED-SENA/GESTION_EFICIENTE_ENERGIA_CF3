<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mt-5
      .col-12.col-lg-12.mb-5
        img(src="@/assets/curso/images/tema1/intro.png" alt="", style="width:1300px;").m-auto
    
    p.mb-5 Apreciado aprendiz, bienvenido a este momento de aprendizaje relacionado con los principios de las mediciones eléctricas. Para empezar, se sugiere observar el siguiente recurso de aprendizaje. 
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/LrVvGT6Ys0Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)     
    
    p.mb-5 Es momento de iniciar con su aprendizaje. #[strong(style="background-color:#76C2DD; padding:3px 5px;") ¡Bienvenido!]


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>

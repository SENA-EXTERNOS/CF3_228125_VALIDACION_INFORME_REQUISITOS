<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center
      .col-md-7
        p Apreciado aprendiz, bienvenido a este componente formativo, donde se abordarán las temáticas relacionadas con la validación del resultado del informe de los requisitos, de acuerdo con las reglas de negocio y solicitudes de clientes; se brindarán los conocimientos para encontrar la técnica que mejor se adapte a su proyecto y al documento de requerimiento, para realizar las validaciones de requisito, de una manera óptima y eficaz. 
        p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.

      .col-md-5
        figure
          img(src='@/assets/curso/temas/introduccion.png', alt='alt')

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/6l13UShHdP8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                    

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

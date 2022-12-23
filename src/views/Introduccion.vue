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
        p Estimado aprendiz, bienvenido al presente componente formativo, a continuación, se abordarán temáticas relacionadas con la validación del resultado del informe de los requisitos de acuerdo con las reglas de negocio y solicitudes de clientes, se pretende brindar los conocimientos principales a los estudiantes que tienen como fin, encontrar la técnica que mejor se adapte a su proyecto y al documento de requerimiento para realizar las validaciones de requisito de una manera óptima y eficaz.
        p Este componente tendrá un carácter teórico, en el cual se tendrá la oportunidad de explorar los tipos de técnicas y su aplicación, además, realizar los ajustes al documento después de aplicarlas, así mismo, dar prioridades a la ejecución de los requerimientos y finalizar con la gestión de la aprobación de los documentos en proceso.
        p ¡Éxitos en esta nueva experiencia de aprendizaje!
      .col-md-5
        figure
          img(src='@/assets/curso/temas/introduccion.png', alt='alt')

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                    

    
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

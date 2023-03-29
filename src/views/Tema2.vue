<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 2
      h1 Modelado

    .row
      p Para conocer qué es el modelado, y para qué se usa este método, lo invitamos a ver el siguiente video:

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ZdmqIJnpLhA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                    
    p.mt-5.mb-5 El modelo de casos de uso y el modelo de requisitos, son claves para los demás modelos presentados a continuación:

    .row.justify-content-center.my-5
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema2/img1.svg', alt='alt')  
      
      p.mt-5 Ahora, vamos a conocer los diferentes tipos de modelado:  

    .row.justify-content-center.mt-5    
      .col-md-6
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-acordeon-verde-2")
          .row(titulo="Requisitos").px-5.py-2
            p El modelo de casos de uso sirve para demostrar requisitos, es el primero que se debe desarrollar, para luego, con base en este, formar todos los demás en el desarrollo de #[i software]. Por lo general, cualquier tipo de modificación en la funcionalidad del sistema, es más fácil de hacer y con menores errores, a este nivel que a futuro. (De Querétaro, 2021)
          div(titulo="Análisis").px-5.py-3
            p La funcionalidad detallada por el modelo de casos de uso se establece en el modelo de análisis, este se define en la aplicación que está modelando o en la estructura del sistema. Consta de diagramas de secuencia y de clase, que a la vez definen la implementación lógica de los requerimientos funcionales identificados en el modelo de caso de uso.
          div(titulo="Diseño").px-5.py-3
            p La funcionalidad de los casos de uso ya estructurada por el análisis, es ejecutada por el modelo de diseño, en la cual se adapta al ambiente de ejecución real y refinando aún más.
          div(titulo="Implementación").px-5.py-3
            p Es el proceso en el cual se ejecuta y se pone en marcha un programa que antes ya ha sido contratado en la organización.
          div(titulo="Pruebas").px-5.py-3
            p Los casos de uso son validados por medio de las pruebas de integración y las pruebas de componentes.
          div(titulo="Documentación").px-5.py-3
            p El modelo de casos de uso debe ser documentado a lo largo de todo el trayecto del proyecto, generando diferentes documentos como los manuales de administración, manuales de usuario, entre otros.

      .col-md-6
        figure
          img(src='@/assets/curso/temas/tema2/img1.png', alt='alt')              
  

    .row.my-5
      p Para realizar la validación de requerimiento en un proyecto de #[i software], es necesario verificar sus principios generales y cómo se comporta cada uno de ellos en su entorno; a continuación, se presentan los principios generales a utilizar, en una validación de requerimientos:
    
    .bg-pasos
      PasosB.color-secundario.py-5.px-3
        .row.justify-content-center(titulo="Paso 1").pt-3
          .col-lg-7.mb-4.mb-lg-0.mt-5
            h5 Especificación de los requisitos
            p Es una especificación documentada de los requerimientos del #[i software], que proporciona el fundamento para la evaluación y la verificación. El trabajo de validación del #[i software] no puede finalizarse sin un planteamiento de las especificaciones de los requisitos. 
          .col-lg-4.col-6
            figure
              img(src='@/assets/curso/temas/tema2/img2.png', alt='')

        .row.justify-content-center(titulo="Paso 2").pt-3
          .col-lg-7.mb-4.mb-lg-0.mt-5
            h5 Prevención de defectos
            p Es importante asegurar la calidad del #[i software], porque así se evitan errores en el proceso de desarrollo y no cuando se hacen las pruebas a la calidad del código. La prueba es muy corta en su capacidad de reconocer todos los defectos presentes en el código. El grado de complejidad de la mayoría de los desarrollos, impide que sean validados exhaustivamente. Por este motivo, la prueba en el proyecto, es una actividad necesaria. 
          .col-lg-4.col-6
            figure
              img(src='@/assets/curso/temas/tema2/img3.png', alt='') 

        .row.justify-content-center(titulo="Paso 3").pt-3
          .col-lg-7.mb-4.mb-lg-0.mt-5
            h5 Tiempo y esfuerzo
            p La validación del #[i software] requiere tiempo y esfuerzo. La planificación se debe empezar con antelación, es decir, durante el proceso de planeamiento del desarrollo y el diseño de la entrada de los datos. La consecuencia final es el desarrollo validado, que debe estar soportado por la evidencia recolectada, a partir de los esfuerzos programados y dirigidos a lo largo del ciclo de vida del #[i software].
          .col-lg-4.col-6
            figure
              img(src='@/assets/curso/temas/tema2/img4.png', alt='')     

        .row.justify-content-center(titulo="Paso 4").pt-3
          .col-lg-7.mb-4.mb-lg-0.mt-5
            h5 Ciclo de vida del #[i software]
            p La validación tiene un sitio dentro del entorno del ciclo de vida, establecido para el #[i software]. El tiempo de vida contiene la documentación que se necesita para realizar la validación y las actividades de ingeniería y también depende de validaciones apropiadas para el uso anticipado y verificación. El ciclo de vida puede ser completamente continuo o tener cambios en su desarrollo, dada la naturaleza y características que se anhelan desarrollar, y su dominio de aplicación.
          .col-lg-4.col-6
            figure
              img(src='@/assets/curso/temas/tema2/img5.png', alt='')   

        .row.justify-content-center(titulo="Paso 5").pt-3
          .col-lg-7.mb-4.mb-lg-0.mt-5
            h5 Planificación 
            p El proceso de validación del #[i software] se controla y describe, por medio de un plan de validación, el cual explica las metas que se van a cumplir a través del proceso. 
          .col-lg-4.col-6
            figure
              img(src='@/assets/curso/temas/tema2/img6.png', alt='')

        .row.justify-content-center(titulo="Paso 6").pt-3
          .col-lg-7.mb-4.mb-lg-0.mt-5
            h5 Procedimientos 
            p El proceso de validación del #[i software] se hace por medio del uso de procedimientos documentados. Estos disponen de cómo, quién y cuándo se llevarán a cabo dichos procedimientos, los cuales deben reconocer la sucesión de acciones o las actividades detalladas que deben recibir, para terminaciones individuales de validación. 
          .col-lg-4.col-6
            figure
              img(src='@/assets/curso/temas/tema2/img7.png', alt='')  

        .row.justify-content-center(titulo="Paso 7").pt-3
          .col-lg-7.mb-4.mb-lg-0.mt-5
            h5 Validación del #[i software] después de un cambio
            p Debido al grado de complejidad de algunos #[i software], un cambio relativamente pequeño puede generar un impacto considerable en todo el sistema. Cuando se realiza cualquier cambio (incluyendo los más mínimos), el estado de validación necesitará ser restablecido, y siempre que sea modificado, un análisis de validación debe guiar, no solamente para la validación del cambio independiente, sino también para verificar la magnitud e impacto del cambio en la totalidad del desarrollo.
          .col-lg-4.col-6
            figure
              img(src='@/assets/curso/temas/tema2/img8.png', alt='')      

        .row.justify-content-center(titulo="Paso 8").pt-3
          .col-lg-7.mb-4.mb-lg-0.mt-5
            h5 Alcance de la validación
            p El alcance de la validación debe estar representado en los riesgos de seguridad y la dificultad del #[i software], no en las dimensiones de la organización o el presupuesto de los recursos. Al escoger las tareas que se realizan en el proceso, estas debe corresponder con el grado de dificultad que tiene el diseño y el riesgo implicado que conlleva la utilización para el uso programado. La documentación debe ser autosuficiente, para evidenciar que todos los procedimientos y planes se lleven a cabo de manera satisfactoria.
          .col-lg-4.col-6
            figure
              img(src='@/assets/curso/temas/tema2/img9.png', alt='')      
        
        .row.justify-content-center(titulo="Paso 9").pt-3
          .col-lg-7.mb-4.mb-lg-0.mt-5
            h5 Independencia de la validación
            p Las acciones de validación deben ser ejecutadas según el precepto básico de gestión de la calidad sobre la independencia de la revisión. La autovalidación tiene un grado de complejidad un poco alto. Siempre que sea posible, lo mejor es ejecutar el proceso de una manera separada, sobre todo para las aplicaciones/proyectos que representan un alto riesgo. Algunas compañías prefieren la contratación de un tercero, sin embargo, esta opción no siempre es la mejor. Otra alternativa, es asignarla a colaboradores de la misma organización que no tienen protagonismo en el desarrollo del #[i software] o en su ejecución, pero que sí cuentan con el conocimiento para evaluar el proyecto y realizar el proceso. En estos casos las compañías más pequeñas requieren de más creatividad en la asignación y disposición de las tareas para determinar en todo momento la independencia.
          .col-lg-4.col-6
            figure
              img(src='@/assets/curso/temas/tema2/img10.png', alt='')  

        .row.justify-content-center(titulo="Paso 10").pt-3
          .col-lg-7.mb-4.mb-lg-0.mt-5
            h5 Flexibilidad y responsabilidad
            p El desarrollador del #[i software] tiene flexibilidad cuando va a ejecutar estos principios de validación y, sin embargo, es el mismo encargado de demostrar que se ha validado. Las etapas de este proceso de validación pueden ser abreviadas, dependiendo de la naturaleza y de su uso planeado. 
          .col-lg-4.col-6
            figure
              img(src='@/assets/curso/temas/tema2/img11.png', alt='')                                               

    .row.my-5
      p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.  


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

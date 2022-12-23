<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1 Proceso de validación de requisitos

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            
    <separador></separador>
    #t_1_1.titulo-segundo.color-acento-contenido.mt-5
      h2 1.1 Técnicas de validación de requisitos
      
    .row.justify-content-center.mb-5
      .col-md-7.mt-5
        p La validación es la etapa final de los procesos de la ingeniería de requisitos. Tiene como principal objetivo, validar todos los requisitos/requerimientos que se encuentran en la documentación, de forma específica, para garantizar una descripción aceptable del #[i software] que se debe ejecutar. Desde acá se garantiza que los requisitos se encuentren completos, sean claros y lo más verídicos posible. La validación de requisitos es trascendental en el trabajo de desarrollo de #[i software fullstack], dado que los errores en el documento de requerimientos, se convierten en costos considerables al generar reproceso cuando son evidenciados en el desarrollo o luego, cuando el sistema está en uso. Estos costos de solucionar un problema en los requerimientos cambiando y ajustando el sistema, puede ser más grande que arreglar las falencias de diseño o los de codificación.        
        p La validación de requerimientos es un trabajo continuo al momento de desarrollar un #[i software] con el objetivo de garantizar que los requerimientos solicitados sean exactos, según las necesidades y expectativas de los clientes. Esta actividad contribuye a optimizar la calidad de los requerimientos, a reducir costos, tiempos y riesgos en su desarrollo.
      .col-md-4
        figure
          img(src='@/assets/curso/temas/tema1/img1.png', alt='alt')

    .row.justify-content-center.margenes-img
      figure
        img(src='@/assets/curso/temas/tema1/img2.png', alt='').img400.m-auto  

    .row.justify-content-center.mt-5
      .col-md-11
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img3.png')})`}"
          )                             
          .bloque-texto-g__texto.p-4
            p La verificación es el proceso para determinar si los productos de #[i software] de una actividad cumplen con los requerimientos o condiciones que tienen impuestas por las precedentes. En tanto, se entiende la validación como un trabajo para determinar si los requisitos del sistema o producto, cumplen con las expectativas de los usuarios. 

    p.mt-5.mb-5 Para permitir la validación de los requisitos, se aconseja usar prototipos de interfaces de usuarios, que posibiliten comprender claramente el sistema #[i software] propuesto y los requisitos en de manera textual, especialmente si son usados al momento de verificar un caso de uso.

    .row.justify-content-center.mt-5
      .col-md-5
        figure
          img(src='@/assets/curso/temas/tema1/img4.png', alt='alt')
      .col-md-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-acordeon-verde")
          .row(titulo="Problemas en los requisitos").px-5.py-2
            p Si los clientes y usuarios ponen de manifiesto falencias con los requisitos establecidos, se deben señalar como problemas de tipo no aceptación y registrarse adecuadamente, luego, en el proceso, se deben evaluar problemas del sistema para solucionarlos correctamente.                                 
          div(titulo="El resultado de la validación de requisitos ").px-5.py-3
            p Es la lista de problemas y las acciones acordadas detectadas, e indican el hallazgo en el proceso de validación de requisitos. La lista de acciones acordadas establece la acción correctiva que se debe tomar para solucionarlo.
          div(titulo="Validación").px-5.py-3
            p Evaluar y revisar los requisitos del sistema es necesario para desarrollarlos en un sistema #[i software], acorde con las necesidades del negocio que hace parte del proceso de ingeniería de requisitos.
                        
    p Para esto es necesario que cumpla ciertas características como:
    h3.mt-5.mb-5 Verificaciones
    p Tras la generación del documento, se deben validar los diferentes requerimientos, revisando que el proceso se haya desarrollado de manera objetiva y concreta. Las validaciones que se realizan son:

    .bg-tarjeta-avatar.margenes-img.mt-5
      SlyderF(columnas="col-sm-4")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img5.png', alt='')
          .tarjeta.he-tarjetas.color-secundario.p-3
            p.text-center.mt-3 Verificación de validez: un usuario puede considerar que es lo necesario para que un sistema posibilite desarrollar ciertas actividades (Ingeniería de Requerimiento un enfoque práctico, 2021, p.130 ).  No obstante, el análisis y el razonamiento ayudan a señalar si se necesitan tareas diferentes o adicionales. Los sistemas tienen múltiples #[i stakeholders] (se refiere a grupos de personas o personas que demuestran interés en el desarrollo del proyecto) con necesidades muy variadas y que deben ser satisfechas.
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img6.png' alt='')
          .tarjeta.he-tarjetas.color-secundario.p-3
            p.text-center.mt-3 Verificación de consistencia: comprobar que los requisitos de dicho documento no se contradicen, es decir, no se puede dar el caso en el que, para una misma funcionalidad del sistema, haya dos requisitos contrapuestos.
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img7.png' alt='')
          .tarjeta.he-tarjetas.color-secundario.p-3
            p.text-center.mt-3 Verificación de completitud: verificar que el documento de requisitos contempla todas las tareas y limitaciones sugeridas por el usuario del sistema para este.
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img8.png' alt='')
          .tarjeta.he-tarjetas.color-secundario.p-3
            p.text-center.mt-3 Verificación de realismo: revisar que los requisitos puedan ser aplicados haciendo uso de la tecnología disponible en el mercado, con base en el presupuesto y las restricciones, en términos de tiempo para la ejecución del sistema.
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img9.png' alt='')
          .tarjeta.he-tarjetas.color-secundario.p-3
            p.text-center.mt-3 Verificabilidad: confirmar que los requerimientos presentes en dicho documento, puede verificarse, en otras palabras, que, con una serie de pruebas al sistema, se pueda validar que el requerimiento planteado si se cumple, logrando así, disminuir los problemas que puedan presentarse entre el contratista y el cliente.


    <separador></separador>
    #t_1_2.titulo-segundo.color-acento-contenido.mt-5
      h2 1.2 Criterios

    p Si solo se siguen los criterios teóricos anteriormente mencionados, puede pasar que se genere un análisis incompleto dado que se pueden presentar detalles que no sean percibidos. A continuación, un análisis completo y fácil de ejecutar, que cumple con todos los criterios.  

    .bg-linea-tiempo.margenes-img.mt-5
      .row.justify-content-center.mt-5
        .col-md-4.mt-5
          figure
            img(src='@/assets/curso/temas/tema1/img12.png', alt='alt')      
        .col-md-7
          LineaTiempoD.color-acento-contenido.mt-5
            p(numero="1" titulo="Correcto") La definición de un requerimiento es válida cuando el sistema cumple con todos los requisitos en él especificados.
            p(numero="2" titulo="No ambiguo") Los requerimientos solo deben tener una sola interpretación.
            p(numero="3" titulo="Completos") Los requerimientos son completos si se cumple con un conjunto de características, tales como información basada en datos, entradas y salidas.
            p(numero="4" titulo="Consistencias") El documento guarda coherencia al contrastarlo con la demás documentación del proyecto.
            p(numero="5" titulo="Categorizados") Los requerimientos están categorizados por desarrollo, importancia y estabilidad en tiempo.
            p(numero="6" titulo="Verificables") Todos los requerimientos de una u otra forma deben ser revisados.
            p(numero="7" titulo="Modificables") La construcción y diseño de los requisitos debe posibilitar hacer cambios de forma clara y sencilla.
            p(numero="8" titulo="Trazables") Los requisitos tienen un principio muy claro, del mismo modo es posible realizar un seguimiento del requerimiento de manera fácil durante el proyecto.

    <separador></separador>
    #t_1_3.titulo-segundo.color-acento-contenido.mt-5
      h2 1.3 Verificación y validez (V & V)

    p El Instituto de ingeniería eléctrica y electrónica 1012 (2004), (IEEE STD por sus siglas en inglés), señala que los procesos de verificación y validación (V&V) de software determinan, si los productos de desarrollo de una tarea determinada, cumplen con los requerimientos y con las necesidades del usuario o lo previsto. Es un trabajo transversal al ciclo de desarrollo del sistema, al señalar que la (V&V) tiene lugar en cada etapa del proceso y empieza con las revisiones de los requisitos, continúa con la validación del diseño e inspecciones de código, hasta llegar a la prueba del producto (Reyna, Huapaya, Perales y Fuente, 2021, p. 125). 

    .row.justify-content-center.margenes-img
      figure
        img(src='@/assets/curso/temas/tema1/img13.png', alt='').img400.m-auto 

    p.mt-5.mb-5  Dentro del proceso de verificación y validez (V&V), existen dos aproximaciones para la comprobación de los sistemas y el análisis que son:

    .bg-slider-imagenes.p-5
      SlyderB.mb-5(:datos="datosSlyder")

    <separador></separador>
    #t_1_4.titulo-segundo.color-acento-contenido.mt-5
      h2 1.4 Tipos de Técnicas de validación

    .row.justify-content-center.mt-5
      .col-md-11
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img17.png')})`}"
          )                             
          .bloque-texto-g__texto.p-4
            p Las técnicas para validación de requerimientos, desempeñan un papel fundamental para detectar y prevenir posibles defectos y errores en los requerimientos, pero se comportan en forma diferente en un entorno de trabajo compartido, o de trabajo global. Trabajar en el contexto de la validación de requerimientos es un reto que implica esfuerzo de los equipos de trabajo, clientes y usuarios, se hallan variadas causas que representan problemáticas de comunicación, control, transferencia de conocimientos, seguridad y tiempo de más en el desarrollo del #[i software.]

    p.mt-5.mb-5 El proceso de validación de requisitos, puede hacer uso de diferentes técnicas de validación, sin embargo, este componente, se orientará hacia la consolidación de modelos conceptuales con base en los requerimientos para luego hacer su validación. A continuación, se mencionan algunas de las técnicas de validación de requerimientos:

    .bg-slider.px-5.py-3.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.my-lg-4
          .col-lg-6.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            .number(data-number="01")              
              p.mt-5.ps-4.mb-3 Generación de casos de prueba (caso de uso): describen las relaciones entre el sistema y el usuario, enfocándose en lo qué puede hacer un sistema, es decir, en general, cómo es su comportamiento. Los casos de uso son una técnica para determinar los requisitos funcionales.
          .col-6.col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/img18.png')

        .row.justify-content-center.my-lg-4
          .col-lg-6.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            .number(data-number="02")
              p.mt-5.ps-4.mb-3 Construcción de prototipos: son simulaciones de los requisitos, se aplican al hacer un análisis y se encuentran fallos, ya sea por parte del producto o por la falta de información sobre los requisitos y no sé sabe cuáles son sus requerimientos.
          .col-6.col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/img19.png')

        .row.justify-content-center.my-lg-4
          .col-lg-6.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            .number(data-number="03")
              p.mt-5.ps-4.mb-3 Revisiones de requerimientos: en este enfoque, la especificación de requisitos del #[i software] (SRS por sus siglas en inglés), es revisada cuidadosamente por un grupo, incluidas personas de las organizaciones de contratistas y del lado del cliente, el revisor observa minuciosamente el documento para verificar si tiene ambigüedad y si tiene errores.
          .col-6.col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/img20.png')    

        .row.justify-content-center.my-lg-4
          .col-lg-6.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            .number(data-number="04")
              p.mt-5.ps-4.mb-3 Análisis de consistencia automático: este enfoque se utiliza para la detección automática de un error, como no determinismo, casos faltantes, un error de tipo y definiciones circulares, en las especificaciones de requisitos.
          .col-6.col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/img21.png')     

        .row.justify-content-center.my-lg-4
          .col-lg-6.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            .number(data-number="05")
              p.mt-5.ps-4.mb-3 Historias de usuario: es un documento que explica una función de #[i software], escrita desde la perspectiva del usuario final. Esto ayuda a los equipos de desarrollo a comprender lo que quieren los usuarios y así poder ofrecerles las mejores funciones.
          .col-6.col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/img22.png')                                    

    <separador></separador>
    #t_1_5.titulo-segundo.color-acento-contenido.mt-5
      h2 1.5 Análisis

    p Además de hacer requisitos, es necesario revisarlos. Estudiar los requerimientos tiene que ver con la actividad que se va a desarrollar y realizar un análisis de cada uno de manera separada y en conjunto, en los siguientes apartados se puede observar los tipos de análisis a usarse:

    .row.justify-content-center.mt-5
      .col-md-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-acordeon-verde")
          .row(titulo="Priorizar requisitos").px-5.py-2
            p Verificar aquellos que deben cumplirse en la primera versión y los que se desarrollan en posteriores versiones. Esta tarea es muy importante para las etapas de negociación con el cliente. La priorización garantiza que el producto pueda satisfacer las necesidades mínimas.
          div(titulo="Criterios de aceptación").px-5.py-3
            p Se puede dar cuando la solución aplicada es concretamente la que el requerimiento necesitaba. Este criterio, es la manera de medirlos, es decir, de qué manera se van a cuantificar con base en su cumplimiento. Lo anterior se trabaja para requerimientos funcionales y no funcionales. Para los criterios de aceptación, se realizan los planes de pruebas (Buitrón, Flores-Ríos y Pino, 2018).
          div(titulo="Dependencias y conflictos").px-5.py-3
            p Los requerimientos presentan contrariedad dadas sus características de informalidad. La tipificación de los conflictos se puede presentar de la siguiente manera:
            ol.lista-ol--cuadro
              li.bg-li 
                p.px-3 Conflicto de conducta: cuando dos o más requisitos, precisan conductas distintas para el mismo estímulo externo, sistema y condiciones.
              li.bg-li 
                p.px-3 Conflicto de términos: son diferentes para el mismo concepto.
              li.bg-li 
                p.px-3 Conflicto de características: se especifican aspectos de contrariedad para la misma característica del sistema. 
              li.bg-li 
                p.px-3 Conflictos temporales: cuando dos o más requisitos requieren características temporales.
          div(titulo="Trazabilidad").px-5.py-3
            p Los requisitos deben ser medibles. Es fundamental conocer los aspectos de requerimientos tales como:  
            ol.lista-ol--cuadro
              li.bg-li 
                p.px-3 Su origen (quién los propuso). 
              li.bg-li 
                p.px-3 Necesidad (por qué existe).
              li.bg-li 
                p.px-3 Relación con otros requisitos (dependencias).  
              li.bg-li 
                p.px-3 Relación con otros elementos (dependencias).
          div(titulo="Especificación").px-5.py-3
            p Es la descripción de un sistema. La especificación debe expresar en cada requerimiento sus restricciones, funcionalidad, artes del diseño a las que afecta, rendimientos, tipos de clientes, entre otros, de una manera clara y concisa.
            
      .col-md-5
        figure
          img(src='@/assets/curso/temas/tema1/img23.png', alt='alt')

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        texto:
          'La revisión del <i>software</i> es la que comprueba y analiza las representaciones del sistema, tales como el documento de requerimientos, los diagramas de diseño y el código fuente del programa. Las revisiones pueden usarse en todas las etapas del proceso y consisten en una técnica de V&V estática, ya que no se necesita ejecutarlo en una computadora.',
        imagen: require('@/assets/curso/temas/tema1/img14.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          'Las pruebas del <i>software</i> requieren ejecutar una implementación con datos de prueba. Se revisan su entorno operacional y las salidas, para revisar que funciona tal y como se solicita. Las pruebas son una técnica dinámica principal para la verificación y validación.',
        imagen: require('@/assets/curso/temas/tema1/img15.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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

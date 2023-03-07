<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1 Proceso de validación de requisitos

      
    .row.justify-content-center.mb-5
      .col-md-7.my-5
        p La validación es la etapa final de los procesos de la ingeniería de requisitos. Tiene como principal objetivo, validar todos los requisitos/requerimientos que se encuentran en la documentación, de forma específica, para garantizar una descripción aceptable del #[i software] que se debe ejecutar. Desde este momento, se garantiza que los requisitos se encuentren completos, sean claros y lo más verídicos posible. La validación de requisitos es trascendental en el trabajo de desarrollo de #[i software full stack,] dado que los errores en el documento de requerimientos, se convierten en costos considerables, al generar reproceso, cuando son evidenciados en el desarrollo o cuando el sistema está en uso. Los costos que se generan al solucionar un problema en los requerimientos, cambiando y ajustando el sistema, puede ser más grandes que arreglar las falencias de diseño o los de codificación.
        p La validación de requerimientos, es un trabajo continuo al momento de desarrollar un #[i software], porque garantiza que los requerimientos solicitados sean exactos, según las necesidades y expectativas de los clientes. Esta actividad contribuye a optimizar la calidad de los requerimientos, a reducir costos, tiempos y riesgos en su desarrollo.
        p Observemos cómo es el flujo de validación de los requerimientos:

      .col-md-4
        figure
          img(src='@/assets/curso/temas/tema1/img1.png', alt='alt').img1-tm1


    .row.justify-content-center.margenes-img
      figure
        img(src='@/assets/curso/temas/tema1/img2.svg', alt='').img400.m-auto  


    p.mt-5.mb-5 Para permitir la validación de los requisitos, se aconseja utilizar prototipos de interfaces de usuarios, que posibiliten comprender, claramente, el sistema #[i software] propuesto y los requisitos usados al momento de verificar un caso de uso. Ampliemos la información al respecto.

    .row.justify-content-center.mt-5
      .col-md-5
        figure
          img(src='@/assets/curso/temas/tema1/img4.png', alt='alt')
      .col-md-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-acordeon-verde")
          .row(titulo="Problemas en los requisitos").px-5.py-2
            p Si los clientes y usuarios ponen de manifiesto falencias con los requisitos establecidos, se deben señalar como problemas de tipo no aceptación y registrarse adecuadamente, luego, en el proceso, se deben evaluar problemas del sistema para solucionarlos correctamente.                                 
          div(titulo="El resultado de la validación de requisitos ").px-5.py-3
            p Es la lista de problemas y las acciones acordadas detectadas, e indica el hallazgo en el proceso de validación de requisitos. La lista de acciones acordadas, establece la acción correctiva que se debe tomar para solucionarlo.
          div(titulo="Validación").px-5.py-3
            p Es necesario evaluar y revisar los requisitos del sistema, para desarrollarlos en un sistema #[i software,] acorde con las necesidades del negocio.
                        

    p.mt-5 Tras la generación del documento, se deben validar los diferentes requerimientos, revisando que el proceso se haya desarrollado de manera objetiva y concreta. Las validaciones que se realizan son:

    .bg-tarjeta-avatar.margenes-img.my-5.p-5.p-lg-0
      SlyderF(columnas="col-sm-4")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img5.png', alt='')
          .tarjeta.he-tarjetas.color-secundario.p-3
            p.text-center.mt-3 #[strong Verificación de validez:] un usuario puede considerar qué es verdaderamente necesario, para que un sistema posibilite desarrollar ciertas actividades (Ingeniería de Requerimiento un enfoque práctico, 2021, p.130 ). No obstante, el análisis y el razonamiento, ayudan a señalar si se necesitan tareas diferentes o adicionales. Los sistemas tienen múltiples #[i stakeholders] (se refiere a grupos de personas o personas que demuestran interés en el desarrollo del proyecto), con necesidades muy variadas, las cuales deben ser satisfechas.
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img6.png' alt='')
          .tarjeta.he-tarjetas.color-secundario.p-3
            p.text-center.mt-3 #[strong Verificación de consistencia:] comprobar que los requisitos de dicho documento no se contradicen, es decir, no se puede dar el caso en el que, para una misma funcionalidad del sistema, haya dos requisitos contrapuestos.
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img7.png' alt='')
          .tarjeta.he-tarjetas.color-secundario.p-3
            p.text-center.mt-3 #[strong Verificación de completitud:] verificar que el documento de requisitos, contemple todas las tareas y limitaciones sugeridas por el usuario del sistema.
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img8.png' alt='')
          .tarjeta.he-tarjetas.color-secundario.p-3
            p.text-center.mt-3 #[strong Verificación de realismo:] revisar que los requisitos puedan ser aplicados, haciendo uso de la tecnología disponible en el mercado, con base en el presupuesto y las restricciones, en términos de tiempo para la ejecución del sistema.
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img9.png' alt='')
          .tarjeta.he-tarjetas.color-secundario.p-3
            p.text-center.mt-3 #[strong Verificabilidad:] confirmar que los requerimientos presentes en el documento, puedan verificarse; en otras palabras, que con una serie de pruebas al sistema, se pueda validar que el requerimiento planteado sí cumple logrando, de esta manera, disminuir los problemas que puedan presentarse entre el contratista y el cliente.


    p Si solo se siguen los criterios teóricos anteriormente mencionados, puede pasar que se genere un análisis incompleto, y se pueden presentar detalles que no sean percibidos. A continuación, observemos otros criterios:

    .bg-linea-tiempo.margenes-img.my-5
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
    .titulo-tercero
      h3 Verificación y validez (V & V)

    p El Instituto de ingeniería eléctrica y electrónica 1012 (2004), (IEEE STD por sus siglas en inglés), señala que los procesos de verificación y validación (V&V) de #[i software], determinan si los productos de desarrollo de una tarea determinada, cumplen con los requerimientos y con las necesidades del usuario. Es un trabajo transversal al ciclo de desarrollo del sistema, al señalar que la V&V tiene lugar en cada etapa del proceso y empieza con las revisiones de los requisitos; luego se continúa con la validación del diseño e inspecciones de código, hasta llegar a la prueba del producto. (Reyna, Huapaya, Perales y Fuente, 2021, p. 125)

    .row.justify-content-center.margenes-img
      figure
        img(src='@/assets/curso/temas/tema1/img13.svg', alt='').img400.m-auto 

    p.mt-5.mb-5 Ahora, dentro del proceso de verificación y validez (V&V), existen dos aproximaciones para la comprobación de los sistemas y el análisis, las cuales son:

    .bg-slider-imagenes.p-5
      SlyderB.mb-5(:datos="datosSlyder")

    <separador></separador>

    .titulo-tercero
      h3 Tipos de Técnicas de validación

    .row.justify-content-center.mt-5
      .col-md-12
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img17.png')})`}"
          )                             
          .bloque-texto-g__texto.p-4
            p Las técnicas para validación de requerimientos, desempeñan un papel fundamental para detectar y prevenir posibles defectos y errores en los requerimientos, pero se comportan en forma diferente en un entorno de trabajo compartido, o de trabajo global. Trabajar en el contexto de la validación de requerimientos es un reto que implica esfuerzo de los equipos de trabajo, clientes y usuarios, se hallan variadas causas que representan problemáticas de comunicación, control, transferencia de conocimientos, seguridad y tiempo de más en el desarrollo del #[i software.]

    p.mt-5.mb-5 El proceso de validación de requisitos, puede hacer uso de diferentes técnicas de validación, sin embargo, este componente, se orientará hacia la consolidación de modelos conceptuales con base en los requerimientos, para luego realizar su validación. A continuación, se mencionan algunas de las técnicas de validación de requerimientos:

    .bg-slider.px-5.py-3.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.my-lg-4
          .col-lg-6.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            .number(data-number="01")              
              p.mt-5.ps-4.mb-3 #[b Generación de casos de prueba (caso de uso):] describen las relaciones entre el sistema y el usuario, enfocándose en lo que puede hacer un sistema, es decir, en general, cómo es su comportamiento. Los casos de uso son una técnica utilizada para determinar los requisitos funcionales.
          .col-6.col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/img18.png')

        .row.justify-content-center.my-lg-4
          .col-lg-6.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            .number(data-number="02")
              p.mt-5.ps-4.mb-3 #[b Construcción de prototipos:] son simulaciones de los requisitos, que se aplican al realizar un análisis y se encuentran fallos, ya sea por parte del producto o por falta de información sobre los requisitos.
          .col-6.col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/img19.png')

        .row.justify-content-center.my-lg-4
          .col-lg-6.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            .number(data-number="03")
              p.mt-5.ps-4.mb-3 #[b Revisiones de requerimientos:] en este enfoque, la especificación de requisitos del #[i software] (SRS por sus siglas en inglés), es revisada cuidadosamente por un grupo, incluidas personas de las organizaciones de contratistas y del lado del cliente. El revisor observa minuciosamente el documento, para verificar si contiene ambigüedad y errores.
          .col-6.col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/img20.png')    

        .row.justify-content-center.my-lg-4
          .col-lg-6.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            .number(data-number="04")
              p.mt-5.ps-4.mb-3 #[b Análisis de consistencia automático:] este enfoque se utiliza para la detección automática de un error, como no determinismo, casos faltantes, un error de tipo y definiciones circulares, o en las especificaciones de requisitos.
          .col-6.col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/img21.png')     

        .row.justify-content-center.my-lg-4
          .col-lg-6.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            .number(data-number="05")
              p.mt-5.ps-4.mb-3 #[b Historias de usuario:] es un documento que explica una función de #[i software], escrita desde la perspectiva del usuario final. Esto ayuda a los equipos de desarrollo a comprender lo que quieren los usuarios y así poder ofrecerles las mejores funciones.
          .col-6.col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/img22.png')                                    

    <separador></separador>
    .titulo-tercero
      h3 Análisis

    p Estudiar los requerimientos, tiene que ver con la actividad que se va a desarrollar y realizar un análisis de cada uno de manera separada y en conjunto. Conozcamos los tipos de análisis que se utilizan:

    .row.justify-content-center.mt-5
      .col-md-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-acordeon-verde")
          .row(titulo="Priorizar requisitos").px-5.py-2
            p Verificar aquellos que deben cumplirse en la primera versión y los que se desarrollan en posteriores versiones. Esta tarea es muy importante para las etapas de negociación con el cliente. La priorización garantiza que el producto pueda satisfacer las necesidades mínimas.
          div(titulo="Criterios de aceptación").px-5.py-3
            p Se puede dar cuando la solución aplicada es concretamente la que el requerimiento necesitaba. Este criterio es la manera de medirlos, es decir, de qué manera se van a cuantificar con base en su cumplimiento. Lo anterior se trabaja para requerimientos funcionales y no funcionales. Para los criterios de aceptación, se realizan los planes de pruebas. (Buitrón, Flores-Ríos y Pino, 2018)
          div(titulo="Dependencias y conflictos").px-5.py-3
            p Los requerimientos presentan contrariedad dadas sus características de informalidad. La tipificación de los conflictos se puede presentar de la siguiente manera:
            ul.lista-ul--color
              li
                i.fas.fa-play
                | Conflicto de conducta: cuando dos o más requisitos, precisan conductas distintas para el mismo estímulo externo, sistema y condiciones.
              li
                i.fas.fa-play
                | Conflicto de términos: son diferentes para el mismo concepto.
              li
                i.fas.fa-play
                |3 Conflicto de características: se especifican aspectos de contrariedad para la misma característica del sistema. 
              li
                i.fas.fa-play
                | Conflictos temporales: cuando dos o más requisitos requieren características temporales.
          div(titulo="Trazabilidad").px-5.py-3
            p Los requisitos deben ser medibles. Es fundamental conocer los aspectos de requerimientos, tales como: 
            ul.lista-ul--color
              li
                i.fas.fa-play
                | Su origen (quién los propuso). 
              li
                i.fas.fa-play
                | Necesidad (por qué existe).
              li
                i.fas.fa-play
                | Relación con otros requisitos (dependencias).  
              li
                i.fas.fa-play
                | Relación con otros elementos (dependencias).
          div(titulo="Especificación").px-5.py-3
            p Es la descripción de un sistema. La especificación debe expresar en cada requerimiento, sus restricciones, funcionalidad, artes del diseño a las que afecta, rendimientos, tipos de clientes, entre otros, de una manera clara y concisa.
            
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
          '<b>La revisión del <i>software</i></b> <br>Es la que comprueba y analiza las representaciones del sistema, tales como el documento de requerimientos, los diagramas de diseño y el código fuente del programa. Las revisiones pueden usarse en todas las etapas del proceso y consisten en una técnica de V&V estática, porque no se necesita ejecutarlo en una computadora.',
        imagen: require('@/assets/curso/temas/tema1/img14.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          '<b>Las pruebas del <i>software</i></b><br>requieren ejecutar una implementación con datos de prueba. Se revisan su entorno operacional y las salidas, para revisar que funciona tal y como se solicita. Las pruebas son una técnica dinámica principal para la verificación y validación.',
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

export default {
  global: {
    componenteFormativo: 'Validación de informe de los requisitos ',
    descripcionCurso:
      'En el presente componente formativo, se explica cómo realizar la validación del documento de un informe de resultado, basado en requerimientos del cliente, teniendo en cuenta directrices de revisión, con el objetivo de realizar los ajustes correspondientes en la documentación, para luego realizar los requisitos de desarrollo, de acuerdo con su importancia.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Proceso de validación de requisitos.',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Modelado',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Proceso de validación de requisitos',
      referencia:
        'De Querétaro, S. (2021). <i>Ingeniería de Requerimientos - Priorizar a través de los tipos y niveles de requerimientos</i> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=TRp3ZkjKtj8',
    },
    {
      tema: 'Proceso de validación de requisitos',
      referencia:
        'Ingeniería de Software de Élite. (2021). <i>Ingeniería de requerimientos - Análisis</i> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=FBeupL-0Gvk',
    },
    {
      tema: 'Proceso de validación de requisitos',
      referencia:
        'Ingeniería de Software de Élite. (2022).  Ingeniería de requerimientos: el rol del analista / product owner [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=gDVxbRtLAFA',
    },
    {
      tema: 'Proceso de validación de requisitos',
      referencia:
        'Reyna, J. E., Huapaya, F. R., Perales, R. S. & Fuentes, D. J. (2021). Ingeniería de requerimientos - Un enfoque práctico. Savez Editorial.',
      tipo: 'PDF',
      link: 'https://savezeditorial.com/index.php/savez/article/view/26/28',
    },
  ],
  glosario: [
    {
      termino: 'Ambigüedad',
      significado:
        'es un fenómeno que se produce cuando un enunciado o una oración pueden interpretarse en dos sentidos diferentes.',
    },
    {
      termino: 'Calidad',
      significado:
        'es la propiedad o conjunto de propiedades inherentes a una cosa o fenómeno que permite apreciarla como igual, mejor o peor que las restantes de su misma especie.',
    },
    {
      termino: 'Ingeniería de requisitos',
      significado:
        'abarca aquellas acciones asociadas con el hallazgo de las necesidades requeridas a la hora de generar un nivel de satisfacción de un <i>software</i> nuevo o modificado, teniendo en cuenta los diferentes requisitos de las partes interesadas, que pueden generar conflicto entre ellos.',
    },
    {
      termino: 'Manual de usuario',
      significado:
        'es el documento que permite a las personas que utilizan los sistemas de información su entendimiento y uso de las funcionalidades que este posee.',
    },
    {
      termino: 'Priorizar',
      significado:
        'categorizar el requerimiento ayuda a saber el grado de necesidad del mismo esencial/crítico, deseado, opcional verificable.',
    },
    {
      termino: '<i>Product owner</i>',
      significado:
        'es la persona encargada de conseguir que el equipo aporte el máximo valor al proyecto con el mínimo coste.',
    },
    {
      termino: '<i>Scrum master</i>',
      significado:
        'es la persona que coordina y ayuda al equipo a mantenerse enfocado en los objetivos del proyecto. ',
    },
    {
      termino: 'Sistema',
      significado:
        'conjunto ordenado de normas y procedimientos que regulan el funcionamiento de un grupo o colectividad.',
    },
    {
      termino: '<i>Software</i>',
      significado:
        'grupo de programas y tareas que ordenan a una computadora el desarrollo de determinadas acciones.',
    },
    {
      termino: 'Validación de <i>software</i>',
      significado:
        'se refiere al proceso de evaluar que un sistema de software, cumple con las condiciones y los requisitos adecuados según el objeto para el cual ha sido creado o modificado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Balaguera R., Cabrera, J. F. & Cuadros, F. J. (2017). <i>Identificación y análisis de los factores de éxito y fracaso en la gerencia de proyectos - caso concesión vial Córdoba Sucre.</i> Escuela colombiana de ingeniería Julio Garavito.',
      link: '',
    },
    {
      referencia:
        'Buitrón, S .L., Flores-Ríos, B. L. y Pino, F. J. (2018). Elicitación de requisitos no funcionales basada en la gestión de conocimiento de los stakeholders Ingeniare. <i>Revista chilena de ingeniería,</i> 26(1), p. 142-156.',
      link: '',
    },
    {
      referencia:
        'Reyna, J., Huapaya, F., Perales, R. y Fuentes, D. (2021). <i>Ingeniería de requerimientos.</i> Un enfoque práctico. Savez editorial. ',
      link: 'https://savezeditorial.com/index.php/savez/article/view/26/28',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

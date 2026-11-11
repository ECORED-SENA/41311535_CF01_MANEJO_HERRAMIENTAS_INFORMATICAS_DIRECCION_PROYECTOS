export default {
  global: {
    Name: 'Entradas y configuración de proyectos',
    Description:
      'Este componente orienta la identificación y organización de las entradas requeridas para iniciar un proyecto, su relación con los estándares de dirección y la selección y configuración inicial de una herramienta informática. Mediante situaciones prácticas, se reconocen requerimientos, calendarios, recursos, parámetros, menús y comandos necesarios para preparar la gestión del proyecto.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Información de entrada para la dirección del proyecto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Alcance y objetivos estratégicos del proyecto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Caso de negocio, contratos y acuerdos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Interesados y recursos del proyecto',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Factores ambientales y activos organizacionales',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Acta de constitución y validación de entradas',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Marcos de referencia para la gestión de proyectos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Normas, estándares, guías y metodologías',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Norma NTC ISO 10006',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Project Management Institute y guía para la dirección de proyectos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'PRINCE2 e IPMA Competence Baseline',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Comparación y selección del marco de referencia',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Herramientas informáticas para la gestión de proyectos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Finalidad y funciones del <i>software</i> de gestión',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Microsoft Project',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Primavera, Sinnaps y otras herramientas',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Especificaciones y requerimientos técnicos',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Criterios y matriz para seleccionar el software',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Entorno de la herramienta informática',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Acceso y reconocimiento del entorno de trabajo',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Menús, herramientas y comandos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Vistas, tablas, campos y paneles',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Creación y administración de archivos',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Manuales, respaldo y seguridad de la información',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Parametrización de la herramienta informática',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Creación y datos iniciales del proyecto',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Configuración de idioma, moneda y unidades',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Calendario global del proyecto',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Hojas de tareas, recursos y calendarios',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Verificación y almacenamiento de la configuración',
            hash: 't_5_5',
          },
        ],
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  glosario: [
    {
      termino: 'Alcance',
      significado:
        'Conjunto de productos, servicios o resultados que el proyecto debe entregar y trabajo necesario para lograrlos. Establece los límites de la iniciativa al diferenciar lo que se incluye de aquello que queda excluido.',
    },
    {
      termino: 'Calendario del proyecto',
      significado:
        'Herramienta que reúne en un lugar visible y centralizado las actividades, los plazos y las jornadas de trabajo del proyecto. Ofrece una vista general del cronograma, permite identificar los plazos de cada actividad y facilita que el equipo planifique y organice su trabajo con anticipación.',
    },
    {
      termino: 'Requerimiento',
      significado:
        'Necesidad documentada sobre el contenido, la forma o la funcionalidad de un producto o servicio, considerando las especificidades de los clientes. Los requerimientos identifican los atributos, características, capacidades y cualidades que debe cumplir un entregable para que tenga valor y utilidad.',
    },
    {
      termino: '<i>Software</i> de gestión de proyectos',
      significado:
        'También conocido como programa para la administración de proyectos, es una herramienta informática multiusuario y colaborativa diseñada para planificar, organizar, asignar recursos, comunicar, visualizar, modificar y monitorear el desarrollo de las tareas y objetivos de un proyecto. Desde el seguimiento del progreso hasta la gestión de equipos, estos programas abarcan todas las fases del ciclo de vida de un proyecto.',
    },
  ],
  referencias: [
    {
      referencia:
        'Esterkin, J. D. (2019, 21 de marzo). ¿Qué es un requerimiento en el proyecto? LinkedIn.',
      link: 'https://www.linkedin.com/pulse/qu%C3%A9-es-un-requerimiento-en-el-proyecto-jos%C3%A9-daniel-esterkin/',
    },
    {
      referencia: 'MSMK. (2024, 11 de septiembre). ¿Qué es el alcance?',
      link: 'https://msmk.university/que-es-el-alcance/',
    },
    {
      referencia:
        'Prieto, E. (2024, 14 de febrero). Software para la administración de proyectos, aliado del Project Manager. SNHU.',
      link: 'https://es.snhu.edu/blog/que-es-un-software-para-administrar-proyectos',
    },
    {
      referencia:
        'Talbert, M. (2026, 3 de febrero). Cómo crear y gestionar el calendario de un proyecto para preparar a tu equipo para el éxito. Asana.',
      link: 'https://asana.com/es/resources/project-calendar',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06  <br> Responsable Ecosistema Virtual de Recursos Educativos Digitales  ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Eliana Audrey Manchola Pérez ',
          cargo: 'Experto temático ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
        {
          nombre: 'Paola Alexandra Moya ',
          cargo: 'Evaluadora instruccional ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan José Calderón Gutierrez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Henry Alvarez Astudillo',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta ',
          cargo: 'Intérprete lenguaje de señas  ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura ',
          cargo: 'Intérprete lenguaje de señas ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania ',
          cargo: 'Animador y productor audiovisual ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada ',
          cargo: 'Animador y productor audiovisual ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez ',
          cargo: 'Locución ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos ',
          cargo: 'Locución ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez ',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa ',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}

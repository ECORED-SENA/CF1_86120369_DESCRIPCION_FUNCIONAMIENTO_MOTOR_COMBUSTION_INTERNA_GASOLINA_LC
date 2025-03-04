export default {
  global: {
    Name: 'Constitución y Partes',
    Description:
      'El componente formativo describe el funcionamiento y las partes del motor de combustión interna, con énfasis en la culata. Explica su estructura, los tipos de refrigeración y los materiales utilizados en su fabricación. También aborda el diseño y operación de las válvulas, la rectificación de asientos y el reemplazo de guías, destacando la importancia del mantenimiento para un rendimiento óptimo del motor.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
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
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo: 'Análisis de las partes de un motor de cuatro tiempos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Cabezote o culata',
            hash: 't_1_1',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tipos de culatas para diferentes motores',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Culatas en motores refrigerados por aire',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Culatas para motores refrigerados por agua',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Constitución y partes de la culata',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Asientos de las válvulas',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Rectificación de los asientos de las válvulas',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Guía de las válvulas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Comprobación de guía de las válvulas',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Maquinado y reemplazo de guías',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Válvulas de un motor de cuatro tiempos',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Diseño y construcción de las válvulas',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Partes de las válvulas',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Válvulas con sodio (Na) dentro del vástago',
            hash: 't_4_6',
          },
          {
            numero: '4.7',
            titulo: 'Mediciones de la válvula',
            hash: 't_4_7',
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
  complementario: [
    {
      tema: 'Cabezote o culata',
      referencia:
        'Total Motors. (2020). <em>CULATA O CABEZA DE MOTOR – Partes Principales y Funcionamiento (video)</em>. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Dv8EEnntyV4',
    },
    {
      tema: 'Cabezote o culata',
      referencia:
        'Repuestos Acquaroni. (2019). <em>Importancia de la Culata de Motor (video)</em>. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=FVdFe4ujSnc',
    },
  ],
  glosario: [
    {
      termino: 'Asiento de válvula',
      significado:
        'superficie donde la válvula sella herméticamente para evitar fugas de gases en la cámara de combustión. Su rectificación es clave para el correcto funcionamiento del motor.',
    },
    {
      termino: 'Culata',
      significado:
        'componente del motor que forma la cámara de combustión y aloja las válvulas, las bujías y, en algunos casos, el eje de levas. Su diseño y material varían según el sistema de refrigeración utilizado.',
    },
    {
      termino: 'Guía de válvula',
      significado:
        'elemento que permite el desplazamiento preciso de la válvula, evitando un juego axial excesivo. Puede estar fabricada en aleaciones de bronce, cobre o hierro fundido.',
    },
    {
      termino: 'Rectificación',
      significado:
        'proceso de mecanizado que permite ajustar superficies de componentes del motor, como los asientos de válvulas, para garantizar un sellado hermético y un funcionamiento eficiente.',
    },
    {
      termino: 'Válvula',
      significado:
        'elemento del motor que permite el ingreso de la mezcla de aire y combustible en los motores de combustión interna y la salida de los gases quemados. Puede ser de admisión o de escape.',
    },
  ],
  referencias: [
    {
      referencia:
        'Mahle. (s.f.). <em>Engine pars and turbochargers in original equipment quality.</em>',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Edwin Abello Rubiano',
          cargo: 'Experto temático',
          centro:
            'Centro de la Tecnología del Diseño y la Productividad Empresarial - Regional Cundinamarca',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Evaluadora Instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Diana Milena Picón Rincón',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete Lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete Lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
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

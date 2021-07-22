export default {
  global: {
    componenteFormativo: 'Principios de medidas eléctricas',
    descripcionCurso:
      'Este componente se relaciona con la medición que hace parte de las actividades de la vida, en especial hoy donde es normal vestir dispositivos electrónicos que miden las pulsaciones y la distancia recorrida. También se hace imprescindible para controlar los procesos y obtener datos para la toma de decisiones; medir parámetros eléctricos permitirá adentrarse en el mundo de la medición.',
    imagenBannerPrincipal: require('@/assets/curso/images/header/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/images/header/fondo-banner-principal.png'),
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
        titulo: 'Instrumentos de medida',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Exactitud y precisión',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Clase de precisión, burden y error',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Calibración de instrumentos',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tipos de instrumentos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Medida de potencia trifásica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Instrumentos trifásicos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Diagramas de conexión',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      //{
      // nombreRuta: 'actividad',
      // icono: 'far fa-question-circle',
      // titulo: 'Actividad didáctica',
      // desarrolloContenidos: true,
      //},
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
  referencias: [
    {
      referencia:
        'Organismo Nacional de Acreditación de Colombia – ONAC. (2021). Acreditación laboratorio de calibración y mediciones industriales SENA',
      link: 'https://onac.org.co/certificados/16-LAC-016.pdf',
    },
    {
      referencia:
        'Purkait, P., Biswas, B., Das, S., y Koley, C. (2013). Electrical and Electronics Measurements and Instrumentation. McGraw Hill Education (India).',
      link: '',
    },
    {
      referencia:
        'Técnicas de control metrológico. (2021). Certificado de calibración.',
      link:
        'https://www.tcmetrologia.com/blog/interpretacion-y-modelo-de-certificado-de-calibracion/',
    },
    {
      referencia:
        'Villalobos, O., G. (2006). Medición y control de procesos industriales. Instituto Politécnico Nacional.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Burden',
      significado:
        'Carga impuesta a un instrumento de medida eléctrico o electrónico en la entrada del circuito a medir, su unidad de medida es el voltio-amperio (VA).',
    },
    {
      termino: 'CT',
      significado:
        'Transformador de corriente (siglas en inglés de Current Transformer).',
    },
    {
      termino: 'ONAC',
      significado: 'Organismo Nacional de Acreditación de Colombia.',
    },
    {
      termino: 'PT',
      significado:
        'Transformador de potencial (siglas en inglés de Potential Transformer).',
    },
    {
      termino: 'True RMS',
      significado: 'valor eficaz verdadero de las ondas en corriente alterna.',
    },
  ],
  complementario: [
    {
      texto: '1.3. Calibración de instrumentos.',
      tipo: 'Página web',
      link:
        'https://www.tcmetrologia.com/blog/interpretacion-y-modelo-de-certificado-de-calibracion/',
    },
    {
      texto: '1.3. Calibración de instrumentos.',
      tipo:
        'Acreditación laboratorio de Calibración y Mediciones Industriales SENA.',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto:
        'Balboa, C. y Dominguez, M. (2014). Economía circular como marco para el ecodiseño: el modelo ECO-3. Informador Técnico (Colombia) Volumen 78, No. 1. Pág. 52-90.',
      tipo: 'Artículo científico',
      link: 'https://onac.org.co/certificados/16-LAC-016.pdf',
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
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carlos Javier González Cuevas',
        cargo: 'Experto Técnico',
        centro:
          'Distrito Capital. Centro Electricidad Electrónica y Telecomunicaciones',
      },
      {
        nombre: 'Marlon Augusto Villamizar Morales',
        cargo: 'Experto Técnico',
        centro: 'Global Green Growth Institute (GGGI)',
      },
      {
        nombre: 'Cristian Metaute Medina',
        cargo: 'Diseñador Instruccional',
        centro:
          'Distrito Capital Centro para la Industria de la Comunicación Gráfica del SENA',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Distrito Capital - Centro para la Industria de la Comunicación Gráfica del SENA',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Distrito Capital Centro de Diseño y Metrología ',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
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

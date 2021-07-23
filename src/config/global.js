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
      texto:
        '1.3. Calibración de instrumentos. Técnicas de control metrológico S.L. (2021). Certificado de calibración',
      tipo: 'Página web',
      link:
        'https://www.tcmetrologia.com/blog/interpretacion-y-modelo-de-certificado-de-calibracion/',
    },
    {
      texto:
        '1.3. Calibración de instrumentos. Organismo Nacional de Acreditación de Colombia – ONAC. (2021). Acreditación laboratorio de calibración y mediciones industriales SENA. ',
      tipo: 'PDF',
      descarga: '/downloads/16-LAC-016.pdf',
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
      {
        nombre: 'Carlos Javier González Cuevas',
        cargo: 'Experto técnico',
        centro:
          'Centro Electricidad Electrónica y Telecomunicaciones - Regional Distrito Capital',
      },
      {
        nombre: 'Marlon Augusto Villamizar Morales',
        cargo: 'Experto técnico',
        centro: 'Global Green Growth Institute (GGGI)',
      },
      {
        nombre: 'Cristian Metaute Medina',
        cargo: 'Diseñador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica del SENA - Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica del SENA - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
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
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Juan Carlos Tapias Rueda',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
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

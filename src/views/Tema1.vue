<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5   
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Instrumentos de medida

    .row.justify-content-center.align-items-center.mt-5
      .col-12.col-lg-12.mb-5
        img(src="@/assets/curso/images/tema1/img_1.png" alt="", style="width:1000px; display:block; margin:0 auto;")
    
    p.mb-3 El arte de la medida de magnitudes eléctricas, como corriente, voltaje y resistencia, empezó su desarrollo a finales del siglo XIX con el descubrimiento de la regla de la fuerza cuando se halló que la interacción entre los campos electromagnéticos produce fuerzas y, por lo tanto, movimiento que, con la estrategia correcta, resulta proporcional a la magnitud de la corriente que genera el campo. Fue así como aparecieron los instrumentos de medida analógicos. 

    p.mb-3  Posteriormente, con el avance de la ciencia de la electrónica y microcontroladores, los instrumentos de medida han evolucionado de tal forma que la mayoría de los instrumentos que se encuentran hoy en el mercado son de tipo electrónico. El reconocimiento de los tipos de instrumentos de medida y los conceptos asociados a la medición, son muy importantes dado que mucha de la información que se maneja en el mundo laboral para tomar decisiones proviene, precisamente, de dichos instrumentos. 

    p.mb-5 A continuación, se presentarán dos tipologías de instrumentos: analógicos y digitales en el siguiente recurso educativo. 
    
    h4.mb-5 Instrumentos analógicos

    .row.justify-content-center.align-items-center.mb-3
      .col-12
        .bloque-texto-a.color-custom-1.p-4.p-md-5.mb-3
          .row.m-4.align-items-center.justify-content-between
              .col-lg-5.mb-4.mb-lg-12
                  img(src="@/assets/curso/images/tema1/ico_1.svg" alt="", style="width:900px; display:block; margin:0 auto;")
              .col-lg-7
                .bloque-texto-a__texto.p-3
                  .col-sm.mt-3   
                    p.mb-3 De acuerdo con Purkait et al. (2013) un dispositivo analógico es aquel en el cual su indicador o pantalla es una función continua del tiempo y tiene una relación con su entrada. La clasificación de los instrumentos de medida se realiza según la variable a medir por el instrumento como el principio de funcionamiento. 

    p.mb-5 Los tres principios generales de funcionamiento son los siguientes: 

  
    TabsC.color-acento-botones.mb-5
      .py-3.py-md-4(titulo="Principio electromagnético")
        .row
          .col-md-6.mb-4.mb-md-0
            h6.mt-3 Principio electromagnético
            p Utiliza los efectos magnéticos de las corrientes eléctricas y también por imanes permanentes.
            p.mt-3 Son usados, principalmente, para medir corriente eléctrica, niveles de líquidos, presión y tensión eléctrica. Los antiguos medidores de energía pertenecen a esta categoría.

          .col-md-6.mb-4.mb-md-0
                  img(src="@/assets/curso/images/tema1/img_2.png" alt="", style="width:900px; display:block; margin:0 auto;")

      .py-3.py-md-4(titulo="Principio electrotérmico")
        .row
          .col-md-6.mb-4.mb-md-0
            h6 Principio electrotérmico

            p.mt-3 Utiliza los efectos de calentamiento sobre un material. El más común de los instrumentos que utilizan este principio se denomina <b>termocupla.</b> En muchos automóviles se indica en el tablero la temperatura exterior utilizando como sensor principal una termocupla. 

          .col-md-6.mb-4.mb-md-0
                  img(src="@/assets/curso/images/tema1/img_5.svg" alt="", style="width:900px; display:block; margin:0 auto;")

      .py-3.py-md-4(titulo="El principio de funcionamiento")
        .row
          .col-md-6.mb-4.mb-md-0
            h6 El principio de funcionamiento
                
            p.mt-3 El principio de funcionamiento es utilizar las propiedades que tienen dos alambres metálicos (cada uno de diferente material) unidos generalmente con soldadura que generan un voltaje a la salida cuando están expuestos al ambiente o a diferentes temperaturas.

          .col-md-6.mb-4.mb-md-0
                  img(src="@/assets/curso/images/tema1/img_6.svg" alt="", style="width:900px; display:block; margin:0 auto;")
    h4.mb-5 Instrumentos digitales

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-8.col-lg-6.col-xl-6
        p.mb-3 A causa de los adelantos tecnológicos de la electrónica, se han desarrollado instrumentos de medida que utilizan componentes electrónicos activos para mejorar la calidad de la medición amplificando las magnitudes de las variaciones detectadas por los sensores analógicos.

        p.mb-3 Al interior de los instrumentos digitales se utilizan conversores analógicos digitales (ADC, por sus siglas en inglés) para poder hacer un tratamiento a las señales de entrada y poder medir variables físicas que los instrumentos analógicos no podrían realizar.
        
      .col-12.col-md-8.col-lg-6.col-xl-6
        img.img-a.my-3(src="@/assets/curso/images/tema1/img_3.svg" alt="", style="width:400px; display:block; margin:0 auto;") 

    .row.justify-content-center.align-items-center.mb-3
      .col-12
        .bloque-texto-a.color-custom-1.p-4.p-md-5.mb-3
          .row.m-4.align-items-center.justify-content-between
              .col-lg-5.mb-4.mb-lg-12
                .bloque-texto-a__texto.p-3
                  .col-sm.mt-3   
                    p.mb-3 <b>Los principales componentes electrónicos que se encuentran al interior de los instrumentos digitales son:</b>
              .col-lg-7
                .bloque-texto-a__texto.p-5
                  .col-sm.mt-3   
                     ul.lista-ul.mb-3
                        li 
                          i.lista-ul__vineta
                          | Amplificadores.
                        li 
                          i.lista-ul__vineta
                          | Rectificadores.
                        li 
                          i.lista-ul__vineta
                          | Conversores análogo digital.
                        li 
                          i.lista-ul__vineta
                          | Pantalla o display electrónico.
                 
    p.mb-5 Actualmente,  la mayoría de los instrumentos utilizados comercialmente pertenecen a esta categoría, aunque aún podemos ver en muchos de los hogares medidores de energía eléctrica de tipo analógico.

    #t_1_1.titulo-segundo
      .h4 1.1 Exactitud y precisión


    p.mb-3 Es común confundir los términos exactitud y precisión, sin embargo, ambos están relacionados, pero son diferentes; Purkait, Biswas, Das y Koley (2013), los definen así:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/images/tema1/ico_2.svg', alt="", style="width:150px; display:block; margin:0 auto;")
          
        .h2.text-center Exactitud
        p Cercanía con la que la lectura del instrumento se acerca al valor real de la variable bajo medición. Es decir, hace referencia a qué tan cerca está el valor medido del valor real o verdadero.
      .col-md.tarjeta.color-acento-botones.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/images/tema1/ico_3.svg', alt="", style="width:150px; display:block; margin:0 auto;")
            br
          .h2.text-center Precisión
          p Como una medida de la reproducibilidad de las mediciones, es decir, la precisión es una medida del grado en que las sucesivas mediciones difieren entre sí.

    p.mb-5 A continuación, se presenta el siguiente ejercicio para entender un poco más las anteriores definiciones.

    SlyderB.mb-5.color-slyder.p-4(:datos="datosSlyder")

    Separador

    #t_1_2.titulo-segundo
      .h4 1.2 Clase de precisión, burden y error

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-8.col-lg-6.col-xl-6
        p.mb-3 Continuando con la temática se planteará, inicialmente, el concepto de error como una variable que tiene sus cualidades en el momento de la medición; en segundo lugar, se hablará de precisión y en tercer lugar se abordará un burden que es un término asociado a la carga máxima. 

        p.mb-3 Es momento de iniciar con el primer concepto: de acuerdo a lo planteado por Purkait et al. (2013) en la práctica, es imposible medir una variable con exactitud perfecta ya que siempre existirá una diferencia entre el valor medido con el instrumento y el valor real de la variable desconocida. Sin embargo, es posible determinar qué tan cerca o tal lejos se está de dicho valor real; la diferencia entre el valor real y el valor medido por el instrumento se denomina error absoluto.
        
      .col-12.col-md-8.col-lg-6.col-xl-6
        img.img-a.my-3(src="@/assets/curso/images/tema1/img_4.png" alt="", style="width:400px; display:block; margin:0 auto;") 

    p.mb-3 Los errores en las mediciones se pueden clasificar como:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Error grave")
        .col-12-md-6.mb-4.mb-md-0
          p Se deben, principalmente, a fallas humanas en la lectura o conexión del instrumento de medición. Es decir, así se tenga disponible el medidor con mayor exactitud del mundo, si se conecta o se lee de forma errónea estaremos muy lejos del valor real de la variable que deseamos medir.
       
      .row(titulo="Error sistemático")
        .col-md-12.mb-4.mb-md-0
          p Hace referencia a los que son inherentes a la tecnología del medidor y también a las condiciones ambientales del sitio. Hay que tener en cuenta que este error se puede minimizar si se seleccionan las características del medidor de manera correcta antes de realizar la medición. 

          p Para poner un caso específico, si las condiciones ambientales que define el fabricante del medidor es que la medida se haga a una temperatura de 25° C, tendremos un error sistemático si la temperatura ambiente a la que lo sometemos es de 30°C.

      .row(titulo="Error aleatorio")
        .col-md-12.mb-4.mb-md-0
          p La causa de este tipo de error es desconocida. A pesar de tener bien calibrado el medidor y cumplir con las condiciones ambientales sugeridas por el fabricante, aún puede existir un error desconocido. La forma correcta de minimizar los efectos de este tipo de errores es medir en repetidas ocasiones y aplicar métodos estadísticos para obtener un valor real.

    p.mb-5  Comprendido el concepto de error, se continúa con la clase de precisión la cual hace referencia al error relativo que, como máximo, puede tener un instrumento de medida. Los valores asignados para la clase de precisión están determinados por normas específicas y para cada instrumento debe estar indicado en su escala. Por lo general, la clase de precisión se simboliza mediante un número que representa el porcentaje de error relativo como, por ejemplo, lo que se presenta en la tabla 1.

    .row.justify-content-center.align-items-center.mt-5
        .col-9
          .tabla-a.color-acento-botones.mb-5 
            table
              thead
                tr
                  th(width='15').text-center Clase de precisión
                  th(width='15').text-center Error relativo
              tbody
                tr
                  td(width='15').text-center 0,1
                  td(width='15').text-center +/- 0,1%
                tr
                  td(width='15').text-center 0,2
                  td(width='15').text-center +/- 0,2%
                tr
                  td(width='15').text-center 0,5
                  td(width='15').text-center +/- 0,5%
                tr
                  td(width='15').text-center 1
                  td(width='15').text-center +/- 1%
                tr
                  td(width='15').text-center 1,5
                  td(width='15').text-center +/- 1,5%
                tr
                  td(width='15').text-center 2,5
                  td(width='15').text-center +/- 2,5%
                tr
                  td(width='15').text-center 5
                  td(width='15').text-center +/- 5%

    p.mb-3 Por ejemplo, si se tiene un amperímetro de rango de medición máximo de 100 amperios, y es de clase de precisión 1, el error máximo absoluto resulta de multiplicar el error relativo de la clase 1 igual a 1% y luego multiplicarlo por el rango máximo de medición que, en este caso, es 100 amperios. De lo anterior resulta:

    .row.justify-content-center.align-items-center.mt-5
      .col-12.col-lg-9
        .cajon.color-custom.p-4.mb-4
            .col-sm  
            p.text-center <b> Error máximo = 100 amperios x 1% = +/- 1 amperio </b>
            hr

    p.mb-5 Finalmente, se aborda el concepto de burden, una palabra asociada a la carga máxima que puede soportar un instrumento de medida que garantice que se pueda confiar en la medida. Es decir, si la salida de un instrumento de medición se quiere enviar eléctricamente a otros medidores, hay una carga límite que se debe tener en cuenta para garantizar el error determinado por la clase de precisión. 

    Separador

    #t_1_2.titulo-segundo
      .h4 1.3 Calibración de instrumentos

    p.mb-5 El proceso de calibración es importante para los procesos de medición, ya que se podrá confiar en la medida que arroja un instrumento si está correctamente calibrado, pero, ¿qué pasaría si el medidor de la velocidad en un automóvil está descalibrado? Probablemente que un agente de la ley interponga una infracción por exceso de velocidad sin que el conductor se dé cuenta de que estaba en una velocidad no permitida. Otro ejemplo es: ¿qué pasaría si el medidor de energía de una vivienda está descalibrado? Probablemente el cobro que llegue en la factura no es confiable.
  

    .row.justify-content-center.align-items-center.mb-3
      .col-12
        .bloque-texto-a.color-custom-1.p-4.p-md-5.mb-3
          .row.m-4.align-items-center.justify-content-between
              .col-lg-5.mb-4.mb-lg-12
                  img(src="@/assets/curso/images/tema1/ico_5.svg" alt="", style="width:250px; display:block; margin:0 auto;")
              .col-lg-7
                .bloque-texto-a__texto.p-3
                  .col-sm.mt-3   
                    p.mb-3 Según Villalobos (2006), <b>los instrumentos deben proveer la exactitud necesaria para que las condiciones de diseño de un sistema o proceso se cumplan y funcione de manera apropiada.</b> El nivel de confianza en los equipos de medición se logra realizando pruebas en intervalos de tiempo determinados y ajustando el instrumento de acuerdo a los resultados de la calibración. 

    p.mb-3 En los procesos de calibración se toma como referencia un patrón, es decir a un instrumento que está debidamente calibrado en ambientes especiales de tal manera que se pueda utilizar como punto de comparación para determinar la diferencia en la medida con otro equipo que se pretende analizar.

    p En Colombia la calibración de los instrumentos de medida la realizan organizaciones públicas y privadas creadas para tal fin, las cuales deben estar autorizadas y avaladas previamente por el Organismo Nacional de Acreditación de Colombia (ONAC). Por lo general, cuando un equipo ha pasado por un proceso de calibración, se expide un certificado que incluye el resultado de las pruebas y el dictamen de la calibración.




  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    datosSlyder: [
      {
        titulo:
          'Si practicamos tiro al blanco con dardos, se puede asumir que el valor real es el centro del tablero, como se muestra en la siguiente figura.',
        texto:
          'Ahora vamos a hacer varios grupos de lanzamientos. Cada lanzamiento se compone de seis intentos. Si hacemos tres grupos de lanzamientos obtenemos los siguientes resultados. Cada punto amarillo es el resultado de un lanzamiento',
        imagen: require('@/assets/curso/images/tema1/ico_6.svg'),
      },
      {
        titulo: 'Grupo de Lanzamientos 1',
        texto:
          'Observa el primer lanzamiento, ¿qué puedes concluir?, ¿hay exactitud?, ¿hay precisión?. De este lanzamiento se puede concluir: 1 Que fue impreciso, porque los puntos amarillos están muy separados unos de otros. 2 Que fue inexacto, porque ningún punto está cercano al centro del tablero. ',
        imagen: require('@/assets/curso/images/tema1/ico_7.svg'),
      },
      {
        titulo: 'Grupo de Lanzamientos 2',
        texto:
          'Observa nuestra segundo lanzamiento, ¿qué puedes concluir?, De este lanzamiento se puede concluir: 1 Que fue impreciso, porque los puntos amarillos están muy separados unos de otros. 2 Que fue exacto, porque porque los puntos están cercanos al centro del tablero',
        imagen: require('@/assets/curso/images/tema1/ico_8.svg'),
      },
      {
        titulo: 'Grupo de Lanzamientos 3',
        texto:
          'El último lanzamiento fue diferente a los otros, ¿lo percibes?, ¿qué se puede afirmar en este caso?, De este lanzamiento se puede concluir: 1 Que fue preciso, porque los puntos amarillos están muy cerca unos de otros. 2Que fue inexacto, porque los puntos están lejanos al centro del tablero.',
        imagen: require('@/assets/curso/images/tema1/ico_9.svg'),
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

<style lang="sass" scoped></style>

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Tipos de instrumentos
      

    .row.justify-content-center.align-items-center.my-5
      .col-12.col-lg-12.mb-3
        img(src="@/assets/curso/images/tema2/img_7.png" alt="", style="width:1200px; display:block; margin:0 auto;")

    p.mb-3 En los sistemas de gestión de la energía, la medición es una fuente de información primaria para la planificación de las acciones de mejora para el desempeño energético. Adicionalmente, a través de los instrumentos de medida se observa y concluye, posteriormente, la efectividad de dichas acciones al interior de la organización.

    p.mb-3 Existen diferentes tipos de instrumentos que se deben seleccionar de acuerdo con la variable eléctrica a medir. Como se enunció antes, cada instrumento de medición posee unas características propias y tecnologías específicas para efectuar la medida.

    p.mb-5 A continuación, se presentan los tipos de instrumentos más utilizados en el sector para la medición de variables eléctricas.

    h4.mb-2 Voltímetros

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-8.col-lg-6.col-xl-6
        p.mb-3 El voltímetro es un instrumento de medición utilizado para medir, de forma segura, <b>la diferencia de potencial o voltaje entre dos puntos de un circuito eléctrico o electrónico. </b>

        p.mb-3 Para medir el voltaje entre dos puntos no es necesario desconectar el circuito, ya que se conecta en paralelo. Internamente la entrada del voltímetro tiene una alta resistencia que no modifica significativamente el comportamiento del circuito a medir. El voltímetro está conformado por:
      .col-12.col-md-8.col-lg-6.col-xl-6
        img.img-a.my-3(src="@/assets/curso/images/tema2/img_8.svg" alt="", style="width:400px; display:block; margin:0 auto;") 

    h4.mb-3 Amperímetros   

    p.mb-3 El amperímetro es un instrumento utilizado para medir la corriente eléctrica al interior de un circuito eléctrico; la unidad que utiliza el amperímetro es el amperio.

    p.mb-5 Para medir la corriente en un circuito, se requiere que dicha corriente circule a través del amperímetro; normalmente esto se conoce como conexión en serie. Por tal razón, es necesario abrir el circuito antes de conectar el amperímetro.

    .row.justify-content-center.mb-5
      .col-auto.mb-4.mb-lg-0
        .tarjeta.tarjeta-container.tarjeta-cyan
          .tarjetaContent
            .tarjetaImg
              figure.mb-4
                img(src="@/assets/curso/images/tema2/ico_9.svg", alt="acceso", style="width:120px;").m-auto
              p #[strong Amperímetro analógico]
              
            .tarjetaTxt
              p.mb-0 #[strong Amperímetro analógico]
                br
                br
                | Utiliza internamente un medidor denominado galvanómetro compuesto a su vez por una aguja indicadora, una bobina, dos imanes y un resorte que generan la oscilación de la aguja durante la medición.    

      .col-auto.mb-4.mb-lg-0
        .tarjeta.tarjeta-container.tarjeta-cyan
          .tarjetaContent
            .tarjetaImg
              figure.mb-4
                img(src="@/assets/curso/images/tema2/ico_12.svg", alt="acceso", style="width:120px;").m-auto
              p #[strong Amperímetro digital]
              
            .tarjetaTxt
              p.mb-0 #[strong Amperímetro digital]
                br
                br
                | Es un instrumento que, a diferencia del analógico, no utiliza partes móviles, sino componentes electrónicos para la medición. Adicionalmente posee una pantalla en lugar de una aguja para la lectura de la corriente.    

    h4.mb-4 Pinza amperimétrica

    .row.justify-content-center.align-items-start.mb-5
      .col-12.col-md-8.col-lg-6.col-xl-6
        p Pertenece a la clasificación de amperímetro digital, sin embargo, tiene una ventaja constructiva que permite medir la corriente en un conductor sin necesidad de abrir el circuito eléctrico. Es el más utilizado en las empresas e industrias por su practicidad y funcionalidad, pero solo funciona en corriente alterna.
        
      .col-12.col-md-8.col-lg-6.col-xl-6
        img.img-a.my-3(src="@/assets/curso/images/tema2/img_9.svg" alt="", style="width:400px; display:block; margin:0 auto;") 

    h4.mb-4 Vatímetro y varímetro

    p.mb-3 Es un instrumento usado para medir la potencia consumida o generada por un elemento de circuito. Su unidad de medida es el vatio [W] y la ley de Joule establece que es igual a voltaje por corriente; por lo tanto, un vatímetro está compuesto internamente por un amperímetro y un voltímetro y el producto de sus lecturas equivale a la lectura de potencia. Para su uso se requiere conectar respecto a la carga la bobina de corriente en serie y la bobina de tensión en paralelo.

    p.mb-5 Al igual que los amperímetros y voltímetros, existen vatímetros analógicos y digitales.

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col
            .h2.text-center Vatímetro
            p.text-center El vatímetro se usa en corriente alterna para medir la potencia promedio, conocida también como potencia activa, la cual es igual al producto de los valores eficaces de corriente y voltaje por el coseno del ángulo de desfase entre ellos. El producto de los valores eficaces de corriente y voltaje por el seno del ángulo de desfase entre ellos se conoce como potencia reactiva y su unidad de medida es el voltio amperio reactivo [VAR]. Utiliza internamente un medidor denominado galvanómetro compuesto a su vez por una aguja indicadora, una bobina, dos imanes y un resorte que generan la oscilación de la aguja durante la medición.

      .col-md.tarjeta.color-acento-botones.p-5
        .row.justify-content-center.mb-4
          .col
            .h2.text-center Varímetro
            p.text-center El instrumento de medida usado para la potencia reactiva se conoce como varímetro, que constructivamente es igual a un vatímetro con una bobina de gran inductancia conectada internamente en serie con la bobina de voltaje para obtener un desfase adicional de 90º y como sin Φ = cos (90° –Φ) la lectura del vatímetro así conectado equivale a la potencia reactiva. Se conecta igual que el vatímetro; también existen varímetros análogos y digitales.

    h4.mb-4 Multímetros

    p.mb-5 Es un instrumento que se construye con la capacidad de medir varias magnitudes, una a la vez, como voltaje, corriente y resistencia, principalmente. Viene equipado con un selector desde donde es posible seleccionar el tipo de medida, el tipo de corriente alterna o continua y la escala de la lectura.

    .row.justify-content-center.align-items-center.mb-5
      .col-sm-6.col-lg-5.mb-4.mb-lg-0
        p.BorTit Multímetro analógico
          figure
            img(src='@/assets/curso/images/tema2/img_10.svg',alt='Multímetro analógico')
      .col-sm-6.col-lg-5.mb-4.mb-lg-0
        p.BorTit Multimetro digital
          figure
            img(src='@/assets/curso/images/tema2/img_11.svg', alt='Multimetro digital')

    p.mb-5 Los hay análogos y digitales, algunos de estos últimos con capacidad de medir valores eficaces de ondas alternas diferentes a la senoidal lo que se conoce como True RMS o valor eficaz verdadero. Los instrumentos análogos y los digitales No True RMS en alterna solo miden correctamente ondas senoidales, porque, según la teoría de circuitos, el valor RMS corresponde en ese caso al valor máximo dividido entre la raíz de dos.

    h4.mb-4 Transformadores de medida

    p.mb-3 Los transformadores de medida son elementos usados en corriente alterna para cambiar el rango de la medida de los instrumentos y para garantizar la seguridad de los usuarios aislando la etapa de potencia donde se manejan normalmente altos niveles de corriente y voltaje de la etapa de medida donde se encuentran localizados los instrumentos.

    p.mb-3 De esta manera, los circuitos primarios de los transformadores, de voltaje y corriente, están conectados a las líneas de potencia y los lados secundarios están conectados a los instrumentos de medida. El cociente de los valores nominales de las magnitudes del primario dividido entre el valor nominal de las magnitudes del secundario se conoce como relación de transformación.

    p.mb-5 Se dispone de dos tipos de transformadores de medida, así:

    TabsC.color-acento-botones.mb-5
      .py-3.py-md-4(titulo="Transformadores de corriente (CT)")
        .row.justify-content-center.align-items-center
          .col-auto
            h6.text-center.mb-5 Transformadores de potencial (CT)
            img(src="@/assets/curso/images/tema2/ico_13.svg" alt="", style="width:300px; display:block; margin:0 auto;")
          .col-lg-7.mb-4.mb-md-0
            p El lado primario se conecta en paralelo con la carga y el secundario en paralelo con las bobinas de voltaje de los instrumentos de medida. Normalmente se usan cuando el nivel de voltaje de la carga es en media tensión o superior.  

      .py-3.py-md-4(titulo="Transformadores de potencial (PT)")
        .row.justify-content-center
          .col-auto.mb-4.mb-md-0
            h6.text-center.mb-5 Transformadores de potencial (PT)
            img(src="@/assets/curso/images/tema2/ico_10.svg" alt="", style="width:300px; display:block; margin:0 auto;")
          .col-lg-7
            p.mt-3 El lado primario se conecta en serie con la carga y el secundario en serie con las bobinas de corriente de los instrumentos de medida. El lado secundario de un transformador de corriente nunca debe ser abierto en condiciones de carga ya que la alta inductancia de este tipo de transformadores hará que el voltaje en bornes V = L (di/dt) crezca hasta superar el valor de la rigidez dieléctrica del aire ocasionando un arco eléctrico que sólo se extingue con la destrucción del transformador y todo lo que esté en su área de influencia.

    .hr_blank
                  
    h4.mb-4 Contadores monofásicos de energía eléctrica

    p.mb-5 Es un instrumento usado para medir la energía eléctrica y como la energía es igual a la potencia por el tiempo, un contador de energía es esencialmente un vatímetro al que se le incluye un elemento acumulador que tiene en cuenta el tiempo. 

    .row.justify-content-center.mb-5
      .col-auto.mb-4.mb-xl-0
        .tarjeta.tarjeta-container.tarjeta-cyan
          .tarjetaContent
            .tarjetaImg
              figure.mb-4
                img(src="@/assets/curso/images/tema2/ico_11.svg", alt="acceso", style="width:120px;").m-auto
              p #[strong Contador analógico]
              
            .tarjetaTxt
              p.mb-0 #[strong Contador analógico]
                br
                br
                | En el caso de los contadores análogos ese elemento es un disco giratorio cuya velocidad angular es proporcional a la potencia y el número de vueltas es proporcional a la velocidad angular (potencia) por el tiempo, es decir a la energía. 
    
      .col-auto.mb-4.mb-xl-0
        .tarjeta.tarjeta-container.tarjeta-cyan
          .tarjetaContent
            .tarjetaImg
              figure.mb-4
                img(src="@/assets/curso/images/tema2/ico_14.svg", alt="acceso", style="width:120px;").m-auto
              p #[strong Contador digital]
              
            .tarjetaTxt
              p.mb-0 #[strong Contador digital]
                br
                br
                | En el caso de los contadores digitales ese elemento está compuesto por  el procesador matemático donde se realiza la sumatoria del producto de los datos del muestreo de las formas de onda  de voltaje y corriente y la memoria donde se acumulan dichos valores.   

    p El diagrama de conexión de estos instrumentos es el mismo que el usado para los vatímetros.
      br
      br
      | La unidad de medida de la energía usada en los contadores es el kilovatio hora [kW-h].

    


























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

<style lang="sass" scoped></style>

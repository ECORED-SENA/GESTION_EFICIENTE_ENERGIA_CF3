<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Medida de potencia trifásica
    
    .row.justify-content-center.align-items-center.my-5
      .col-12.col-lg-12.mb-3
        img(src="@/assets/curso/images/tema3/img_12.svg" alt="", style="width:1000px; display:block; margin:0 auto;")

    p.mb-5 En los circuitos trifásicos las magnitudes de corriente y voltaje se miden de forma monofásica, es decir, se usan los amperímetros y voltímetros monofásicos para medir las magnitudes de fase y las de línea de forma individual y acorde con la topología del circuito (Y o Δ). En las siguientes figuras se muestra un ejemplo de cada caso.

    .row.justify-content-center.align-items-center.mb-5
        .col-sm-6.col-lg-5.mb-4.mb-lg-0
          p.BorTit #[strong Figura 1] Ejemplo 1 
            figure
              img(src='@/assets/curso/images/tema3/img_13.svg', alt='Ejemplo 1')
        .col-sm-6.col-lg-5.mb-4.mb-lg-0
          p.BorTit #[strong Figura 2] Ejemplo 2  
            figure
              img(src='@/assets/curso/images/tema3/img_14.svg', alt='Ejemplo 2')
    
    Separador 

    #t_3_1.titulo-segundo
      .h4 3.1 Instrumentos trifásicos

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-8.col-lg-6.col-xl-6
        p.mb-3 El teorema de Blondel establece que la potencia o la energía de un circuito de N fases puede ser medida por N elementos de medición monofásicos y con los circuitos de tensión conectados en cada fase a cualquier punto común.

        p En el caso trifásico, entonces, estas medidas se pueden realizar de dos formas: usando instrumentos monofásicos y sumando las tres magnitudes de fase obtenidas o usando instrumentos trifásicos directamente. En el primer caso se procede en cada fase como se explicó en los apartados 2.3 y 2.6, respectivamente. En el segundo caso se usa un medidor de potencia o energía trifásico, el cual, internamente, equivale a tres dispositivos monofásicos (conocidos como elementos) y su lectura corresponde a la suma de las magnitudes de cada fase. Ahora se verá cómo se conectan estos dispositivos de tres elementos.

      .col-12.col-md-8.col-lg-6.col-xl-6
        img(src="@/assets/curso/images/tema3/img_15.png" alt="", style="width:400px; display:block; margin:0 auto;") 

    Separador

    #t_3_2.titulo-segundo
      .h4 3.2 Diagramas de conexión

    p.mb-5 La forma de conexión de los vatímetros y contadores es la misma en cada caso, lo único que cambia es el instrumento. Cuando las magnitudes de los voltajes y corrientes están dentro del rango de las magnitudes nominales del instrumento, las conexiones de las bobinas de tensión y de corriente se pueden realizar de forma directa y en este caso la lectura del instrumento es igual a la cantidad medida. A este método de conexión se le conoce como medida directa, como se muestra en la siguiente figura.

    .row.justify-content-center.align-items-center.mb-5
        .col-sm-6.col-lg-8.mb-4.mb-lg-0
          p.BorTit #[strong Figura 3] Medida directa
            figure
              img(src='@/assets/curso/images/tema3/img_16.svg', alt='Medida directa')
    
    p.mb-5 Cuando la magnitud de la corriente a medir es alta, típicamente mayor de 100 [A], aunque la resistencia de la bobina de corriente es baja, su caída de tensión I*R afecta significativamente la precisión de la medida. Por esta razón, en estos casos se usan instrumentos de conexión directa para las bobinas de voltaje y de conexión indirecta para las bobinas de corriente, es decir, a través de transformadores de corriente con razón de transformación tal que la magnitud de la corriente a medir esté dentro del rango de la corriente nominal del primario y la corriente nominal del secundario corresponda con el valor nominal del instrumento (comercialmente normalizada a 1 [A] o 5 [A]). Por ejemplo, si se requiere medir el consumo de energía de una carga cuya corriente nominal es de 250 [A] con un medidor de corriente nominal 5 [A] deben usarse transformadores de corriente de 300/5. A este método de conexión se le conoce como medida semidirecta.

    .row.justify-content-center.align-items-center.mb-5
        .col-sm-6.col-lg-8.mb-4.mb-lg-0
          p.BorTit #[strong Figura 4] Medida semidirecta
            figure
              img(src='@/assets/curso/images/tema3/img_17.svg', alt='Medida semidirecta')

    p.mb-5 Cuando además de la corriente, también la magnitud del voltaje a medir es alta, típicamente mayor de 600 [V], debido a consideraciones de aislamiento, se usan instrumentos de conexión indirecta para las bobinas de voltaje, es decir, a través de transformadores de tensión con razón de transformación tal que la magnitud del voltaje a medir esté dentro del rango de voltaje nominal del primario y el voltaje nominal del secundario corresponda con el valor nominal del instrumento (comercialmente normalizado a 110 [V] o 230 [V]). Por ejemplo, si se requiere medir el consumo de energía de una carga cuyo voltaje nominal es de 13,2 [kV] con un medidor de voltaje nominal 110 [V] deben usarse transformadores de voltaje de 13.200/110. A este método de conexión se le conoce como Medida indirecta.

    .row.justify-content-center.align-items-center.mb-5
        .col-sm-6.col-lg-8.mb-4.mb-lg-0
          p.BorTit #[strong Figura 5] Medida indirecta
            figure
              img(src='@/assets/curso/images/tema3/img_18.svg', alt='Medida indirecta')
    
    p.mb-3 En circuitos sin neutro existe un caso especial en la aplicación del teorema de Blondel y es cuando se escoge como punto común de referencia una de las fases. En ese caso, el voltaje de dos elementos del instrumento corresponde al voltaje de línea y el voltaje del elemento restante sería 0, luego su lectura de potencia sería también 0 y podría, entonces, ser eliminado. Este esquema es conocido como conexión ARON y puede ser aplicado usando instrumentos trifásicos de dos elementos o usando dos instrumentos monofásicos sumando las lecturas individuales, las cuales pueden ser negativas si el factor de potencia es inferior a 0,5.

    p.mb-5 Una de las ventajas de la conexión Aron sobre la conexión con instrumentos de tres elementos es que resulta más económica y las desventajas son que requieren inversión de conexión para lecturas negativas y que en circuitos con neutro solo funciona para cargas equilibradas.

    .row.justify-content-center.align-items-center.mb-5
        .col-sm-6.col-lg-8.mb-4.mb-lg-0
          p.BorTit #[strong Figura 6] Conexion Aron 
          figure
            img(src='@/assets/curso/images/tema3/img_19.svg', alt='Conexion Aron')




</template>

<script>
export default {
  name: 'Tema3',
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

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Constitución y partes de la culata

    <!-- BLOQUE 1 -->     
    .row.mb-4
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema3/img1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Una culata o cabezote del motor de cuatro ciclos, ya sea <em>Otto</em> a gasolina o <em>Diesel</em>, tiene una estructura bastante compleja, pues además de constituir la tapa de los cilindros del motor, debe albergar muchas otras partes importantes, para cumplir con el objetivo de su diseño.
            br
            br
            | Entre los elementos más importantes podemos mencionar: las válvulas, las guías que desplazan estas válvulas; los propulsores o balancines de válvulas que las empujan; los ejes de levas que se encargan de impulsar a los balancines o propulsores a las bujías; para que éstas a su vez, puedan combustionar la mezcla aspirada en los motores a gasolina o los inyectores, que deben inyectar el combustible en los motores <em>Diesel</em>.
    
    Separador
    <!-- BLOQUE 2 -->
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Asientos de las válvulas

    .row.mb-4
      .col-lg.text-tema3-bloque2
        .row.h-100.align-items-center
          .col-12
            p En este ámbito, se entiende por asiento, el lugar en el cual se forma el sello hermético de la válvula. Este puede ser parte del mismo material de la culata o del bloque del motor, eso para el caso de los motores más antiguos (donde se usaba la fundición gris y no en material ligero). Las culatas que tienen el asiento en material ligero se les denomina postizo. 
      .col-lg-auto.img-tema3-bloque2
        figure(data-aos="fade-left").d-none.d-lg-block.img-tema4-bloque2
          img(src='@/assets/curso/tema3/img2.png', alt='Texto que describa la imagen' style="width: 430px")
            
    p.mb-5 El asiento, por lo tanto, es un anillo de material resistente al trabajo continuo de “golpeteo”, resistente a la corrosión ocasionada por los agentes de la combustión y aditivos del combustible; entre ellos el plomo, material que daña inclusive a las válvulas, cilindros y pistones.

    .row.fondo-tema1
      .col-lg-2
      .col-lg-2
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Asiento
      .row      
        .col-lg-2
        .col-lg-8
          figure(data-aos="fade-down")
            img(src='@/assets/curso/tema3/img3.png', alt='Imagen que presenta cómo es el asiento')

    .row.caja-text-img-tema3-bloque2.mb-4
      .col-lg-auto.align-self-center
        figure(data-aos="fade-right").d-none.d-lg-block
          img(src="@/assets/curso/tema3/img1.svg" style="width: 81px")
      .col-lg
        p Desde los primeros motores, los cuales poseían las válvulas en el bloque de cilindros, las válvulas debían sellar herméticamente el canal de aspiración y el canal de escape con la cámara de combustión. 
    
    p.mb-5 El asiento está alojado dentro de la culata o cabezote, con una tolerancia de ajuste dentro del maquinado de la fundición original de la culata. Después de instalado, se debe rectificar, para que la superficie que está en contacto con la válvula pueda realizar el cierre hermético con la cámara de combustión.

    .row.fondo-tema1
      .col-lg-2
      .col-lg
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 2.
          span Alojamiento del asiento
      .row
        .col-lg-2    
        .col-lg-8    
          figure.img-tema3-bloque2(data-aos="fade-down")
            img(src='@/assets/curso/tema3/img4.png', alt='Imagen que presenta cómo el asiento está alojado dentro de la culata.')

    p.mb-5.text-tema3-bloque2-1 Este asiento debe tener un ancho promedio desde 1.8 hasta 3.2 mm en las válvulas de admisión y desde 2.5 hasta 3.5 mm en las válvulas de escape. Para conseguir este ancho, se rectifica el diámetro interior del asiento y la cara frontal, con ángulos superiores a los 75 grados, que le permiten también un buen llenado del cilindro y una buena evacuación de los gases de escape. En la figura podemos observar las dimensiones del asiento de una válvula, asiento que debe tener un promedio de las 2/3 partes del ancho total de la superficie cónica de la válvula.

    .row.fondo-tema1
      .col-lg-3
      .col-lg
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 3.
          span Dimensiones del asiento de una válvula
      .row
        .col-lg-3 
        .col-lg-6
          figure(data-aos="fade-down")
            img(src='@/assets/curso/tema3/img5.png', alt='Los ángulos que se indican en el gráfico nos muestran el procedimiento para el rectificado.')
       

    Separador
    <!-- BLOQUE 3 -->
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Rectificación de los asientos de las válvulas

    .row.mb-5
      .col-lg-auto.img-tema3-bloque3
        figure(data-aos="fade-right").d-none.d-lg-block
          img(src='@/assets/curso/tema3/img6.png', alt='Texto que describa la imagen' style=("width: 280px"))
      .col-lg
        .row.mb-2
          .col-12
            .p-3.text-tema3-bloque3
              .row
                .col-md-auto
                  figure.svg-tema3-bloque3(data-aos="flip-right").d-none.d-lg-block
                    img(src="@/assets/curso/tema3/img2.svg" style=("width: 90px"))
                .col
                  p La rectificación de los asientos de las válvulas es un procedimiento que se realiza mediante una herramienta que se denomina fresa de rectificación. Así para obtener el ancho exacto del asiento de una válvula de admisión, que tiene un ángulo de 45º de inclinación, es necesario rectificar inicialmente la medida de tal ángulo ya que será en el que la válvula se asiente finalmente.
                  p.mb-0 Seguramente, como el ancho de este asiento será seguramente mayor y no estará necesariamente en el centro de la superficie cónica de la válvula, se requerirá rectificar al asiento en su parte baja, con un ángulo de 15°, para determinar el borde inferior del asiento.
        p Una vez hecho lo anterior, se revisará en su parte alta interior con un ángulo de 75°, para determinar el borde superior del asiento. Al repasar cada uno de estos ángulos será podrá obtener exactamente, el ancho del asiento y también que este se encuentre en la mitad de la superficie cónica de la válvula. Por lo que sigue, revisando tales ángulos es posible obtener tanto el ancho como el centrado requerido.
        
    .row.mb-5
      .col-lg-1
      .col-lg
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 4.
          span Rectificación del ángulo superior del asiento
      .row
        .col-1       
        .col-lg-10
          figure(data-aos="fade-down")
            img(src='@/assets/curso/tema3/img7.png', alt='Imagen que presenta la rectificación del ángulo superior del asiento.')  

    .row.caja-text-img-tema3-bloque2.mb-5
      .col-lg-auto
        figure(data-aos="fade-right").d-none.d-lg-block
          img(src="@/assets/curso/tema3/img1.svg" style="width: 81px")
      .col-lg
        p La herramienta que se utilice para rectificar los ángulos de los asientos de las válvulas puede utilizarse de forma manual o por medio de una máquina.

    .row.mb-5
      .col-lg
        .row.text-tema3-bloque3-1
          p.mb-2 En ese sentido, para utilizar las fresas de rectificación será necesario que esta fresa se inserte dentro de la guía de la válvula, ya que esta centrará a la herramienta de corte.
          p Luego de que esta guía haya sido comprobada debidamente, demostrando que está en buen estado con respecto al vástago de la válvula, o ya haya sido reemplazada por una nueva guía, cuando el desgaste de ella hace necesario su reemplazo.
        p.text-tema3-bloque3-2 Al girar la cuchilla o la fresa se va rectificando la superficie del asiento de forma perpendicular con respecto a la guía de la válvula, de tal manera que la válvula finalmente quedará centrada exactamente en ella. Se trabajará en los tres ángulos para obtener el ancho del asiento y que este coincida justamente en el medio de la superficie cónica de la válvula.
      .col-lg-auto.img-tema3-bloque3-1
        figure(data-aos="fade-left").d-none.d-lg-block
          img(src='@/assets/curso/tema3/img8.png', alt='Texto que describa la imagen' style=("width: 400px"))

    .row.fondo-tema1
      .col-lg-2
      .col-lg
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 5.
          span Fresa o cuchilla de rectificación
      .row      
        .col-lg-2
        .col-lg-8
          figure(data-aos="fade-down")
            img(src='@/assets/curso/tema3/img9.png', alt='Imagen que presenta la fresa o cuchilla de rectificación.')
       
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

<style lang="sass"></style>

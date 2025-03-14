<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Guía de las válvulas

    <!-- BLOQUE 1 -->
    .row.mb-5
      .col-lg-auto
        imagen.d-none.d-lg-block.img-tema4-bloque2
          img(src='@/assets/curso/tema4/img1.png', alt='Texto que describa la imagen')
      .col-lg.text-tema4-bloque1
        p Es el elemento que permite el desplazamiento descendente y ascendente de la válvula, para que ella cierre de forma centrada en su asiento. La válvula debe deslizarse dentro de la guía sin que esta última permita un juego axial, para que la válvula trabaje con exactitud y pueda realizar el sellado hermético en su asiento.
        p De modo que la válvula recibe no solamente la fuerza perpendicular que la impulsa hacia abajo, sino que también recibe fuerzas laterales ocasionadas por el empuje del mismo balancín, que debe transmitir el giro de la leva y con ello impulsar a la válvula respectiva.

    .row.fondo-tema1
      .col-lg-3
      .col-lg
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 6.
          span Guía de la válvula
      .row      
        .col-lg-3
        .col-lg-6
          figure
            img(src='@/assets/curso/tema4/img2.png', alt='Imagen que presenta la guía de la válvula.')

    p.text-tema4-bloque1-1  Ahora bien, debido a que la fundición gris (hierro fundido) tiene un buen coeficiente de deslizamiento, se puede evitar la utilización de guías postizas; aunque este factor también permite la posibilidad de instalarlas en el caso de excesivo desgaste de este orificio básico original.

    .row.mb-5
      .col-lg
        .row.mb-2
          .col-12
            .p-3.text-tema4-bloque1-2
              .row
                .col-md-auto
                  figure.svg-tema3-bloque3(data-aos="flip-right").d-none.d-lg-block
                    img(src="@/assets/curso/tema4/img1.svg" style=("width: 90px"))
                .col
                  p.mb-0 En los casos de culatas de aleaciones de aluminio, se requiere de una instalación de guías postizas, debido a que el material no soporta los esfuerzos de fricción como en el caso anterior. Para ello se deben utilizar guías de aleaciones de bronce, cobre o hierro fundido, materiales que sí reúnen buenas cualidades de resistencia a la temperatura y a la fricción.
            p Estas guías, al igual que los asientos de válvulas, deben ser introducidas con un ajuste en sus alojamientos, calentando previamente a la culata y enfriando a las guías; para que luego de insertarlas queden con el ajuste exacto dentro de su alojamiento. Debido al sentido de flujo de los gases de entrada, la guía de la válvula de admisión tiene un sector cónico en la parte baja, que permite un mejor ingreso de la mezcla y en el caso de las guías de las válvulas de escape esta reducción del diámetro y en sentido también cónico, posibilita la evacuación de los gases quemados sin brindar restricción a la salida de ellos.
      .col-lg-auto
        figure(data-aos="fade-left").d-none.d-lg-block.img-tema4-bloque2
          img(src='@/assets/curso/tema4/img3.png', alt='Texto que describa la imagen' style=("width: 400px"))

    .row.fondo-tema1
      .col-lg-2
      .col-lg
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 7.
          span Sector cónico de la guía de la válvula
      .row      
        .col-lg-2
        .col-lg-8
          figure(data-aos="flip-right")
            img(src='@/assets/curso/tema4/img4.png', alt='Imagen que presenta el sector cónico de la guía de la válvula.')

    Separador
    <!-- BLOQUE 2 -->
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1 Comprobación de guía de las válvulas

    .row
      .col-lg.p-0
        p Cuando un motor ha trabajado un período normal y el desgaste de sus partes obliga a que deba ser comprobado para su reparación, una de las partes que se debe comprobar con mucho cuidado es la guía de válvula; de ella depende en gran parte el centrado y el cierre hermético de la válvula en su asiento.
        .row
          .col-lg-auto
            figure.d-none.d-lg-block.img-tema4-bloque2
              img(src='@/assets/curso/tema4/img5.png', alt='Texto que describa la imagen' style=("width: 310px"))
          .col.text-tema4-bloque2
            p Durante estos trabajos de reparación se deberá comprobar el desgaste que presenta la guía. El técnico deberá comprobar la redondez del orificio de la guía, que permite hasta un máximo de 4 centésimas de ovalamiento, y deberá comprobar también el desgaste interno a lo largo de ella, desgaste que no deberá superar las 3 centésimas de conicidad como promedio, aunque estos valores serán tomados con referencia a las tolerancias especificadas por el fabricante.
          p.my-3 Para ello se utilizará un reloj micrométrico con un palpador y del resultado de las medidas tomadas habrá que compararlas con la medición del vástago de la válvula, obteniendo con ello la holgura entre ellas, con la que se decidirá si rectificar la guía o reemplazarla por una nueva.
      .col-lg-auto.img-tema4-bloque2
        figure(data-aos="fade-left").d-none.d-lg-block.d-xxl-flex
          img(src='@/assets/curso/tema4/img6.png', alt='Texto que describa la imagen' style=("width: 250px"))

    Separador
    <!-- BLOQUE 3 -->
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2 Maquinado y reemplazo de guías

    .row.mb-4
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema4/img7.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 En el caso de que el desgaste de la guía de válvula esté fuera de la tolerancia indicada por el fabricante, se podrá rectificar su pared interna; esto, para dejar la tolerancia justa con respecto al vástago de la válvula, pero solamente en el caso de que existan válvulas nuevas que dispongan de sobre medidas de recambio, ya que de no ser posible estar sobre medida, deberá ser reemplazada la guía y también la válvula, cuando esta última presente un desgaste excesivo.
            br
            br
            | Para rectificar una guía o el orificio propio de la culata, cuando este orifico trabaja como guía de la válvula, se utilizará una “rima o escariador” calibrado a la medida de la nueva válvula, o se utilizará una rima regulable, para que con el trabajo de mecanizado podamos llegar hasta la medida exacta.
    p.mb-5 Esta medida final deberá permitir una holgura adecuada entre el vástago de la válvula y el orificio rectificado de la guía, holgura que permitirá el deslizamiento de la válvula, considerando la lubricación entre superficies y la dilatación tanto de la guía como de la válvula, dilatación que se presenta con los incrementos de temperatura durante el trabajo del motor.
    
    .row.fondo-tema1
      .col-lg-3
      .col-lg
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 8.
          span Rima o escariador
      .row      
        .col-lg-3
        .col-lg-6
          figure(data-aos="flip-right")
            img(src='@/assets/curso/tema4/img8.png', alt='Imagen que presenta cómo es una rima o escariador.')

    Separador
    <!-- BLOQUE 4 -->
    #t_4_3.titulo-segundo.color-acento-contenido
      h2 4.3 Válvulas de un motor de cuatro tiempos

    .row.mb-5
      .col-lg
        p Como ya se ha explicado anteriormente, las válvulas son los elementos que permiten el ingreso de la mezcla aire y combustible en los motores <em>Otto</em>, o el ingreso del aire en los motores <em>Diesel</em>, después de producirse la combustión, permitiendo también el desalojo o salida de los gases combustionados.
        p.text-tema4-bloque4 La cabeza de las válvulas de admisión en un motor es generalmente, de mayor dimensión a las válvulas de escape, debido a que la mezcla o el aire aspirado necesita ingresar en la mayor cantidad posible, para lograr un buen llenado del cilindro y con ello, una buena combustión. Al no tener el motor más ayuda que la depresión o succión causada por el desplazamiento del pistón, se las construye de mayor diámetro.
        p En cambio, las válvulas de escape pueden permitir desalojar a los mismos gases quemados, pero como ellos tienen mayor presión, temperatura y velocidad, pueden salir con mayor facilidad por una válvula de menor diámetro que la que posee la válvula de admisión.
      .col-lg-auto
        figure(data-aos="fade-left").d-none.d-lg-block.img-tema4-bloque2
          img(src='@/assets/curso/tema4/img9.png', alt='Imagen que presenta el diagrama de la guía de la válvula.' style=("width: 380px"))

    .row.fondo-tema1
      .col-lg-3
      .col-lg
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 9.
          span Diferencias entre las válvulas de admisión y escape
      .row      
        .col-lg-2
        .col-lg-8
          figure(data-aos="flip-right")
            img(src='@/assets/curso/tema4/img10.png', alt='')

    Separador
    <!-- BLOQUE 5 -->
    #t_4_4.titulo-segundo.color-acento-contenido
      h2 4.4 Diseño y construcción de las válvulas 

    .row.mb-5
      .col-lg-auto.img-tema4-bloque5
        figure(data-aos="fade-up").d-none.d-lg-block.img-tema4-bloque2
          img(src="@/assets/curso/tema4/img11.png", alt="alt" style="width: 400px")
      .col-lg
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
          .row(titulo="El vástago")
            .col-12
              p.mb-0 El vástago es rectificado al “espejo”, teniendo un diámetro exacto para deslizarse dentro de la guía de válvula. Su superficie exterior tiene un tratamiento térmico para endurecerla, logrando soportar los esfuerzos a los que está expuesta.
              p.my-3 En su parte superior tiene diseñada una, dos o más ranuras, que sirven de alojamiento de los seguros cónicos de soporte del platillo del muelle. Sobre el final del vástago actúa el empuje que viene del eje de levas, transportado por el balancín o el propulsor, por lo que se hace necesario dar un tratamiento de endurecimiento en esta superficie para evitar su desgaste.
          .row(titulo="La cabeza de la válvula")
            .col-12
              p.mb-0 La cabeza de la válvula en cambio, debe soportar esfuerzos de tracción, temperatura, presión y martilleo, razones suficientes para que se la fabrique de materiales muy resistentes. En la periferia de la cabeza se encuentra la superficie cónica de 45° o 60°, que realiza el cierre en el asiento de la culata.
    
    p.mb-5 Ambas son soldadas a base de fusión a altas temperaturas, formando un solo cuerpo final.

    .row.fondo-tema1
      .col-lg-3
      .col-lg
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 10.
          span Cabeza de la válvula
      .row      
        .col-lg-3
        .col-lg-6
          figure(data-aos="flip-right")
            img(src='@/assets/curso/tema4/img12.png', alt='Imagen que presenta la cabeza de la válvula.')

    Separador
    <!-- BLOQUE 6 -->
    #t_4_5.titulo-segundo.color-acento-contenido
      h2 4.5 Partes de las válvulas

    .row.mb-5
      .col-lg
        .row.mb-2
          .col-12
            .p-3.text-tema4-bloque6
              .row
                .col-md-auto
                  figure.svg-tema3-bloque3(data-aos="flip-right").d-none.d-lg-block
                    img(src="@/assets/curso/tema4/img2.svg" style=("width: 90px"))
                .col
                  p La cabeza de la válvula se une al vástago de forma progresivamente redondeada, para formar una superficie de deslizamiento de los gases de entrada y salida. Esta superficie forma un radio de curvatura muy bien diseñada, que ayuda a transportar el movimiento del vástago hasta la cabeza. Adicionalmente, ofrece una buena superficie de apoyo, así como de direccionamiento del flujo de gases de entrada en las válvulas de admisión y de salida en el caso de las válvulas de escape.
                  p Una válvula está expuesta a muchos esfuerzos, entre ellos térmicos, esfuerzos que son compensados por el excelente material de construcción de acero con aleaciones de níquel, cromo y molibdeno.
      .col-lg-auto
        figure(data-aos="fade-left").d-none.d-lg-block.img-tema4-bloque2.img-tema4-bloque6
          img(src='@/assets/curso/tema4/img13.png', alt='Texto que describa la imagen' style=("width: 350px"))

    .row.fondo-tema1
      .col-lg-3
      .col-lg
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 11.
          span Partes de la válvula
      .row      
        .col-lg-3
        .col-lg-6
          figure(data-aos="flip-right")
            img(src='@/assets/curso/tema4/img14.png', alt='')

    .row.caja-text-img-tema3-bloque2.mb-4.align-items-center
      .col-lg-auto
        figure(data-aos="fade-right").d-none.d-lg-block
          img(src="@/assets/curso/tema3/img1.svg" style="width: 81px")
      .col-lg
        p El margen de la válvula determina el espesor mínimo luego de la rectificación de su asiento cónico.

    Separador
    <!-- BLOQUE 7 -->
    #t_4_6.titulo-segundo.color-acento-contenido
      h2 4.6 Válvulas con sodio (Na) dentro del vástago

    .row.mb-5
      .col-lg-auto.img-tema4-bloque7
        figure(data-aos="fade-right").d-none.d-lg-block.img-tema4-bloque2
          img(src='@/assets/curso/tema4/img15.png', alt='Texto que describa la imagen' style=("width: 420px"))
      .col-lg.align-self-center
        p Algunos constructores, con el objetivo de mejorar su estructura y volverla más resistente, en especial en motores más exigidos, han construido sus válvulas con vástago hueco, relleno de sodio, material sólido que se convierte en líquido con las altas temperaturas de trabajo. Esta particularidad del sodio, se aprovecha en las válvulas para transportar la alta temperatura de la cabeza hacia el vástago, y de él hacia la guía y de ella hacia el medio refrigerante. Adicionalmente, al tener una válvula “vaciada”, su peso total disminuye notablemente, reduciendo la inercia que se produce durante su movimiento ascendente y descendente, en especial con alta velocidad de funcionamiento del motor.
    
    .row.fondo-tema1
      .col-lg-3
      .col-lg
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 12.
          span Válvula con sodio dentro del vástago
      .row      
        .col-lg-3
        .col-lg-6
          figure(data-aos="flip-right")
            img(src='@/assets/curso/tema4/img16.png', alt='Imagen que presenta la comprobación de la medida del vástago.')
    
    .row.caja-text-img-tema4-bloque7.mb-4
      .col-lg-auto.align-self-center
        figure(data-aos="fade-right").d-none.d-lg-block
          img(src="@/assets/curso/tema3/img1.svg" style="width: 81px")
      .col-lg
        p.mb-0 <strong>PRECAUCIÓN:</strong> cuando se trabaja con válvulas rellenas de sodio, se debe tener la precaución de no cortarlas o esmerilarlas, ya que el sodio es un material muy inflamable al contacto con el agua y el aire.
 
    Separador
    <!-- BLOQUE 8 -->
    #t_4_7.titulo-segundo.color-acento-contenido
      h2 4.7 Mediciones de la válvula 

    .row.h-100.align-items-center.mb-5
      .col-lg.text-tema4-bloque8
        p Así como en el caso de las guías de válvula, su vástago debe ser medido con exactitud, para determinar si ha tenido desgastes excesivos durante su trabajo y la holgura entre este vástago y la guía de válvula está todavía dentro de tolerancia.
        p El técnico deberá comprobar la medida del vástago, en tres posiciones; es decir, en la parte alta, en el medio y en la parte baja del vástago, para comprobar si está cilíndrico o presenta conicidad. También se deberá medir en dos sentidos y en las tres posiciones mencionadas, para determinar si el vástago está presentando un ovalamiento.
      .col-lg-auto
        imagen(data-aos="fade-left").img-tema4-bloque2
          img(src='@/assets/curso/tema4/img17.png', alt='Texto que describa la imagen' style=("width: 430px"))
    
    .row.fondo-tema1
      .col-lg-3
      .col-lg
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 13.
          span Comprobación de la medida del vástago
      .row      
        .col-lg-3
        .col-lg-6
          figure(data-aos="flip-right")
            img(src='@/assets/curso/tema4/img18.png', alt='Imagen que presenta la comprobación de la medida del vástago.')
    
    .row.caja-text-img-tema4-bloque8.mb-4
      .col-lg-auto.align-self-center
        figure(data-aos="fade-right").d-none.d-lg-block
          img(src="@/assets/curso/tema3/img1.svg" style="width: 81px")
      .col-lg
        p Con estas medidas y las medidas interiores de la guía de válvula, se podrá determinar el juego u holgura entre la guía y el vástago de válvula. Otra operación importante que se debe realizar, es comprobar el asiento cónico de la cabeza de la válvula, rectificándola si fuera necesario y luego de esta rectificación será importante asentarla en el asiento de la culata utilizando la pasta de esmeril para obtener el sello hermético.
            
</template>

<script>
export default {
  name: 'Tema4',
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

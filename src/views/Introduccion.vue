<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    <!-- BLOQUE DE TEXTO 1 -->   
    .row          
      .col-lg-auto.mb-5
        p.mb-4 Con el paso del tiempo, el motor de combustión interna ha sufrido grandes transformaciones, para responder eficientemente a las distintas necesidades de hoy.
        p.mb-0 Aunque podría afirmarse que, en esencia, tanto en su funcionamiento, como estructura siempre ha sido el mismo, ciertamente cada una de sus partes, sistemas y materiales han avanzado para alcanzar el mayor rendimiento posible de los vehículos.

    <!-- BLOQUE DE TEXTO 2 -->     
    .row.mb-5
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/intro/img1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 En el componente formativo se estudiará el funcionamiento y las características del motor de combustión interna, con un enfoque especial en la culata y sus elementos asociados. Se analizarán los principios de operación de este tipo de motores, destacando la importancia de sus materiales y diseño para garantizar un desempeño eficiente y seguro.
            br
            br
            | Se trabajarán temas como la constitución y partes de la culata, los diferentes tipos de refrigeración, el diseño y construcción de las válvulas, así como los procesos de mantenimiento y ajuste de componentes clave. También se abordará la rectificación de los asientos de válvulas, la comprobación y reemplazo de guías, y las técnicas de mecanizado aplicadas a estos elementos.
    
    <!-- BLOQUE DE TEXTO 3 -->
    .row
      .col-lg.text-intro
        p.mb-4 A través del estudio de estos aspectos, los aprendices podrán comprender la relevancia de la culata en el funcionamiento del motor, identificando las mejores prácticas para su mantenimiento y optimización. Este conocimiento permitirá aplicar procedimientos adecuados para mejorar el rendimiento del motor, minimizar el desgaste de sus piezas y prolongar su vida útil.
          p ¡Muchos éxitos en esta experiencia de aprendizaje!
      .col-lg-auto.d-none.d-lg-block
        figure(data-aos="fade-left")
          img(src='@/assets/curso/intro/img2.png' style="width: 200px; margin-top: 10px;") 

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

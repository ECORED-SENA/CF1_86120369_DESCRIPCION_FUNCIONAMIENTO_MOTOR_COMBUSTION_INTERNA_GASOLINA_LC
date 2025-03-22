<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Análisis de las partes de un motor de cuatro tiempos

    <!-- BLOQUE 1 --> 
    .row
      .col-lg-12
        p Comencemos el estudio del tema, hablando del cabezote o culata.

    <!-- BLOQUE 2 --> 
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Cabezote o culata

    .row.fondo-tema1.h-100.align-items-center
      .col-lg-auto
        figure.d-none.d-lg-block
          img(src='@/assets/curso/tema1/img1.png', alt='Texto que describa la imagen' style=("max-width: 500px")).m-auto
      .col-lg.text-tema1
          p.m-0 Aunque su principal función consiste en formar la cámara de combustión, para lo cual crea un cierre hermético entre el bloque de cilindros y la cabeza del pistón, la culata también es la encargada de alojar las bujías y válvulas. En el caso de motores de cuatro tiempos (4T) o dos tiempos (2T), posee los canales o conductos de admisión y escape de los gases, donde también aloja los múltiples de admisión y de escape.
          p.m-0 Adicionalmente, alberga al eje de levas en los motores con el eje de levas a la cabeza y a los elementos de distribución de válvulas, como son: balancines, propulsores y ejes de balancines. Cuando se trata de un cabezote refrigerado por agua, este posee conductos que permiten su circulación o refrigerante para el enfriamiento de la culata y del mismo motor.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Guía de las válvulas

      Separador
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1 Comprobación de guía de las válvulas


    Separador
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2 Maquinado y reemplazo de guías


    Separador
    #t_4_3.titulo-segundo.color-acento-contenido
      h2 4.3 Válvulas de un motor de cuatro tiempos


    Separador
    #t_4_4.titulo-segundo.color-acento-contenido
      h2 4.4 Diseño y construcción de las válvulas 


    Separador
    #t_4_5.titulo-segundo.color-acento-contenido
      h2 4.5 Partes de las válvulas


    Separador
    #t_4_6.titulo-segundo.color-acento-contenido
      h2 4.6 Válvulas con sodio (Na) dentro del vástago


    Separador
    #t_4_7.titulo-segundo.color-acento-contenido
      h2 4.7 Mediciones de la válvula 


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

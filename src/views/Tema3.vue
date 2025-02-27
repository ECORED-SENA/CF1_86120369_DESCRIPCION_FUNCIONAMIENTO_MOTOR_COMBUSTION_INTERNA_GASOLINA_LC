<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Constitución y partes de la culata

    Separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Asientos de las válvulas


    Separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Rectificación de los asientos de las válvulas

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

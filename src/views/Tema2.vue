<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tipos de culatas para diferentes motores


    TabsC.color-primario
      .py-3.py-md-4(titulo="The splendor of the mystery")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Celebrate your failures 1
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen
      .py-3.py-md-4(titulo="Don’t lie to yourself")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen
          .col-md-6
            h4 Celebrate your failures 2
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion. 

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Culatas en motores refrigerados por aire


    Separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Culatas para motores refrigerados por agua

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

<style lang="sass"></style>

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tipos de culatas para diferentes motores

    <!-- BLOQUE 1 -->   
    .row
      .col-lg-12
        p.mb-5 Existen básicamente dos tipos de culatas:
      TabsC.color-secundario.border-bottom-0
        .py-3.py-md-4(titulo="Refrigeradas por aire")
          .row
            .col-lg-6
              figure
                img(src='@/assets/curso/tema2/img1.png', alt='Texto que describa la imagen')
            .col-lg-6.mb-4.mb-md-0.d-flex.align-items-center
              .text-content.d-flex.flex-column
                h4 Refrigeradas por aire
                p Están provistas de nervios de refrigeración (aletas), dispuestas de tal manera, que permiten al aire de refrigeración ‘chocar' contra estas superficies y atravesarlas, con el objetivo de disipar la temperatura adquirida por la combustión. 
                  br
                  | Un ejemplo de ello, se puede observar en los cabezotes de motores de dos tiempos, especialmente en las motocicletas, motores <em>VolksWagen, Porsche, Deutz </em> entre otros.
        .py-3.py-md-4(titulo="Refrigeradas por agua o por un refrigerante")
          .row
            .col-lg-6.mb-5.mb-md-0
              figure
                img(src='@/assets/curso/tema2/img2.png', alt='Texto que describa la imagen')
            .col-lg-6.d-flex.align-items-center
              .text-content.d-flex.flex-column
                h4 Refrigeradas por agua o por un refrigerante
                p Las primeras culatas diseñadas para motores refrigerados por agua o refrigerante, eran construidas de fundiciones de hierro, porque se suponía que eran mucho más robustas y podían soportar de mejor manera la alta compresión. 
                  br
                  |Dentro de la fundición del hierro se encuentran cámaras internas, por las que debe circular el refrigerante que se envía hacia el radiador para disipar la temperatura adquirida durante la combustión.

      .row
        .col-lg-12.mt-3.mb-5
          .container-svg.my-4
            .contanier-svg.d-none.d-lg-block
              figure(data-aos="fade-right")
                img(src="@/assets/curso/tema2/img1.svg")
            .cont-text
              p En ambos casos, pueden estar constituidas de un solo cuerpo y para varios cilindros o culatas individuales, dependiendo del diseño del motor. 

    .row
      .col-lg-12
        .fondo-tema2
          Separador
          <!-- BLOQUE 2 -->
          .p-5
            .row
              #t_2_1.titulo-segundo.color-acento-contenido.mt-5.mb-5
                h2 2.1 Culatas en motores refrigerados por aire
              .row
                .col-lg-12.mb-5
                  .row
                    .col-lg-5.text-tema2-bloque2-1
                      p.p-3 Por lo general, se utilizan fundiciones de material ligero, con aleaciones que le permiten tener una alta resistencia mecánica y una excelente disipación del calor. Para ello, se vierte el metal líquido en un molde de acero, enfriándose rápidamente. Con esto, aparece una estructura fina, con alta resistencia a la temperatura y a las presiones de la combustión.
                    .col-lg-3
                      figure(data-aos="flip-left")
                        img(src='@/assets/curso/tema2/img3.png', alt='Texto que describa la imagen')
                    .col-lg-4.mb-0.svg-tema2
                      figure(data-aos="fade-left").d-none.d-lg-block
                        img(src='@/assets/curso/tema2/img2.svg', alt='Texto que describa la imagen')
                      p.text-tema2-bloque2-2 Estas culatas se funden con gran exactitud y solamente requieren de un maquinado en los sitios de ajuste, como son: los orificios de las guías y asientos de válvula, orificios roscados para las bujías, también de la superficie plana, los alojamientos del eje de levas y de los propulsores; en el caso de que estos últimos estén en la culata.
                      
            Separador
            <!-- BLOQUE 3 -->
            #t_2_2.titulo-segundo.color-acento-contenido.mt-5.mb-5
              h2 2.2 Culatas para motores refrigerados por agua
              
            .row
              .col-lg-12  
                .row
                  .col-lg-5
                    figure(data-aos="zoom-in")
                      img(src='@/assets/curso/tema2/img4.png', alt='Texto que describa la imagen')
                  .col-lg-7.mb-0
                    .row.mb-3
                      .col-lg-2
                        figure.img-tema2-bloque3.d-none.d-lg-block
                          img(src='@/assets/curso/tema2/img3.svg', alt='Texto que describa la imagen')
                      .col-lg-10.text-tema2-bloque3
                        p.mb-0 Para motores refrigerados por agua, la fundición es más compleja, porque dispone de los conductos de circulación del refrigerante. Anteriormente, se los construía de hierro fundido o fundición gris. Como este material es mucho más pesado y tiene menor capacidad de disipación del calor (con tendencia a oxidarse o corroerse), ahora se utilizan las fundiciones de aluminio con aleaciones y materiales ligeros.
                    .col-lg-auto
                      p En estas culatas, por su mayor complejidad, se requiere de un importante proceso de mecanizado, en especial para alojar a los elementos móviles que van en ella, como las guías de válvula, asientos, soportes y alojamientos de los ejes de levas, balancines, propulsores y alojamientos para los inyectores en el caso de motores <em>Diesel</em> o para las bujías en los motores a gasolina.
           
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

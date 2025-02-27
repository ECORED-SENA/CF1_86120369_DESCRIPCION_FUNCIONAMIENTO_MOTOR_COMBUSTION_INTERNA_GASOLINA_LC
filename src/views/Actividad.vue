<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Verificar la comprensión de los conceptos fundamentales relacionados con la culata.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la función principal de la culata en un motor de combustión interna?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Regular la temperatura del motor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Asegurar la lubricación de los pistones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Formar la cámara de combustión y alojar las válvulas y bujías.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Proporcionar energía eléctrica al motor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cómo se clasifican las culatas según su sistema de refrigeración?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Por aire y por combustible.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Por aire y por agua o refrigerante.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Por aceite y por líquido anticorrosivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Por ventilación natural y forzada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué material se utiliza actualmente para la fabricación de culatas en motores refrigerados por agua?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Hierro fundido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aluminio con aleaciones ligeras.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Acero inoxidable.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Titanio reforzado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es la función de los asientos de válvulas en la culata?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejorar la combustión dentro del cilindro.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Permitir la mezcla de aire y combustible.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Formar un sello hermético con la válvula.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Reducir la fricción entre el pistón y la cámara de combustión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué proceso se realiza para ajustar la superficie de los asientos de válvulas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Lubricación interna.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Rectificación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Pulido con esmeril.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Templado térmico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es la principal ventaja de las válvulas con sodio en su interior?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducen la cantidad de aire necesario en la combustión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mejoran la disipación del calor y reducen la inercia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumentan la presión de los gases de escape.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Facilitan la apertura y cierre de las válvulas de admisión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿¿Cuál es el objetivo del mecanizado y reemplazo de guías de válvulas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Asegurar el sellado hermético entre la culata y el bloque del motor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evitar el sobrecalentamiento de los cilindros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir la presión dentro de la cámara de combustión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Permitir un deslizamiento preciso de las válvulas sin juego axial.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es la principal diferencia entre las válvulas de admisión y escape?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Las de admisión son más grandes para mejorar el llenado del cilindro.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Las de escape son más grandes para facilitar la salida de gases.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Ambas válvulas tienen el mismo tamaño, pero diferentes materiales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Solo las de admisión requieren un tratamiento térmico especial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál de los siguientes componentes forma parte del sistema de distribución de válvulas?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pistón.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Bomba de aceite.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Balancines.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cigüeñal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué se debe hacer después de rectificar una válvula para garantizar su buen funcionamiento?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reemplazar la guía de válvula.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Limpiar el cilindro con aire comprimido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Aplicar un recubrimiento de grafito en la superficie de la válvula.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Realizar el ajuste de la válvula con pasta de esmeril.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>

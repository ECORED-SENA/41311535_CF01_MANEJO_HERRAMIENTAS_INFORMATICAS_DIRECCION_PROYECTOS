<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                       
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Entradas y configuración de proyectos',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> afianzar la identificación de las entradas del proyecto, la selección del marco de referencia y del software de gestión, así como el reconocimiento del entorno y de los parámetros necesarios para configurar correctamente una herramienta informática.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué elemento define qué producirá el proyecto y cuáles son sus límites?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El alcance.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El respaldo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La tarifa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La interfaz.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Cuál es la función principal del caso de negocio?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Configurar calendarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Justificar la realización del proyecto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Asignar contraseñas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Crear copias de respaldo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué establecen los contratos y acuerdos como entradas del proyecto?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Colores de la interfaz.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Compromisos, plazos y restricciones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Vistas predeterminadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Atajos de teclado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué clasificación requiere participación permanente según poder e interés?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Alto poder y alto interés.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Alto poder y bajo interés.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Bajo poder y alto interés.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Bajo poder y bajo interés.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es un ejemplo de activo de los procesos de la organización?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Condiciones del mercado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cambios tecnológicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Lecciones aprendidas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Disponibilidad de proveedores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué documento autoriza formalmente la existencia del proyecto?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registro de interesados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Acta de constitución.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Hoja de recursos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Matriz de software.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué debe comprobarse durante la validación de las entradas?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que sean completas y coherentes.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Que usen una sola vista.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Que tengan colores uniformes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Que eliminen los respaldos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué referente orienta la gestión de la calidad en los proyectos?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'NTC ISO 10006.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'PRINCE2.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'IPMA Competence Baseline.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Microsoft Project.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué referente aporta un método estructurado de gobierno y control por etapas?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'PMI.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'NTC ISO 10006.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'PRINCE2.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'IPMA Competence Baseline.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué criterio debe orientar la selección de un marco de referencia?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Preferencia personal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Necesidades del proyecto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Color de la aplicación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cantidad de menús.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Cuál es una finalidad del software de gestión de proyectos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sustituir los criterios de dirección.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Organizar y visualizar información del proyecto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar la validación de entradas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar definir responsables.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué información puede gestionar una herramienta de proyectos?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Actividades, fechas y recursos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solo contraseñas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo imágenes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Únicamente correos electrónicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué debe hacerse antes de seleccionar una solución tecnológica?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Comprender requerimientos y seleccionar el marco.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar los contratos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cambiar la moneda.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Crear el cronograma final.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué elemento del entorno reúne las funciones generales de la aplicación?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Menú principal.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Escala temporal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Barra de estado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Panel de detalles.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué requiere una plataforma en línea para su acceso?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Navegador compatible y conexión estable.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solo almacenamiento local.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una impresora configurada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un calendario de tarea.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué propiedad de seguridad limita el acceso a personas autorizadas?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Disponibilidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Confidencialidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Duración.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Trazabilidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Por qué la copia de respaldo debe guardarse en una ubicación distinta?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para evitar una pérdida simultánea.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Para cambiar el alcance.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Para reducir interesados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para eliminar permisos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Qué define el calendario global del proyecto?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Periodos en que puede programarse trabajo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Objetivos estratégicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Contratos con proveedores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Competencias del equipo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué calendario representa la disponibilidad específica de una persona o equipo?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Calendario global.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Calendario de recurso.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Calendario institucional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Calendario de respaldo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué debe hacerse cuando la verificación detecta un error de configuración?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Continuar sin cambios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ajustar y repetir la prueba.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar la fuente autorizada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ignorar el parámetro.',
              esCorrecta: false,
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

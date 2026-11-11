<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      p(data-aos="fade-left") La dirección de un proyecto comienza antes de elaborar el cronograma o asignar recursos. Primero se requiere comprender la necesidad que da origen a la iniciativa, establecer su alcance, reconocer los objetivos estratégicos y reunir la información que orientará las decisiones posteriores. El caso de negocio, los contratos, los interesados, los recursos disponibles, los factores ambientales, los activos organizacionales y el acta de constitución conforman entradas esenciales para organizar el proyecto. Cuando estos elementos se encuentran incompletos, desactualizados o presentan contradicciones, pueden generarse errores que afectan la planificación, los costos, las responsabilidades y los resultados esperados.
      .row.justify-content-center.align-items-start.mb-4
        .col-12.col-md-8.col-lg-9.order-2.order-lg-1(data-aos="fade-right")
          .row.align-items-stretch.mb-4.g-0
            .col-12.col-lg-6.mb-4.mb-lg-0
              figure.mb-0.h-100
                img(src='@/assets/curso/temas/intro/img1.png', alt='', style="width: 100%; height: 100%; object-fit: cover;")
            .col-12.col-lg-6
              .bg-color-2.p-4.h-100.d-flex.align-items-center
                p.mb-0 La información inicial debe relacionarse con principios, estándares y prácticas reconocidas para determinar la forma más adecuada de gestionar el proyecto. Referentes como la NTC ISO 10006, las orientaciones del Project Management Institute, PRINCE2 y la IPMA Competence Baseline ofrecen criterios para fortalecer la calidad, la organización, el control y las competencias de quienes participan. Su aplicación no consiste en adoptar procedimientos de manera rígida, sino en seleccionar las orientaciones que respondan a las características de cada iniciativa. Esta comprensión también permite definir qué funciones debe ofrecer el <i>software</i> de gestión y cuáles condiciones técnicas deben verificarse antes de utilizarlo.
          p.mb-3 El componente aborda de manera progresiva la identificación y validación de las entradas, la comparación de marcos de referencia y la selección de una herramienta informática acorde con los requerimientos del proyecto. Posteriormente, se reconocerán el entorno de trabajo, los menús, las vistas, las tablas, los campos y los comandos principales de la aplicación seleccionada. Finalmente, se configurarán los datos iniciales, el idioma, la moneda, las unidades, el calendario global y las hojas de tareas y recursos. Mediante ejemplos y situaciones prácticas, será posible consolidar la información y preparar un archivo de proyecto correctamente parametrizado, verificado y respaldado para apoyar las etapas posteriores de planificación y control.
        .col-12.col-md-4.col-lg-3.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
          figure.mb-0
            img.mx-auto(src='@/assets/curso/temas/intro/img2.png', alt='', style="width: 100%; height: auto;")




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

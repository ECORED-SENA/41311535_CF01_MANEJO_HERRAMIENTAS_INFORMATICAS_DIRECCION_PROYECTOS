<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Información de entrada para la dirección del proyecto
      .row.justify-content-center.align-items-stretch.mb-5
        .col-12.col-md-6.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-3.p-4.rounded-4.h-100.d-flex.align-items-center
            p.mb-0 La dirección de un proyecto comienza con la <b>recopilación y el análisis de la información</b> necesaria para comprender qué se debe realizar, por qué se requiere, quiénes participan, con qué recursos se cuenta y bajo qué condiciones se desarrollará el trabajo. Esta información constituye la base para tomar decisiones, definir responsabilidades y organizar posteriormente el cronograma, los recursos y los costos.
        .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex
            img.rounded-3(src="@/assets/curso/temas/t1/img1.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-12.col-lg-4(data-aos="fade-left")
          .h-100.d-flex.flex-column.justify-content-end.ps-lg-4
            .mb-3.d-flex.justify-content-start
              img(src="@/assets/curso/temas/bg/icono.svg", alt="", style="width: 60px; height: 60px; object-fit: contain;")
            p.mb-0 Las <b>entradas del proyecto</b> provienen de documentos, acuerdos, necesidades organizacionales, requisitos técnicos y condiciones del entorno. Sin embargo, una entrada no corresponde únicamente a un documento: también puede ser una decisión, una restricción, una condición técnica, una experiencia previa o una expectativa expresada por los interesados.
      p(data-aos="fade-left") Las principales entradas que se abordan en este componente son las siguientes:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Alcance y objetivos estratégicos
                p Definen qué producirá el proyecto, cuáles son sus límites y qué resultados organizacionales se esperan alcanzar con su ejecución.                     
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Caso de negocio
                p Reúne los argumentos que justifican la realización del proyecto y la inversión de recursos que este requiere.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Contratos y acuerdos
                p Establecen compromisos, plazos, condiciones y restricciones que deben respetarse durante la ejecución.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Interesados
                p Corresponden a las personas, grupos u organizaciones que influyen en el proyecto, reciben sus resultados o se ven afectados por sus decisiones.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Recursos
                p Comprenden las personas, equipos, materiales, tecnologías y presupuesto disponibles para ejecutar el trabajo.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Factores ambientales y activos organizacionales
                p Representan las condiciones del contexto que influyen en el proyecto y los conocimientos institucionales que pueden aprovecharse.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_7.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Acta de constitución
                p Autoriza formalmente el proyecto y consolida la información inicial necesaria para continuar con la planificación.
      //- Fin Slideshow
      p(data-aos="fade-left") La identificación adecuada de estas entradas permite comprender la necesidad que origina el proyecto, reconocer las condiciones y restricciones existentes, determinar los recursos disponibles y reducir errores derivados de información incompleta o contradictoria. Además, proporciona los criterios para seleccionar posteriormente un marco de gestión y una herramienta informática apropiados.
      Separador
      //- Inicio Tema1.1
      .row
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.1 Alcance y objetivos estratégicos del proyecto
      p(data-aos="fade-left") A continuación, se presenta un video sobre el alcance y los objetivos estratégicos de un proyecto, destacando su importancia para definir los límites de la iniciativa, orientar su planificación y asegurar que sus resultados contribuyan al cumplimiento de las metas de la organización.
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      p(data-aos="fade-left") La relación entre el alcance y los objetivos puede analizarse a partir de los siguientes elementos:
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width
              .px-4.px-md-5.pb-md-3
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-8.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-6 col-lg-6 col-md-6 col-12")
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta02_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Necesidad
                            p.text-start ¿Qué situación debe mejorarse? Ejemplo: demoras en la atención de solicitudes internas.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta02_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Objetivo estratégico
                            p.text-start ¿Qué resultado organizacional se espera? Ejemplo: mejorar la eficiencia del servicio administrativo.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta02_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Alcance
                            p.text-start ¿Qué producto o trabajo se realizará? Ejemplo: configurar una plataforma para registrar y consultar solicitudes.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta02_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Resultado esperado
                            p.text-start ¿Qué cambio debe observarse? Ejemplo: disminución del tiempo de respuesta.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta02_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Indicador inicial
                            p.text-start ¿Cómo se verificará el logro? Ejemplo: tiempo promedio de atención por solicitud.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                        figure
                          img(src='@/assets/curso/temas/t1/img2.png', style="width: 500px", data-aos="zoom-in").m-auto
            //- Fin Carrusel
            p(data-aos="fade-left") Los objetivos deben redactarse de forma clara y expresar un <b>resultado verificable</b>. Formulaciones generales como “mejorar la gestión” o “fortalecer los procesos” no indican qué se mejorará ni cómo se reconocerá el avance. Un objetivo consistente precisa el resultado esperado, la población o el proceso beneficiado, la condición que debe cambiar, el plazo estimado y el indicador que permitirá verificar el logro. El objetivo general expresa la finalidad principal del proyecto y los objetivos específicos detallan los resultados parciales necesarios para alcanzarla; todos deben conservar coherencia con el alcance y con la necesidad identificada.
      Separador
      //- Inicio Tema1.2
      .row
        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.2 Caso de negocio, contratos y acuerdos
      p(data-aos="fade-left") El caso de negocio reúne los argumentos que justifican la realización del proyecto. Su función es demostrar que existe una necesidad real y que la iniciativa puede generar beneficios suficientes para respaldar la inversión. No corresponde todavía a una planificación detallada: presenta una visión general que permite tomar una decisión inicial sobre la conveniencia de desarrollar el proyecto. Sus componentes habituales se presentan a continuación:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Problema u oportunidad")
                p.mb-4 Describe la situación que origina la iniciativa y el estado actual de la organización frente a ella.
              .row(titulo="Alternativas de solución")
                p.mb-4 Presenta las opciones consideradas para atender la necesidad, incluida la posibilidad de mantener la situación actual.
              .row(titulo="Beneficios esperados")
                p.mb-4 Pueden ser cuantitativos, como la reducción de tiempos, el ahorro de recursos o el aumento de la productividad, o cualitativos, como una mejor comunicación, mayor trazabilidad de la información o el fortalecimiento de la toma de decisiones.
              .row(titulo="Costos y riesgos preliminares")
                p.mb-4 Estiman la inversión requerida e identifican los riesgos y las restricciones más relevantes de cada alternativa.
              .row(titulo="Recomendación")
                p.mb-4 Señala la alternativa más conveniente y la sustenta mediante criterios verificables.
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t1/img3.png", alt="").img400.m-auto
      //- Fin Accordion 1
      p(data-aos="fade-left") Por ejemplo, una organización que enfrenta retrasos frecuentes porque controla sus proyectos mediante archivos independientes podría comparar tres alternativas: mantener el método actual, adquirir una herramienta especializada o utilizar una plataforma colaborativa en línea. La recomendación debería sustentarse en criterios como costos, facilidad de uso, seguridad, disponibilidad y capacidad para generar reportes.
      .row.justify-content-center.align-items-center.mb-5        
        .col-12.col-sm-9.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src="@/assets/curso/temas/t1/img4.png", data-aos="zoom-in", style="width: 600Dpx;")
        .col-12.col-lg-7(data-aos="fade-left")          
          .d-flex.align-items-start
            img.d-none.d-lg-block.me-3(src="@/assets/curso/temas/bg/lineas.svg", style="width: 100%; max-width: 90px;", alt="")
            p.mb-3 Los <b>contratos y acuerdos</b> también constituyen entradas del proyecto, porque establecen compromisos que deben respetarse durante la ejecución: productos, plazos, costos, condiciones de calidad, responsabilidades, formas de pago y procedimientos para gestionar cambios. Entre ellos se encuentran los contratos con proveedores, los convenios interinstitucionales, las cartas de intención, los acuerdos de nivel de servicio, las órdenes de compra, los términos de referencia, las actas de compromiso y los acuerdos internos entre dependencias.
          p Su revisión permite identificar <b>obligaciones y restricciones</b>. Un contrato puede fijar una fecha límite de entrega, mientras que un acuerdo institucional puede exigir el uso de una plataforma determinada o el cumplimiento de requisitos de seguridad. Por ello, antes de iniciar la planificación, es necesario verificar que los contratos y acuerdos sean coherentes con el alcance, el presupuesto preliminar y las expectativas de los interesados.
      Separador
      //- Inicio Tema1.3
      .row
        #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.3 Interesados y recursos del proyecto
      p(data-aos="fade-left") Los <b>interesados</b> son personas, grupos u organizaciones que pueden afectar el proyecto, recibir sus resultados o verse afectados por sus decisiones. Entre ellos se encuentran el patrocinador, el director del proyecto, el equipo de trabajo, los usuarios finales, los clientes internos o externos, los proveedores, las entidades reguladoras, las dependencias administrativas, las comunidades beneficiarias y las organizaciones aliadas. Su identificación temprana facilita comprender necesidades, expectativas y responsabilidades, así como reconocer posibles fuentes de apoyo o de resistencia.
      p(data-aos="fade-left") No todos los interesados tienen el mismo grado de participación: algunos toman decisiones, otros aportan recursos, otros reciben los entregables y algunos solamente requieren información periódica. Una clasificación inicial puede realizarse según su <b>nivel de poder</b> y su <b>grado de interés</b>, como se presenta a continuación:
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .row.justify-content-center(data-aos="fade-left")
              .col-12         
                //- Inicio Tarjetas
                .row(data-aos="fade-right").justify-content-center
                  .col-lg-12.col-md-6.col-xl-3.mb-4.d-flex.flex-column
                    .tarjeta.p-4.rounded-5.h-100.bg-color-4.border.shadow
                      .row.justify-content-center.mb-3.align-items-center
                        .col-7
                          figure
                            img(src='@/assets/curso/temas/t1/tarjeta03_1.svg', alt='' style="width:100px").m-auto
                      h4.card-title.text-center.mb-4 Alto poder y alto interés
                      p Inciden directamente en las decisiones del proyecto, por lo que requieren una participación permanente.
                  .col-lg-12.col-md-6.col-xl-3.mb-4.d-flex.flex-column
                    .tarjeta.p-4.rounded-5.h-100.bg-color-4.border.shadow
                      .row.justify-content-center.mb-3
                        .col-7
                          figure
                            img(src='@/assets/curso/temas/t1/tarjeta03_2.svg', alt='' style="width:100px").m-auto
                      h4.card-title.text-center.mb-4 Alto poder y bajo interés
                      p Pueden influir en el proyecto aunque no intervengan a diario. Conviene mantenerlos informados y satisfechos.
                  .col-lg-12.col-md-6.col-xl-3.mb-4.d-flex.flex-column
                    .tarjeta.p-4.rounded-5.h-100.bg-color-4.border.shadow
                      .row.justify-content-center.mb-3
                        .col-7
                          figure
                            img(src='@/assets/curso/temas/t1/tarjeta03_3.svg', alt='' style="width:100px").m-auto
                      h4.card-title.text-center.mb-4 Bajo poder y alto interés
                      p Requieren atención sobre los resultados. Se les comunican los avances y se recogen sus observaciones.
                  .col-lg-12.col-md-6.col-xl-3.mb-4.d-flex.flex-column
                    .tarjeta.p-4.rounded-5.h-100.bg-color-4.border.shadow
                      .row.justify-content-center.mb-3
                        .col-7
                          figure
                            img(src='@/assets/curso/temas/t1/tarjeta03_4.svg', alt='' style="width:100px").m-auto
                      h4.card-title.text-center.mb-4 Bajo poder y bajo interés
                      p Tienen una participación limitada, por lo que basta con realizar un seguimiento ocasional.
                //- Fin Tarjetas
      .row.justify-content-center.align-items-stretch.mb-5
        .col-12.col-md-6.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-3.p-4.rounded-4.h-100.d-flex.align-items-center
            p.mb-0 Esta información se organiza en un <b>registro de interesados</b>, que puede contener el nombre o grupo, el cargo o función, la relación con el proyecto, las necesidades y expectativas, el nivel de influencia, la información requerida, la responsabilidad principal y la estrategia inicial de participación. El registro debe revisarse periódicamente, porque el interés o la influencia de cada interesado puede cambiar a lo largo del proyecto.
        .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex
            img.rounded-3(src="@/assets/curso/temas/t1/img5.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-12.col-lg-4(data-aos="fade-left")
          .h-100.d-flex.flex-column.justify-content-end.ps-lg-4
            .mb-3.d-flex.justify-content-start
              img(src="@/assets/curso/temas/bg/icono.svg", alt="", style="width: 60px; height: 60px; object-fit: contain;")
            p.mb-0 Los <b>recursos del proyecto</b> comprenden los elementos necesarios para ejecutar el trabajo. Aunque durante la preparación no siempre se conoce con exactitud la cantidad requerida, se debe contar con una estimación inicial de su disponibilidad, capacidad y restricciones. 
      p(data-aos="fade-left") Los tipos de recursos se presentan a continuación:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
          TabsC.color-acento-contenido.mt-1
            .py-3.py-md-4(titulo="Humanos")
              .row.align-items-center
                .col-md-6
                  figure
                    img(src='@/assets/curso/temas/t1/tarjeta04_1.png')
                .col-md-6.mb-4.mb-md-0
                  h4 Humanos
                  p Personas que participan en el proyecto y aportan conocimientos, habilidades o capacidad de decisión.
            .py-3.py-md-4(titulo="Físicos")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t1/tarjeta04_2.png')
                .col-md-6
                  h4 Físicos
                  p Materiales, equipos, instalaciones y herramientas necesarios para desarrollar las actividades.
            .py-3.py-md-4(titulo="Tecnológicos")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t1/tarjeta04_3.png')
                .col-md-6
                  h4 Tecnológicos
                  p Aplicaciones, plataformas, redes y sistemas de información que apoyan la ejecución y la gestión.
            .py-3.py-md-4(titulo="Financieros")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t1/tarjeta04_4.png')
                .col-md-6
                  h4 Financieros
                  p Presupuesto disponible para cubrir los costos del proyecto.
            .py-3.py-md-4(titulo="Informativos")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t1/tarjeta04_5.png')
                .col-md-6
                  h4 Informativos
                  p Datos, documentos y registros que respaldan la toma de decisiones.
      //- Cierres Pestanas horizontales
      p(data-aos="fade-left") Para cada recurso conviene registrar la cantidad disponible, las competencias requeridas, los horarios o calendarios de trabajo, la ubicación, los costos aproximados, las restricciones de uso, la dependencia de proveedores y los requisitos de autorización. Esta información servirá de base para construir la hoja de recursos y sus calendarios en la herramienta informática, tema que se desarrolla en la parametrización.
      Separador
      //- Inicio Tema1.4
      .row
        #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.4 Factores ambientales y activos organizacionales
      p(data-aos="fade-left") A continuación, se presenta un pódcast sobre los factores ambientales y los activos de los procesos de la organización, con el propósito de comprender sus características, diferencias y su influencia en la gestión y desarrollo de los proyectos.
      //- Inicio Podcast
      .container-fluid.tarjeta.tarjeta--blanca.px-0.mb-5(data-aos="fade-left")
        .row.g-0.align-items-stretch
          .col-12.col-lg-7.mb-3.mb-lg-0.d-flex
            .p-4.p-md-5.bg-custom-dark-teal.w-100.rounded-4.d-flex.align-items-center
              .row.g-3.align-items-center.w-100
                .col-md-5.text-center.mb-4.mb-md-0
                  img.img-fluid(src="@/assets/curso/temas/bg/podcast.svg" style="max-width: 200px;")
                .col-md-7.ps-md-4
                  h2.mb-3.fw-bold(style="color:#FFF") Pódcast
                  .tarjeta.bg-white.p-3.shadow-sm.border-lemon
                    h5.mb-3.fw-bold Factores ambientales y activos organizacionales
                    TarjetaAudio.color-primario(
                      texto="" 
                      :audio="podcast1"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")                      
          .col-12.col-lg-5.d-flex.ps-lg-4
            figure.mb-0.w-100
              img.h-100.w-100(src='@/assets/curso/temas/t1/img6.png' alt='' style="object-fit: cover;")
      //- Fin Podcast
      p(data-aos="fade-left") Las diferencias entre ambos conceptos se presentan en la siguiente tabla:
      .row.bg-fondo-3(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5        
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-auto
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 1.
                  span  Diferencias entre factores ambientales y activos organizacionales
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 20%") Aspecto
                        th(style="width: 40%") Factores ambientales
                        th(style="width: 40%") Activos de los procesos
                    tbody
                      tr
                        td Naturaleza
                        td Condiciones que influyen en el proyecto
                        td Recursos institucionales que apoyan la gestión
                      tr
                        td Nivel de control
                        td Generalmente limitado
                        td Pueden consultarse, adaptarse o actualizarse
                      tr
                        td Ejemplos
                        td Cultura, estructura, mercado, normativa
                        td Plantillas, procedimientos, registros, lecciones aprendidas
                      tr
                        td Utilidad
                        td Permiten comprender el contexto
                        td Facilitan la planificación y evitan repetir errores
                      tr
                        td Tratamiento
                        td Se analizan y consideran
                        td Se consultan y aplican cuando corresponda
            //- FinTabla
            p(data-aos="fade-left") La revisión conjunta de los factores ambientales y los activos organizacionales permite seleccionar posteriormente una herramienta informática compatible con las condiciones reales de la organización.
      Separador
      //- Inicio Tema1.5
      .row
        #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.5 Acta de constitución y validación de entradas
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-7.bg-color-5.d-flex.flex-column.justify-content-center.p-4.order-2.order-lg-2
          p.mb-3 El <b>acta de constitución</b> es el documento que autoriza formalmente la existencia del proyecto y reconoce la responsabilidad de quien dirigirá su desarrollo. Reúne la información inicial necesaria para establecer una comprensión común sobre el propósito, los resultados esperados y las condiciones generales. Aunque su contenido varía según la organización, normalmente incorpora:
          ul.lista-ul.color-vinotinto-custom.mb-0
            li.d-flex.mb-2
              i.fa-solid.fa-laptop.me-3
              span Nombre, justificación y objetivo general del proyecto.
            li.d-flex.mb-2
              i.fa-solid.fa-laptop.me-3
              span Alcance de alto nivel, entregables principales y requisitos generales.
            li.d-flex.mb-2
              i.fa-solid.fa-laptop.me-3
              span Supuestos, restricciones y riesgos iniciales.
            li.d-flex.mb-2
              i.fa-solid.fa-laptop.me-3
              span Hitos principales y presupuesto preliminar.
            li.d-flex.mb-2
              i.fa-solid.fa-laptop.me-3
              span Interesados clave.
            li.d-flex.mb-2
              i.fa-solid.fa-laptop.me-3
              span Responsable del proyecto y nivel de autoridad asignado.
            li.d-flex.mb-2
              i.fa-solid.fa-laptop.me-3
              span Aprobación del patrocinador.
        .col-lg-5.d-flex.order-1.order-lg-1
          figure.mb-0.w-100.h-100
            img.h-100.w-100(src='@/assets/curso/temas/t1/img7.png', alt='', style="object-fit: cover;")
      p(data-aos="fade-left") El acta no reemplaza los planes detallados; su propósito es formalizar el inicio y establecer una base autorizada para continuar con la planificación. Antes de aprobarla, la información debe <b>validarse</b>, es decir, se debe comprobar que las entradas sean completas, coherentes y aceptadas por los responsables correspondientes. Este proceso puede desarrollarse mediante los siguientes pasos:
      .row.bg-fondo-3(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5      
            //- Linea de tiempo
            .row.justify-content-center
              .col-lg-8
                PasosA.color-acento-contenido.mb-4(tipo="n")
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Paso 1. Recopilar la información
                      p Reunir documentos, requisitos, contratos, registros y decisiones iniciales.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t1/tarjeta05_1.png').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t1/tarjeta05_2.png').img125
                    .col-12.col-lg.text-start
                      h4 Paso 2. Clasificar las entradas
                      p Organizar la información según alcance, interesados, recursos, restricciones, factores ambientales y activos organizacionales.
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Paso 3. Verificar la fuente
                      p Confirmar que cada dato provenga de un documento, una persona autorizada o un sistema confiable.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t1/tarjeta05_3.png').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t1/tarjeta05_4.png').img125
                    .col-12.col-lg.text-start
                      h4 Paso 4. Revisar la coherencia
                      p Comparar objetivos, alcance, costos, plazos y compromisos para detectar contradicciones.
                  .row.align-items-center
                    .col-12.col-lg
                      h5 Paso 5. Identificar vacíos
                      p Registrar la información faltante o pendiente de aclaración.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t1/tarjeta05_5.png').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t1/tarjeta05_6.png').img125
                    .col-12.col-lg.text-start
                      h4 Paso 6. Consultar a los interesados
                      p Solicitar validación a quienes poseen autoridad o conocimiento sobre el tema.
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Paso 7. Documentar las decisiones
                      p Registrar cambios, acuerdos, responsables y fechas.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t1/tarjeta05_7.png').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t1/tarjeta05_8.png').img125
                    .col-12.col-lg.text-start
                      h4 Paso 8. Aprobar las entradas
                      p Obtener la conformidad necesaria para continuar con la selección y configuración de la herramienta.
            //- Linea de tiempo
      p(data-aos="fade-left") Durante la validación, una entrada se considera adecuada cuando cumple los siguientes <b>criterios de calidad:</b>
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width
              .px-4.px-md-5.pb-md-3
                .carousel-bg
                  .row.justify-content-center.align-items-center
                    .col-lg-8.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-6 col-lg-6 col-md-6 col-12")
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta06_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Claridad
                            p.text-center La información puede interpretarse sin ambigüedades.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta06_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Pertinencia
                            p.text-center La entrada se relaciona directamente con el proyecto.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta06_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Suficiencia
                            p.text-center Contiene el nivel de detalle necesario para tomar decisiones.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta06_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Confiabilidad
                            p.text-center Proviene de una fuente autorizada y es posible identificar su origen, su responsable y su versión.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta06_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Coherencia
                            p.text-center No contradice otras decisiones, documentos o acuerdos del proyecto.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                        figure
                          img(src='@/assets/curso/temas/t1/img8.png', style="width: 500px", data-aos="zoom-in").m-auto
            //- Fin Carrusel
      p(data-aos="fade-left") Por ejemplo, un objetivo formulado como “mejorar la atención” no ofrece suficiente claridad; para convertirlo en una entrada de calidad se debe precisar qué proceso se mejorará, cuál será el resultado esperado, quiénes se beneficiarán y cómo se verificará el logro. Cuando la información no cumple estos criterios, debe registrarse como pendiente, ya que completar los vacíos mediante suposiciones sin validación puede afectar el cronograma, los recursos y los costos.
      p(data-aos="fade-left") A manera de ejemplo, las entradas de un proyecto de implementación de un sistema de seguimiento de actividades podrían consolidarse de la siguiente manera:
      .row.bg-fondo-3(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5       
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-auto
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 2.
                  span  Ejemplo de consolidación de entradas
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 30%") Entrada
                        th(style="width: 70%") Información consolidada
                    tbody
                      tr
                        td Alcance
                        td Configuración de la plataforma, carga inicial de usuarios y capacitación.
                      tr
                        td Objetivo
                        td Mejorar la visibilidad del avance de los proyectos internos.
                      tr
                        td Caso de negocio
                        td Reducción de retrasos y centralización de la información.
                      tr
                        td Interesados
                        td Dirección, responsables de área, equipo técnico y usuarios.
                      tr
                        td Recursos
                        td Analista funcional, administrador de sistemas y licencias.
                      tr
                        td Factores ambientales
                        td Políticas de seguridad y disponibilidad de conectividad.
                      tr
                        td Activos organizacionales
                        td Formatos de seguimiento y reportes históricos.
                      tr
                        td Acta de constitución
                        td Autorización del proyecto y designación del responsable.
            //- FinTabla
            p(data-aos="fade-left") La consolidación de estas entradas permite avanzar hacia la selección del marco de referencia que orientará la gestión del proyecto.

</template>

<script>
import podcast1 from '@/assets/curso/temas/audio/podcast.mp3'
export default {
  name: 'Tema1',
  data: () => ({
    podcast1,
    mostrarIndicadorTarjetaAudio: true,
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
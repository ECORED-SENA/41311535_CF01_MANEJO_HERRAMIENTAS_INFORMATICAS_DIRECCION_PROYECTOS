<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Marcos de referencia para la gestión de proyectos
      p(data-aos="fade-left") Los proyectos varían en tamaño, complejidad, duración, recursos y nivel de incertidumbre; sin embargo, todos requieren criterios organizados para tomar decisiones, asignar responsabilidades, controlar los resultados y mantener la calidad de los procesos. Los <b>marcos de referencia</b> proporcionan principios, orientaciones, prácticas y estructuras que facilitan esta labor.
      .row.justify-content-center.align-items-start.mb-4
        .col-12.col-md-8.col-lg-9.order-2.order-lg-1(data-aos="fade-right")
          .row.align-items-stretch.mb-4.g-0
            .col-12.col-lg-6.mb-4.mb-lg-0
              figure.mb-0.h-100
                img(src='@/assets/curso/temas/t2/img1.png', alt='', style="width: 100%; height: 100%; object-fit: cover;")
            .col-12.col-lg-6
              .bg-color-2.p-4.h-100.d-flex.align-items-center
                p.mb-0 Su aplicación no consiste en repetir procedimientos de manera rígida, sino en establecer una base común para organizar la información, definir cómo se desarrollará el proyecto y seleccionar las prácticas apropiadas según las necesidades de la organización. Así, un proyecto pequeño puede requerir procedimientos sencillos, mientras que una iniciativa de alta complejidad puede necesitar controles formales, roles especializados y mecanismos detallados de seguimiento.
        .col-12.col-md-4.col-lg-3.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
          figure.mb-0
            img.mx-auto(src='@/assets/curso/temas/t2/img2.png', alt='', style="width: 100%; height: auto;")
      Separador
      //- Inicio Tema2.1
      .row
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.1 Normas, estándares, guías y metodologías
      p(data-aos="fade-left") En la dirección de proyectos se emplean los términos norma, estándar, guía y metodología. Aunque se relacionan entre sí, no significan lo mismo, y reconocer sus diferencias permite seleccionar el referente adecuado y evitar la aplicación incorrecta de sus orientaciones. Sus características se presentan a continuación:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
          TabsC.color-acento-contenido.mt-1
            .py-3.py-md-4(titulo="Norma")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  h4 Norma
                  p Establece disposiciones, criterios o recomendaciones acordadas por un organismo reconocido. Se utiliza para orientar la calidad, verificar el cumplimiento de requisitos o unificar prácticas, y se interpreta según el alcance y las condiciones de la organización.
                .col-md-6
                  figure
                    img(src='@/assets/curso/temas/t2/tarjeta01_1.png')

            .py-3.py-md-4(titulo="Estándar")
              .row.align-items-center
                .col-md-6
                  h4 Estándar
                  p Presenta principios, conceptos y prácticas aceptadas que sirven como referencia. Permite utilizar un lenguaje común y comparar los resultados con criterios previamente establecidos, y se adapta a las características del proyecto.
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t2/tarjeta01_2.png')

            .py-3.py-md-4(titulo="Guía")
              .row.align-items-center
                .col-md-6
                  h4 Guía
                  p Organiza recomendaciones y buenas prácticas para apoyar la toma de decisiones, sin establecer una secuencia única y obligatoria. De ella se consultan y seleccionan las prácticas pertinentes.
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t2/tarjeta01_3.png')

            .py-3.py-md-4(titulo="Metodología")
              .row.align-items-center
                .col-md-6
                  h4 Metodología
                  p Define una forma estructurada de ejecutar y controlar el trabajo mediante fases, procesos, roles, documentos, procedimientos y reglas que se siguen desde el inicio hasta el cierre del proyecto.
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t2/tarjeta01_4.png')

      //- Cierres Pestanas horizontales
      p(data-aos="fade-left") Una organización puede utilizar varios referentes de manera complementaria: aplicar una norma relacionada con la calidad, emplear una guía para organizar los procesos de dirección y adoptar una metodología interna para establecer formatos, responsables y procedimientos. En todo caso, la <b>adaptación</b> es necesaria, porque ningún marco puede aplicarse de manera idéntica a todos los proyectos: se deben seleccionar las prácticas que aporten valor y evitar procedimientos que generen trabajo innecesario. Los criterios para realizar esta selección se desarrollan en el apartado 2.5.
      Separador
      //- Inicio Tema2.2
      .row
        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.2 Norma NTC ISO 10006
      .row.justify-content-center.align-items-stretch.mb-5
        .col-12.col-md-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-3.p-4.rounded-4.h-100.d-flex.align-items-center
            p.mb-0 La <b>NTC ISO 10006</b> proporciona orientaciones para la gestión de la calidad en los proyectos. Su enfoque parte de la necesidad de aplicar principios de calidad tanto a los procesos utilizados para dirigir el proyecto como a los resultados obtenidos.
        .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex
            img.rounded-3(src="@/assets/curso/temas/t2/img3.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-12.col-lg-5(data-aos="fade-left")
          .h-100.d-flex.flex-column.justify-content-end.ps-lg-4
            .mb-3.d-flex.justify-content-start
              img(src="@/assets/curso/temas/bg/icono.svg", alt="", style="width: 60px; height: 60px; object-fit: contain;")
            p.mb-0 Desde esta perspectiva, la calidad no se limita a revisar el producto al final: se incorpora desde la identificación de las necesidades, la definición de los objetivos, la planificación de los procesos y la asignación de responsabilidades, lo que permite prevenir errores, reducir reprocesos y aumentar la posibilidad de cumplir los requisitos. La norma también ayuda a comprender el proyecto como un <b>conjunto de procesos relacionados</b>, en el que una decisión sobre el alcance puede afectar el cronograma, los recursos, los costos y la calidad. 
      p(data-aos="fade-left") Los aspectos que pueden fortalecerse mediante este referente se presentan a continuación:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Orientación a los interesados")
                p.mb-4 Los requisitos del cliente y de los interesados deben ser comprensibles, verificables y aceptados, y estos participan en las validaciones necesarias.
              .row(titulo="Responsabilidades definidas")
                p.mb-4 Cada proceso y cada entregable cuentan con responsables claramente identificados.
              .row(titulo="Planificación de los procesos")
                p.mb-4 Los procesos de gestión se documentan y disponen de criterios para revisar los entregables.
              .row(titulo="Gestión de recursos y comunicación")
                p.mb-4 Los recursos se gestionan de forma sistemática y la información fluye adecuadamente entre los participantes.
              .row(titulo="Seguimiento y mejora")
                p.mb-4 Se realiza seguimiento al desempeño, se registran las decisiones y los cambios, y se documentan oportunidades de mejora y lecciones aprendidas.
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t2/img4.png", alt="").img400.m-auto
      //- Fin Accordion 1
      p(data-aos="fade-left") Aplicada a las entradas, la norma exige que la información cumpla los criterios de calidad descritos en la validación (apartado 1.5). Aplicada a la herramienta informática, exige que esta permita organizar los datos, conservar registros, controlar versiones y generar reportes confiables. Por ello, este referente resulta útil cuando la organización necesita fortalecer la coherencia entre la dirección del proyecto y sus prácticas de gestión de la calidad.
      Separador
      //- Inicio Tema2.3
      .row
        #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.3 Project Management Institute y guía para la dirección de proyectos
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t2/img5.png', alt='', style="max-width: 600px;")
        .col-12.col-lg-7.order-2.order-lg-1(data-aos="fade-left")
          p El <b>Project Management Institute (PMI)</b> desarrolla estándares, guías y recursos relacionados con la dirección de proyectos, cuyos conceptos, principios y prácticas pueden adaptarse a diferentes sectores y tipos de organizaciones. Su guía no debe interpretarse como una metodología única, sino como una base de conocimientos a partir de la cual se seleccionan prácticas según las características de cada iniciativa.
          p Uno de sus aportes centrales es la <b>integración</b>. La dirección de proyectos requiere articular el alcance, el cronograma, los costos, la calidad, los recursos, las comunicaciones, los riesgos, las adquisiciones y los interesados, porque un cambio en un área produce efectos en las demás. Por ejemplo, incorporar un nuevo entregable puede aumentar la duración, exigir recursos adicionales y modificar el presupuesto.
          p Las orientaciones del PMI organizan el trabajo en grupos de procesos que permiten comprender la evolución del proyecto:
      //- Slideshow - Fases del proyecto
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta02_1.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Inicio
                p Define y autoriza el proyecto. En este momento se utilizan las entradas estudiadas en el tema 1 para elaborar el acta de constitución e identificar a los interesados.                     
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta02_2.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Planificación
                p Establece el alcance, el cronograma, los costos y los demás planes necesarios para alcanzar los objetivos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta02_3.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Ejecución
                p Coordina a las personas y los recursos para realizar el trabajo planificado.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta02_4.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Seguimiento y control
                p Compara el desempeño real con lo planificado, identifica variaciones y gestiona los cambios.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta02_5.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Cierre
                p Formaliza la finalización del proyecto o de una fase y documenta las lecciones aprendidas.
      //- Fin Slideshow
      p(data-aos="fade-left") Estos grupos no siempre se desarrollan de forma lineal; la planificación y el control suelen repetirse en diferentes momentos del proyecto. Asimismo, el enfoque del PMI otorga un lugar importante a los interesados: un proyecto puede cumplir el plazo y el presupuesto, pero presentar dificultades cuando sus resultados no responden a las necesidades de los usuarios o cuando las decisiones no se comunican adecuadamente.
      Separador
      //- Inicio Tema2.4
      .row
        #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.4 PRINCE2 e IPMA Competence Baseline
      p(data-aos="fade-left") <b>PRINCE2</b> e <b>IPMA Competence Baseline</b> ofrecen perspectivas diferentes y complementarias para la dirección de proyectos. Mientras PRINCE2 se centra en una forma estructurada de gobernar y administrar el proyecto, IPMA destaca las competencias que deben desarrollar las personas responsables de su dirección.
      p(data-aos="fade-left") PRINCE2 es un <b>método</b> para dirigir proyectos mediante principios, prácticas, procesos y responsabilidades definidas. Su enfoque busca mantener una justificación continua, organizar la toma de decisiones y controlar el trabajo por etapas. Sus principios se presentan a continuación:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-4.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t2/img6.png", alt="").img400.m-auto
          .col-lg-8
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Justificación continua del negocio")
                p.mb-4 El proyecto debe conservar una razón válida para continuar. Cuando los costos, los riesgos o las condiciones cambian de forma significativa, se revisa si la iniciativa sigue siendo conveniente.
              .row(titulo="Aprendizaje de la experiencia")
                p.mb-4 Se aprovechan las lecciones de proyectos anteriores y de las etapas ya realizadas.
              .row(titulo="Funciones y responsabilidades definidas")
                p.mb-4 Cada participante conoce su rol, su nivel de autoridad y sus obligaciones.
              .row(titulo="Gestión por etapas")
                p.mb-4 El proyecto se divide en periodos controlables. Al finalizar cada etapa se revisan los resultados, los riesgos y los recursos utilizados, y se decide si conviene continuar.
      //- Fin Accordion 1
      //- Inicio Accordion 2
      .bg--img_03.mt-5
        .row.justify-content-center         
          .col-lg-8.order-2.order-lg-1
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Gestión por excepción")
                p.mb-4 Se establecen tolerancias de tiempo, costo o alcance. Solo cuando estas se superan, la decisión se escala al nivel de autoridad correspondiente.
              .row(titulo="Enfoque en los productos")
                p.mb-4 Los entregables se definen antes de establecer las actividades necesarias para elaborarlos, lo que reduce las tareas que no generan resultados útiles.
              .row(titulo="Adaptación al contexto")
                p.mb-4 El método se ajusta al tamaño, la complejidad y el entorno de cada proyecto.
          .col-lg-4.order-1.order-lg-2.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t2/img7.png", alt="").img400.m-auto
      //- Fin Accordion 2
      p(data-aos="fade-left") Por sus características, PRINCE2 resulta pertinente cuando se requieren una estructura clara de gobierno, autorizaciones formales, control por etapas y registro de decisiones, riesgos y excepciones.
      p(data-aos="fade-left") La <b>International Project Management Association (IPMA)</b>, por su parte, propone un referente basado en <b>competencias</b>. Su enfoque reconoce que la dirección efectiva no depende únicamente del conocimiento de técnicas y herramientas, sino también de la capacidad para comprender el contexto y relacionarse con las personas. Sus ámbitos de competencia son los siguientes:
      //- Inicio Tarjetas
      .row(data-aos="fade-left")
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-15.overflow-hidden.h-100.d-flex.flex-column
            figure.mb-0.p-4.text-center
              img(src='@/assets/curso/temas/t2/tarjeta03_1.svg' alt="", style="width: 90px; height: 90px; margin: 0 auto;")
            .p-4.p-md-4.flex-grow-1.pt-0
              h4.text-center Perspectiva
              p.mb-0.text-center Capacidad para comprender la estrategia, la estructura, la cultura, el gobierno y las condiciones externas del proyecto.
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-15.overflow-hidden.h-100.d-flex.flex-column
            figure.mb-0.p-4.text-center
              img(src='@/assets/curso/temas/t2/tarjeta03_2.svg' alt="", style="width: 90px; height: 90px; margin: 0 auto;")
            .p-4.p-md-4.flex-grow-1.pt-0
              h4.text-center Personas
              p.mb-0.text-center Habilidades relacionadas con liderazgo, comunicación, trabajo en equipo, negociación, ética y manejo de conflictos.
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-15.overflow-hidden.h-100.d-flex.flex-column
            figure.mb-0.p-4.text-center
              img(src='@/assets/curso/temas/t2/tarjeta03_3.svg' alt="", style="width: 90px; height: 90px; margin: 0 auto;")
            .p-4.p-md-4.flex-grow-1.pt-0
              h4.text-center Práctica
              p.mb-0.text-center Conocimientos y capacidades aplicados al alcance, el cronograma, los costos, los recursos, los riesgos, la calidad y los demás elementos de gestión.
      //- Fin Tarjetas
      p(data-aos="fade-left") Este enfoque permite analizar no solo qué procesos deben desarrollarse, sino también quién posee las capacidades para realizarlos. Por ejemplo, una herramienta informática técnicamente completa puede fracasar si el equipo no cuenta con la formación necesaria para utilizarla, interpretar sus reportes y comunicar los resultados. De esta manera, PRINCE2 puede aportar la estructura para organizar el trabajo, e IPMA, los criterios para identificar las capacidades requeridas por el director y el equipo.
      Separador
      //- Inicio Tema2.5
      .row
        #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.5 Comparación y selección del marco de referencia
      p(data-aos="fade-left") La selección de un marco de referencia debe realizarse con base en las necesidades del proyecto, y no por preferencia personal o por el reconocimiento internacional del referente. Para orientar esta decisión conviene considerar el tamaño y la complejidad del proyecto, la experiencia del equipo, los requisitos contractuales o normativos, las políticas y metodologías internas de la organización, la necesidad de certificación, el nivel de documentación requerido y los reportes que solicitan los interesados. El aporte de cada referente estudiado se resume a continuación:
      //- Inicio Tarjetas
      .row.justify-content-center(data-aos="fade-right")
        .col-sm-12.col-md-6.col-lg-3.mb-4.d-flex.flex-column
          .tarjeta.p-0.rounded-4.h-100.overflow-hidden.border.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t2/tarjeta04_1.png', alt='').w-100
            .p-4.flex-grow-1.d-flex.flex-column
              h4.card-title.text-center.mb-4 NTC ISO 10006
              p.mb-0 Orienta la gestión de la calidad en los proyectos. Se recomienda cuando se requiere fortalecer los procesos, el cumplimiento de requisitos y la mejora.
        .col-sm-12.col-md-6.col-lg-3.mb-4.d-flex.flex-column
          .tarjeta.p-0.rounded-4.h-100.overflow-hidden.border.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t2/tarjeta04_2.png', alt='').w-100
            .p-4.flex-grow-1.d-flex.flex-column
              h4.card-title.text-center.mb-4 PMI
              p.mb-0 Ofrece principios, prácticas y una base de conocimientos para la dirección. Se recomienda cuando es necesario integrar diferentes áreas de gestión.
        .col-sm-12.col-md-6.col-lg-3.mb-4.d-flex.flex-column
          .tarjeta.p-0.rounded-4.h-100.overflow-hidden.border.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t2/tarjeta04_3.png', alt='').w-100
            .p-4.flex-grow-1.d-flex.flex-column
              h4.card-title.text-center.mb-4 PRINCE2
              p.mb-0 Aporta un método estructurado de gobierno y control por etapas. Se recomienda cuando se requieren roles, autorizaciones y control formal.
        .col-sm-12.col-md-6.col-lg-3.mb-4.d-flex.flex-column
          .tarjeta.p-0.rounded-4.h-100.overflow-hidden.border.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t2/tarjeta04_4.png', alt='').w-100
            .p-4.flex-grow-1.d-flex.flex-column
              h4.card-title.text-center.mb-4 IPMA Competence Baseline
              p.mb-0 Orienta el desarrollo y la evaluación de competencias. Se recomienda cuando la organización necesita fortalecer capacidades directivas y técnicas.
      //- Fin Tarjetas
      p(data-aos="fade-left") La selección puede realizarse mediante el siguiente procedimiento:
      .row.bg-fondo-3(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5      
            //- Linea de tiempo
            .row.justify-content-center
              .col-lg-8
                PasosA.color-acento-contenido.mb-4(tipo="n")
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Paso 1. Caracterizar el proyecto
                      p Determinar el tamaño, la duración, la complejidad, los recursos, los riesgos y la cantidad de interesados.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t2/tarjeta05_1.png', alt='').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t2/tarjeta05_2.png', alt='').img125
                    .col-12.col-lg.text-start
                      h4 Paso 2. Identificar los requerimientos
                      p Revisar contratos, políticas, normas, necesidades de calidad y expectativas de control.
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Paso 3. Analizar la capacidad organizacional
                      p Establecer qué experiencia, procedimientos, herramientas y recursos se encuentran disponibles.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t2/tarjeta05_3.png', alt='').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t2/tarjeta05_4.png', alt='').img125
                    .col-12.col-lg.text-start
                      h4 Paso 4. Comparar los referentes
                      p Revisar el enfoque, la complejidad, la documentación y el nivel de adaptación que requiere cada uno.
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Paso 5. Seleccionar las prácticas pertinentes
                      p Elegir los principios, procesos y documentos que aporten valor al proyecto.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t2/tarjeta05_5.png', alt='').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t2/tarjeta05_6.png', alt='').img125
                    .col-12.col-lg.text-start
                      h4 Paso 6. Definir la forma de aplicación
                      p Establecer responsables, procedimientos, formatos y herramientas.
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Paso 7. Documentar la decisión
                      p Registrar el referente seleccionado, su justificación y las adaptaciones aprobadas.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t2/tarjeta05_7.png', alt='').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t2/tarjeta05_8.png', alt='').img125
                    .col-12.col-lg.text-start
                      h4 Paso 8. Revisar su efectividad
                      p Verificar durante el proyecto si las prácticas utilizadas facilitan la gestión o requieren ajustes.
            //- Linea de tiempo
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img8.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Por ejemplo, una organización debe implementar una plataforma para controlar sus proyectos internos. La iniciativa involucra varias dependencias, requiere proteger la información y necesita generar reportes para la dirección. Tras analizar estas condiciones, se decide que la NTC ISO 10006 orientará la calidad de los procesos y la verificación de requisitos; las prácticas del PMI integrarán el alcance, el cronograma, los recursos y los interesados; algunos principios de PRINCE2 servirán para definir responsabilidades y controlar el proyecto por etapas; y el enfoque de IPMA permitirá identificar las competencias requeridas por el equipo. No es necesario aplicar todos los elementos de cada referente, sino documentar de manera sencilla la combinación seleccionada.
      p(data-aos="fade-left") El marco elegido también influye en la herramienta informática, porque determina qué información deberá registrarse en ella: responsables, hitos, líneas base, control de cambios, reportes de avance, seguimiento de costos, riesgos o historial de versiones. Por esta razón, primero se comprenden los requerimientos y se selecciona el marco, y luego se escoge la solución tecnológica que mejor los apoye, y no a la inversa.




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

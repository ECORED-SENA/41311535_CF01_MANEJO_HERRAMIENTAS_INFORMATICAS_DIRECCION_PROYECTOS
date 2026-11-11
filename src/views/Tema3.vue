<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Herramientas informáticas para la gestión de proyectos
      .row.justify-content-center.align-items-stretch.mb-5
        .col-12.col-md-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-3.p-4.rounded-4.h-100.d-flex.align-items-center
            p.mb-0 Las <b>herramientas informáticas para la gestión de proyectos</b> permiten organizar, procesar y visualizar la información necesaria para planificar y controlar el trabajo. Facilitan el registro de actividades, fechas, recursos, costos, dependencias, hitos y avances, de manera que el equipo pueda consultar datos actualizados y tomar decisiones con mayor oportunidad.
        .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex
            img.rounded-3(src="@/assets/curso/temas/t3/img1.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-12.col-lg-5(data-aos="fade-left")
          .h-100.d-flex.flex-column.justify-content-end.ps-lg-4
            .mb-3.d-flex.justify-content-start
              img(src="@/assets/curso/temas/bg/icono.svg", alt="", style="width: 60px; height: 60px; object-fit: contain;")
            p.mb-0 No obstante, el <b><i>software</i> no sustituye los criterios de dirección.</b> Una herramienta puede calcular fechas, mostrar diagramas o generar reportes, pero la calidad de los resultados depende de la información ingresada y de la interpretación que realicen las personas responsables. Su adquisición tampoco garantiza por sí sola una mejor gestión: se requieren entradas validadas, un marco de referencia definido, procedimientos, responsables y criterios para actualizar y verificar los datos.
      Separador
      //- Inicio Tema3.1
      .row
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.1 Finalidad y funciones del <i>software</i> de gestión
      p(data-aos="fade-left") El <b><i>software</i> de gestión de proyectos</b> es una aplicación diseñada para apoyar la organización, planificación, seguimiento y control de una iniciativa. Su finalidad es convertir la información del proyecto en una estructura ordenada que permita comprender qué trabajo se realizará, cuándo se ejecutará, quién será responsable y qué recursos se utilizarán. Las funciones disponibles dependen del tipo de herramienta: algunas se concentran en la programación de actividades y otras incorporan espacios colaborativos, tableros visuales, documentos, riesgos o comunicaciones. Las funciones más frecuentes se presentan a continuación:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-4.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t3/img2.png", alt="").img400.m-auto
          .col-lg-8
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Planificación del trabajo")
                p.mb-4 Registra las actividades necesarias para producir los entregables y las organiza por fases, paquetes de trabajo, responsables o áreas, con su duración, fechas, prioridad, restricciones e hitos asociados.
              .row(titulo="Gestión del cronograma")
                p.mb-4 Relaciona las actividades mediante dependencias, calcula fechas a partir de los calendarios laborales, identifica hitos y representa la secuencia del trabajo mediante diagramas de Gantt o de red.
              .row(titulo="Gestión de recursos")
                p.mb-4 Registra personas, equipos y materiales con su disponibilidad y sus tarifas, los asigna a las actividades, calcula cargas de trabajo e identifica sobreasignaciones.
      //- Fin Accordion 1
      //- Inicio Accordion 2
      .bg--img_03.mt-5
        .row.justify-content-center        
          .col-lg-8.order-2.order-lg-1
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Gestión de costos")
                p.mb-4 Calcula costos a partir de tarifas, cantidades, tiempos de trabajo y valores fijos, lo que permite preparar el presupuesto y compararlo con los costos reales.
              .row(titulo="Seguimiento y control")
                p.mb-4 Registra avances, fechas reales, trabajo completado y costos ejecutados, y los compara con una línea base para identificar retrasos, variaciones y necesidades de ajuste.
              .row(titulo="Comunicación y reportes")
                p.mb-4 Presenta la información según las necesidades de cada interesado: la alta dirección requiere resúmenes generales, mientras que el equipo necesita el detalle de sus tareas.
          .col-lg-4.order-1.order-lg-2.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t3/img3.png", alt="").img400.m-auto
      //- Fin Accordion 2
      p(data-aos="fade-left") Los reportes deben configurarse de manera que sean claros, consistentes y adecuados para quienes los reciben. La siguiente tabla relaciona los tipos de información más comunes con su uso y sus destinatarios:
      .row.bg-fondo-3(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5       
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-auto.col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 3.
                  span Tipos de información y destinatarios de los reportes
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 30%") Tipo de información
                        th(style="width: 35%") Uso principal
                        th(style="width: 35%") Destinatario frecuente
                    tbody
                      tr
                        td Cronograma general
                        td Consultar fechas, fases e hitos
                        td Patrocinador y dirección
                      tr
                        td Actividades pendientes
                        td Organizar el trabajo inmediato
                        td Equipo del proyecto
                      tr
                        td Uso de recursos
                        td Revisar cargas y disponibilidad
                        td Director y responsables de área
                      tr
                        td Costos
                        td Comparar presupuesto y ejecución
                        td Dirección y área financiera
                      tr
                        td Avance
                        td Comunicar resultados y retrasos
                        td Interesados principales
                      tr
                        td Riesgos e incidencias
                        td Apoyar decisiones y acciones
                        td Director y responsables
            //- FinTabla
            p(data-aos="fade-left") A continuación, se presenta un ejemplo de planificación en Microsoft Project, en el que se integran las tareas del proyecto, sus duraciones, fechas, relaciones de precedencia y su representación mediante el diagrama de Gantt.
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-md-auto.col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 1.
            span Ejemplo de planificación de un proyecto en Microsoft Project
          figure
            img(src='@/assets/curso/temas/t3/img4.png', alt="Captura de pantalla de Microsoft Project con una planificación que integra tareas, duraciones, fechas, relaciones de precedencia y barras del diagrama de Gantt. ", style="width: 1000px", data-aos="zoom-in").m-auto
      Separador
      //- Inicio Tema3.2
      .row
        #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.2 Microsoft Project
      p(data-aos="fade-left") <b>Microsoft Project</b> es una herramienta orientada a la planificación, programación y seguimiento de proyectos. Su estructura permite trabajar con actividades, duraciones, dependencias, calendarios, recursos, costos y líneas base, y su representación más conocida es el <b>diagrama de Gantt,</b> en el que las actividades se muestran mediante barras ubicadas en una escala de tiempo. Sus características principales se presentan a continuación:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Organización jerárquica
                p Las tareas se estructuran mediante actividades resumen y subtareas que representan fases, entregables o paquetes de trabajo. Por ejemplo, una fase de “Configuración” puede agrupar las subtareas “Crear el archivo”, “Definir el calendario” y “Registrar los recursos”.                     
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Dependencias
                p Indican la relación lógica entre actividades: una tarea puede requerir que otra termine antes de comenzar o desarrollarse de forma simultánea cuando las condiciones lo permiten.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Calendarios, recursos y costos
                p La herramienta calcula fechas, trabajo y costos a partir de los calendarios, la hoja de recursos y las opciones de programación configuradas. Por ello, estos parámetros deben definirse antes de ingresar el cronograma, como se explica en el tema 5.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Línea base y seguimiento
                p Una vez aprobado el cronograma, se guarda una línea base que conserva lo planificado y permite compararlo con el inicio, la finalización, la duración, el trabajo y los costos reales, así como identificar las actividades críticas y las atrasadas.
      //- Fin Slideshow
      p(data-aos="fade-left") Microsoft Project puede ser apropiado cuando se requiere una programación detallada y una relación estructurada entre tareas, recursos, tiempos y costos. Su selección debe considerar la licencia disponible, la experiencia del equipo y la compatibilidad con los sistemas de la organización.
      Separador
      //- Inicio Tema3.3
      .row
        #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.3 Primavera, Sinnaps y otras herramientas
      p(data-aos="fade-left") Además de Microsoft Project, existen diversas soluciones para la gestión de proyectos. Cada una responde a necesidades particulares y ofrece niveles diferentes de especialización, colaboración y complejidad, como se presenta a continuación:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
          TabsC.color-acento-contenido.mt-1
            .py-3.py-md-4(titulo="Primavera")
              .row.align-items-center
                .col-md-6
                  h4 Primavera
                  p Apoya la planificación y el control de proyectos de gran tamaño o de múltiples iniciativas con numerosos cronogramas, participantes y recursos compartidos. Permite consultar información de diferentes proyectos, analizar fechas y restricciones y mantener registros históricos. Su configuración exige mayor preparación técnica, infraestructura adecuada y procedimientos formales de control.
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t3/tarjeta02_1.png')
            .py-3.py-md-4(titulo="Sinnaps")
              .row.align-items-center
                .col-md-6
                  h4 Sinnaps
                  p Herramienta en línea orientada a la planificación y la coordinación del trabajo. Facilita organizar actividades, responsables, fechas y dependencias, compartir el proyecto, comunicar cambios y visualizar el avance. Su uso exige verificar la conectividad, la seguridad de los datos, los permisos de los usuarios y las políticas institucionales para almacenar información fuera de la infraestructura interna.
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t3/tarjeta02_2.png')
            .py-3.py-md-4(titulo="Otras herramientas")
              .row.align-items-center
                .col-md-6
                  h4 Otras herramientas
                  p Aplicaciones que organizan el trabajo mediante listas, tableros, cronogramas o espacios colaborativos. Algunas se especializan en proyectos predictivos y otras se orientan hacia flujos de trabajo adaptativos.
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t3/tarjeta02_3.png')
      //- Cierres Pestanas horizontales
      p(data-aos="fade-left") Según su enfoque, las herramientas pueden clasificarse en las categorías generales que se presentan en la siguiente tabla:
      .row.bg-fondo-3(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5       
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-auto.col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 4.
                  span Categorías de herramientas para la gestión de proyectos
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 20%") Categoría
                        th(style="width: 40%") Característica principal
                        th(style="width: 40%") Uso frecuente
                    tbody
                      tr
                        td Programación especializada
                        td Gestiona cronogramas, recursos, dependencias y costos
                        td Proyectos con planificación detallada
                      tr
                        td Gestión colaborativa
                        td Facilita tareas, responsables, archivos y comunicación
                        td Equipos distribuidos
                      tr
                        td Tableros visuales
                        td Organiza el trabajo por estados o columnas
                        td Seguimiento de tareas y flujos
                      tr
                        td Gestión corporativa
                        td Integra proyectos, programas, recursos y portafolios
                        td Organizaciones con múltiples iniciativas
                      tr
                        td Soluciones de propósito general
                        td Utiliza hojas de cálculo, calendarios o documentos
                        td Proyectos pequeños o de baja complejidad
            //- FinTabla
      p(data-aos="fade-left") El uso de hojas de cálculo puede ser suficiente para una iniciativa sencilla, pero presenta limitaciones cuando aumentan las actividades, las dependencias, los recursos o los cambios; en estos casos conviene utilizar una solución especializada que facilite el cálculo automático y el control de versiones. La siguiente tabla ofrece una comparación general entre los tipos de herramienta estudiados:
      .row.bg-fondo-3(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5       
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-auto.col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 5.
                  span Comparación general de herramientas
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 22%") Aspecto
                        th(style="width: 26%") Microsoft Project
                        th(style="width: 26%") Primavera
                        th(style="width: 26%") Herramienta colaborativa en línea
                    tbody
                      tr
                        td Enfoque
                        td Programación detallada
                        td Proyectos complejos y múltiples
                        td Coordinación y colaboración
                      tr
                        td Cronograma
                        td Alto nivel de detalle
                        td Alto nivel de detalle
                        td Depende de la solución
                      tr
                        td Recursos
                        td Gestión estructurada
                        td Gestión amplia y corporativa
                        td Generalmente simplificada
                      tr
                        td Costos
                        td Puede gestionarlos
                        td Puede gestionarlos de forma amplia
                        td Puede ser limitada
                      tr
                        td Acceso colaborativo
                        td Depende de la configuración
                        td Depende de la infraestructura
                        td Generalmente integrado
                      tr
                        td Curva de aprendizaje
                        td Media
                        td Alta
                        td Habitualmente menor
                      tr
                        td Uso recomendado
                        td Proyectos individuales o institucionales
                        td Iniciativas complejas y portafolios
                        td Equipos que requieren coordinación ágil
            //- FinTabla
            p(data-aos="fade-left") Esta comparación constituye solo una orientación inicial. La selección definitiva debe basarse en los requerimientos técnicos, las condiciones de licenciamiento y la matriz de selección que se presentan en los apartados siguientes.
      Separador
      //- Inicio Tema3.4
      .row
        #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.4 Especificaciones y requerimientos técnicos
      p(data-aos="fade-left") Las <b>especificaciones técnicas</b> describen las condiciones necesarias para instalar, acceder y utilizar una herramienta informática. Su revisión evita seleccionar una solución que posteriormente no pueda funcionar en los equipos, redes o sistemas disponibles. Los requerimientos pueden agruparse en las siguientes categorías:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-8
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="<i>Hardware</i>")
                p.mb-4 Componentes físicos necesarios para ejecutar la aplicación: capacidad del procesador, memoria, espacio de almacenamiento, resolución de pantalla, servidores, dispositivos móviles, infraestructura de red y sistemas de energía protegida. La capacidad requerida depende del tamaño de la aplicación, el volumen de información y la cantidad de usuarios.
              .row(titulo="<i>Software</i>")
                p.mb-4 Sistema operativo compatible, navegador, motor de base de datos, complementos, servicios de autenticación, controladores y actualizaciones. Antes de instalar la herramienta se debe comprobar que no presente conflictos con las aplicaciones existentes.
              .row(titulo="Conectividad")
                p.mb-4 Velocidad, estabilidad, cantidad de usuarios simultáneos, acceso desde redes externas, restricciones institucionales y alternativas en caso de interrupción. Una herramienta que depende completamente de internet puede afectar el trabajo cuando la conexión es limitada.
          .col-lg-4.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t3/img5.png", alt="").img400.m-auto
      //- Fin Accordion 1
      //- Inicio Accordion 2
      .bg--img_03.mt-5
        .row.justify-content-center        
          .col-lg-8.order-2.order-lg-2
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Seguridad")
                p.mb-4 Gestión de usuarios y permisos, cifrado, copias de seguridad, registro de accesos, ubicación del almacenamiento, políticas de privacidad y procedimiento ante incidentes, dado que los proyectos pueden contener presupuestos, datos personales, contratos o decisiones estratégicas.
              .row(titulo="Compatibilidad e interoperabilidad")
                p.mb-4 La compatibilidad indica si la herramienta puede funcionar con los equipos y aplicaciones disponibles; la interoperabilidad, si puede intercambiar información con otros sistemas: importar datos, exportar informes, utilizar formatos comunes, compartir calendarios y trabajar con hojas de cálculo.
              .row(titulo="Licenciamiento y soporte")
                p.mb-4 Licencias autorizadas y adecuadas al número de usuarios, documentación disponible, asistencia técnica y un procedimiento definido para las actualizaciones.
          .col-lg-4.order-1.order-lg-1.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t3/img6.png", alt="").img400.m-auto
      //- Fin Accordion 2
      p(data-aos="fade-left") La revisión técnica debe documentarse antes de seleccionar el <i>software</i>, porque permite identificar costos adicionales, restricciones o acciones de preparación que deben tenerse en cuenta en la decisión.
      Separador
      //- Inicio Tema3.5
      .row
        #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.5 Criterios y matriz para seleccionar el <i>software</i>
      p(data-aos="fade-left") Seleccionar una herramienta informática consiste en comparar alternativas y determinar cuál responde mejor a los requerimientos del proyecto y de la organización. La decisión no debe basarse en la popularidad, la apariencia o la cantidad de funciones: una herramienta adecuada aporta valor, facilita el trabajo y se ajusta a la capacidad de quienes la utilizarán.
      p(data-aos="fade-left") El proceso comienza con preguntas como: ¿qué información debe administrarse?, ¿se gestionarán costos y recursos?, ¿cuántos usuarios participarán y desde dónde consultarán la información?, ¿se requiere trabajo colaborativo?, ¿qué reportes deben generarse? y ¿qué presupuesto se encuentra disponible? Las respuestas se convierten en dos tipos de criterios:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
          TabsC.color-acento-contenido.mt-1
            .py-3.py-md-4(titulo="Criterios funcionales")
              .row.align-items-center
                .col-md-6
                  h4 Criterios funcionales
                  p Se refieren a lo que la herramienta debe hacer: crear cronogramas, definir dependencias, gestionar calendarios, asignar recursos, estimar costos, registrar avances, controlar líneas base, generar reportes, gestionar permisos y permitir el trabajo colaborativo.
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t3/tarjeta03_1.png')
            .py-3.py-md-4(titulo="Criterios técnicos y organizacionales")
              .row.align-items-center
                .col-md-6
                  h4 Criterios técnicos y organizacionales
                  p Se refieren a las condiciones de adopción: los requerimientos técnicos descritos en el apartado 3.4, la facilidad de uso, la escalabilidad, los costos de implementación, el tiempo de capacitación y las políticas institucionales.
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t3/tarjeta03_2.png')
      //- Cierres Pestanas horizontales
      p(data-aos="fade-left") La <b>matriz de selección</b> permite comparar las alternativas mediante criterios ponderados según su importancia. Su construcción sigue estos pasos:
      .row.bg-fondo-3(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5      
            //- Linea de tiempo
            .row.justify-content-center
              .col-lg-10
                PasosA.color-acento-contenido.mb-4(tipo="n")
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Paso 1. Definir los criterios
                      p Seleccionar los criterios funcionales, técnicos y organizacionales a partir de las necesidades identificadas.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t3/tarjeta04_1.png').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t3/tarjeta04_2.png').img125
                    .col-12.col-lg.text-start
                      h4 Paso 2. Asignar la ponderación
                      p Otorgar a cada criterio un peso porcentual según su importancia; la suma de los pesos debe ser 100 %.
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Paso 3. Valorar las alternativas
                      p Calificar cada herramienta con una escala de 1 a 5, en la que 1 significa que no cumple; 2, cumplimiento bajo; 3, cumplimiento parcial; 4, cumplimiento adecuado, y 5, cumplimiento alto.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t3/tarjeta04_3.png').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t3/tarjeta04_4.png').img125
                    .col-12.col-lg.text-start
                      h4 Paso 4. Calcular el puntaje
                      p Multiplicar cada valoración por su ponderación y sumar los resultados de cada alternativa.
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Paso 5. Verificar los requisitos obligatorios
                      p Descartar las alternativas que no cumplan una condición crítica, aunque obtengan un puntaje alto.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t3/tarjeta04_5.png').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t3/tarjeta04_6.png').img125
                    .col-12.col-lg.text-start
                      h4 Paso 6. Probar la herramienta
                      p Realizar una prueba con un proyecto pequeño: crear el archivo, configurar el calendario, registrar actividades y recursos, generar un reporte, exportar información, asignar permisos y recuperar una versión.
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Paso 7. Documentar la decisión
                      p Registrar las necesidades, las alternativas comparadas, los criterios, las ponderaciones, los resultados, la prueba realizada, los costos, los riesgos de implementación y la herramienta recomendada.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t3/tarjeta04_7.png').img125
            //- Linea de tiempo
      p(data-aos="fade-left") La siguiente tabla presenta un ejemplo de aplicación de la matriz:
      .row.bg-fondo-3(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5       
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-auto.col-lg-8
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 6.
                  span Ejemplo de matriz de selección
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 30%") Criterio
                        th(style="width: 15%") Peso
                        th(style="width: 18%") Herramienta A
                        th(style="width: 18%") Herramienta B
                        th(style="width: 19%") Herramienta C
                    tbody
                      tr
                        td Gestión del cronograma
                        td 25 %
                        td 5
                        td 5
                        td 3
                      tr
                        td Gestión de recursos
                        td 20 %
                        td 4
                        td 5
                        td 2
                      tr
                        td Trabajo colaborativo
                        td 15 %
                        td 3
                        td 3
                        td 5
                      tr
                        td Facilidad de uso
                        td 15 %
                        td 4
                        td 2
                        td 5
                      tr
                        td Seguridad
                        td 10 %
                        td 4
                        td 5
                        td 4
                      tr
                        td Costos
                        td 10 %
                        td 3
                        td 2
                        td 5
                      tr
                        td Soporte
                        td 5 %
                        td 5
                        td 4
                        td 3
                      tr
                        td.fw-bold Puntaje ponderado
                        td.fw-bold 100 %
                        td.fw-bold 4,05
                        td.fw-bold 3,90
                        td.fw-bold 3,70
            //- FinTabla
            p(data-aos="fade-left") En este caso, la herramienta A obtiene el mayor puntaje, seguida de las herramientas B y C. Sin embargo, el resultado numérico no se utiliza de manera aislada: si la herramienta A no cumpliera un requisito obligatorio de seguridad o de compatibilidad, quedaría descartada. Una justificación documentada permite demostrar que la selección se realizó de acuerdo con los requerimientos del proyecto y con el estándar de gestión adoptado.


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

<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Entorno de la herramienta informática
      .row.justify-content-center.align-items-stretch.mb-5
        .col-12.col-md-6.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-3.p-4.rounded-4.h-100.d-flex.align-items-center
            p.mb-0 El <b>entorno</b> de una herramienta informática de gestión de proyectos reúne los espacios, opciones y comandos utilizados para crear, organizar, consultar y actualizar la información. Aunque las aplicaciones presentan diferencias de diseño, la mayoría incorpora elementos comunes: menús, barras de herramientas, paneles, vistas, tablas, campos, calendarios, opciones de almacenamiento y mecanismos de ayuda. Comprender la lógica de estos elementos facilita la adaptación a distintas aplicaciones y evita depender exclusivamente de la ubicación visual de un botón.
        .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex
            img.rounded-3(src="@/assets/curso/temas/t4/img1.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-12.col-lg-4(data-aos="fade-left")
          .h-100.d-flex.flex-column.justify-content-end.ps-lg-4
            .mb-3.d-flex.justify-content-start
              img(src="@/assets/curso/temas/bg/icono.svg", alt="", style="width: 60px; height: 60px; object-fit: contain;")
            p.mb-0 Antes de ingresar actividades, recursos o costos, conviene recorrer el entorno para identificar las funciones disponibles, las opciones de configuración, los formatos de archivo y las condiciones de acceso. Este reconocimiento reduce los errores derivados de seleccionar funciones incorrectas o de modificar datos sin comprender su efecto.
      Separador
      //- Inicio Tema4.1
      .row
        #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.1 Acceso y reconocimiento del entorno de trabajo
      p(data-aos="fade-left") El acceso a la herramienta puede realizarse de diferentes maneras, y cada modalidad requiere condiciones particulares de ingreso, actualización, almacenamiento y seguridad. Las modalidades de acceso se presentan a continuación:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta01_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Aplicación instalada
                p Se ejecuta desde el equipo del usuario. Requiere verificar la licencia, la compatibilidad con el sistema operativo, las actualizaciones y el almacenamiento.                     
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta01_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Plataforma en línea
                p Se accede mediante un navegador. Requiere una conexión estable, un navegador compatible, credenciales autorizadas y permisos definidos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta01_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Aplicación móvil
                p Se utiliza desde un teléfono o una tableta. Requiere verificar la compatibilidad, la sincronización y las funciones disponibles.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta01_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Solución corporativa
                p Se integra con los sistemas institucionales. Requiere definir roles, mecanismos de autenticación, soporte e interoperabilidad.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta01_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Acceso remoto
                p Se utiliza mediante un servidor o un escritorio virtual. Requiere verificar la disponibilidad, la velocidad y el control de acceso.
      //- Fin Slideshow
      p(data-aos="fade-left") Cuando la herramienta requiere autenticación, el ingreso incluye un nombre de usuario, una contraseña y, en algunos casos, un mecanismo adicional de verificación. Las <b>credenciales</b> son personales y no deben compartirse, porque permiten identificar quién realizó cada modificación.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img2.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-4 Después del acceso se reconoce la <b>interfaz general</b>. Aunque su distribución cambia entre aplicaciones, es frecuente encontrar una barra de título, que muestra el nombre del proyecto o del archivo activo; un menú principal, que reúne las funciones generales; barras de herramientas; un panel de navegación; un área de trabajo, que presenta la información de la vista seleccionada; una escala temporal; un panel de detalles y una barra de estado. Para reconocer la interfaz puede seguirse esta secuencia:
            ol.lista-ol--cuadro.ms-4.mb-0
              li.d-flex.mb-3.mt-4 
                .lista-ol--cuadro__vineta
                  span a
                | Ingresar con las credenciales autorizadas e identificar el nombre y la versión de la aplicación.
              li.d-flex.mb-3 
                .lista-ol--cuadro__vineta
                  span b
                | Localizar el menú principal y las opciones para crear y abrir proyectos.
              li.d-flex.mb-3 
                .lista-ol--cuadro__vineta
                  span c
                | Consultar las vistas disponibles.
              li.d-flex.mb-3 
                .lista-ol--cuadro__vineta
                  span d
                | Identificar el área de registro de actividades y la sección de recursos.
              li.d-flex.mb-3 
                .lista-ol--cuadro__vineta
                  span e
                | Revisar las opciones de calendario.
              li.d-flex.mb-3 
                .lista-ol--cuadro__vineta
                  span f
                | Ubicar los comandos de almacenamiento y exportación.
              li.d-flex 
                .lista-ol--cuadro__vineta
                  span g
                | Consultar la ayuda o el manual de usuario.
      p(data-aos="fade-left") En esta primera exploración no es necesario modificar configuraciones avanzadas; el propósito consiste en comprender la estructura general y reconocer dónde se encuentran las funciones necesarias para iniciar el trabajo.
      p(data-aos="fade-left") En las herramientas colaborativas, además, se asignan <b>perfiles y permisos</b> que determinan qué información puede consultar o modificar cada participante. Los perfiles habituales son los siguientes:
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width.mt-5
              .px-4.px-md-5.pb-md-3            
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-12.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-4 col-lg-4")
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t4/tarjeta02_1.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Administrador
                            p.text-center Configura los usuarios, los permisos y las opciones generales de la herramienta.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t4/tarjeta02_2.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Director del proyecto
                            p.text-center Crea y actualiza la planificación.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t4/tarjeta02_3.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Integrante del equipo
                            p.text-center Consulta o actualiza las tareas que tiene asignadas.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t4/tarjeta02_4.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Observador
                            p.text-center Revisa la información sin modificarla.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t4/tarjeta02_5.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Patrocinador o directivo
                            p.text-center Consulta los reportes y los resultados generales.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t4/tarjeta02_6.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Usuario externo
                            p.text-center Accede únicamente a la información autorizada.
            //- Fin Carrusel
      p(data-aos="fade-left") La asignación de permisos debe responder a las responsabilidades de cada participante: un acceso excesivo puede ocasionar cambios no autorizados, mientras que un acceso demasiado limitado dificulta la actualización oportuna de la información.
      p.mb-5(data-aos="fade-left") A continuación, se presenta un ejemplo del entorno de trabajo de una herramienta de gestión de proyectos, en el que se identifican las principales áreas utilizadas para consultar y organizar la información.
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-md-auto.col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 2.
            span Ejemplo del entorno de trabajo de una herramienta de gestión de proyectos
          figure
            img(src='@/assets/curso/temas/t4/img3.png', alt="Captura de pantalla de una herramienta de gestión de proyectos con las principales áreas de trabajo destinadas a consultar, organizar y administrar la información del proyecto. ", style="width: 1000px", data-aos="zoom-in").m-auto
      Separador
      //- Inicio Tema4.2
      .row
        #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.2 Menús, herramientas y comandos
      p(data-aos="fade-left") Los <b>menús</b> agrupan funciones relacionadas y las <b>barras de herramientas</b> presentan accesos directos a los comandos de uso frecuente. Aunque su denominación y ubicación cambian entre aplicaciones (algunas organizan las funciones mediante iconos, paneles laterales, pestañas o menús contextuales), la lógica de funcionamiento suele ser similar. Los menús habituales se presentan a continuación:
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
                              img(src='@/assets/curso/temas/t4/tarjeta03_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Archivo
                            p.text-center Crear, abrir, guardar, imprimir, exportar y cerrar proyectos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta03_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Inicio
                            p.text-center Copiar, pegar, buscar, organizar y modificar datos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta03_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Tarea
                            p.text-center Crear, eliminar, vincular y programar actividades.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta03_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Recurso
                            p.text-center Registrar, asignar y revisar recursos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta03_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Proyecto
                            p.text-center Configurar calendarios, fechas y propiedades generales.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta03_6.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Vista
                            p.text-center Cambiar la forma en que se presenta la información.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta03_7.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Informe
                            p.text-center Generar reportes y representaciones gráficas.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta03_8.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Ayuda
                            p.text-center Consultar la documentación y el soporte.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                        figure
                          img(src='@/assets/curso/temas/t4/img4.png', style="width: 500px", data-aos="zoom-in").m-auto
            //- Fin Carrusel
            p(data-aos="fade-left") Los comandos deben utilizarse según el efecto que producen sobre la información. Antes de ejecutar una acción que modifique fechas, calendarios o asignaciones, se debe verificar qué elementos serán afectados. La siguiente tabla presenta los comandos básicos y las precauciones asociadas:
      .row.bg-fondo-3(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5       
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-auto.col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 7.
                  span Comandos básicos
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 25%") Comando
                        th(style="width: 35%") Función principal
                        th(style="width: 40%") Precaución
                    tbody
                      tr
                        td Nuevo
                        td Crea un proyecto o archivo
                        td Definir previamente la ubicación y el nombre
                      tr
                        td Abrir
                        td Recupera un archivo existente
                        td Verificar que corresponda a la versión correcta
                      tr
                        td Guardar
                        td Conserva los cambios
                        td Confirmar la ruta y el formato
                      tr
                        td Guardar como
                        td Crea una copia con otro nombre o formato
                        td Evitar reemplazar versiones aprobadas
                      tr
                        td Deshacer
                        td Revierte la última acción
                        td Comprobar hasta qué punto puede recuperarse
                      tr
                        td Copiar y pegar
                        td Duplica información
                        td Revisar relaciones, formatos y datos heredados
                      tr
                        td Eliminar
                        td Retira un elemento
                        td Verificar dependencias y asignaciones
                      tr
                        td Vincular
                        td Establece relaciones entre actividades
                        td Confirmar el tipo de dependencia
                      tr
                        td Filtrar
                        td Muestra la información que cumple una condición
                        td Recordar que los datos ocultos no se eliminan
                      tr
                        td Exportar
                        td Convierte la información a otro formato
                        td Revisar que no se pierdan campos importantes
            //- FinTabla
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-7.bg-color-5.d-flex.flex-column.justify-content-center.p-4.order-2.order-lg-2
          p.mb-3 Existen también otras formas de acceder a las funciones. El <b>menú contextual</b> aparece al seleccionar un elemento y presionar el botón secundario del dispositivo señalador; muestra opciones relacionadas con ese objeto, como insertar o eliminar una tarea, asignar recursos, vincularla con otra actividad, marcarla como hito o agregar una nota. Los <b>atajos de teclado</b> permiten ejecutar con mayor rapidez comandos frecuentes, como guardar, copiar, pegar, deshacer o buscar, aunque pueden variar según el sistema operativo o la herramienta. Para trabajar con menús y comandos de forma segura se recomienda:
          ul.lista-ul.color-vinotinto-custom.mb-0
            li.d-flex.mb-2
              i.fa-solid.fa-laptop.me-3
              span Leer el nombre completo de la función y verificar la selección activa antes de ejecutarla.
            li.d-flex.mb-2
              i.fa-solid.fa-laptop.me-3
              span Guardar antes de realizar cambios amplios y utilizar la opción deshacer cuando el resultado no sea el esperado.
            li.d-flex.mb-2
              i.fa-solid.fa-laptop.me-3
              span Evitar eliminar información sin revisar sus relaciones con otras actividades.
            li.d-flex.mb-2
              i.fa-solid.fa-laptop.me-3
              span No modificar parámetros generales sin autorización.
            li.d-flex.mb-2
              i.fa-solid.fa-laptop.me-3
              span Comprobar el resultado después de cada acción y consultar la ayuda cuando exista duda.
        .col-lg-5.d-flex.order-1.order-lg-1
          figure.mb-0.w-100.h-100
            img.h-100.w-100(src='@/assets/curso/temas/t4/img5.png', alt='', style="object-fit: cover;")
      p(data-aos="fade-left") A continuación, se presenta un ejemplo del uso de los menús y comandos de una herramienta de gestión de proyectos para acceder a diferentes funciones durante la planificación.
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-md-auto.col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 3.
            span Ejemplo de menús y comandos para la gestión de tareas
          figure
            img(src='@/assets/curso/temas/t4/img6.png', alt="Captura de pantalla de una herramienta de gestión de proyectos con menús, barras de herramientas y comandos utilizados para crear, modificar y administrar tareas.", style="width: 1000px", data-aos="zoom-in").m-auto
      Separador
      //- Inicio Tema4.3
      .row
        #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.3 Vistas, tablas, campos y paneles
      p(data-aos="fade-left") Una <b>vista</b> es una forma de presentar la información del proyecto. Los mismos datos pueden observarse desde diferentes perspectivas (actividades, recursos, calendario, costos, avance o reportes) sin que el cambio de vista modifique la información: solo cambia la forma en que esta se organiza y se muestra. Los elementos que intervienen en la presentación de la información se describen a continuación:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-8
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Vistas de actividades")
                p.mb-4 Permiten consultar el trabajo programado mediante la lista de tareas, el diagrama de Gantt, el calendario, la línea de tiempo, la red del cronograma o el tablero por estados. El diagrama de Gantt combina una tabla con nombres, duraciones y fechas, y una escala temporal en la que las actividades se representan mediante barras.
              .row(titulo="Vistas de recursos")
                p.mb-4 Muestran las personas, los materiales o los equipos registrados, con su tipo, disponibilidad, tarifa, actividades asignadas y carga de trabajo. La vista de uso de recursos facilita identificar sobreasignaciones y periodos sin disponibilidad.
              .row(titulo="Tablas")
                p.mb-4 Organizan la información en filas y columnas: cada fila representa un elemento, como una actividad o un recurso, y cada columna corresponde a un campo. Pueden configurarse para mostrar solo la información necesaria; ocultar una columna no elimina sus datos.
          .col-lg-4.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t4/img7.png", alt="").img400.m-auto
      //- Fin Accordion 1
      //- Inicio Accordion 2
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-4.order-1.order-lg-1.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t4/img8.png", alt="").img400.m-auto
          .col-lg-8.order-2.order-lg-2
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Campos")
                p.mb-4 Son espacios destinados a almacenar un tipo específico de información, como texto, fechas, números, duraciones, costos, porcentajes o valores lógicos.
              .row(titulo="Paneles")
                p.mb-4 Complementan la vista principal con información del elemento seleccionado, como propiedades, asignaciones, comentarios, dependencias o historial. Conviene mantener visibles solo los necesarios para no reducir el espacio de trabajo.
              .row(titulo="Filtros y agrupaciones")
                p.mb-4 Los filtros muestran los elementos que cumplen una condición, como actividades atrasadas, hitos, tareas de un responsable o recursos sobreasignados; las agrupaciones ordenan la información por responsable, fase, estado o prioridad. Después de aplicarlos, se debe recordar que parte de la información puede quedar temporalmente oculta.
      //- Fin Accordion 2
      p(data-aos="fade-left") Los tipos de campo más utilizados se presentan en la siguiente tabla:
      .row.bg-fondo-3(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5       
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-auto.col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 8.
                  span Tipos de campo
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 25%") Tipo de campo
                        th(style="width: 35%") Ejemplo
                        th(style="width: 40%") Uso
                    tbody
                      tr
                        td Texto
                        td Nombre de la actividad
                        td Identificar elementos
                      tr
                        td Fecha
                        td Inicio programado
                        td Registrar momentos del cronograma
                      tr
                        td Número
                        td Cantidad de unidades
                        td Realizar cálculos
                      tr
                        td Duración
                        td Cinco días
                        td Estimar el tiempo de ejecución
                      tr
                        td Costo
                        td Valor presupuestado
                        td Controlar recursos financieros
                      tr
                        td Porcentaje
                        td Avance completado
                        td Registrar el desempeño
                      tr
                        td Lógico
                        td Sí o no
                        td Marcar condiciones
                      tr
                        td Lista
                        td Estado de la actividad
                        td Estandarizar respuestas
            //- FinTabla
      p(data-aos="fade-left") Los campos deben utilizarse de forma <b>consistente</b>. Si una columna se creó para registrar responsables, no debe emplearse después para observaciones generales, porque esto dificulta los filtros y los reportes. Asimismo, una vista con demasiadas columnas dificulta la lectura, por lo que se recomienda configurar vistas sencillas que presenten únicamente los datos necesarios para cada propósito.
      p(data-aos="fade-left") A continuación, se presenta un ejemplo de una vista de proyecto que integra una tabla de datos y un diagrama de Gantt para facilitar la consulta de la información programada.
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-md-auto.col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 4.
            span Ejemplo de vista, tabla y campos de un proyecto
          figure
            img(src='@/assets/curso/temas/t4/img3.png', alt="Captura de pantalla de una vista de proyecto que integra una tabla con campos de información y un diagrama de Gantt para organizar las actividades programadas. ", style="width: 1000px", data-aos="zoom-in").m-auto
      Separador
      //- Inicio Tema4.4
      .row
        #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.4 Creación y administración de archivos
      p(data-aos="fade-left") El <b>archivo del proyecto</b> concentra la información utilizada para planificar y controlar el trabajo. Se crea después de validar las entradas y antes de registrar el cronograma detallado; los datos iniciales que solicita la herramienta en ese momento se abordan en el apartado 5.1. Su administración adecuada evita pérdidas, duplicidades, confusión entre versiones y modificaciones no autorizadas. Los aspectos que comprende se presentan a continuación:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta04_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Convención de nombres
                p El nombre del archivo debe permitir reconocer el proyecto y su estado. Una convención sencilla combina el código, el nombre abreviado, la versión, la fecha y el estado; por ejemplo: PRY-TEC-024_SistemaSeguimiento_V01_20260721_CONFIGURADO. Se deben evitar nombres genéricos como “proyecto nuevo”, “cronograma final” o “archivo actualizado”.                     
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta04_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Apertura
                p Antes de abrir un archivo se confirma que corresponde al proyecto, la ubicación y la versión correctos, se revisan su estado de aprobación, su formato y los permisos, y se verifica que no exista otra versión activa.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta04_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Almacenamiento
                p El archivo se guarda en una ubicación oficial (unidad de red, servidor institucional, plataforma en línea, sistema documental o repositorio colaborativo) que cumpla las políticas de seguridad y permita el acceso de las personas autorizadas. Se debe evitar guardarlo únicamente en el escritorio, en dispositivos personales o en servicios no autorizados.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta04_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Importación y exportación
                p Antes de importar datos se revisan su estructura, los encabezados, los formatos de fecha, las unidades, los valores vacíos y los duplicados; después, se verifica que las actividades, fechas, responsables y costos se hayan ubicado correctamente. Al exportar puede perderse información que depende de funciones exclusivas de la herramienta, como las relaciones entre actividades o las reglas de programación.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta04_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Control de versiones
                p Permite identificar los cambios realizados y conservar un historial confiable. Cada versión se clasifica según su estado (borrador, en revisión, aprobada, vigente, reemplazada o archivada), y cada cambio relevante registra el número de versión, la fecha, el responsable, la descripción, el motivo y la aprobación.
      //- Fin Slideshow
      p(data-aos="fade-left") Cuando varias personas trabajan sobre copias independientes pueden generarse inconsistencias. Por ello, conviene definir un <b>repositorio oficial</b> o utilizar una plataforma con control de versiones, restringir los permisos de modificación y no reemplazar nunca una versión aprobada.
      p.mb-5(data-aos="fade-left") A continuación, se presenta un ejemplo del proceso de almacenamiento de un archivo de proyecto, en el que se define su nombre, formato y ubicación.
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-md-auto.col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 5.
            span Ejemplo de almacenamiento de un archivo de proyecto
          figure
            img(src='@/assets/curso/temas/t4/img10.png', alt="Captura de pantalla del proceso de almacenamiento de un archivo de proyecto con opciones para definir el nombre, formato y ubicación del documento.", style="width: 1000px", data-aos="zoom-in").m-auto
      Separador
      //- Inicio Tema4.5
      .row
        #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.5 Manuales, respaldo y seguridad de la información
      .row.justify-content-center.align-items-stretch.mb-5
        .col-12.col-md-6.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-3.p-4.rounded-4.h-100.d-flex.align-items-center
            p.mb-0 Los <b>manuales y sistemas de ayuda</b> contienen instrucciones para utilizar las funciones de la herramienta y permiten resolver dudas, conocer limitaciones y verificar procedimientos antes de realizar cambios que puedan afectar la información. Se presentan como manual de usuario, guía de instalación, ayuda integrada, base de conocimientos, preguntas frecuentes, tutoriales o materiales de capacitación. Para consultarlos de manera efectiva conviene definir primero el problema y buscar una función concreta (por ejemplo, “crear calendario” o “configurar moneda”), verificar que la documentación corresponda a la versión de la herramienta utilizada y comprobar que el resultado obtenido sea el esperado.
        .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex
            img.rounded-3(src="@/assets/curso/temas/t4/img11.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-12.col-lg-4(data-aos="fade-left")
          .h-100.d-flex.flex-column.justify-content-end.ps-lg-4
            .mb-3.d-flex.justify-content-start
              img(src="@/assets/curso/temas/bg/icono.svg", alt="", style="width: 60px; height: 60px; object-fit: contain;")
            p.mb-0 El <b>respaldo</b> consiste en crear una copia que permita recuperar los datos cuando el archivo original se pierde, se daña o se modifica incorrectamente. Las copias pueden realizarse de forma manual o automática, en horarios programados y, especialmente, antes de cambios importantes, antes de importar datos o actualizar la aplicación, al aprobar una línea base y al cerrar una etapa. Los tipos de respaldo se presentan a continuación:
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width.mt-5
              .px-4.px-md-5.pb-md-3            
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-12.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-4 col-lg-4")
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t4/tarjeta05_1.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Completo
                            p.text-center Copia toda la información. Se utiliza al inicio, al cierre o en momentos críticos del proyecto.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t4/tarjeta05_2.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Incremental
                            p.text-center Copia los cambios realizados desde el último respaldo. Resulta útil cuando las actualizaciones son frecuentes.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t4/tarjeta05_3.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Diferencial
                            p.text-center Copia los cambios realizados desde el último respaldo completo y facilita la recuperación intermedia.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t4/tarjeta05_4.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Automático
                            p.text-center Se ejecuta según una programación definida y es adecuado para el trabajo continuo.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t4/tarjeta05_5.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Manual
                            p.text-center Lo realiza una persona autorizada antes de cambios específicos.
            //- Fin Carrusel
      p(data-aos="fade-left") Una copia no debe almacenarse en la misma ubicación del archivo original, porque ambos podrían perderse de manera simultánea. Además, el procedimiento de respaldo debe incluir <b>pruebas de recuperación</b>: una copia que nunca se ha verificado puede resultar inutilizable cuando se necesite.
      p.mb-5(data-aos="fade-left") Por último, la <b>seguridad de la información</b> busca proteger tres propiedades de los datos: la <b>confidencialidad</b>, que garantiza que solo accedan las personas autorizadas; la <b>integridad</b>, que asegura que la información se conserve completa y sin modificaciones indebidas; y la <b>disponibilidad</b>, que permite consultarla cuando se necesita. Las medidas básicas de protección y los riesgos que previenen se presentan en la siguiente tabla:
      .row.bg-fondo-3(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5       
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-auto.col-lg-8
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 9.
                  span Medidas de seguridad y riesgos que previenen
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 50%") Medida
                        th(style="width: 50%") Riesgo que previene
                    tbody
                      tr
                        td Contraseñas seguras y credenciales personales
                        td Acceso indebido y uso de contraseñas compartidas
                      tr
                        td Perfiles y permisos acordes con las responsabilidades
                        td Modificaciones sin autorización
                      tr
                        td Bloqueo de sesión y aplicación actualizada
                        td Ataques informáticos y uso no autorizado del equipo
                      tr
                        td Repositorio oficial y convención de nombres
                        td Uso de versiones desactualizadas
                      tr
                        td Copias automáticas y pruebas de recuperación
                        td Eliminación accidental, archivos dañados, fallas de almacenamiento o pérdida del equipo
                      tr
                        td Protección de datos personales y contractuales
                        td Divulgación de información reservada
                      tr
                        td Registro de cambios y reporte de incidentes
                        td Pérdida de trazabilidad y respuesta tardía ante fallas
            //- FinTabla
            p(data-aos="fade-left") Con el acceso verificado, los permisos asignados, la ubicación oficial definida y el respaldo configurado, el entorno queda preparado para iniciar la parametrización de la herramienta.


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

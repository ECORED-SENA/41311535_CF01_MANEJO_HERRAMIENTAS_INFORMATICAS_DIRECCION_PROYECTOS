<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Parametrización de la herramienta informática
      .row.justify-content-center.align-items-stretch.mb-5
        .col-12.col-md-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-3.p-4.rounded-4.h-100.d-flex.align-items-center
            p.mb-0 La <b>parametrización</b> consiste en definir las condiciones generales bajo las cuales la herramienta informática organizará y calculará la información del proyecto. Se realiza antes de ingresar el cronograma detallado, debido a que las fechas, duraciones, costos y asignaciones dependen de los parámetros establecidos.
        .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex
            img.rounded-3(src="@/assets/curso/temas/t5/img1.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-12.col-lg-5(data-aos="fade-left")
          .h-100.d-flex.flex-column.justify-content-end.ps-lg-4
            .mb-3.d-flex.justify-content-start
              img(src="@/assets/curso/temas/bg/icono.svg", alt="", style="width: 60px; height: 60px; object-fit: contain;")
            p.mb-0 Una configuración incorrecta puede generar fechas que no corresponden a la jornada laboral, valores monetarios inconsistentes, duraciones expresadas en unidades equivocadas o sobreasignaciones de recursos. Por esta razón, cada valor debe basarse en las entradas previamente validadas (el alcance, los contratos, la disponibilidad de recursos, las restricciones y los acuerdos con los interesados) y en las políticas de la organización.
      Separador
      //- Inicio Tema5.1
      .row
        #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.1 Creación y datos iniciales del proyecto
      p(data-aos="fade-left") La creación del proyecto en la herramienta constituye el punto de partida para registrar la información. Antes de iniciarla se debe comprobar que las entradas hayan sido validadas y que exista autorización para crear el espacio de trabajo. Los datos iniciales permiten identificar el proyecto y establecer las condiciones básicas de programación, y cada uno debe verificarse contra una fuente autorizada, como se muestra en la siguiente tabla:
      .row.bg-fondo-3(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5       
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-auto.col-lg-8
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 10.
                  span Datos iniciales y fuente de verificación
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 50%") Dato
                        th(style="width: 50%") Fuente de verificación
                    tbody
                      tr
                        td Nombre
                        td Acta de constitución
                      tr
                        td Código
                        td Sistema interno de identificación
                      tr
                        td Descripción
                        td Caso de negocio y alcance
                      tr
                        td Responsable
                        td Acta de constitución
                      tr
                        td Patrocinador
                        td Documento de autorización
                      tr
                        td Fecha de inicio
                        td Contrato, acta o decisión aprobada
                      tr
                        td Fecha límite
                        td Contrato o acuerdo
                      tr
                        td Ubicación del archivo
                        td Política de gestión documental
                      tr
                        td Plantilla
                        td Activos de los procesos organizacionales
                      tr
                        td Estado
                        td Procedimiento interno
              //- FinTabla
      p(data-aos="fade-left") Los datos que requieren mayor atención se describen a continuación:
      //- Inicio Accordion 
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-4.order-1.order-lg-2.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t5/img2.png", alt="").img400.m-auto
          .col-lg-8.order-2.order-lg-1
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Nombre y código")
                p.mb-4 El nombre debe ser claro, breve y coherente con la denominación utilizada en el acta de constitución y en los contratos. El código identifica el proyecto dentro de la organización; por ejemplo, en PRY-TEC-024, PRY indica que se trata de un proyecto, TEC corresponde al área o tipo de iniciativa y 024 representa el número consecutivo. El mismo código debe utilizarse en documentos, reportes y archivos.
              .row(titulo="Descripción general")
                p.mb-4 Resume qué se desarrollará, qué necesidad se atenderá y qué resultado se espera; por ejemplo: “Configuración e implementación de una herramienta para centralizar el registro, seguimiento y reporte de los proyectos internos de la organización”. La descripción no reemplaza el alcance detallado.
              .row(titulo="Responsable y patrocinador")
                p.mb-4 El responsable dirige la planificación y coordina la actualización de la información, por lo que suele requerir permisos de edición. El patrocinador autoriza decisiones y facilita los recursos, y puede contar con acceso de consulta y aprobación.
              .row(titulo="Fecha de inicio")
                p.mb-4 Determina el momento desde el cual se programará el trabajo y debe coincidir con la autorización formal o con la fecha acordada. Antes de registrarla se verifican la aprobación del proyecto, la disponibilidad de recursos, las condiciones contractuales, las dependencias externas y los festivos o periodos institucionales; de lo contrario, el cronograma resultante puede no ser viable.
              .row(titulo="Plantillas")
                p.mb-4 Contienen calendarios, campos, tablas, vistas y estructuras reutilizables que estandarizan la información y reducen el tiempo de configuración. Antes de aplicarlas se comprueba que sus parámetros correspondan al proyecto y que sus calendarios, recursos y costos estén vigentes.
      //- Fin Accordion 
      p(data-aos="fade-left") Algunas herramientas permiten, además, definir el <b>método de programación</b> del proyecto:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Desde el inicio")
            .row.align-items-center
              .col-md-6
                h4 Desde el inicio
                p Las actividades se calculan hacia adelante a partir de la fecha autorizada de inicio. Es la opción más utilizada, porque permite observar cómo las duraciones y las dependencias determinan la fecha de finalización.
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta01_1.png', alt="Imagen descriptiva desde el inicio")
          .py-3.py-md-4(titulo="Desde la finalización")
            .row.align-items-center
              .col-md-6
                h4 Desde la finalización
                p Las actividades se calculan hacia atrás a partir de una fecha límite obligatoria, como una fecha contractual. Exige especial cuidado, porque puede producir fechas de inicio poco realistas si las duraciones o los recursos se estiman de forma incorrecta.
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta01_2.png', alt="Imagen descriptiva desde la finalización")
      //- Cierres Pestanas horizontales
      p(data-aos="fade-left") La creación finaliza con una revisión de estos datos antes de continuar con la configuración del idioma, la moneda y las unidades.
      p(data-aos="fade-left") A continuación, se presenta un ejemplo de la configuración inicial de un proyecto, en el que se establecen datos básicos como las fechas, el método de programación y el calendario.
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-md-auto.col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 6.
            span Ejemplo de configuración de los datos iniciales de un proyecto
          figure
            img(src='@/assets/curso/temas/t5/img3.png', alt="Captura de pantalla de la configuración inicial de un proyecto con datos básicos relacionados con fechas, método de programación y calendario.", style="width: 1000px", data-aos="zoom-in").m-auto
      p.mb-5(data-aos="fade-left") Una vez establecidos los datos generales del proyecto, la herramienta permite configurar la información específica de las actividades que integrarán la planificación.
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-md-auto.col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 7.
            span Ejemplo de configuración de una tarea del proyecto
          figure
            img(src='@/assets/curso/temas/t5/img4.png', alt="Captura de pantalla de la configuración de una tarea con campos para establecer sus principales datos y parámetros dentro de la planificación del proyecto.",style="width: 1000px", data-aos="zoom-in").m-auto
      Separador
      //- Inicio Tema5.2
      .row
        #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.2 Configuración de idioma, moneda y unidades
      p(data-aos="fade-left") El <b>idioma</b>, la <b>moneda</b> y las <b>unidades</b> determinan la forma en que la herramienta presenta y calcula la información. Aunque algunos de estos parámetros parecen solo visuales, pueden afectar los reportes, los cálculos y la interpretación de los datos. Sus aspectos principales se presentan a continuación:
      //- Inicio Accordion 
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.order-1.order-lg-1.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t5/img5.png", alt="").img400.m-auto
          .col-lg-9.order-2.order-lg-2
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Idioma y formato regional")
                p.mb-4 El idioma influye en los nombres de los menús y campos, los mensajes del sistema, los informes y los formatos de fecha y número, por lo que debe ser comprensible para quienes ingresan, revisan y aprueban la información. La configuración regional define, por ejemplo, si una fecha se expresa como día, mes y año o como mes, día y año: la fecha 04/05/2026 puede interpretarse como 4 de mayo o como 5 de abril. Por ello, conviene utilizar formatos inequívocos, como “21 de julio de 2026”.
              .row(titulo="Moneda")
                p.mb-4 Se utiliza para registrar tarifas, costos fijos, materiales, presupuestos y valores reales, y debe corresponder a la unidad monetaria aprobada para el proyecto. Su configuración incluye el símbolo, el código, la posición del símbolo, los decimales y los separadores. Cuando el proyecto utiliza varias monedas, se define una moneda base y se registran las tasas de cambio con su fecha y su fuente de aprobación.
              .row(titulo="Unidades de duración")
                p.mb-4 La duración es el tiempo calendario requerido para completar una actividad y puede expresarse en minutos, horas, días, semanas o meses. La unidad predeterminada se selecciona según el nivel de detalle: horas para iniciativas breves y días para proyectos de varios meses.
              .row(titulo="Unidades de trabajo")
                p.mb-4 El trabajo es el esfuerzo requerido para ejecutar una actividad y no debe confundirse con la duración. Por ejemplo, una actividad puede durar cinco días con una persona que dedica cuatro horas diarias, lo que equivale a veinte horas de trabajo. Asignar una segunda persona puede reducir la duración solo si la tarea permite dividir el trabajo.
              .row(titulo="Conversión entre unidades")
                p.mb-4 La herramienta convierte las unidades mediante valores como horas por día, horas por semana y días por mes; por ejemplo, ocho horas por día, cuarenta horas por semana y veinte días laborables por mes. Estos valores deben coincidir con el calendario institucional: definir ocho horas por día cuando la jornada real es de seis produce resultados inconsistentes.
      //- Fin Accordion
      p(data-aos="fade-left") Un ejemplo de configuración de moneda para un proyecto desarrollado en Colombia se presenta en la siguiente tabla:
      .row.bg-fondo-3(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5       
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-auto.col-lg-8
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 11.
                  span Ejemplo de configuración de moneda
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 50%") Parámetro
                        th(style="width: 50%") Configuración
                    tbody
                      tr
                        td Moneda
                        td Peso colombiano
                      tr
                        td Código
                        td COP
                      tr
                        td Símbolo
                        td $
                      tr
                        td Decimales
                        td 0 o 2, según la política de la organización
                      tr
                        td Separador de miles
                        td Punto
                      tr
                        td Separador decimal
                        td Coma
              //- FinTabla
            p(data-aos="fade-left") No se deben mezclar valores expresados en monedas diferentes sin realizar la conversión correspondiente, porque esto genera presupuestos y reportes incorrectos. La comprobación de todos estos parámetros se realiza en la verificación final de la configuración (apartado 5.5).
      Separador
      //- Inicio Tema5.3
      .row
        #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.3 Calendario global del proyecto
      p(data-aos="fade-left") El <b>calendario global</b> establece los periodos en los que puede programarse el trabajo: días laborables, jornadas, turnos, festivos y excepciones. Su configuración afecta las fechas de inicio y finalización de todas las actividades, por lo que debe representar las condiciones reales de ejecución; no se debe mantener la configuración predeterminada sin comprobar que corresponde a la organización. Sus elementos se presentan a continuación:
      //- Inicio Accordion 
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.order-1.order-lg-2.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t5/img6.png", alt="").img400.m-auto
          .col-lg-9.order-2.order-lg-1
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Jornada laboral")
                p.mb-4 Define las horas en las que puede realizarse el trabajo, incluidas las pausas, que no se contabilizan como tiempo disponible.
              .row(titulo="Días laborables y no laborables")
                p.mb-4 Una configuración habitual establece los días de lunes a viernes como laborables, y los sábados, domingos y festivos como no laborables. Sin embargo, algunos proyectos trabajan de lunes a sábado, por turnos, durante veinticuatro horas o en jornadas reducidas; la configuración debe responder al proyecto y no a una suposición general.
              .row(titulo="Excepciones")
                p.mb-4 Modifican temporalmente el calendario, ya sea para convertir un día laboral en no laborable (festivos, cierres, mantenimientos, capacitaciones) o para habilitar un día que normalmente no se utiliza (turnos adicionales). Cada excepción debe tener un nombre, una fecha inicial y una fecha final.
              .row(titulo="Calendarios base")
                p.mb-4 Son calendarios reutilizables, como la jornada administrativa, el turno diurno, el turno nocturno, la jornada de seis horas o el trabajo continuo. El calendario global suele derivarse de uno de ellos y ajustarse a las condiciones particulares del proyecto.
      //- Fin Accordion
      p(data-aos="fade-left") La siguiente tabla muestra un ejemplo de jornada laboral:
      .row.bg-fondo-3(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5       
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-auto.col-lg-8
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 12.
                  span Ejemplo de jornada laboral
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 50%") Periodo
                        th(style="width: 50%") Horario
                    tbody
                      tr
                        td Jornada de la mañana
                        td 08:00 a 12:00
                      tr
                        td Jornada de la tarde
                        td 13:00 a 17:00
                      tr
                        td Total diario
                        td 8 horas
              //- FinTabla
            p(data-aos="fade-left") Si la herramienta interpretara esta jornada como un periodo continuo, calcularía nueve horas diarias en lugar de ocho. Del mismo modo, el calendario determina las fechas de finalización: una actividad de tres días que comienza un viernes, con sábado y domingo no laborables, termina el martes siguiente, ya que sus días de trabajo son viernes, lunes y martes. Si el calendario no está configurado correctamente, la herramienta podría finalizarla el domingo, una fecha que no corresponde a la disponibilidad real. El calendario puede configurarse mediante el siguiente procedimiento:
      .row.bg-fondo-3(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5      
            //- Linea de tiempo
            .row.justify-content-center
              .col-lg-8
                PasosA.color-acento-contenido.mb-4(tipo="n")
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Paso 1. Identificar la jornada
                      p Revisar la jornada aprobada, los contratos y las políticas laborales.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t5/tarjeta02_1.png', alt="").img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t5/tarjeta02_2.png', alt="").img125
                    .col-12.col-lg.text-start
                      h4 Paso 2. Definir días y horas
                      p Configurar los días laborables, las horas de trabajo y las pausas.
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Paso 3. Registrar las excepciones
                      p Incorporar los festivos, los cierres y las demás excepciones del periodo del proyecto.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t5/tarjeta02_3.png', alt="").img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t5/tarjeta02_4.png', alt="").img125
                    .col-12.col-lg.text-start
                      h4 Paso 4. Crear calendarios adicionales
                      p Definir calendarios base para turnos o jornadas especiales cuando sea necesario.
                  .row.align-items-center
                    .col-12.col-lg
                      h5 Paso 5. Asignar y probar
                      p Asignar el calendario al proyecto y verificar el cálculo de fechas con una actividad que atraviese un fin de semana o un festivo.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t5/tarjeta02_5.png', alt="").img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t5/tarjeta02_6.png', alt="").img125
                    .col-12.col-lg.text-start
                      h4 Paso 6. Guardar la configuración
                      p Almacenar la configuración aprobada.
            //- Linea de tiempo
            Separador
      //- Inicio Tema5.4
      .row
        #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.4 Hojas de tareas, recursos y calendarios
      p(data-aos="fade-left") Las <b>hojas de tareas y de recursos</b> son espacios organizados para registrar la información que se utilizará en la planificación. Su preparación inicial permite definir los campos y los datos básicos antes de construir el cronograma completo. Sus componentes se presentan a continuación:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
          TabsC.color-acento-contenido.mt-1
            .py-3.py-md-4(titulo="Hoja de tareas")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  h4 Hoja de tareas
                  p Contiene las actividades del proyecto: cada fila es una tarea y cada columna, un dato como identificador, nombre, duración, inicio, fin, predecesoras, responsable, calendario y estado. En esta etapa no es necesario ingresar todas las actividades, sino preparar la estructura y verificar que los campos requeridos estén disponibles.
                .col-md-6
                  figure
                    img(src='@/assets/curso/temas/t5/tarjeta03_1.png', alt="")
            .py-3.py-md-4(titulo="Hoja de recursos")
              .row.align-items-center
                .col-md-6
                  h4 Hoja de recursos
                  p Registra los recursos de trabajo, que corresponden a personas y equipos cuya utilización se mide en tiempo; los recursos materiales, que se consumen en cantidades, y los recursos de costo, que representan valores asignados a una actividad.
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t5/tarjeta03_2.png', alt="")
            .py-3.py-md-4(titulo="Calendarios de recursos")
              .row.align-items-center
                .col-md-6
                  h4 Calendarios de recursos
                  p Registran la disponibilidad particular de una persona o un equipo cuando difiere del calendario global: jornada parcial, turnos, vacaciones, permisos, participación en otros proyectos, mantenimiento o trabajo remoto. De esta forma se evita que la herramienta asigne recursos en periodos en los que no están disponibles.
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t5/tarjeta03_3.png', alt="")
            .py-3.py-md-4(titulo="Calendarios de tareas")
              .row.align-items-center
                .col-md-6
                  h4 Calendarios de tareas
                  p Definen condiciones particulares para una actividad; por ejemplo, una prueba técnica que debe ejecutarse durante la noche o en una ventana de mantenimiento para no interrumpir el servicio.
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t5/tarjeta03_4.png', alt="")
      //- Cierres Pestanas horizontales
      p(data-aos="fade-left") Para nombrar las tareas se recomienda utilizar verbos en infinitivo que expresen una acción concreta, mantener una estructura uniforme y diferenciar las tareas de los entregables. Así, “Configurar calendario” o “Registrar recursos” son nombres adecuados, mientras que “Calendario”, “Revisión” o “Pendiente” resultan ambiguos. Por su parte, la información básica de cada recurso se organiza en los campos que se presentan en la siguiente tabla:
      .row.bg-fondo-3(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5       
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-auto.col-lg-8
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 13.
                  span Información básica de los recursos
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 30%") Campo
                        th(style="width: 70%") Descripción
                    tbody
                      tr
                        td Nombre
                        td Identificación del recurso
                      tr
                        td Tipo
                        td Trabajo, material o costo
                      tr
                        td Unidad máxima
                        td Disponibilidad
                      tr
                        td Tarifa
                        td Costo por unidad de tiempo o de cantidad
                      tr
                        td Calendario
                        td Periodos disponibles
                      tr
                        td Grupo
                        td Área, especialidad o categoría
                      tr
                        td Código
                        td Identificador interno
                      tr
                        td Responsable
                        td Persona que autoriza su uso
              //- FinTabla
      p(data-aos="fade-left") Los nombres de los recursos deben ser consistentes; cuando la política de privacidad no permite registrar nombres personales, pueden utilizarse cargos o perfiles, como “Analista de proyectos” o “Técnico de soporte”.
      p(data-aos="fade-left") Cuando una actividad utiliza un recurso, la herramienta determina las fechas combinando los calendarios aplicables según sus reglas de prioridad. Por esta razón, una tarea puede desplazarse aunque el calendario global indique disponibilidad. La relación entre los tres tipos de calendario se resume en la siguiente tabla:
      .row.bg-fondo-3(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5       
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-auto.col-lg-8
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 14.
                  span Relación entre calendarios
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 50%") Calendario
                        th(style="width: 50%") Aplicación
                    tbody
                      tr
                        td Calendario global
                        td Condiciones generales del proyecto
                      tr
                        td Calendario de tarea
                        td Condiciones particulares de una actividad
                      tr
                        td Calendario de recurso
                        td Disponibilidad específica de una persona o de un equipo
              //- FinTabla
            p.mb-5(data-aos="fade-left") A continuación, se presenta un ejemplo de una hoja de tareas, en la que las actividades se organizan mediante campos como nombre, duración, fechas y predecesoras, junto con su representación en el diagrama de Gantt.
            .row.justify-content-center(data-aos="fade-right")
              .col-md-auto.col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Figura 8.
                  span Ejemplo de una hoja de tareas y su diagrama de Gantt
                figure
                  img(src='@/assets/curso/temas/t5/img7.png', alt="Captura de pantalla de una hoja de tareas con actividades organizadas por nombre, duración, fechas y predecesoras, acompañadas de su representación mediante un diagrama de Gantt.", style="width: 1000px", data-aos="zoom-in").m-auto
            Separador
      //- Inicio Tema5.5
      .row
        #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.5 Verificación y almacenamiento de la configuración
      p(data-aos="fade-left") La parametrización finaliza con una <b>revisión técnica y funcional</b> que permite detectar errores antes de ingresar actividades, recursos y costos de forma masiva. Esta verificación comprende tres revisiones, que se presentan a continuación:
      //- Inicio Accordion 
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.order-1.order-lg-1.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t5/img8.png", alt="").img400.m-auto
          .col-lg-9.order-2.order-lg-2
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Datos iniciales")
                p.mb-4 Se comprueba que el nombre, el código, la descripción, el responsable, el patrocinador, la fecha de inicio, el método de programación, la ubicación del archivo, la versión y los permisos coincidan con los documentos autorizados.
              .row(titulo="Parámetros")
                p.mb-4 Se revisan el idioma, el formato regional, la moneda, los decimales, las unidades de duración y de trabajo, las horas por día y por semana, los días por mes, el formato de fecha y, cuando corresponda, la zona horaria. Para verificar las unidades se crea una actividad de prueba: con ocho horas por día, ocho horas deben equivaler a un día, cuarenta horas a cinco días y ochenta horas a diez días.
              .row(titulo="Calendario")
                p.mb-4 Se programan actividades de prueba que atraviesen un fin de semana, coincidan con un festivo, estén asignadas a un recurso con jornada parcial o tengan un calendario especial o una fecha límite, y se comparan los resultados con las condiciones reales.
      //- Fin Accordion
      p(data-aos="fade-left") Los resultados esperados pueden registrarse en una lista de comprobación como la siguiente:
      .row.bg-fondo-3(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5       
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-auto.col-lg-8
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 15.
                  span Lista de comprobación de la configuración
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 30%") Elemento
                        th(style="width: 70%") Resultado esperado
                    tbody
                      tr
                        td Fecha de inicio
                        td Coincide con la autorización
                      tr
                        td Programación
                        td Se realiza desde el punto definido
                      tr
                        td Idioma
                        td Es comprensible para los usuarios
                      tr
                        td Moneda
                        td Corresponde al presupuesto
                      tr
                        td Jornada
                        td Refleja las horas reales
                      tr
                        td Festivos
                        td No programan trabajo
                      tr
                        td Recursos
                        td Muestran la disponibilidad correcta
                      tr
                        td Archivos
                        td Se almacenan en la ubicación oficial
                      tr
                        td Permisos
                        td Corresponden a cada rol
                      tr
                        td Respaldo
                        td Puede ejecutarse y recuperarse
              //- FinTabla
            p(data-aos="fade-left") Cuando se identifica un error, se registra la inconsistencia, se identifica el parámetro relacionado, se revisa la fuente autorizada, se realiza el ajuste, se repite la prueba y se documenta el cambio, guardando una nueva versión cuando corresponda. No se debe continuar con la planificación detallada mientras existan errores que afecten las fechas, los costos o los recursos.
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-7.bg-color-5.d-flex.flex-column.justify-content-center.p-4.order-2.order-lg-2
          p.mb-3 Una vez verificada, la configuración se almacena en la ubicación oficial, con la convención de nombres definida en el apartado 4.4, y se crea una <b>copia de respaldo</b> en una ubicación distinta, que puede conservarse como plantilla o como punto de recuperación antes de ingresar el cronograma. Finalmente, la parametrización se documenta en un <b>registro de configuración</b> que incluye:
          ul.lista-ul.color-vinotinto-custom.mb-3
            li.d-flex.mb-2
              i.fa-solid.fa-laptop.me-3
              span Nombre del proyecto, herramienta utilizada y versión del <i>software</i>.
            li.d-flex.mb-2
              i.fa-solid.fa-laptop.me-3
              span Fecha de configuración y responsable.
            li.d-flex.mb-2
              i.fa-solid.fa-laptop.me-3
              span Parámetros aplicados: calendario, moneda y unidades.
            li.d-flex.mb-2
              i.fa-solid.fa-laptop.me-3
              span Ubicación del archivo y convención de versiones.
            li.d-flex.mb-2
              i.fa-solid.fa-laptop.me-3
              span Pruebas realizadas, resultados y ajustes.
            li.d-flex.mb-2
              i.fa-solid.fa-laptop.me-3
              span Aprobación.
          p.mb-0 Este registro facilita la trazabilidad y permite comprender por qué la herramienta funciona bajo determinadas condiciones. Con la configuración aprobada y respaldada, el archivo queda preparado para incorporar la planificación detallada del proyecto.
        .col-lg-5.d-flex.order-1.order-lg-1
          figure.mb-0.w-100.h-100
            img.h-100.w-100(src='@/assets/curso/temas/t5/img9.png', alt='', style="object-fit: cover;")

</template>

<script>
export default {
  name: 'Tema5',
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

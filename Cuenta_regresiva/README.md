# Cuenta Regresiva Simple

Este proyecto es una pequeña aplicación web que muestra una cuenta regresiva. Es ideal para eventos especiales, fechas límite o cualquier ocasión en la que desees contar el tiempo restante.

## Características

   - **Interfaz Sencilla:** Diseño minimalista y fácil de usar.
   - **Actualización en Tiempo Real:** La cuenta regresiva se actualiza automáticamente cada segundo.
   - **Personalización:** Puedes ajustar la fecha y hora objetivo en el código.

## Tecnologías Utilizadas

   - **HTML:** Estructura básica de la página web.
   - **CSS:** Estilos para mejorar la apariencia y la presentación.
   - **JavaScript:** Lógica de programación para manejar la cuenta regresiva.

## Uso

   1. Clona este repositorio en tu máquina local o descarga el código.
   2. Navega a la carpeta del proyecto.
   3. Abre el archivo **index.html** en tu navegador web.
    Personaliza la fecha y hora objetivo según tus necesidades.

## Estructura del Proyecto

   - **index.html:** Página principal que contiene la estructura HTML.
   - **style.css:** Archivo de estilos CSS para dar formato a la página.
   - **main.js:** Código JavaScript para la lógica de la cuenta regresiva.

# #Personalización

Puedes personalizar la cuenta regresiva ajustando la fecha objetivo en el archivo *main.js.* Busca la variable *proximoEvento* y modifica su valor según la fecha y hora deseadas. La variable se llama *proximoEvento* porque fue creada para calcular el tiempo restante hasta el inicio de un proyecto del curso de Hack a Boss, donde realizamos una Pokédex. Puedes ver ese proyecto en el repositorio correspondiente. Ahora es para otras funciones y/o eventos.

```javascript

// Personaliza la fecha objetivo (Año, Mes [0-11], Día, Hora, Minuto, Segundo)
const inicioClase = new Date('january 8, 2024 00:00:00').getTime();

¡Y eso es todo! Ahora puedes usar la cuenta regresiva para tus propios eventos.
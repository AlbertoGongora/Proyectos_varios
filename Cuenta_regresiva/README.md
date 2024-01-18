# Cuenta Regresiva Simple

Este proyecto es una pequeña aplicación web que muestra una cuenta regresiva simple. Es ideal para eventos especiales, fechas límite o cualquier ocasión en la que desees contar el tiempo restante.

## Características

- Interfaz sencilla y fácil de usar.
- Personalizable: puedes ajustar la fecha y hora objetivo.
- Actualización en tiempo real: la cuenta regresiva se actualiza automáticamente.

## Tecnologías Utilizadas

- **HTML**: Estructura básica de la página web.
- **CSS**: Estilos para mejorar la apariencia y la presentación.
- **JavaScript**: Lógica de programación para manejar la cuenta regresiva.

## Uso

1. Clona este repositorio en tu máquina local o descarga el código.
2. Abre el archivo `index.html` en tu navegador web.
3. Personaliza la fecha y hora objetivo según tus necesidades.
4. Observa la cuenta regresiva en acción.

## Estructura del Proyecto

- `index.html`: Página principal que contiene la estructura HTML.
- `style.css`: Archivo de estilos CSS para dar formato a la página.
- `script.js`: Código JavaScript para la lógica de la cuenta regresiva.

## Personalización

Puedes personalizar la cuenta regresiva ajustando la fecha objetivo en el archivo `script.js`. Busca la variable `targetDate` y modifica su valor según la fecha y hora deseadas.

```javascript
// Personaliza la fecha objetivo (Año, Mes [0-11], Día, Hora, Minuto, Segundo)
const targetDate = new Date(2024, 11, 31, 23, 59, 59);



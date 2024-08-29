const box = document.querySelector(".box");
const images = document.querySelectorAll(".card_img");
const backgrounds = document.querySelectorAll(".card_bg");
const range = 25;

const calcValue = (a, b) => ((a / b) * range - range / 2).toFixed(1);

let timeout;
document.addEventListener(
  "mousemove",
  ({ x, y }) => {
    if (timeout) {
      window.cancelAnimationFrame(timeout);
    }

    timeout = window.requestAnimationFrame(() => {
      const yValue = calcValue(y, window.innerHeight);
      const xValue = calcValue(x, window.innerWidth);

      box.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;

      [].forEach.call(images, (image) => {
        image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
      });

      [].forEach.call(backgrounds, (background) => {
        background.style.backgroundPosition = `${xValue * 0.45}px ${
          -yValue * 0.45
        }px`;
      });
    });
  },
  false
);

// function getRandomColor() {
//   const letters = '0123456789ABCDEF';
//   let color = '#';
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }
// function updateShadowColor() {
//   backgrounds.forEach((background) => {
//     const randomColor = getRandomColor();
//     const randomSize = Math.floor(Math.random() * 20) + 5; // Tamaño aleatorio entre 5 y 25
//     const shadowColor = `0 0 ${randomSize}px ${randomSize}px ${randomColor}`;
//     background.style.boxShadow = shadowColor;
//   });
// }


// // Actualizar el color de la sombra cada 2 segundos (2000 milisegundos)
// setInterval(updateShadowColor, 1000);




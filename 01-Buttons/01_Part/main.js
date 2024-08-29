const toggle = document.getElementById('toggle');
const showMenu = document.getElementById('show-menu');
const btns = document.querySelectorAll('.btn');

toggle.addEventListener('change', () => {
  const isChecked = toggle.checked;

  showMenu.classList.toggle('menu-open', isChecked);

  if (isChecked) {
    btns.forEach((btn, index) => {
      btn.style.opacity = 1;
      btn.style.transition = `all 0.6s cubic-bezier(.87, -.41, .19, 1.44) ${index * 0.2}s`;
    });
  } else {
    btns.forEach((btn) => {
      btn.style.opacity = 0;
    });
  }
});


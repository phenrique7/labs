const currentYear = new Date().getFullYear().toString();

document.querySelector('.current-year').innerHTML = currentYear;

document.getElementById('lescone-form').addEventListener('submit', (event) => {
  event.preventDefault();
  alert("This form doesn't work. It's just for presentation.");
});

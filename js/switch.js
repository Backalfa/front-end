// Selecione o elemento .Switch
const switchElement = document.querySelector('.Switch');

// Selecione o botão Toggle dentro do elemento .Switch
const toggleButton = switchElement.querySelector('.Toggle');

// Adicione um ouvinte de evento de clique ao elemento .Switch
switchElement.addEventListener('click', () => {
  // Alterne a classe "On" no elemento .Switch
  switchElement.classList.toggle('On');

  // Mude a posição do botão Toggle
  toggleButton.style.left = switchElement.classList.contains('On') ? '58%' : '2%';
});

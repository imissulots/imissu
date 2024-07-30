function shiftElement() {
    const element = document.getElementById('elementToShift');
    const arrow = document.getElementById('arrow');
    const press = document.getElementById('press');
    const message = document.getElementById('message');
    element.classList.add('animate-left');
    arrow.classList.add('visible');
    press.classList.add('visible');
    message.classList.add('comein');
}

// JavaScript para mostrar tooltips personalizados
const moreElements = document.querySelectorAll('.more');
    
moreElements.forEach(moreElement => {
    const tooltipText = moreElement.getAttribute('data-tooltip');
    const tooltip = document.createElement('div');
    tooltip.className = 'custom-tooltip';
    tooltip.innerHTML = tooltipText;

    moreElement.appendChild(tooltip);

    moreElement.addEventListener('mouseenter', () => {
        tooltip.style.display = 'block';
    });

    moreElement.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
    });
});
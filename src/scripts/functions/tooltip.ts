function loadTooltip() {
    const tooltip: HTMLSpanElement = document.querySelector('#tooltip');

    tooltip.innerHTML = sets[id].tooltip
}
function loadExtraTooltip() {
    const tooltip: HTMLSpanElement = document.querySelector('#tooltip');

    tooltip.innerHTML = "It's a custom mode!"
}
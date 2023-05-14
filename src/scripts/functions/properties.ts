let prop_name: HTMLElement;
let properties: any;
let prop: HTMLDivElement;
let id: number;
let createButton: HTMLButtonElement

function loadPage() {
  getIds()

  setProperties()
  setStyles()
  loadTooltip()
}
function loadCustom() {
  getExtraIds()

  setExtraProperties()
  loadEvents()
  loadExtraTooltip()
}
function loadRandom() {
  getRandomIds()

  setRandomProperties()
  loadRandomEvents()
  loadRandomTooltip()
}

window.setTimeout(() => {
  if (!route[1]) {
    return;
  }
  if (route[1].includes('custom')) {
    loadCustom()
    return;
  }
  if (route[1].includes('random')) {
    loadRandom()
    return;
  }

  loadPage()
}, 250);

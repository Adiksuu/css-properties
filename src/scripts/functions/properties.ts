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

window.setTimeout(() => {
  if (!route[1]) {
    return;
  }
  if (route[1].includes('custom')) {
    loadCustom()
    return;
  }

  loadPage()
}, 250);

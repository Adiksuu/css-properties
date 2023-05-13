function setStyles() {
  const prop_parent = properties[0].parentElement
  prop_parent.style.height = 'auto'
  prop_parent.style['overflow-y'] = 'unset'
  for (let i = 0; i < properties.length; i++) {
    properties[i].addEventListener("click", () => {
      let styleName = sets[id].name;
      prop.style[styleName] = properties[i].textContent;
      codeGen(properties[i].textContent);
    });
  }
}
function setExtraStyles() {
  for (let i = 0; i < properties.children.length; i++) {
    properties.children[i].addEventListener("click", () => {
      let styleName: any = properties.children[i].textContent.split(' ')
      prop.style[styleName[0].replace(':', '')] = styleName[1];
      codeExtraGen(properties.children[i].textContent);
    });
  }
}

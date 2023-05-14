function setProperties() {
    prop_name.innerHTML = sets[id].name;
    properties[0].innerHTML = sets[id].btn1;
    properties[1].innerHTML = sets[id].btn2;
    properties[2].innerHTML = sets[id].btn3;
    properties[3].innerHTML = sets[id].btn4;
    properties[4].innerHTML = sets[id].btn5;
}
function setExtraProperties() {
    prop_name.innerHTML = `${id}`
    

    for (let i = 0; i < 5; i++) {
        properties.children[0].remove()
    }
}
function setRandomProperties() {
    prop_name.innerHTML = `${id}`
    for (let i = 0; i < 3; i++) {
        properties.children[0].remove()
    }
    properties.children[0].textContent = 'RANDOM'
    properties.children[1].textContent = 'RESET STYLES'
}
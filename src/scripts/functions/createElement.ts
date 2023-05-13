function createElement(text: string) {
    
    const btn = document.createElement('button')

    btn.innerHTML = text
    properties.appendChild(btn)

    setExtraStyles()
}

function loadEvents() {
    const adder: HTMLDivElement = document.querySelector('.adder')
    adder.style.display = 'flex'
    createButton.addEventListener('click', () => {
        const inputText: any = createButton.parentElement.children[0]

        if (inputText.value == '') return;
        createElement(inputText.value)
        inputText.value = ''
    })
}
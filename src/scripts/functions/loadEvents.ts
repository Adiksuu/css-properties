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

function loadRandomEvents() {
    properties.children[0].addEventListener('click', () => {
        const randomStyle: number = Math.floor(Math.random() * sets.length)
        const styles: any = sets[randomStyle]
        const styleNumber: number = Math.floor(Math.random() * 5)

        let style: string;

        if (styleNumber == 0) {
            style = styles.btn1
        } else if (styleNumber == 1) {
            style = styles.btn2
        } else if (styleNumber == 2) {
            style = styles.btn3
        } else if (styleNumber == 3) {
            style = styles.btn4
        } else if (styleNumber == 4) {
            style = styles.btn5
        }

        prop.style[styles.name] = style
        codeExtraGen(`${styles.name}: ${style}`)
    })
    properties.children[1].addEventListener('click', () => {
        prop.setAttribute('style', '')
        if (code_text_p == undefined) return;
        code_text_p.textContent = ''
    })
}
function createElement(text: string) {
    
    const btn = document.createElement('button')

    btn.innerHTML = text
    properties.appendChild(btn)

    setExtraStyles()
}

function code_to_copy() {

    if (code_text_p == undefined) return

    const root: any = document.querySelector(":root");
    let width: number = 0;

    navigator.clipboard.writeText(code_text_p.textContent);

    if (width < 100) {
        let interval = window.setInterval(() => {
            width++;
            root.style.setProperty("--accent-width", `${width}%`);
            if (width >= 100) {
                clearInterval(interval)
                width = 0
                root.style.setProperty("--accent-width", `${width}%`);
            }
        }, 20)
    }
}

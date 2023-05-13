let code_text_p: any
function codeGen(code: string) {
    code_text_p = document.querySelector('#code_to_copy');

    code_text_p.innerHTML = `${prop_name.textContent}: ${code};`
}
function codeExtraGen(code: string) {
    code_text_p = document.querySelector('#code_to_copy');

    code_text_p.innerHTML = `${code};`
}

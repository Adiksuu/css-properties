let route = window.location.search.substring(1);
route = route.replaceAll('?', ' ').split(' ');
if (route[0] != "") {
    fetch(`./src/routes/${route[0]}.html`)
        .then(function (response) {
        if (!response.ok) {
            window.location.search = "";
        }
        return response.text();
    })
        .then(function (html) {
        document.body.innerHTML = html;
        document.title += ` - ${route[0]}`;
    });
}
let code_text_p;
function codeGen(code) {
    code_text_p = document.querySelector('#code_to_copy');
    code_text_p.innerHTML = `${prop_name.textContent}: ${code};`;
}
function code_to_copy() {
    navigator.clipboard.writeText(code_text_p.textContent);
}
function getIds() {
    id = parseInt(route[1].substr(3));
    prop_name = document.querySelector("#property_name");
    properties = document.querySelector("#properties").children;
    prop = document.querySelector("#prop");
    if (id >= sets.length) {
        toSite("");
        return;
    }
}
let prop_name;
let properties;
let prop;
let id;
function loadPage() {
    getIds();
    setProperties();
    setStyles();
}
window.setTimeout(() => {
    if (!route[1]) {
        return;
    }
    loadPage();
}, 250);
function setProperties() {
    prop_name.innerHTML = sets[id].name;
    properties[0].innerHTML = sets[id].btn1;
    properties[1].innerHTML = sets[id].btn2;
    properties[2].innerHTML = sets[id].btn3;
    properties[3].innerHTML = sets[id].btn4;
    properties[4].innerHTML = sets[id].btn5;
}
function setStyles() {
    for (let i = 0; i < properties.length; i++) {
        properties[i].addEventListener("click", () => {
            let styleName = sets[id].name;
            prop.style[styleName] = properties[i].textContent;
            codeGen(properties[i].textContent);
        });
    }
}
function toSite(site) {
    window.location.search = site;
}
const sets = [
    {
        name: "border-radius",
        btn1: "0",
        btn2: "15px",
        btn3: "50%",
        btn4: "25px",
        btn5: "5px 25px",
    },
    {
        name: "border",
        btn1: "none",
        btn2: "3px solid #10A37F",
        btn3: "4px solid red",
        btn4: "2px solid transparent",
        btn5: "5px dashed #000",
    },
    {
        name: "outline",
        btn1: "none",
        btn2: "3px solid #10A37F",
        btn3: "4px solid red",
        btn4: "2px solid transparent",
        btn5: "5px dashed #000",
    },
    {
        name: "box-shadow",
        btn1: "none",
        btn2: "0 0 4px 12px #ffffff15",
        btn3: "15px 15px 4px 12px #000",
        btn4: "-15px 0px 14px 5px #10A37F",
        btn5: "0 0px 14px 5px #ffffff65",
    },
    {
        name: "position",
        btn1: "absolute",
        btn2: "relative",
        btn3: "fixed",
        btn4: "static",
        btn5: "sticky",
    },
    {
        name: "margin",
        btn1: "0",
        btn2: "16px",
        btn3: "0 16px",
        btn4: "32px 32px",
        btn5: "32px 0",
    },
    {
        name: "top",
        btn1: "0",
        btn2: "16px",
        btn3: "-16px",
        btn4: "50%",
        btn5: "-50%",
    },
    {
        name: "bottom",
        btn1: "0",
        btn2: "16px",
        btn3: "-16px",
        btn4: "50%",
        btn5: "-50%",
    },
    {
        name: "left",
        btn1: "0",
        btn2: "16px",
        btn3: "-16px",
        btn4: "50%",
        btn5: "-50%",
    },
    {
        name: "right",
        btn1: "0",
        btn2: "16px",
        btn3: "-16px",
        btn4: "50%",
        btn5: "-50%",
    },
    {
        name: "transform",
        btn1: "translateX(0)",
        btn2: "translateX(16px)",
        btn3: "translateX(-16px)",
        btn4: "translateX(50%)",
        btn5: "translateX(-50%)",
    },
    {
        name: "transform",
        btn1: "translateY(0)",
        btn2: "translateY(16px)",
        btn3: "translateY(-16px)",
        btn4: "translateY(50%)",
        btn5: "translateY(-50%)",
    },
    {
        name: "font-family",
        btn1: "sans-serif",
        btn2: "poppins",
        btn3: "monospace",
        btn4: "serif",
        btn5: "fantasy",
    },
    {
        name: "font-size",
        btn1: "16px",
        btn2: "8px",
        btn3: "1rem",
        btn4: ".5rem",
        btn5: "24px",
    },
    {
        name: "font-weight",
        btn1: "400",
        btn2: "500",
        btn3: "600",
        btn4: "700",
        btn5: "800",
    },
    {
        name: "letter-spacing",
        btn1: "0",
        btn2: "1px",
        btn3: "2px",
        btn4: "3px",
        btn5: "4px",
    },
    {
        name: "color",
        btn1: "#fff",
        btn2: "red",
        btn3: "yellow",
        btn4: "#10a37f",
        btn5: "#007cae",
    },
    {
        name: "text-decoration",
        btn1: "none",
        btn2: "underline",
        btn3: "line-through",
        btn4: "overline",
        btn5: "unset",
    },
    {
        name: "cursor",
        btn1: "default",
        btn2: "none",
        btn3: "zoom-in",
        btn4: "crosshair",
        btn5: "grab",
    },
    {
        name: "height",
        btn1: "64px",
        btn2: "16px",
        btn3: "32px",
        btn4: "50%",
        btn5: "100%",
    },
    {
        name: "width",
        btn1: "64px",
        btn2: "16px",
        btn3: "32px",
        btn4: "50%",
        btn5: "100%",
    },
    {
        name: "background",
        btn1: "#fff",
        btn2: "#0f0f0f",
        btn3: "skyblue",
        btn4: "pink",
        btn5: "rgba(255, 0, 0)",
    },
    {
        name: "transition",
        btn1: ".3s linear",
        btn2: "3s linear",
        btn3: ".3s ease-in",
        btn4: "3s ease-in",
        btn5: "5s ease",
    },
    {
        name: "transform",
        btn1: "rotate(10deg)",
        btn2: "rotate(-10deg)",
        btn3: "rotate(180deg)",
        btn4: "rotate(-180deg)",
        btn5: "rotate(0)",
    },
    {
        name: "transform",
        btn1: "scale(1)",
        btn2: "scale(.75)",
        btn3: "scale(1.25)",
        btn4: "scale(.5)",
        btn5: "scale(1.5)",
    },
    {
        name: "transform",
        btn1: "skew(0)",
        btn2: "skew(15deg)",
        btn3: "skew(-15deg)",
        btn4: "skew(15deg, 15deg)",
        btn5: "skew(-15deg, -15deg)",
    },
    {
        name: "justify-content",
        btn1: "center",
        btn2: "flex-start",
        btn3: "flex-end",
        btn4: "stretch",
        btn5: "space-evenly",
    },
    {
        name: "align-items",
        btn1: "center",
        btn2: "flex-start",
        btn3: "flex-end",
        btn4: "stretch",
        btn5: "space-evenly",
    },
];
//# sourceMappingURL=app.js.map
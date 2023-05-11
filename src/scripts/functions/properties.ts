let prop_name: HTMLElement;
let properties: HTMLCollection;
let prop: HTMLDivElement;
let id: number;

window.setTimeout(() => {
  if (!route[1]) {
    return;
  }
  id = parseInt(route[1].substr(3));

  prop_name = document.querySelector("#property_name");
  properties = document.querySelector("#properties").children;
  prop = document.querySelector("#prop");

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
      name: "position relative; top",
      btn1: "0",
      btn2: "16px",
      btn3: "-16px",
      btn4: "50%",
      btn5: "-50%",
    },
    {
      name: "position relative; bottom",
      btn1: "0",
      btn2: "16px",
      btn3: "-16px",
      btn4: "50%",
      btn5: "-50%",
    },
    {
      name: "position relative; left",
      btn1: "0",
      btn2: "16px",
      btn3: "-16px",
      btn4: "50%",
      btn5: "-50%",
    },
    {
      name: "position relative; right",
      btn1: "0",
      btn2: "16px",
      btn3: "-16px",
      btn4: "50%",
      btn5: "-50%",
    },
    {
      name: "translate(x)",
      btn1: "0",
      btn2: "16px",
      btn3: "-16px",
      btn4: "50%",
      btn5: "-50%",
    },
    {
      name: "translate(y)",
      btn1: "0",
      btn2: "16px",
      btn3: "-16px",
      btn4: "50%",
      btn5: "-50%",
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
      name: "text-color",
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
  ];

  if (id >= sets.length) {
    toSite("");
    return;
  }

  prop_name.innerHTML = sets[id].name;
  properties[0].innerHTML = sets[id].btn1;
  properties[1].innerHTML = sets[id].btn2;
  properties[2].innerHTML = sets[id].btn3;
  properties[3].innerHTML = sets[id].btn4;
  properties[4].innerHTML = sets[id].btn5;

  if (id == 0) {
    for (let i = 0; i < properties.length; i++) {
      properties[i].addEventListener("click", () => {
        prop.style.borderRadius = properties[i].textContent;
      });
    }
  } else if (id == 1) {
    for (let i = 0; i < properties.length; i++) {
      properties[i].addEventListener("click", () => {
        prop.style.border = properties[i].textContent;
      });
    }
  } else if (id == 2) {
    for (let i = 0; i < properties.length; i++) {
      properties[i].addEventListener("click", () => {
        prop.style.outline = properties[i].textContent;
      });
    }
  } else if (id == 3) {
    for (let i = 0; i < properties.length; i++) {
      properties[i].addEventListener("click", () => {
        prop.style.boxShadow = properties[i].textContent;
      });
    }
  } else if (id == 4) {
    for (let i = 0; i < properties.length; i++) {
      properties[i].addEventListener("click", () => {
        prop.style.position = properties[i].textContent;
      });
    }
  } else if (id == 5) {
    prop.style.margin = '0'
    for (let i = 0; i < properties.length; i++) {
      properties[i].addEventListener("click", () => {
        prop.style.margin = properties[i].textContent;
      });
    }
  } else if (id == 6) {
    prop.style.position = 'relative'
    for (let i = 0; i < properties.length; i++) {
      properties[i].addEventListener("click", () => {
        prop.style.top = properties[i].textContent;
      });
    }
  }
  else if (id == 7) {
    prop.style.position = 'relative'
    for (let i = 0; i < properties.length; i++) {
      properties[i].addEventListener("click", () => {
        prop.style.bottom = properties[i].textContent;
      });
    }
  }
  else if (id == 8) {
    prop.style.position = 'relative'
    for (let i = 0; i < properties.length; i++) {
      properties[i].addEventListener("click", () => {
        prop.style.left = properties[i].textContent;
      });
    }
  }
  else if (id == 9) {
    prop.style.position = 'relative'
    for (let i = 0; i < properties.length; i++) {
      properties[i].addEventListener("click", () => {
        prop.style.right = properties[i].textContent;
      });
    }
  }
  else if (id == 10) {
    for (let i = 0; i < properties.length; i++) {
      properties[i].addEventListener("click", () => {
        prop.style.transform = `translateX(${properties[i].textContent})`;
      });
    }
  }
  else if (id == 11) {
    for (let i = 0; i < properties.length; i++) {
      properties[i].addEventListener("click", () => {
        prop.style.transform = `translateY(${properties[i].textContent})`;
      });
    }
  }
  else if (id == 12) {
    prop.innerHTML = `TEXT`
    for (let i = 0; i < properties.length; i++) {
      properties[i].addEventListener("click", () => {
        prop.style.fontFamily = properties[i].textContent;
      });
    }
  }
  else if (id == 13) {
    prop.innerHTML = `TEXT`
    for (let i = 0; i < properties.length; i++) {
      properties[i].addEventListener("click", () => {
        prop.style.fontSize = properties[i].textContent;
      });
    }
  }
  else if (id == 14) {
    prop.innerHTML = `TEXT`
    for (let i = 0; i < properties.length; i++) {
      properties[i].addEventListener("click", () => {
        prop.style.fontWeight = properties[i].textContent;
      });
    }
  }
  else if (id == 15) {
    prop.innerHTML = `TEXT`
    for (let i = 0; i < properties.length; i++) {
      properties[i].addEventListener("click", () => {
        prop.style.letterSpacing = properties[i].textContent;
      });
    }
  }
  else if (id == 16) {
    prop.innerHTML = `TEXT`
    for (let i = 0; i < properties.length; i++) {
      properties[i].addEventListener("click", () => {
        prop.style.color = properties[i].textContent;
      });
    }
  }
  else if (id == 17) {
    prop.innerHTML = `TEXT`
    for (let i = 0; i < properties.length; i++) {
      properties[i].addEventListener("click", () => {
        prop.style.textDecoration = properties[i].textContent;
      });
    }
  }
  else if (id == 18) {
    for (let i = 0; i < properties.length; i++) {
      properties[i].addEventListener("click", () => {
        prop.style.cursor = properties[i].textContent;
      });
    }
  }
  else if (id == 19) {
    for (let i = 0; i < properties.length; i++) {
      properties[i].addEventListener("click", () => {
        prop.style.height = properties[i].textContent;
      });
    }
  }
  else if (id == 20) {
    for (let i = 0; i < properties.length; i++) {
      properties[i].addEventListener("click", () => {
        prop.style.width = properties[i].textContent;
      });
    }
  }
  else if (id == 21) {
    for (let i = 0; i < properties.length; i++) {
      properties[i].addEventListener("click", () => {
        prop.style.background = properties[i].textContent;
      });
    }
  }
}, 150);

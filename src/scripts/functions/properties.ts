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

  const sets: any = [
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
    {
      name: "transition",
      btn1: ".3s linear",
      btn2: "3s linear",
      btn3: ".3s ease-in",
      btn4: "3s ease-in",
      btn5: "5s ease",
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

  for (let i = 0; i < properties.length; i++) {
    properties[i].addEventListener("click", () => {
      let styleName = sets[id].name
      prop.style[styleName] = properties[i].textContent;
    });
  }
}, 150);

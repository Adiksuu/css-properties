const sets: any = [
    {
      name: "border-radius",
      btn1: "0",
      btn2: "15px",
      btn3: "50%",
      btn4: "25px",
      btn5: "5px 25px",
      tooltip: "border-radius property allow you to round the corners"
    },
    {
      name: "border",
      btn1: "none",
      btn2: "3px solid #10A37F",
      btn3: "4px solid red",
      btn4: "2px solid transparent",
      btn5: "5px dashed #000",
      tooltip: "border property allow you to add border and his styling in the element"
    },
    {
      name: "outline",
      btn1: "none",
      btn2: "3px solid #10A37F",
      btn3: "4px solid red",
      btn4: "2px solid transparent",
      btn5: "5px dashed #000",
      tooltip: "outline property allow you to add border and his styling simplify to border property but outline adding border outside element"
    },
    {
      name: "box-shadow",
      btn1: "none",
      btn2: "0 0 4px 12px #ffffff15",
      btn3: "15px 15px 4px 12px #000",
      btn4: "-15px 0px 14px 5px #10A37F",
      btn5: "0 0px 14px 5px #ffffff65",
      tooltip: "box-shadow property allow you to add shadow to your element"
    },
    {
      name: "position",
      btn1: "absolute",
      btn2: "relative",
      btn3: "fixed",
      btn4: "static",
      btn5: "sticky",
      tooltip: "position property allow you to change positioning the element"
    },
    {
      name: "margin",
      btn1: "0",
      btn2: "16px",
      btn3: "0 16px",
      btn4: "32px 32px",
      btn5: "32px 0",
      tooltip: "margin property allow you to change the margin of element"
    },
    {
      name: "top",
      btn1: "0",
      btn2: "16px",
      btn3: "-16px",
      btn4: "50%",
      btn5: "-50%",
      tooltip: "top property allow you to change the top-position of element, it's require the position: relative"
    },
    {
      name: "bottom",
      btn1: "0",
      btn2: "16px",
      btn3: "-16px",
      btn4: "50%",
      btn5: "-50%",
      tooltip: "bottom property allow you to change the bottom-position of element, it's require the position: relative"
    },
    {
      name: "left",
      btn1: "0",
      btn2: "16px",
      btn3: "-16px",
      btn4: "50%",
      btn5: "-50%",
      tooltip: "left property allow you to change the left-position of element, it's require the position: relative"
    },
    {
      name: "right",
      btn1: "0",
      btn2: "16px",
      btn3: "-16px",
      btn4: "50%",
      btn5: "-50%",
      tooltip: "right property allow you to change the right-position of element, it's require the position: relative"
    },
    {
      name: "transform",
      btn1: "translateX(0)",
      btn2: "translateX(16px)",
      btn3: "translateX(-16px)",
      btn4: "translateX(50%)",
      btn5: "translateX(-50%)",
      tooltip: "transform: translateX() property allow you to change the left-to-right position"
    },
    {
      name: "transform",
      btn1: "translateY(0)",
      btn2: "translateY(16px)",
      btn3: "translateY(-16px)",
      btn4: "translateY(50%)",
      btn5: "translateY(-50%)",
      tooltip: "transform: translateY() property allow you to change the top-to-bottom position"
    },
    {
      name: "font-family",
      btn1: "sans-serif",
      btn2: "poppins",
      btn3: "monospace",
      btn4: "serif",
      btn5: "fantasy",
      tooltip: "font-family property allow you to change a font of text"
    },
    {
      name: "font-size",
      btn1: "16px",
      btn2: "8px",
      btn3: "1rem",
      btn4: ".5rem",
      btn5: "24px",
      tooltip: "font-size property allow you to change a size of text"
    },
    {
      name: "font-weight",
      btn1: "400",
      btn2: "500",
      btn3: "600",
      btn4: "700",
      btn5: "800",
      tooltip: "font-weight property allow you to change a bold of text"
    },
    {
      name: "letter-spacing",
      btn1: "0",
      btn2: "1px",
      btn3: "2px",
      btn4: "3px",
      btn5: "4px",
      tooltip: "letter-spacing property allow you to change a space between letters of text"
    },
    {
      name: "color",
      btn1: "#fff",
      btn2: "red",
      btn3: "yellow",
      btn4: "#10a37f",
      btn5: "#007cae",
      tooltip: "color property allow you to change a color of text"
    },
    {
      name: "text-decoration",
      btn1: "none",
      btn2: "underline",
      btn3: "line-through",
      btn4: "overline",
      btn5: "unset",
      tooltip: "text-decoration property allow you to add a decorations to text"
    },
    {
      name: "cursor",
      btn1: "default",
      btn2: "none",
      btn3: "zoom-in",
      btn4: "crosshair",
      btn5: "grab",
      tooltip: "cursor property allow you to change a mouse cursor"
    },
    {
      name: "height",
      btn1: "64px",
      btn2: "16px",
      btn3: "32px",
      btn4: "50%",
      btn5: "100%",
      tooltip: "height property allow you to change a height of element"
    },
    {
      name: "width",
      btn1: "64px",
      btn2: "16px",
      btn3: "32px",
      btn4: "50%",
      btn5: "100%",
      tooltip: "width property allow you to change a width of element"
    },
    {
      name: "background",
      btn1: "#fff",
      btn2: "#0f0f0f",
      btn3: "skyblue",
      btn4: "pink",
      btn5: "rgba(255, 0, 0)",
      tooltip: "background property allow you to change a background of element"
    },
    {
      name: "transition",
      btn1: ".3s linear",
      btn2: "3s linear",
      btn3: ".3s ease-in",
      btn4: "3s ease-in",
      btn5: "5s ease",
      tooltip: "transition property allow you to add a smooth animation of element"
    },
    {
      name: "transform",
      btn1: "rotate(10deg)",
      btn2: "rotate(-10deg)",
      btn3: "rotate(180deg)",
      btn4: "rotate(-180deg)",
      btn5: "rotate(0)",
      tooltip: "transform: rotate() property allow you to change a rotation of element"
    },
    {
      name: "transform",
      btn1: "scale(1)",
      btn2: "scale(.75)",
      btn3: "scale(1.25)",
      btn4: "scale(.5)",
      btn5: "scale(1.5)",
      tooltip: "transform: scale() property allow you to change a scale of element"
    },
    {
      name: "transform",
      btn1: "skew(0)",
      btn2: "skew(15deg)",
      btn3: "skew(-15deg)",
      btn4: "skew(15deg, 15deg)",
      btn5: "skew(-15deg, -15deg)",
      tooltip: "transform: skew() property allow you to change a slant of element"
    },
    {
      name: "justify-content",
      btn1: "center",
      btn2: "flex-start",
      btn3: "flex-end",
      btn4: "stretch",
      btn5: "space-evenly",
      tooltip: "justify-content property allow you to change a x-positioning of element. It's require display: flex"
    },
    {
      name: "align-items",
      btn1: "center",
      btn2: "flex-start",
      btn3: "flex-end",
      btn4: "stretch",
      btn5: "space-evenly",
      tooltip: "align-items property allow you to change a y-positioning of element. It's require display: flex"
    },
    {
      name: "text-shadow",
      btn1: "none",
      btn2: "0px 2px 2px #0f0f0f",
      btn3: "0px 4px 4px #0f0f0f",
      btn4: "0px 14px 5px #10A37F",
      btn5: "0px -14px 5px #10A37F",
      tooltip: "text-shadow property allow you to add shadow to your text"
    },
  ];
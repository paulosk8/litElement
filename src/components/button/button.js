import { LitElement, html, css } from "lit-element";

class Button extends LitElement {
  static get properties() {
    return {
      text: { type: String, attribute: true },
    };
  }
  constructor() {
    super();
    this.text = "Click Me";
  }
  static get styles() {
    return css`
      button {
        background-color: #6200ea;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
      }
    `;
  }
  mouseDownListener(event) {
    //seleccionar el elemento y cambiar el color de fondo
  }
  mouseUpListener(event) {
    //seleccionar el elemento y cambiar el color de fondo
  }
  render() {
    return html` <button>${this.text}</button> `;
  }
}

window.customElements.define("wc-button", Button);

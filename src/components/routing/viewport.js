import { LitElement } from "lit-element";

class Viewport extends LitElement {
  constructor() {
    super();
    this.viewNow = "/default";
  }
  connectedCallback() {
    super.connectedCallback();
    this.viewList = this.querySelectorAll("wc-route");
    this.renderView(this.viewNow);
  }
  renderView(path) {
    this.innerHTML = ""; // Clear previous content
    this.shadowRoot.innerHTML = ""; // Clear shadow DOM
    let view = Array.from(this.viewList).find((node) => {
      return node.getAttribute("path") === path;
    });
    !!view && this.shadowRoot.appendChild(view);
    this.viewNow = path;
  }
}

window.customElements.define("wc-viewport", Viewport);

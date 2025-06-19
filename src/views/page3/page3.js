import { LitElement, html } from "lit-element";

class Page3 extends LitElement {
  render() {
    return html`
      <div>
        <h1>Page 3</h1>
      </div>
    `;
  }
}
window.customElements.define("wc-page3", Page3);

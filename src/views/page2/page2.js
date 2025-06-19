import { LitElement, html } from "lit-element";

class Page2 extends LitElement {
  render() {
    return html`
      <div>
        <h1>Page 2</h1>
      </div>
    `;
  }
}
window.customElements.define("wc-page2", Page2);

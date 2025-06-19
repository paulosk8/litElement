import { LitElement, html, css } from "lit-element";

class Navbar extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        width: 100%;
      }
      .continer-navbar {
        display: flex;
        justify-content: center;
        margin: auto;
        background-color: #0b8e21ca;
        padding: 10px;
        gap: 10px;
        width: 100%;
      }
    `;
  }
  render() {
    return html`
      <div class="continer-navbar">
        <wc-link to="/default">
          <wc-button text="Page 1"></wc-button>
        </wc-link>
        <wc-link to="/page2">
          <wc-button text="Page 2"></wc-button>
        </wc-link>
        <wc-link to="/page3">
          <wc-button text="Page 3"></wc-button>
        </wc-link>
      </div>
    `;
  }
}
window.customElements.define("wc-navbar", Navbar);

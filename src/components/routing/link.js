import { LitElement, html } from "lit-element";

class Link extends LitElement {
  static get properties() {
    return {
      to: { type: String, attribute: true },
      routerName: { type: String, attribute: true },
    };
  }

  _handlerClick() {
    let detail = {
      to: this.to,
      routerName: this.routerName,
    };
    this.dispatchEvent(
      new CustomEvent("go-event", {
        detail: detail,
        bubbles: true,
        composed: true,
      })
    );
  }
  render() {
    return html` <div @click=${this._handlerClick}><slot></slot></div> `;
  }
}
window.customElements.define("wc-link", Link);

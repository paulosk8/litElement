import { html, LitElement } from "lit-element";
import "./table.js";
import "./form.js";

class Home extends LitElement {
  constructor() {
    super();
    this.list = [
      { name: "Paulo", lastName: "Galarza", age: 31 },
      { name: "Carol", lastName: "Gilces", age: 26 },
      { name: "Julian", lastName: "Galarza", age: 1 },
    ];
  }
  static get properties() {
    return {
      list: {
        type: Array,
      },
    };
  }
  addToList(e) {
    let newList = Object.assign([], this.list);
    newList.push(e.detail);
    this.list = newList;
  }

  render() {
    return html`
      <wc-form @savePerson="${this.addToList}"></wc-form>
      <wc-table .list="${this.list}"></wc-table>
    `;
  }
}

window.customElements.define("wc-home", Home);

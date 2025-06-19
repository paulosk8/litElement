import { html, LitElement } from "lit-element";

class Form extends LitElement {
  constructor() {
    super();
    this.name = "";
    this.lastName = "";
    this.age = "";
  }
  manejador(name) {
    return (event) => {
      const value = event.target.value;
      this[name] = value;
    };
  }
  save() {
    let data = {
      name: this.name,
      lastName: this.lastName,
      age: this.age,
    };
    let options = {
      detail: data,
      bubble: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent("savePerson", options));
  }
  static get properties() {
    return {
      name: { type: String },
      lastName: { type: String },
      age: { type: Number },
    };
  }
  render() {
    return html`
      <form>
        <label
          >Nombre:
          <input @input="${this.manejador("name")}" .value="${this.name}" />
        </label>
        <label
          >Apellido:
          <input
            @input="${this.manejador("lastName")}"
            .value="${this.lastName}"
          />
        </label>
        <label
          >Edad:
          <input @input="${this.manejador("age")}" .value="${this.age}" />
        </label>
        <button @click="${this.save}" type="button">Guardar</button>
      </form>
    `;
  }
}
window.customElements.define("wc-form", Form);

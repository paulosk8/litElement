import { html, LitElement } from "lit-element";

class Table extends LitElement {
  static get properties() {
    return {
      list: { type: Array },
    }
  }
  render() {
    return html`
      <h1>Tabla de registros</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
          </tr>
        </thead>
        <tbody>
          ${this.list.map((item) => {
            return html`
              <tr>
                <td>${item.name}</td>
                <td>${item.lastName}</td>
                <td>${item.age}</td>
              </tr>
            `;
          })}
        </tbody>
      </table>
    `;
  }
}

window.customElements.define("wc-table", Table);

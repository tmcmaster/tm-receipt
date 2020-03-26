import { L as LitElement, c as css, h as html } from '../common/lit-element-5d349381.js';

window.customElements.define('tm-receipt', class extends LitElement {
  // noinspection JSUnusedGlobalSymbols
  static get properties() {
    return {
      heading: {
        type: String
      }
    };
  }

  constructor() {
    super();
    this.heading = 'Hello World!';
  }

  static get styles() {
    // language=CSS
    return css`
            :host {
              display: inline-block;
            }
            h2 {
                color: gray;
            }
        `;
  } // noinspection JSUnusedGlobalSymbols


  render() {
    return html`
          <h2>${this.heading}</h2>
        `;
  }

});

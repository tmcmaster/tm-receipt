import {html} from 'lit-html';
import {LitElement, css} from 'lit-element';

window.customElements.define('tm-receipt', class extends LitElement {

    // noinspection JSUnusedGlobalSymbols
    static get properties() {
        return {
            heading: {type: String}
        }
    }

    constructor() {
        super();
        this.heading = 'Hello Sage!';
    }

    static get styles() {
        // language=CSS
        return css `
            :host {
              display: inline-block;
            }
            h2 {
                font-family: var(--tm-receipt-font-family, inherit);
                color: gray;
            }
        `;
    }

    // noinspection JSUnusedGlobalSymbols
    render() {
        return html`
          <h2>${this.heading}</h2>
        `;
    }
});

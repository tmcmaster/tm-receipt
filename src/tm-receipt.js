import {html} from 'lit-html';
import {LitElement, css} from 'lit-element';

import {htmlLiteral} from 'https://unpkg.com/@polymer/polymer@3.0.5/lib/utils/html-tag.js'

window.customElements.define('tm-receipt', class extends LitElement {

    // noinspection JSUnusedGlobalSymbols
    static get properties() {
        return {
            data: {type: Object}
        }
    }

    constructor() {
        super();
        this.conv = new showdown.Converter({noHeaderId: true});
        this.template = document.createElement('template');
    }

    static get styles() {
        // language=CSS
        return css `
            :host {
                display: inline-block;
                border: solid grey 1px;
                padding: 20px;
                color: black;
                font-family: var(--tm-receipt-font-family, inherit);
                
                /** Colors **/
                
                --section-heading-color: var(--tm-receipt-section-heading-color, inherit);
                --section-key-color: var(--tm-receipt-section-key-color, inherit);
                --section-value-color: var(--tm-receipt-section-value, inherit);

                --section-1-key-color: var(--tm-receipt-section-key-color, var(--section-key-color));
                --section-1-value-color: var(--tm-receipt-section-value, var(--section-value-color));

                --section-heading-1-color: var(--tm-receipt-section-heading-1-color, var(--section-heading-color));
                --section-heading-2-color: var(--tm-receipt-section-heading-2-color, var(--section-heading-color));
                
                --section-1-key-1-color: var(--tm-receipt-section-1-key-1-color, var(--section-1-key-color));
                --section-1-key-2-color: var(--tm-receipt-section-1-key-2-color, var(--section-1-key-color));
                --section-1-key-3-color: var(--tm-receipt-section-1-key-3-color, var(--section-1-key-color));

                --section-1-value-1-color: var(--tm-receipt-section-1-value-1-color, var(--section-1-value-color));
                --section-1-value-2-color: var(--tm-receipt-section-1-value-2-color, var(--section-1-value-color));
                --section-1-value-3-color: var(--tm-receipt-section-1-value-3-color, var(--section-1-value-color));

                --section-2-key-1-color: var(--tm-receipt-section-2-key-1-color, var(--section-2-key-color));
                --section-2-key-2-color: var(--tm-receipt-section-2-key-2-color, var(--section-2-key-color));
                --section-2-key-3-color: var(--tm-receipt-section-2-key-3-color, var(--section-2-key-color));

                --section-2-value-1-color: var(--tm-receipt-section-2-value-1-color, var(--section-2-value-color));
                --section-2-value-2-color: var(--tm-receipt-section-2-value-2-color, var(--section-2-value-color));
                --section-2-value-3-color: var(--tm-receipt-section-2-value-3-color, var(--section-2-value-color));

            }

            ul {
                list-style-type:none;
            }
            section {
                padding: 20px;
                border: solid grey 1px;
            }
            
            .section-heading-1 {
                color: var(--section-heading-1-color, inherit);
            }
            .section-heading-2 {
                color: var(--section-heading-2-color, inherit);
            }
            .section-heading-3 {
                color: var(--section-heading-3-color, inherit);
            }

            .section-1-key-1 {
                color: var(--section-1-key-1-color, inherit);
            }
            .section-1-key-2 {
                color: var(--section-1-key-2-color, inherit);
            }

            .section-1-value-1 {
                color: var(--section-1-value-1-color, inherit);
            }
            .section-1-value-2 {
                color: var(--section-1-value-2-color, inherit);
            }
        `;
    }

    // noinspection JSUnusedGlobalSymbols
    render() {
        return html`
            <template id="a"><h3>sdfasdfasf</h3></template>
            <header>
                <img/>
                <h1>${this.data.title}</h1>
                <div>
                    <span>${this.data.subtitle1}</span>
                    <span>${this.data.subtitle2}</span>
                </div>
            </header>
            <main>
                <h2>${this.data.heading}</h2>
                <h3>${this.data.subHeading}</h3>
                ${Object.keys(this.data.details).map((key, i) => html`
                    <section>
                        <h3 class="section-heading-${i+1}">${key}</h3>
                        <table>
                            ${Object.keys(this.data.details[key]).map((k,j) => html`
                                <tr>
                                    <td class="section-${i+1}-key-${j+1}">${this.formatText(k)}</td>
                                    <td class="section-${i+1}-value-${j+1}">${this.formatText(this.data.details[key][k])}</td>
                                </tr>
                            `)}
                        </table>
                    </section>
                `)}
                <footer>${this.data.footer}</footer>
            </main>
        `;
    }

    formatText(text) {
        const htmlString = this.conv.makeHtml(text.replace(/~blank~/gi, '<p></p>'));
        this.template = document.createElement('template');
        this.template.innerHTML = htmlString;
        return this.template.content;
    }
});

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
        this.attrs = ['color', 'font-size', 'font-weight', 'font-style'];
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
                
                --section-padding: var(--tm-receipt-section-padding, 20px);
                --padding: var(--tm-receipt-padding, 20px);
                
                padding: var(--padding);
            }

            ul {
                list-style-type:none;
            }
            section {
                padding: var(--section-padding);
                border: solid grey 1px;
            }

            table > tr > td:nth-of-type(1) {
                width: 45%;
            }
            table > tr > td:nth-of-type(2) {
                width: 55%;
            }
            
            td {
                border: solid red 1px;
            }
            
            ul {
                padding: 0;
            }
        `;
    }

    //                        --section-heading-${i}-color: var(--tm-receipt-section-heading-${i}-color, var(--section-heading-color));
    // noinspection JSUnusedGlobalSymbols
    render() {
        return html`
            <style>
                ${this.generateDetailsStyles(this.data.details)}
            </style>
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

    generateDetailsStyles(details) {
        const {attrs} = this;

        return `
            :host { 
                ${attrs.map((attr) => `
                    --section-heading-${attr}: var(--tm-receipt-section-heading-${attr}, inherit);
                    --section-key-${attr}: var(--tm-receipt-section-key-${attr}, inherit);
                    --section-value-${attr}: var(--tm-receipt-section-value-${attr}, inherit);
                    ${Object.keys(details).map((section, s) => `
                        --section-heading-${s+1}-${attr}: var(--tm-receipt-section-heading-${s+1}-${attr}, var(--section-heading-${attr}));
                        --section-${s+1}-key-${attr}: var(--tm-receipt-section-key-${attr}, var(--section-key-${attr}));
                        --section-${s+1}-value-${attr}: var(--tm-receipt-section-value-${attr}, var(--section-value-${attr}));
                        ${Object.keys(this.data.details[section]).map((key,k) => `
                            --section-${s+1}-key-${k+1}-${attr}: var(--tm-receipt-section-${s+1}-key-${k+1}-${attr}, var(--section-${s+1}-key-${attr}));
                            --section-${s+1}-value-${k+1}-${attr}: var(--tm-receipt-section-${s+1}-value-${k+1}-${attr}, var(--section-${s+1}-value-${attr}));
                        `).join('')}
                    `).join('')}
                `).join('')};
            }
            
            ${Object.keys(details).map((section, s) => `
                .section-heading-${s+1} {
                    ${attrs.map(attr => `${attr}: var(--section-heading-${s+1}-${attr}, inherit);`).join('')}  
                }
                ${Object.keys(this.data.details[section]).map((key,k) => `
                    .section-${s+1}-key-${k+1} {
                        ${attrs.map(attr => `${attr}: var(--section-${s+1}-key-${k+1}-${attr}, inherit);`).join('')}  
                    }
                    .section-${s+1}-key-${k+1} {
                        ${attrs.map(attr => `${attr}: var(--section-${s+1}-value-${k+1}-${attr}, inherit);`).join('')}  
                    }
                `).join('')}
            `).join('')}
        `;
    }

    formatText(text) {
        const htmlString = this.conv.makeHtml(text.replace(/~blank~/gi, '<p></p>'));
        this.template = document.createElement('template');
        this.template.innerHTML = htmlString;
        return this.template.content;
    }
});

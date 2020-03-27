import {html, render} from "./web_modules/lit-html.js";

import './web_modules/@wonkytech/tm-examples.js';

let sites = {
    'src': 'https://github.com/tmcmaster/tm-receipt',
    'pika': 'https://www.pika.dev/npm/@wonkytech/tm-receipt',
    'npm': 'https://www.npmjs.com/package/@wonkytech/tm-receipt',
    'docs': 'https://github.com/tmcmaster/tm-receipt#readme'
};

render(html`
    <style>
        body {
          padding: 0;
          margin: 0;
        } 
        
        html {
            --tm-receipt-font-family: sage;
        }
    </style>
    <tm-examples heading="tm-receipt" .sites="${sites}">
        <section title="Example">
            <tm-receipt></tm-receipt>
        </section>
    </tm-examples>
`, document.querySelector('body'));
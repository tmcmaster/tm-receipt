import {html, render} from "./web_modules/lit-html.js";

import './web_modules/@wonkytech/tm-examples.js';

let sites = {
    'src': 'https://github.com/tmcmaster/tm-receipt',
    'pika': 'https://www.pika.dev/npm/@wonkytech/tm-receipt',
    'npm': 'https://www.npmjs.com/package/@wonkytech/tm-receipt',
    'docs': 'https://github.com/tmcmaster/tm-receipt#readme'
};

const sageDetails = `
#Susan Smith
Consultant
- ABN: 11 222 333 444
- IBCLC: L-12345
~blank~
- Medicare Provider Number: 123456A
~blank~
- Health Fund Reference Numbers:
  + Medibank: 123456B
  + Bupa: 123456C
  + NIB: 123456D
  + HCF: 123456E
`;

const data = {
    title: 'Sage.fm',
    subtitle1: 'Sage.fm Pty Ltd',
    subtitle2: 'ABN 11 222 333 444',
    heading: 'Conversation Receipt',
    subHeading: 'Jack Jones',
    details: {
        'Conversation Details': {
            'Date': '2020-03-19',
            'Time': '17.22pm',
            'Conversation Length': '0:13:28secs',
            'Sage Details': sageDetails
        },
        'Payment Details': {
            '10-min minimum rate': 'A$40.00',
            'Every 1 min after': 'A$4.00',
            'TOTAL': 'A$56.00'
        }
    },
    footer: 'Thank you'
};

console.log('DATA', JSON.stringify(data, null, ' '));

render(html`
    <style>
        body {
          padding: 0;
          margin: 0;
        } 
        
        textarea{
            width: 300px;
            height: 300px;
        }
        
        tm-receipt{
            margin-left: 20px;
            width: 500px;

        }

    </style>
    <tm-examples heading="tm-receipt" .sites="${sites}">
        <section title="Receipt">
            <style>
                tm-receipt {
                    --tm-receipt-padding: 20px 30px 20px 30px;
                    
                    --tm-receipt-font-family: sage;
                    --tm-receipt-color: rgb(16,25,64);
                    --tm-receipt-section-heading-color: red;
                    --tm-receipt-section-heading-1-color: purple;
                    
                    --tm-receipt-section-1-key-1-color: blue;
                    --tm-receipt-section-1-value-1-color: red;

                }
            </style>
            <tm-receipt .data="${data}"></tm-receipt>
        </section>
        <section title="JSON Data">
            <textarea id="markdown">${JSON.stringify(data, null, ' ')}</textarea>
        </section>
    </tm-examples>
    
`, document.querySelector('body'));
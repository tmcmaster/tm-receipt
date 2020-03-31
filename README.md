# tm-receipt

This is a template for creating new web component repositories.

## Install Web Component
```bash
npm install @wonkytech/tm-receipt
```

## Import Web Component
```html
<script type="module">
  import '@wonkytech/tm-receipt';
</script>
```

## Example of receipt data
```html
<script type="module">
    const data = {
         "title": "Company",
         "subtitle1": "Company Pty Ltd",
         "subtitle2": "ABN 11 222 333 444",
         "heading": "Conversation Receipt",
         "subHeading": "Jack Jones",
         "details": {
              "Conversation Details": {
                   "Date": "2020-03-19",
                   "Time": "17.22pm",
                   "Conversation Length": "0:13:28secs",
                   "Sage Details": "\n#Susan Smith\nConsultant\n- ABN: 11 222 333 444\n- IBCLC: L-12345\n~blank~\n- Medicare Provider Number: 123456A\n~blank~\n- Health Fund Reference Numbers:\n  + Medibank: 123456B\n  + Bupa: 123456C\n  + NIB: 123456D\n  + HCF: 123456E\n"
              },
              "Payment Details": {
                   "10-min minimum rate": "A$40.00",
                   "Every 1 min after": "A$4.00",
                   "TOTAL": "A$56.00"
              }
         },
         "footer": "Thank you"
    }
</script>
```

- If a value in the above data contains more than 1 line, limited Markdown notation will be observed

## Style the receipt
```html
<style>
    tm-receipt {
        --tm-receipt-padding: 30px 50px 30px 50px;
        --tm-receipt-font-family: sage;
        --tm-receipt-color: rgb(16,25,64);
        --tm-receipt-section-heading-color: red;
        --tm-receipt-section-heading-1-color: black;
        --tm-receipt-section-heading-2-color: red;
        --tm-receipt-section-heading-font-size: 30px;
        --tm-receipt-section-heading-font-face: sage-bold;
        --tm-receipt-section-heading-font-wight: bold;
        --tm-receipt-section-2-value-font-family: sage-bold;
        --tm-receipt-section-2-value-font-weight: bold;
        --tm-receipt-section-2-key-3-font-family: sage-bold;
        --tm-receipt-section-2-key-3-font-weight: bold;
    }
</style>
```

## Add to document
```html
<tm-receipt .data="${data}"></tm-receipt>
```

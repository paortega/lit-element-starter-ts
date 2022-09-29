
import { LitElement, html } from 'lit';
//import { customElement, property } from 'lit/decorators.js';

class Footer extends LitElement {

render() {
    return html`
        <style>
            div {
                background: black;
                color: white;
                padding: 10px;
            }
        </style>
         <div><span>2022 | Movies API. Copyleft</span></div>
`;
}
}
customElements.define('my-footer', Footer)

import { LitElement, html } from 'lit';
import './src/components/GetData.js'

class Header extends LitElement {

render() {
    return html`
        <style>
            div {
                background: black;
                color: white;
                padding: 10px;
            }
        </style>
        <div><h1>SmartUp Xperience</h1></div>
        <get-data></get-data>
`;
}
}
customElements.define('my-header', Header)

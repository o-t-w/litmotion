import {LitElement, html} from 'lit-element';
import {css, injectGlobal} from 'emotion';

const styles = css`
    color: red;
    background-color: purple;
    border: solid orange 10px;
`

injectGlobal`
lrs-button {
    display: block;
}
`

class Button extends LitElement {

    render() {
        return html`<p class=${styles}>hello world!</p>`
    }
}

 customElements.define('lrs-button', Button);
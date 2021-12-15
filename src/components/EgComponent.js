import {LitElement, html} from 'lit';


export class EgComponent extends LitElement {

    static get properties() {
        return {
            pdfFileUrl: { attribute: false },
        }
    }

    constructor() {

        super();

        this.pdfFileUrl;
        this.adobeDCView;
    }

    async configure(adobeDCView) {
        this.adobeDCView = adobeDCView;
    }

    async setDocUrl(docUrl) {
        this.pdfFileUrl = docUrl;
        this.adobeDCView.previewFile({
            content: { location: { url: this.pdfFileUrl } },
            metaData: { fileName: "Bodea Brochure.pdf" }
        });
    }

    render() {
        return html`Doc URL: ${this.pdfFileUrl}`;
    }

}
customElements.define('eg-component', EgComponent);
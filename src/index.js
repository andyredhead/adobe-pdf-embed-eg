import { EgComponent } from './components/EgComponent';

window.onload = async function() {
    console.log("window onload called...");

    if (adobeDcSdkReady) {
        console.log(`window onload (adobe dc) - sdk ready`);

        /*adobeDCView.previewFile({
            content: { location: { url: "https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf" } },
            metaData: { fileName: "Bodea Brochure.pdf" }
        });*/

        let egComponent = document.querySelector('eg-component');
        if (egComponent) {
            await egComponent.configure(adobeDCView);
            await egComponent.setDocUrl("https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf");
        } else {
            console.log(`window onload - EgComponent not found`);
        }

    } else {
        console.log(`window onload (adobe dc) - not ready`);
    }

    console.log("window onload complete.");
}


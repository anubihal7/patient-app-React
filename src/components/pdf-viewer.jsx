import React, {useEffect, useState} from "react";
import PDFViewer from "mgr-pdf-viewer-react";

const PDFViewerComponent = (props) => {
    let [fileType, setFileType] = useState(null)
    let {link} = props

    function get_url_extension(url) {
        return url.split(/[#?]/)[0].split('.').pop().trim();
    }

    useEffect(async () => {
        if (link) {
            let fileType = get_url_extension(link)
            console.log("fileType>>>>",fileType)
            setFileType(fileType)
        }
    }, [link]);

    return link ? (
        <div>
            {fileType === "pdf" ? <PDFViewer
                document={{
                    url: link
                }}
                scale={true}
            /> : <img style={{maxWidth:1080,maxHeight:920}} src={link}/>}
        </div>
    ) : null;
};

export default PDFViewerComponent;

import * as React from 'react';
import Blob from "./Blob";
import GooFilter from "./GooFilter";
import "../../assets/scss/components/global/blobsAnimation";

export default class BlobsAnimation extends React.Component<any, any> {
    render() {
        return(
            <div className="blobs">
                <Blob>1</Blob>
                <Blob>2</Blob>
                <Blob>3</Blob>
                <Blob>4</Blob>
                <GooFilter/>
            </div>
        )
    }
}
import * as React from 'react';

export default class Dim extends React.Component<any, any> {
    protected _callback = () => {
        this.props.callback();
    };

    public render() {
        return (
            <div className="dim" onClick={this._callback}/>
        )
    }
}
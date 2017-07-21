import * as React from 'react';

interface Props {

}

interface State {

}

export default class Blob extends React.Component<Props, State> {
    render() {
        return(
            <div className="blob">
                <span unselectable={true}>
                    {this.props.children}
                </span>
            </div>
        )
    }
}
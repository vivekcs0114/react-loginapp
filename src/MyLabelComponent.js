import React from 'react';

class MyLabelComponent extends React.Component {
    render() {
        return <label className={this.props.isValid ? 'valid' : 'notValid'}>{this.props.label}</label>
    }
}

export default MyLabelComponent;
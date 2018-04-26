import React from 'react';
import LabelComponent from './MyLabelComponent';

class WelcomeComponent extends React.Component {
    
    render() {
        return (
            <div>
                <LabelComponent label="Welcome, Mr. Admin!!"/>
            </div>
        );
    }
}

export default WelcomeComponent;
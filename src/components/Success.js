import React, { Component } from 'react';


// MATERIAL UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';

export class Success extends Component {

    continue = e => {
        e.preventDefault();

        //PROCESS FORM //SEND DATA TO SERVER //EXPRESS? //MongoDB --- Send to model

        this.props.nextStep();
    };
    back = f => {
        f.preventDefault();
        this.props.prevStep();
    };
    render() {

        return (

            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success" />
                    <h1>Than you for submitting. </h1>

                    <p>Email will be sent...blah blah</p>



                </ React.Fragment>
            </MuiThemeProvider >
        )
    }
}


export default Success

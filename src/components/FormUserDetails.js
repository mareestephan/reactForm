import React, { Component } from 'react';


// MATERIAL UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="WhatsUp Doc" />

                    <TextField
                        hintText=" Enter your First Name"
                        floatingLabelText="First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}


                    />

                    <RaisedButton />




                </ React.Fragment>
            </MuiThemeProvider >
        )
    }
}

export default FormUserDetails

import React, { Component } from 'react';


// MATERIAL UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    back = f => {
        f.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="WhatsUp Doc" />

                    <TextField
                        hintText=" Enter your Date of Birth"
                        floatingLabelText="Date of Birth"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                    <br />
                    <TextField
                        hintText=" Enter your Mobile Number"
                        floatingLabelText="Mobile Number"
                        onChange={handleChange('mobileNmbr')}
                        defaultValue={values.mobileNmbr}
                    />
                    <br />
                    <TextField
                        hintText="Enter your City of Residence"
                        floatingLabelText="City of Residence"
                        onChange={handleChange('city')}
                        defaultValue={values.city}
                    />
                    <br />
                    <RaisedButton
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />

                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                </ React.Fragment>
            </MuiThemeProvider >
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}
export default FormPersonalDetails

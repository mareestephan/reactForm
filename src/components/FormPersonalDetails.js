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
                    <AppBar title="Enter Personal Details" />

                    <TextField
                        hintText=" Enter your Date of Birth"
                        floatingLabelText="Date of Birth"
                        onChange={handleChange('dateOfBirth')}
                        defaultValue={values.dateOfBirth}
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
                    <TextField
                        hintText="Enter your Occupation"
                        floatingLabelText="Occupation"
                        onChange={handleChange('occupation')}
                        defaultValue={values.occupation}
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

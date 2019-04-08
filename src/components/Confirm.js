import React, { Component } from 'react';


// MATERIAL UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {

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
        const { values: { firstName, lastName, email, mobileNmbr, city, occupation, dateOfBirth } } = this.props;
        return (

            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm User Data" />

                    <List>
                        <ListItem
                            primaryText='First Name'
                            secondaryText={firstName}
                        />

                    </List>
                    <List>
                        <ListItem
                            primaryText='Last Name'
                            secondaryText={lastName}
                        />

                    </List>
                    <List>
                        <ListItem
                            primaryText='Email'
                            secondaryText={email}
                        />

                    </List>
                    <List>
                        <ListItem
                            primaryText='Mobile Number'
                            secondaryText={mobileNmbr}
                        />

                    </List>
                    <List>
                        <ListItem
                            primaryText='City'
                            secondaryText={city}
                        />

                    </List>
                    <List>
                        <ListItem
                            primaryText='Occupation'
                            secondaryText={occupation}
                        />

                    </List>
                    <List>
                        <ListItem
                            primaryText='Date of birth'
                            secondaryText={dateOfBirth}
                        />

                    </List>

                    <br />
                    <RaisedButton
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />

                    <RaisedButton
                        label="Confirm"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue} />




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
export default Confirm

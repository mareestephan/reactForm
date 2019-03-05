import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        dateOfBirth: '',
        mobileNmbr: '',
        city: '',
        occupation: ''

    }

    //Go  to NEXT step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }
    //Go to PREVIOUS step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Handle fields change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value })
    }


    render() {

        const { step } = this.state;
        const { firstName, lastName, email, mobileNmbr, city, occupation, dateOfBirth } = this.state;
        const values = { firstName, lastName, email, mobileNmbr, city, occupation, dateOfBirth };

        switch (step) {
            case 1:
                return (
                    <FormUserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )

            case 2:
                return (

                    <FormPersonalDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />

                )
            case 3:
                return <h1>Appels step 3</h1>
            case 4:
                return <h1>Pere step 4</h1>
        }
    }

}

export default UserForm;

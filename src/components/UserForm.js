import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

export class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      fullName: "",
      regNum: "",
      department: "",
      email: "",
      whatsappNum: "",
      year: "",
      domain: {
        RD: false,
        RAS: false,
        CES: false,
        IAS: false,
        PES: false,
        WIE: false,
        WAD: false,
        SM: false,
        MC: false,
        CLP: false,
      },
      skills: "",
      workEx: "",
    };
  }

  // state = {
  //   step: 1,
  //   fullName: "",
  //   regNum: "",
  //   department: "",
  //   email: "",
  //   whatsappNum: "",
  //   year: "",
  //   domain: "",
  //   skills: "",
  //   workEx: "",
  // };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
    console.log(this.state);
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  handleCheck = (event) => {
    this.setState({
      domain: {
        ...this.state.domain,
        [event.target.name]: event.target.checked,
      },
    });
    console.log(event.target.name + " " + event.target.checked);
    // this.setState((prevState, props) => {
    //   prevState.domain[event.target.value] = event.target.checked;
    //   return prevState;
    // });
  };

  render() {
    const { step } = this.state;
    const {
      fullName,
      regNum,
      department,
      email,
      whatsappNum,
      year,
      domain,
      skills,
      workEx,
    } = this.state;
    const values = {
      fullName,
      regNum,
      department,
      email,
      whatsappNum,
      year,
      domain,
      skills,
      workEx,
    };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleCheck={this.handleCheck}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success />;
      default:
    }
  }
}

export default UserForm;

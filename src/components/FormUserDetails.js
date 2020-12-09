import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { createMuiTheme } from "@material-ui/core/styles";
export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const theme = createMuiTheme({
      palette: {
        primary: { main: "#212121" },
      },
    });
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <>
          <Dialog open fullWidth maxWidth="md">
            <AppBar title="Enter User Details" />
            <TextField
              placeholder="Enter Your Full Name"
              label="Full Name"
              onChange={handleChange("fullName")}
              defaultValue={values.fullName}
              margin="normal"
              fullWidth
              color="grey"
            />

            <br />
            <TextField
              placeholder="Enter Your Registration Number"
              label="Registration Number"
              onChange={handleChange("regNum")}
              defaultValue={values.regNum}
              margin="normal"
              fullWidth
            />

            <br />
            <TextField
              placeholder="Enter Your Department"
              label="Department"
              onChange={handleChange("department")}
              defaultValue={values.department}
              margin="normal"
              fullWidth
            />

            <br />

            <TextField
              placeholder="Enter Your Email"
              label="Email"
              onChange={handleChange("email")}
              defaultValue={values.email}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Whatsapp Number"
              label="Whatsapp Number"
              onChange={handleChange("whatsappNum")}
              defaultValue={values.whatsappNum}
              margin="normal"
              fullWidth
            />
            <br />

            <Button color="primary" variant="contained" onClick={this.continue}>
              Continue
            </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;

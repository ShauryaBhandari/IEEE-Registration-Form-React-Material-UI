import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { createMuiTheme } from "@material-ui/core/styles";
import { Snackbar } from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';
export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    if(this.props.values.fullName.trim()===""){
      this.props.handleError()
      return
    }
    if(this.props.values.department.trim()===""){
      this.props.handleError()
      return
    }
    if(this.props.values.email.trim()===""){
      this.props.handleError()
      return
    }
    if(this.props.values.whatsappNum.trim()===""){
      this.props.handleError()
      return
    }
    if(this.props.values.regNum.trim()===""){
      this.props.handleError()
      return
    }
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
          <Snackbar open={values.error} autoHideDuration={2000} onClose={()=>{this.props.handleError()}}>
            <MuiAlert elevation={6} variant="filled" severity="error" style={{marginBottom:30}}>
              Fill All The Fields
            </MuiAlert>
          </Snackbar>
          <Dialog open fullWidth maxWidth="md">
            <AppBar title="Enter User Details" />
            <div className='text-center'>
            <a href='https://ieeesrmist.in' target='_blank' style={{alignContent:'center'}} >
              <img src={require('./Asset 2.png')} style={{maxWidth:75, marginBottom:10}} />
            </a>
            </div>
            <h1 style={{fontFamily:'Roboto', textAlign:'center'}} >IEEE SRM Talent Acquisition 2021</h1>
            <TextField
              placeholder="Enter Your Full Name"
              label="Full Name *"
              onChange={handleChange("fullName")}
              defaultValue={values.fullName}
              margin="normal"
              fullWidth
              color="secondary"
            />

            <br />
            <TextField
              placeholder="Enter Your Registration Number"
              label="Registration Number *"
              onChange={handleChange("regNum")}
              defaultValue={values.regNum}
              margin="normal"
              fullWidth
            />

            <br />
            <TextField
              placeholder="Enter Your Department"
              label="Department *"
              onChange={handleChange("department")}
              defaultValue={values.department}
              margin="normal"
              fullWidth
            />

            <br />

            <TextField
              placeholder="Enter Your Email"
              label="Email *"
              onChange={handleChange("email")}
              defaultValue={values.email}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Whatsapp Number"
              label="Whatsapp Number *"
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

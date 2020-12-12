import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { createMuiTheme } from "@material-ui/core/styles";
import { FormControl, InputLabel, MenuItem, Select, Snackbar } from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';
export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    var st='Enter Valid'
    function ValidateEmail(mail) {
      if (
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          mail
        )
      ) {
        return false;
      }
      return true;
    }
    if(this.props.values.fullName.trim()===""){
      st+=' Name,'
    }
    if(this.props.values.department.trim()===""){
      st+=' Department,'
    }
    if(this.props.values.email.trim()==="" || ValidateEmail(this.props.values.email.trim())){
      st+=' Email,'
    }
    if(this.props.values.whatsappNum.trim()==="" || this.props.values.whatsappNum.trim().length!==10){
      st+=' Phone No.,'
    }
    if(this.props.values.regNum.trim()==="" || this.props.values.regNum.trim().length!==15){
      st+=' Reg No.,'
    }
    if(st!=='Enter Valid'){
      this.props.handleErrorValue(st.substring(0,st.length-1))
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
            <MuiAlert elevation={6} variant="filled" severity="error">
              {values.errorValue}
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
            {/*<TextField
              placeholder="Enter Your Department"
              label="Department *"
              onChange={handleChange("department")}
              defaultValue={values.department}
              margin="normal"
              fullWidth
            />*/}

            <FormControl>	            
              <InputLabel id="demo-simple-select-label">	        
                Department	        
              </InputLabel>	             
              <Select	              
                onChange={handleChange("department")}
                defaultValue={values.department}	   
                margin="normal"	                
                fullWidth	                              >	              
                <MenuItem value={"Department of Aerospace Engineering"}>Department of Aerospace Engineering</MenuItem>	                
                <MenuItem value={"Department of Automobile Engineering"}>Department of Automobile Engineering</MenuItem>	                
                <MenuItem value={"Department of Biomedical Engineering"}>Department of Biomedical Engineering</MenuItem>	                
                <MenuItem value={"Department of Biotechnology"}>Department of Biotechnology</MenuItem>	                
                <MenuItem value={"Department of Chemical Engineering"}>Department of Chemical Engineering</MenuItem>	                
                <MenuItem value={"Department of Civil Engineering"}>Department of Civil Engineering</MenuItem>	                
                <MenuItem value={"Department of Computer Science Engineering"}>Department of Computer Science</MenuItem>	                
                <MenuItem value={"Department of Electronics & Communication"}>Department of Electronics & Communication</MenuItem>	                
                <MenuItem value={"Department of Electrical and Electronics"}>Department of Electrical and Electronics</MenuItem>	                
                <MenuItem value={"Department of Genetic Engineering"}>Department of Genetic Engineering</MenuItem>	                
                <MenuItem value={"Department of Mechanical Engineering"}>Department of Mechanical Engineering</MenuItem>	                
                <MenuItem value={"Department of Mechatronics"}>Department of Mechatronics</MenuItem>	                
              </Select>	              
            </FormControl>
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
              type="number"
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

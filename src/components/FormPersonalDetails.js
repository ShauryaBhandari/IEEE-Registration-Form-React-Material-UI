import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { createMuiTheme } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Snackbar } from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';

export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    if(this.props.values.year===""){
      this.props.handleError()
      return
    }
    var flag = true
    for(const x in this.props.values.domain){
      if(this.props.values.domain[x]===true){
        flag =false
      }
    }

    if(flag){
      this.props.handleError()
      return
    }

    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const theme = createMuiTheme({
      palette: {
        primary: { main: "#212121" },
      },
    });

    const { values, handleChange, handleCheck } = this.props;
    const { RD, RAS, CES, IAS, PES, WIE, WAD, SM, MC, CLP } = values.domain;

    return (
      <MuiThemeProvider theme={theme}>
        <>
          <Snackbar open={values.error} autoHideDuration={2000} onClose={()=>{this.props.handleError()}}>
            <MuiAlert elevation={6} variant="filled" severity="error" style={{marginBottom:30}}>
              Fill All The Fields
            </MuiAlert>
          </Snackbar>
          <Dialog open fullWidth maxWidth="md">
            <FormControl required>
              <InputLabel id="demo-simple-select-label">Year</InputLabel>
              <Select
                placeholder="Enter Your Year"
                label="Year"
                onChange={handleChange("year")}
                defaultValue={values.year}
                margin="normal"
                fullWidth
              >
                <MenuItem value={1}>First</MenuItem>
                <MenuItem value={2}>Second</MenuItem>
              </Select>
            </FormControl>
            <br />
            <br />
            <FormControl required component="fieldset">
              <FormLabel component="legend">Pick at least 1</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox checked={RD} onChange={handleCheck} name="RD" />
                  }
                  label="Research and Development 🚀
                  "
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={RAS} onChange={handleCheck} name="RAS" />
                  }
                  label="Robotics and Automation Society 👾"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={CES} onChange={handleCheck} name="CES" />
                  }
                  label="Consumer Electronics Society ⚡
                  "
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={IAS} onChange={handleCheck} name="IAS" />
                  }
                  label="Industrial Applications Society 🏭

                  "
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={PES} onChange={handleCheck} name="PES" />
                  }
                  label="Power Electronics Society 🔌

                  "
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={WIE} onChange={handleCheck} name="WIE" />
                  }
                  label="Women in Engineering 👩‍🎓

                  "
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={WAD} onChange={handleCheck} name="WAD" />
                  }
                  label="Web and App Development 👨‍💻

                  "
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={SM} onChange={handleCheck} name="SM" />
                  }
                  label="Sponsorship and Marketing 💰

                  "
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={MC} onChange={handleCheck} name="MC" />
                  }
                  label="Media and Content 📝

                  "
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={CLP} onChange={handleCheck} name="CLP" />
                  }
                  label="Corporate, Logistics and Publicity 📢
                  "
                />
              </FormGroup>
            <p style={{fontFamily:'Roboto', textAlign:'center', paddingTop:15, marginBottom:-30}}><a href='https://www.ieeesrmist.in/domains' target='_blank' className='text-dark'>About Domains</a></p>

            </FormControl>
            <br />
            <TextField
              placeholder="Previous Work Experience (Linkedin ID/Portfolio/Github/Dribble/Behance etc.)"
              label="Previous Work Experience"
              onChange={handleChange("workEx")}
              defaultValue={values.workEx}
              margin="normal"
              fullWidth
              color="secondary"
            />
            <br />
            <Button color="secondary" variant="contained" onClick={this.back}>
              Back
            </Button>

            <Button color="primary" variant="contained" onClick={this.continue}>
              Continue
            </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;

import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import Button from "@material-ui/core/Button";

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {
        fullName,
        regNum,
        department,
        email,
        whatsappNum,
        year,
        skills,
      },
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText primary="Full Name" secondary={fullName} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Registration Number"
                  secondary={regNum}
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="Department" secondary={department} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Whatsapp Number"
                  secondary={whatsappNum}
                />
              </ListItem>

              <ListItem>
                <ListItemText primary="Year" secondary={year} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Skill Rating" secondary={skills} />
              </ListItem>
            </List>
            <br />

            <Button color="secondary" variant="contained" onClick={this.back}>
              Back
            </Button>

            <Button color="primary" variant="contained" onClick={this.continue}>
              Confirm & Continue
            </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;

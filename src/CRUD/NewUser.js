import * as React from "react";
import { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { Button, Grid, styled, Stack } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import axios from "axios";

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function NewUser(props) {
  const [data, setdata] = useState({
    fname: "",
    lname: "",
    phone: "",
    clg: "",
  });
  // ==============[Dailog]=====================================
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // ===================================================

  const handleChange = (e) => {
    e.persist();
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/api/tutorials", data).then((e) => {
      console.log(e.data);
      props.mydata();
    });
    setdata((e.target.value = ""));
    handleClose();
  };

  return (
    <div>
      <Stack direction="row" alignItems="center" justifyContent="end" m={5}>
        <Button variant="contained" onClick={handleClickOpen}>
          New User
        </Button>
      </Stack>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        fullWidth
        maxWidth="sm"
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>User Form</DialogTitle>
        <DialogContent>
          <div>
            <ValidatorForm
              onSubmit={handleSubmit}
              onError={() => null}
              autocomplete="off"
            >
              <Grid container spacing={8}>
                <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mt: 2 }}>
                  <TextField
                    type="text"
                    name="fname"
                    id="standard-basic"
                    value={data.fname || ""}
                    onChange={handleChange}
                    errorMessages={["this field is required"]}
                    label="First Name "
                    validators={["required"]}
                  />
                  <TextField
                    type="text"
                    name="lname"
                    id="standard-basic"
                    value={data.lname || ""}
                    onChange={handleChange}
                    errorMessages={["this field is required"]}
                    label="Last Name "
                    validators={["required"]}
                  />

                  <TextField
                    type="number"
                    name="phone"
                    id="standard-basic"
                    value={data.phone || ""}
                    onChange={handleChange}
                    errorMessages={["this field is required"]}
                    label="Phone no"
                    validators={["required"]}
                  />
                  <TextField
                    type="text"
                    name="clg"
                    id="standard-basic"
                    value={data.clg || ""}
                    onChange={handleChange}
                    errorMessages={["this field is required"]}
                    label="Collage"
                    validators={["required"]}
                  />
                </Grid>
              </Grid>

              <div className="container">
                <div className="row">
                  <div className="col-sm-6 mb-2">
                    <Button
                      color="error"
                      variant="contained"
                      type="submit"
                      fullWidth
                      onClick={() => {
                        setdata("");
                      }}
                    >
                      <DeleteIcon />
                      <span> Clear</span>
                    </Button>
                  </div>
                  <div className="col-sm-6 mb-2">
                    <Button
                      color="primary"
                      variant="contained"
                      type="submit"
                      fullWidth
                    >
                      <SendIcon />
                      <span>Add Item</span>
                    </Button>
                  </div>
                </div>
              </div>
            </ValidatorForm>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

import { Button, Grid, styled } from "@mui/material";
import { useEffect, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import axios from "axios";

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));

const EditUser = (props) => {
  // console.log({ ...props.editrow.row });
  const [data, setdata] = useState({
    fname: "",
    lname: "",
    phone: "",
    clg: "",
  });

  // ==========Edit=================
  useEffect(() => {
    setdata({ ...props.editrow.row });
  }, [props.editrow.row]);
  // ==========Edit=================

  const handleChange = (e) => {
    e.persist();
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  // ==============(PUT API)=============================================================================

  const handleSubmit = (e, _id) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8080/api/tutorials/${data._id}`, data)
      .then((r) => {
        props.mydata();
        props.handleClose();
      });

    setdata((e.target.value = ""));
  };

  return (
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
                color="primary"
                variant="contained"
                type="submit"
                fullWidth
              >
                <SendIcon />
                <span> Update Item</span>
              </Button>
            </div>
          </div>
        </div>
      </ValidatorForm>
    </div>
  );
};

export default EditUser;

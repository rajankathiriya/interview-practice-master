import React, { useEffect, useRef, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import axios from "axios";
import Swal from "sweetalert2";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { GridActionsCellItem } from "@mui/x-data-grid-pro";
import { Card, DialogTitle, Slide } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import NewUser from "./NewUser";
import EditUser from "./EditUser";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ShowData() {
  // ==============[Dailog]=====================================
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  // =============[table]======================================

  const [rows, setRows] = useState([]);
  const columns = [
    { field: "fname", headerName: "FirstName", width: 180 },
    { field: "lname", headerName: "LastName", width: 180 },
    { field: "phone", headerName: "Phone", width: 250 },
    { field: "clg", headerName: "Collage", width: 200 },

    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: (data) => {
        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            onClick={() => handleEditClick(data)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => handleDeleteClick(data)}
            color="inherit"
          />,
        ];
      },
    },
  ];
  //===================[edit]========================================
  const [editRow, seteditRew] = useState({});

  const handleEditClick = (data) => {
    seteditRew(data);
    setOpen(true);
  };

  //===================[delete]========================================

  const handleDeleteClick = (data) => {
    console.log(data.row._id);
    Swal.fire({
      title: "Do you want to Delete?",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:8080/api/tutorials/${data.row._id}`)
          .then((r) => {
            mydata();
          });
      }
    });
  };

  //===================[show]========================================

  let mydata = () => {
    axios.get("http://localhost:8080/api/tutorials").then((r) => {
      //id ni error na ave te mate
      let d = r.data.map((val, index) => {
        val.id = index + 1;
        return val;
      });
      setRows(d);
    });
  };

  useEffect(() => {
    mydata();
  }, []);

  return (
    <>
      {/* ===================[new user]======================================== */}

      <NewUser mydata={() => mydata()} />

      {/* ===================[table show]======================================== */}

      <div style={{ margin: "auto", width: "80%", marginTop: "50px" }}>
        <Card
          style={{ height: 500, width: "100%", backgroundColor: "#ffffff" }}
          sx={{ boxShadow: 3, borderRadius: "16px" }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[10]}
            checkboxSelection
          />
        </Card>
      </div>

      {/* ===================[edit dilog]======================================== */}

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        fullWidth
        maxWidth="sm"
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>User Edit</DialogTitle>
        <DialogContent>
          <EditUser
            mydata={() => mydata()}
            handleClose={handleClose}
            editrow={editRow}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}

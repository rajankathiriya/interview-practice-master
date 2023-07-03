import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { GridActionsCellItem } from "@mui/x-data-grid-pro";
import { Card } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS

export default function Homepage() {
  const [rows, setRows] = useState([]);
  const columns = [
    { field: "firstName", headerName: "firstName", width: 180 },
    { field: "lastName", headerName: "lastName", width: 180 },
    { field: "email", headerName: "email", width: 250 },
    { field: "title", headerName: "title", width: 200 },

    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: (row) => {
        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            // onClick={handleEditClick(columns.id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            // onClick={(id) => handleDeleteClick(row)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  useEffect(() => {
    let Data = localStorage.getItem("allUser");
    let x = JSON.parse(Data);

    axios
      .get("http://localhost:4000/accounts", {
        headers: {
          Authorization: "Bearer " + x?.jwtToken,
        },
      })
      .then((e) => {
        setRows(e.data);
      });
  }, []);

  const mynav = useNavigate();
  let mylogout = () => {
    localStorage.removeItem("allUser");
    mynav("/");
  };
  return (
    <div>
      <div style={{ margin: "auto", width: "80%", marginTop: "50px" }}>
        <button className="btn btn-danger mb-3 " onClick={mylogout}>
          log-out
        </button>
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
    </div>
  );
}

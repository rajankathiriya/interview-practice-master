import React, { useState } from "react";
import CRUDform2 from "./CRUDform2";

const CRUDform = () => {
  const [item, setitem] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    city: "",
    univ: "",
  });
  const [data, setdata] = useState([]);
  const [add, setadd] = useState(-1);
  const [search, setsearch] = useState("");

  // ========================Search=======================

  const mySearch = (e) => {
    setsearch(e.target.value);
  };

  // ========================Delete=======================

  const Mydelete = (index) => {
    let dele = [...data];
    dele.splice(index, 1);
    setdata(dele);
  };

  // ========================Data Edit=======================

  const Myedit = (index) => {
    let Edit = data[index];
    setitem(Edit);
    setadd(index);
  };

  // ========================Handler=======================
  const myHandler = (e) => {
    setitem({ ...item, [e.target.name]: e.target.value });
  };
  // ========================Submit=======================
  const Mysubmit = (s) => {
    s.preventDefault();
    //niche add karvamate

    if (add >= 0) {
      let r = [...data];
      r[add].fname = item.fname;
      r[add].lname = item.lname;
      r[add].email = item.email;
      r[add].mobile = item.mobile;
      r[add].city = item.city;
      r[add].univ = item.univ;
      setdata(r);
    } else {
      let maindata = [...data];
      maindata.push(item);
      setdata(maindata);
    }
    setadd(-1);
  };
  return (
    <div>
      <form
        onSubmit={Mysubmit}
        className="w-50 mx-auto p-4 rounded-3"
        style={{ backgroundColor: "#e9f2f78f" }}
      >
        <label>First name: </label>
        <input
          type="text"
          name="fname"
          onChange={myHandler}
          className="form-control bg-white"
          value={item.fname}
          placeholder="Your first name"
        />
        <br />

        <label>Last name: </label>
        <input
          type="text"
          name="lname"
          onChange={myHandler}
          className="form-control bg-white"
          value={item.lname}
          placeholder="Your last name"
        />
        <br />

        <label>Email: </label>
        <input
          type="email"
          name="email"
          onChange={myHandler}
          className="form-control bg-white"
          value={item.email}
          placeholder="Your Email"
        />
        <br />

        <label>Mobile No: </label>
        <input
          type="text"
          name="mobile"
          onChange={myHandler}
          className="form-control bg-white"
          value={item.mobile}
          placeholder="Your Number"
        />
        <br />

        <label>City: </label>
        <input
          type="text"
          name="city"
          onChange={myHandler}
          className="form-control bg-white"
          value={item.city}
          placeholder="Your city"
        />
        <br />

        <label>University: </label>
        <input
          type="text"
          name="univ"
          onChange={myHandler}
          className="form-control bg-white"
          value={item.univ}
          placeholder="Your University"
        />
        <br />

        <input
          type="submit"
          value="Save"
          className="form-control btn btn-danger"
        />
        <br />
        <br />

        <input
          type="text"
          onChange={mySearch}
          value={search}
          className="form-control bg-white"
          placeholder="Search Here...."
        />
      </form>
      <br />

      <CRUDform2 mydata={data} remove={Mydelete} edit={Myedit} find={search} />
    </div>
  );
};

export default CRUDform;

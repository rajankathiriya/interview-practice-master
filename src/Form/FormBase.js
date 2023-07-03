import React, { useState } from "react";

export default function FormBase() {
  const [data, setdata] = useState({
    fname: "",
    lname: "",
    sname: "",
  });

  let mychange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  let mysub = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={mysub}>
        <input type="text" onChange={mychange} name="fname" />
        <br />
        <input type="text" onChange={mychange} name="lname" />
        <br />
        <input type="text" onChange={mychange} name="sname" />
        <br />
        <input type="submit" className="btn" value="submit" />
        <br />
      </form>
    </div>
  );
}

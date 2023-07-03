import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Axios() {
  const [val, setval] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((x) => {
      setval(x.data);
    });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>title</td>
            <td>body</td>
          </tr>
        </thead>
        <tbody>
          {val.map((val) => {
            return (
              <tr>
                <td>{val.id}</td>
                <td>{val.title}</td>
                <td>{val.body}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

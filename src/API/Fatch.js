import React from "react";
import { useState, useEffect } from "react";

const Fatch = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((r) => r.json())
      .then((r) => {
        setData(r);
      });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <th>id</th>
          <th>title</th>
          <th>body</th>
        </thead>
        <tbody>
          {Data.map((val) => {
            return (
              <>
                <tr>
                  <td>{val.id}</td>
                  <td>{val.title}</td>
                  <td>{val.body}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Fatch;

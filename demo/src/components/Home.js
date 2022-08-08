import React, { useState, useEffect } from "react";
import { getAllProducts, deleteProduct } from "../config/Myservice";
export default function Home() {
  const [proData, setProData] = useState([]);
  useEffect(() => {
    getAllProducts().then((res) => {
      setProData(res.data);
      console.log(res.data);
    });
  }, []);
  const delProduct = (id) => {
    if (window.confirm("Do u want to delete ?")) {
      deleteProduct(id).then((res) => {
        alert("Product Deleted");
        getAllProducts().then((res) => {
          setProData(res.data);
          console.log(res.data);
        });
      });
    }
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th> S.no</th>
            <th> Pname</th>
            <th> Price</th>
            <th> Quantity</th>
            <th> Action</th> <th> Action</th>
          </tr>
        </thead>
        <tbody>
          {proData.map((pro, ind) => (
            <tr key={pro.id}>
              <td>{ind + 1}</td>
              <td>{pro.pname}</td>
              <td>{pro.price}</td>
              <td>{pro.quantity}</td>
              <td>
                <button onClick={() => delProduct(pro.id)}> Delete</button>
              </td>
              <td>
                <button> update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

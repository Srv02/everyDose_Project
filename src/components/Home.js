import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Table, Card, CardBody } from "reactstrap";

const Home = (props) => {
  const data = props.data;
  let navigate = useNavigate();
  const editButtonHandler = () => {
    let path = `/lists`;
    navigate(path);
  };
  return (
    <div>
      <h2 className="App-header mb-3">Inventory List</h2>
      <div className="d-flex justify-content-center">
        <Card className="w-50">
          <CardBody>
            <Table striped className="">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Item Name</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.qty}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <button className="btn btn-primary" onClick={editButtonHandler}>
              Edit List
            </button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
export { Home };

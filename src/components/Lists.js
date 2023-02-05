import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import classes from "./Lists.module.css";
import up from "../images/chevron_up_small.svg";
import down from "../images/chevron_down_small.svg";
import btn from "../images/glyph_x.svg";

const Lists = (props) => {
  const { data, setData } = props;
  const removeItemHandler = (id) => {
    const newData = data.filter((item, index) => index !== id);
    setData(newData);
  };
  const removeAllItemHandler = () => {
    setData([]);
  };
  const addItemHandler = (event) => {
    event.preventDefault();
    const newItem_Name = event.target.newItem.value;
    const qty = event.target.newItem_Qty.value;
    const newItem = { name: newItem_Name, qty: qty };
    // if new item is already present in the Inventory then we have to increase the Qty of that item
    // data.forEach((item, index) => {
    //   if (item.name.includes(newItem_Name)) {
    //   }
    // });

    setData((prevData) => [...prevData, newItem]);
  };
  const increaseQtyHandler = (index) => {
    data[index].qty++;
    setData((prevData) => [...prevData]);
  };
  const deccreaseQtyHandler = (index) => {
    if (data[index].qty >= 2) {
      data[index].qty--;
      setData((prevData) => [...prevData]);
    } else {
      alert("Quantity shouldn't be less than 1");
    }
  };
  return (
    <div>
      <h2 className="App-header">Edit List</h2>
      <div className="d-flex justify-content-center">
        <Card className="w-50">
          <CardHeader>hello</CardHeader>
          <CardBody>
            <div>
              <form onSubmit={addItemHandler}>
                <label htmlFor="newItem">Item Name*</label>
                <input type="text" id="newItem" />
                <label htmlFor="newItem_Qty">Quantity*</label>
                <input type="number" min={1} id="newItem_Qty" />
                <button type="submit">Add</button>
              </form>
            </div>
            <span>To get started, add 1 or more items</span>
            <div>
              <h6>Inventory List</h6>
              <ul>
                {data.map((item, index) => (
                  <div className={classes.inventoryList} key={index}>
                    <div>{item.name}</div>
                    <div>
                      Quantity: {item.qty}
                      <img
                        src={up}
                        alt="up"
                        onClick={() => increaseQtyHandler(index)}
                      />
                      <img
                        src={down}
                        alt="down"
                        onClick={() => deccreaseQtyHandler(index)}
                      />
                    </div>
                    <button
                      className={classes.removeBtn}
                      onClick={() => removeItemHandler(index)}
                    >
                      X {/* <img src={btn} alt="remove_button"></img> */}
                    </button>
                  </div>
                ))}
              </ul>
            </div>
            <button onClick={removeAllItemHandler}>Clear All</button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export { Lists };

import React from "react";
import { Card, CardBody, Table } from "reactstrap";
import classes from "./Lists.module.css";
import { ReactComponent as Increment } from "../images/chevron_up_small.svg";
import { ReactComponent as Decrement } from "../images/chevron_down_small.svg";
import { ReactComponent as Btn } from "../images/glyph_x.svg";

const Lists = (props) => {
  const { data, setData } = props;
  const removeItemHandler = (itemName) => {
    setData((prevData) => prevData.filter((item) => item.name !== itemName));
  };

  const removeAllItemHandler = () => {
    setData([]);
  };

  const addItemHandler = (event) => {
    event.preventDefault();
    const newItemName = event.target.newItem.value?.trim();
    const qty = Number(event.target.newItemQty.value);
    const doesItemExist =
      data?.findIndex(
        (item) => item.name?.toLowerCase() === newItemName.toLowerCase()
      ) !== -1;
    if (doesItemExist) {
      const prevData = [...data];
      const modifiedData = prevData.map((item) => {
        if (item.name.toLowerCase() === newItemName.toLowerCase())
          item.qty = item.qty + qty;
        return item;
      });
      setData(modifiedData);
    } else {
      const newItem = { name: newItemName, qty: qty };
      setData((prevData) => [...prevData, newItem]);
    }
    document.getElementsById("form")?.reset();
  };
  const increaseQtyHandler = (itemName) => {
    setData((prevData) =>
      prevData.map((item) => {
        if (item.name === itemName)
          return {
            ...item,
            qty: item.qty + 1,
          };
        return item;
      })
    );
  };
  const decreaseQtyHandler = (itemName) => {
    setData((prevData) =>
      prevData.map((item) => {
        if (item.name === itemName)
          return {
            ...item,
            qty: item.qty - 1,
          };
        return item;
      })
    );
  };
  return (
    <div>
      <h2 className="App-header">Edit List</h2>
      <div className="d-flex justify-content-center">
        <Card className={classes.card}>
          <CardBody>
            <div>
              <form onSubmit={addItemHandler} id="form">
                <div className={classes.formContainer}>
                  <div className={classes.itemSection}>
                    <label htmlFor="newItem" className={classes.label}>
                      Item Name*
                    </label>
                    <input
                      type="text"
                      id="newItem"
                      className={classes.itemInput}
                    />
                  </div>
                  <div className={classes.quantitySection}>
                    <label htmlFor="newItemQty" className={classes.label}>
                      Quantity*
                    </label>
                    <div className="d-flex">
                      <input
                        type="number"
                        min={1}
                        id="newItemQty"
                        className={classes.quantityInput}
                      />
                      <button type="submit" className="btn btn-primary">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className={classes.getStarted}>
              To get started, add 1 or more items
            </div>
            <div>
              <h6 className={classes.inventoryHeader}>Inventory List</h6>

              <Table className="">
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>
                        <div className={classes.quantityContainer}>
                          Quantity: {item.qty}
                          <div className={classes.ctas}>
                            <Increment
                              alt="up"
                              className={classes.ctaBtn}
                              onClick={() => increaseQtyHandler(item.name)}
                            />
                            <Decrement
                              alt="down"
                              onClick={() => decreaseQtyHandler(item.name)}
                              className={`${classes.ctaBtn} ${
                                item.qty === 1 ? classes.btnDisabled : ""
                              }`}
                            />
                          </div>
                        </div>
                      </td>
                      <td>
                        <Btn
                          className={classes.removeBtn}
                          onClick={() => removeItemHandler(item.name)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            {
              <button
                disabled={!data.length}
                onClick={removeAllItemHandler}
                className={`btn btn-light ${classes.clearAll}`}
              >
                Clear All
              </button>
            }
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export { Lists };

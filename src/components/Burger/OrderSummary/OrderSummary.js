import React from "react";
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul style={{ listStyleType: "none" }}>{ingredientsSummary}</ul>
      <p style={{ textTransform: "uppercase", color: "red" }}> <strong>
        total: {props.price.toFixed(2)}$
        </strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button btnType="Success" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="Danger" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </React.Fragment>
  );
};
export default orderSummary;
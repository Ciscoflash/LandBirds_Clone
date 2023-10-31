import React, { useState } from "react";
import OrderAnnotTrans from "../components/OrderAnnotTrans";

const OrderTranslation = () => {
  return (
    <div>
      <OrderAnnotTrans serviceName={"Translation"} verb={"Translate"} />
    </div>
  );
};

export default OrderTranslation;

import React, { useState } from "react";

import OrderAnnotTrans from "../components/OrderAnnotTrans";

const OrderTranscription = () => {
  return (
    <div>
      <OrderAnnotTrans serviceName={"Transcription"} verb={"Transcribe"} />
    </div>
  );
};

export default OrderTranscription;

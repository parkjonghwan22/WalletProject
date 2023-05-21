import { Icon } from "@iconify/react";
import { Formlayout } from "./styled/Form.styled";
import { Input } from "../../common/input/Input";
import { accounts } from "../../types/stateType";
import React, { FormEvent, useState } from "react";
import axios from "axios";
import { type } from "os";

export const Form = ({ accountState }: { accountState: accounts }) => {
  // console.log(accountState);

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const request = {
      sender: accountState.account,
      received: e.currentTarget.received.value,
      amount: e.currentTarget.amount.value,
    };

    console.log(e.currentTarget.received.value);
    console.log(e.currentTarget.amount.value);

    // console.log(request);

    const response = await axios.post("http://localhost:3001/transaction", {
      ...request,
    });

    console.log(response);

    alert("전송되었습니다");
  };

  return (
    <>
      <Formlayout>
        <form onSubmit={submitHandler}>
          <Input placeholder="text1" color="color1" name="received" />
          <Input placeholder="text2" color="color1" name="amount" />
          <button type="submit">
            <Icon
              icon="solar:square-transfer-vertical-bold"
              color="#e6a15c"
              rotate={1}
              className="send"
            />
          </button>
        </form>
      </Formlayout>
    </>
  );
};

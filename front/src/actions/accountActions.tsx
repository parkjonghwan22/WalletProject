import axios from "axios";

export const setAccountState = (accountState: any) => {
  return {
    type: "CREATE_ACCOUNT",
    payload: accountState,
  };
};

export const setChoiceState = async (account: string) => {
  const { data } = await axios.get(`http://localhost:3001/wallet/${account}`);

  return {
    type: "CHOICE_ACCOUNT",
    payload: data,
  };
};

export const setClientState = (accountState: any) => {
  return {
    type: "CREATE_CLIENT",
    payload: accountState,
  };
};

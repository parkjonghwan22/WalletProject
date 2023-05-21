import { ActionType, Myaccounts, accounts } from "../../types/stateType";

const initialState: Myaccounts = {
  wallet: [],
  choiceWallet: {
    account: "",
    publicKey: "",
    privateKey: "",
    amount: 0,
  },
  clientWallet: [],
};

export const account = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "CREATE_ACCOUNT":
      return { ...state, wallet: [...state.wallet, action.payload] };
    case "CHOICE_ACCOUNT":
      return { ...state, choiceWallet: action.payload };
    case "CREATE_CLIENT":
      return {
        ...state,
        clientWallet: [...state.clientWallet, action.payload],
      };
    default:
      return state;
  }
};

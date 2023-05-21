export interface accounts {
  account: string;
  publicKey: string;
  privateKey: string;
  amount: number;
}

type clientAccount = string;

export interface Myaccounts {
  wallet: accounts[];
  choiceWallet: {
    account: "";
    publicKey: "";
    privateKey: "";
    amount: 0;
  };
  clientWallet: clientAccount[];
}

export interface ActionType {
  type: "CREATE_ACCOUNT" | "CHOICE_ACCOUNT" | "CREATE_CLIENT";
  payload: accounts;
}

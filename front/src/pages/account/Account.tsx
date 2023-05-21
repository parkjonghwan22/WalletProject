import { Form } from "./Form";
import { Accountlayout } from "./styled/Accountlayout.styled";
import { useSelector } from "react-redux";

export const Account = () => {
  const accountState = useSelector((state: any) => state.account.choiceWallet);
  // console.log("========", accountState);

  return (
    <Accountlayout>
      <div>Account</div>
      <div>{accountState && accountState.account}</div>
      <div>{accountState && accountState.balance} ETH</div>
      <Form accountState={accountState} />
    </Accountlayout>
  );
};

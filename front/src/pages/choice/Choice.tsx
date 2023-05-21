import { NavLink } from "react-router-dom";
import { Choicelayout } from "./styled/choicelayout.styled";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAccountState, setChoiceState } from "../../actions/accountActions";
import { accounts } from "../../types/stateType";

export const Choice = () => {
  const dispatch = useDispatch();

  const createWallet = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/wallet",
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);

      const accountState: accounts = {
        account: response.data.account,
        publicKey: response.data.publicKey,
        privateKey: response.data.privateKey,
        amount: response.data.balance,
      };

      dispatch(await setChoiceState(response.data.account));
      dispatch(setAccountState(accountState));

      console.log(dispatch);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Choicelayout>
      <NavLink to="/aclist">Account List</NavLink>
      <NavLink to="/account" onClick={createWallet}>
        Account Create
      </NavLink>
    </Choicelayout>
  );
};

import { useSelector } from "react-redux";
import { Accountlayout } from "./styled/Accountlayout.styled";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { accounts } from "../../types/stateType";
import { setChoiceState } from "../../actions/accountActions";
import { Icon } from "@iconify/react";
import CopyToClipboard from "react-copy-to-clipboard";

export const Accountlist = () => {
  const accountState = useSelector((state: any) => state.account.wallet || []);
  console.log(accountState);
  const dispatch = useDispatch();

  const handleAccountClick = async (account: string) => {
    dispatch(await setChoiceState(account));
  };

  return (
    <Accountlayout>
      <div>Account List</div>
      <div>
        <ul>
          {accountState.map((account: any, index: number) => (
            <li key={index} onClick={() => handleAccountClick(account.account)}>
              <NavLink to={`/account`}>{account.account}</NavLink>
              <CopyToClipboard
                text={account.account}
                onCopy={() => alert("클립보드에 복사되었습니다")}
              >
                <Icon
                  icon="clarity:copy-to-clipboard-line"
                  color="#e6a15c"
                  className="copy"
                />
              </CopyToClipboard>
            </li>
          ))}
        </ul>
      </div>
    </Accountlayout>
  );
};

import React, { useEffect, useState } from "react";
import { Input } from "../../common/input/Input";
import { Clientlayout } from "./styled/clientlayout.styled";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setClientState } from "../../actions/accountActions";
import { CopyToClipboard } from "react-copy-to-clipboard";

export const Clientlist = () => {
  const clientList = useSelector((state: any) => state.account.clientWallet);
  const dispatch = useDispatch();
  const [account, setAccount] = useState("");

  useEffect(() => {
    // console.log(clientList);
  }, [clientList]);

  const pushClient = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccount(e.target.value);
  };

  const clientSubmit = (e: React.FormEvent, account: string) => {
    e.preventDefault();
    if (account.trim() !== "") {
      dispatch(setClientState(account));
      setAccount("");
      console.log(clientList);
    }
  };

  return (
    <Clientlayout>
      <div>Client List</div>
      <div>
        <form onSubmit={(e) => clientSubmit(e, account)}>
          <Input
            placeholder="text1"
            color="color3"
            value={account}
            onChange={pushClient}
          />
          <button type="submit">
            <Icon
              icon="fluent-mdl2:add-friend"
              color="#e6a15c"
              className="plus"
            />
          </button>
        </form>
      </div>
      <ul>
        {clientList &&
          clientList.map((account: any, index: number) => (
            <li key={index}>
              <span>{account}</span>
              <CopyToClipboard
                text={account}
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
    </Clientlayout>
  );
};

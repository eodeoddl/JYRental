import Dialog from "@/utils/components/dialog";
import Menu from "./menu";
import Login from "./login";

export default function AccountDialog() {
  const userIsloggedIn = true;
  return (
    <Dialog type="account">{userIsloggedIn ? <Menu /> : <Login />}</Dialog>
  );
}

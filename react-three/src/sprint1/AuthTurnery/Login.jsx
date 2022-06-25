import Dasbord from "./Dashboard";
import Signup from "./Signup";
export default function Login(props) {
  let Auth = props.isAuth;
  return <div>{Auth ? <Dasbord/> : <Signup />}</div>
}

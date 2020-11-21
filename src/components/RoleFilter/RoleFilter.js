import { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";



export const RoleFilter = ({children, ...rest}) => {

  let history = useHistory()

  let role = localStorage.getItem("role");

  console.log("role filter");
  console.log(role);

  useEffect(() => {
    switch (role) {
      case "admin":
        history.push("/admin");
        break;
      case "customer":
        history.push("/customer");
        break;
      
      default:
        history.push("/login")
        break;
    }
    // if (role === "admin") {
    //   history.push("/admin")
    // } else if (role === "customer") {
    //   history.push("/customer")
    // } else {
    //   history.push("/login")
    // }
  }, [role, history])

  return (
    <Switch>
      <Route {...rest} path="/admin" render={(props) => children} />
      <Route {...rest} path="/customer" render={(props) => children} />
    </Switch>
  )
}
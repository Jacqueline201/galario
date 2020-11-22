import { useHistory } from "react-router-dom";
import { validate } from "./CreateAccountValidationRules"

const CREATE_ACCOUNT_URI = "https://sp1-blue-sparrow.herokuapp.com/api/v1/account-management/accounts/create";

export const SubmitCreateAccountButton = ({values, setValues, errors, setErrors, setLoading}) => {
  const TOKEN = localStorage.getItem("token");
  const history = useHistory();
  function handleMouseDown() {
    setErrors(validate(values))
  }

  function handleMouseUp(e) {
    if (Object.keys(errors).length > 0) {
      return false;
    } else {
      console.log("SENDING");
      setLoading(true);
      fetch(CREATE_ACCOUNT_URI, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "x-auth-token": TOKEN
        },
        body: JSON.stringify(values)
      })
      .then(response => response.text())
      .then(data => {
        console.log(data);
        setLoading(false);
        alert("Account Successfully Created");
        history.push({
          to: "/admin/accounts",
          state: {from: history.location}
        })
      })
      .catch(e => {
        console.log(e);
        alert("Something went wrong...");
        setLoading(false);
      })

    }
  }

  return (
    <div className="col-md-12 d-flex justify-content-center py-3">
      <button
        type="button"
        className="btn btn-primary w-50"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        Submit
      </button>
    </div>
  )
}
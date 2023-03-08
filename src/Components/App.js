import { useState } from "react";
import "../index1.css"


const SignupForm = () => {
  const [formState, setFormState] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });


  
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formState.password !== formState.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log(formState);
    setShowPopup(true);
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setFormState({ ...formState, [name]: value });
  };


  return (
    <div className="my-3">
      <form onSubmit={handleSubmit} className="form_shape">
        <div className="form-group">
          <label htmlFor="email"><b>Email</b></label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter email"
            value={formState.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName"><b>First Name</b></label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            placeholder="Enter first name"
            value={formState.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName"><b>Last Name</b></label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            placeholder="Enter last name"
            value={formState.lastName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password"><b>Password</b></label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
            value={formState.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword"><b>Confirm Password</b></label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm password"
            value={formState.confirmPassword}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary my-3 w-100">
          Sign Up
        </button>
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <p className="text-danger"> <i><b>You have successfully created an account.!</b></i></p>
              <button
                className="close-button text-white bg-danger p-2 border rounded-top rounded-bottom"
                onClick={() => setShowPopup(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default SignupForm;

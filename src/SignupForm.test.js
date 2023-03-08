import { render, fireEvent } from "@testing-library/react";
import SignupForm from "./SignupForm";

describe("SignupForm", () => {
  test("renders all input fields correctly", () => {
    const { getByLabelText } = render(<SignupForm />);
    expect(getByLabelText("Email")).toBeInTheDocument();
    expect(getByLabelText("First Name")).toBeInTheDocument();
    expect(getByLabelText("Last Name")).toBeInTheDocument();
    expect(getByLabelText("Password")).toBeInTheDocument();
    expect(getByLabelText("Confirm Password")).toBeInTheDocument();
  });

  test("submits the form successfully when all inputs are valid", () => {
    const { getByLabelText, getByRole, getByText } = render(<SignupForm />);
    const emailInput = getByLabelText("Email");
    const firstNameInput = getByLabelText("First Name");
    const lastNameInput = getByLabelText("Last Name");
    const passwordInput = getByLabelText("Password");
    const confirmPasswordInput = getByLabelText("Confirm Password");

    fireEvent.change(emailInput, { target: { value: "test@test.com" } });
    fireEvent.change(firstNameInput, { target: { value: "John" } });
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });
    fireEvent.change(confirmPasswordInput, { target: { value: "password" } });


    fireEvent.click(getByRole("button"));

    expect(getByText("You have successfully created an account.")).toBeInTheDocument();
  });

  
  test("displays an error message when the passwords do not match", () => {
    const { getByLabelText, getByRole, getByText } = render(<SignupForm />);
    const passwordInput = getByLabelText("Password");
    const confirmPasswordInput = getByLabelText("Confirm Password");

    fireEvent.change(passwordInput, { target: { value: "password" } });
    fireEvent.change(confirmPasswordInput, { target: { value: "wrongpassword" } });

    fireEvent.click(getByRole("button"));

    expect(getByText("Passwords do not match!")).toBeInTheDocument();
  });
});

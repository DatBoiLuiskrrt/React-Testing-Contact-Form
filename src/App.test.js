import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import ContactForm from "../src/components/ContactForm";

test("renders App without crashing", () => {
  const {queryByText} = render(< ContactForm />);
  queryByText(/firstName/i);
  queryByText(/lastName/i);
  queryByText(/email/i);
});

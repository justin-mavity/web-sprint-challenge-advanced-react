import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows
describe("checkout form test", () => {
  render(<CheckoutForm />);
});
test("form header renders", () => {
  render(<App />);
  const headerRender = screen.getByText(/react plants/i);
});

test("form shows success message on submit with form details", async () => {
  render(<CheckoutForm />);

  const firstNameInput = screen.getByLableText(/first name/i);
  const lastNameInput = screen.getByLableText(/last name/i);
  const addressInput = screen.getByLableText(/address name/i);
  const cityInput = screen.getByLableText(/city name/i);
  const stateInput = screen.getByLableText(/state name/i);
  const zipInput = screen.getByLableText(/zip name/i);

  const submitBtn = screen.getByRole("button", { name: /checkout/i });

  fireEvent.change(firstNameInput, { target: { value: "Justin" } });
  fireEvent.change(lastNameInput, { target: { value: "Justin" } });
  fireEvent.change(addressInput, { target: { value: "Justin" } });
  fireEvent.change(cityInput, { target: { value: "Little Rock" } });
  fireEvent.change(stateInput, { target: { value: "AR" } });
  fireEvent.change(zipInput, { Target: { value: "72076" } });

  fireEvent.click(submitBtn);

  await screen.findByText(/woo-hoo/i);
});

import React from "react";
import { getByTestId, render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)

    const header = screen.getByText(/checkout form/i)

    expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm/>)

    const firstNameInput = screen.getByLabelText(/first/i)
    userEvent.type(firstNameInput, 'Dustin')

    const lastNameInput = screen.getByLabelText(/last/i)
    userEvent.type(lastNameInput, 'Myers')

    const addressInput = screen.getByLabelText(/address/i)
    userEvent.type(addressInput, '505 Ezy St')

    const cityInput = screen.getByLabelText(/city/i)
    userEvent.type(cityInput, 'New York')

    const stateInput = screen.getByLabelText(/state/i)
    userEvent.type(stateInput, 'NY')

    const zipInput = screen.getByLabelText(/zip/i)
    userEvent.type(zipInput, '12345')

    userEvent.click(screen.getByRole('button'))

    await expect(screen.getByTestId('successMessage'))
});

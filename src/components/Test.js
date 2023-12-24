import { render, screen } from "@testing-library/react";
import App from "./App";
import BookingPage from "./BookingPage";

test("Renders booking form heading", () => {
    render(<BookingPage />);
    const headingElement = screen.getByText("Little Lemon Reservation");
    expect(headingElement).toBeInTheDocument();
})
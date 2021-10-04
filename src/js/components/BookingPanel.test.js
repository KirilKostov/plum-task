import { render, screen } from "@testing-library/react";
import { BookingPanel } from "./BookingPanel";

test("BookingPanel with booking button", () => {
	render(<BookingPanel />);
	const button = screen.getByText(/instant booking/i);
	expect(button).toBeTruthy();
});

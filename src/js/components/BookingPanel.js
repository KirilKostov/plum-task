import React from "react";
import Select from "react-select";

const dates = [
  { value: "first", label: "First" },
  { value: "second", label: "Second" },
  { value: "third", label: "Third" },
];

const guests = [
  { value: "1", label: "1 Guest" },
  { value: "2", label: "2 Guests" },
  { value: "3", label: "3 Guests" },
];

export function BookingPanel() {
  return (
    <div className="booking-panel">
      <div className="booking-item">
        <span className="booking-item-label">From / To</span>
        <Select options={dates} />
      </div>
      <div className="booking-item">
        <span className="booking-item-label">For</span>
        <Select options={guests} />
      </div>
      <div className="booking-item">
        <span className="booking-item-label">£ Per night</span>
        <span className="booking-item-value">345</span>
      </div>
      <div className="booking-item">
        <span className="booking-item-label">£ Total for X nights</span>
        <span className="booking-item-value">123</span>
      </div>
      <div className="booking-item">
        <a className="booking-button" href="/booking">
          Instant booking
        </a>
      </div>
    </div>
  );
}

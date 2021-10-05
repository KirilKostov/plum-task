import React from "react";
import { Carousel } from "./Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faTrain,
  faWalking,
} from "@fortawesome/free-solid-svg-icons";

const propertyDetails = [
  { value: "4 people" },
  { value: "2 bedrooms" },
  { value: "2 bathrooms" },
  { value: "Private terrasse" },
  { value: "Peaceful" },
];

const propertyPerks = [
  { value: "Notthing Hill, London", icon: faMapMarkerAlt },
  { value: "Walk 6 mins (Westbourne Park Station)", icon: faTrain },
  { value: "Stairs", icon: faWalking },
];

export function Property() {
  return (
    <div className="property-container">
      <h1 className="property-title">Monsieur Didot</h1>
      <ul className="property-details">
        {propertyDetails.map((detail) => (
          <li key={detail.value}>{detail.value}</li>
        ))}
      </ul>
      <div className="property-perks">
        {propertyPerks.map((perk) => (
          <li key={perk.value}>
            <FontAwesomeIcon icon={perk.icon} />
            <span>{perk.value}</span>
          </li>
        ))}
      </div>
      <div className="property-carousel">
        <Carousel />
      </div>
    </div>
  );
}

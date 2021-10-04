import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Icon({ type, onClick }) {
	return (
		<div className="icon-container">
			<FontAwesomeIcon icon={type} onClick={onClick} />
		</div>
	);
}

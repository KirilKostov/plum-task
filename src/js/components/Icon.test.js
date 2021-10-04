import { render } from "@testing-library/react";
import { Icon } from "./Icon";
import { faBars } from "@fortawesome/free-solid-svg-icons";

test("renders the correct faIcon", () => {
  render(<Icon type={faBars} />);
});

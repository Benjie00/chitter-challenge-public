import { render } from "@testing-library/react";
import Footer from "./Footer.jsx";

describe("Tests for Footer Component", () => {
  test("Footer should match snapshot", () => {
    const footer = render(<Footer />);
    expect(footer).toMatchSnapshot();
  });
});

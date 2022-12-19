import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import Header from "./Header.jsx";

describe("Tests for Header Component", () => {
  test("Header should match snapshot", () => {
    const header = render(<Header />, { wrapper: MemoryRouter });
    expect(header).toMatchSnapshot();
  });
});

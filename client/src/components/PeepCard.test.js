import { render, screen } from "@testing-library/react";
import PeepCard from "./PeepCard";

jest.mock("./PeepCard", () => () => <div data-testid="hlc" />);

describe("PeepCard Component tests", () => {
  xit("should render the correct number of HeadlineCard components if newsData prop is a populated array", () => {
    const mockData = [
      {
        userName: "Test",
        field: "Lorem ipsum",
      },
    ];
    render(<PeepCard data={mockData} />);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument;
  });
});

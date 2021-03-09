import { render, cleanup } from "@testing-library/react";
import { Header } from "src/components/Header";

afterEach(cleanup);

it("renders header", () => {
  const { asFragment } = render(<Header />);

  expect(asFragment()).toMatchSnapshot();
});

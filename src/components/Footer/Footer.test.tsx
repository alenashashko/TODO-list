import { render, cleanup } from "@testing-library/react";
import { Footer } from "./Footer";

afterEach(cleanup);

it("renders footer", () => {
  const { asFragment } = render(<Footer />);

  expect(asFragment()).toMatchSnapshot();
});

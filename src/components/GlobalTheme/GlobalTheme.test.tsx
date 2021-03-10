import { render, cleanup } from "@testing-library/react";
import { GlobalTheme } from "src/components/GlobalTheme";

afterEach(cleanup);

it("renders global theme", () => {
  const { asFragment } = render(<GlobalTheme />);

  expect(asFragment()).toMatchSnapshot();
});

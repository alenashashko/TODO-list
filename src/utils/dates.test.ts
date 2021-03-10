import { formatDate } from "src/utils/dates";

it("should format date correctly", () => {
  expect(formatDate(1615294251351)).toEqual("03/09/2021 3:50 PM");
});

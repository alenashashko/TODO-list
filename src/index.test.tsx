import {cleanup} from "@testing-library/react";
import {render} from 'react-dom';

import './index';

jest.mock('react-dom');

afterEach(cleanup);

it("renders once", () => {
  const mockedRender = render as jest.MockedFunction<typeof render>;

  // called once in index.tsx
  expect(mockedRender).toHaveBeenCalledTimes(1);
});

import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/ru";

import { getUserLanguage } from "./getUserLanguage";

dayjs.extend(localizedFormat);

export const formatDate = (date: number) => {
  return (
    dayjs(date)
      .locale(getUserLanguage())
      // https://day.js.org/docs/en/display/format#localized-formats
      .format("L LT")
  );
};

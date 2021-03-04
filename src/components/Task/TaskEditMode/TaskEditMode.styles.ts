import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
  content: {
    paddingTop: "12px",
    paddingBottom: "12px"
  },
  text: {
    width: "100%",

    "& textarea": {
      lineHeight: "24px"
    },

    "& .MuiInputBase-multiline": {
      padding: "4px 0 4px"
    }
  },
  footer: {
    display: "flex",
    alignItems: "flex-end",

    width: "100%",
    padding: "8px"
  },
  buttons: {
    marginLeft: "auto"
  },
});

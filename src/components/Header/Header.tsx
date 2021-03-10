import { FC } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

import { useStyles } from "./Header.styles";

export const Header: FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.title} variant="h6" component="h1">
          Todo List
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

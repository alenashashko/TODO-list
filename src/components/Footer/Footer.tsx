import { FC } from "react";
import { Toolbar, Typography } from "@material-ui/core";

import { useStyles } from "./Footer.styles";

export const Footer: FC = () => {
  const classes = useStyles();

  return (
    <Toolbar className={classes.footer} component="footer">
      <Typography className={classes.copyright} variant="h6" component="h2">
        by Alena Shashko
      </Typography>
    </Toolbar>
  );
};

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  title: {
    margin: '16px 0px',
  },
  content: {
    marginBottom: 20,
  }
}));

function Block({title, children}) {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h4" className={classes.title}>{title}</Typography>
      <div className={classes.content}>
        {children}
      </div>
    </div>
  );
}

export default Block;

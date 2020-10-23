import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Block from './Block';

const useStyles = makeStyles((theme) => ({
  title: {
    margin: '16px 0px',
  },
  content: {
    marginBottom: 20,
  }
}));

function Slides(props) {
  const classes = useStyles();

  return (
    <div>
      <Block title="Week1">
      </Block>
    </div>
  );
}

export default Slides;

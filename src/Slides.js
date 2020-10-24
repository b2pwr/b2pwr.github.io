import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
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
        <Link target="_blank" rel="noreferrer" href="https://docs.google.com/presentation/d/18JHQ6b4vh2UqrPI4Rc2L6_em558Ndwb9_Oe4xEcnkIM/edit?usp=sharing">Slides</Link>
      </Block>
      <Block title="Week2">
        <span role="img" aria-label="construction">🚧</span>
      </Block>
      <Block title="Week3">
        <span role="img" aria-label="construction">🚧</span>
      </Block>
      <Block title="Week4">
        <span role="img" aria-label="construction">🚧</span>
      </Block>
    </div>
  );
}

export default Slides;

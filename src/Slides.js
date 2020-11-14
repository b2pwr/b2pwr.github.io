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
        <Link target="_blank" rel="noreferrer" href="https://docs.google.com/presentation/d/1HSW80Z30Azg2adP8gIVjbrgM3u1skZwNSSH9GcTnT4g/edit?usp=sharing">Slides</Link>
      </Block>
      <Block title="Week3">
        <Link target="_blank" rel="noreferrer" href="https://docs.google.com/presentation/d/100GH-7ugnPLMnZ0UmF4ssUFttIMGKnCtApvrJ_uljXg/edit?usp=sharing">Slides</Link>
        <div>* 上週有請大家試著用 React 改寫第一週的 Review Javascript 題目，參考如
          <Link target="_blank" rel="noreferrer" href="https://codesandbox.io/s/divine-wildflower-ncce9?file=/src/App.js">連結</Link>
          （含 hook 版本）          
        </div>
      </Block>
      <Block title="Week4">
      <Link target="_blank" rel="noreferrer" href="https://docs.google.com/presentation/d/1qQQwCrtYuP6PW3z8uyDkTMP1RIb5ryxFsHIvKP2mdns/edit?usp=sharing">Slides</Link>
      </Block>
    </div>
  );
}

export default Slides;

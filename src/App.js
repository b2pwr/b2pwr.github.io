import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Block from './Block';
import profileImg from './profile.jpg';
import Slides from './Slides';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  table: {
    minWidth: 120,
  },
  avatar: {
    width: 64,
    height: 64,
  }
}));

const week = [{
  num: 1,
  topic: <ul><li>Review Basic Javascript.</li><li>Basic React.js - 1</li></ul>,
}, {
  num: 2,
  topic: 'Basic React.js - 2',
}, {
  num: 3,
  topic: 'Leaflet - a JavaScript library for interactive maps.',
}, {
  num: 4,
  topic: 'TBD',
}]

function App() {
  const classes = useStyles();
  const [tabId, setTabId] = useState(0);
  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <span role="img" aria-label="joker">🤡</span>
          </Typography>
        </Toolbar>
      </AppBar>
      <Tabs
        variant="fullWidth"
        value={tabId}
        onChange={(event, newValue) => {
          setTabId(newValue);
        }}
        style={{ position: 'sticky', top: 64, backgroundColor: '#FFFFFF' }}
      >
        <Tab label="Course" />
        <Tab label="Slides" />
      </Tabs>
      <Container maxWidth="lg">
        { tabId === 0 &&
          <div>
            <Block title="About this course">
              <Typography variant="body2">
                {`資料視覺化（Data visualization）是將抽象的數據透過圖形、資訊圖表來更有效得傳達與溝通資訊，幫助分析和推理資料和證據的一門科學。
                而瀏覽器則是目前最為廣泛運用的資訊載體，在這段時間，我們將學習運用瀏覽器上運行的語言：JavaScript，及目前最被廣泛使用的前端框架：React.js，
                在瀏覽器上實現基礎的資料視覺化，並期許之後將其運用在其他更廣泛的資料型態。`}
              </Typography>
            </Block>
            <Block title="Information">
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row">Instructor</TableCell>
                      <TableCell align="left">b2</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell rowSpan={1} />
                      <TableCell>
                        <Avatar className={classes.avatar} src={profileImg} alt="b2" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">Prerequisites</TableCell>
                      <TableCell align="left">Basic JavaScript. JavaScript ES6 are preferred.</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Block>
            <Block title="Lecture">
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>week</TableCell>
                      <TableCell align="left">Topic</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {week.map((w) => (
                      <TableRow key={w.num}>
                        <TableCell component="th" scope="row">{w.num}</TableCell>
                        <TableCell align="left">{w.topic}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Block>
          </div>
        }
        {
          tabId === 1 &&
            <Slides />
        }
      </Container>
    </div>
  );
}

export default App;

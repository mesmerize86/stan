import {ThemeProvider} from 'styled-components/macro';
import AppTheme from './theme';
import GlobalStyle from './styles/GlobalStyle';
import Layout from './layout';
import Routes from './routes'

import {
  BrowserRouter as Router,
} from "react-router-dom";

const App = () =>
  <Router>
    <ThemeProvider theme={AppTheme}>
      <Layout>
        <Routes/>
      </Layout>
      <GlobalStyle/>
    </ThemeProvider>
  </Router>

export default App;

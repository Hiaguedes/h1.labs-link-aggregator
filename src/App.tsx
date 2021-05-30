import React from 'react';
import { GlobalStyle } from './GlobalStyles';
import Layout from './components/Layout/layout.component';
import DisplayPage from './modules/display/pages'

function App() {
  return (
    <>
    <GlobalStyle />
    <Layout>
      <DisplayPage />
    </Layout>
    </>
  );
}

export default App;

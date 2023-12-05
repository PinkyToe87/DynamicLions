import React, { Suspense } from "react";
import { Route, Redirect } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import Layout from "./hoc/Layout/Layout";

const Home = React.lazy(() => import('./components/Home/Home'));
const PhotoGrid = React.lazy(() => import('./components/PhotoGrid/PhotoGrid'));
const BoardMembers = React.lazy(() => import('./components/Board/BoardMembers'));
const Events = React.lazy(() => import('./components/Events/Events'));
const Files = React.lazy(() => import('./components/Files/Files'));
const ContactForm = React.lazy(() => import('./components/ContactForm/ContactForm'));


function App() {
  return (
    <Layout>
      <Suspense fallback={<p>LOADING...</p>}>
        <ScrollToTop />
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/photos">
            <PhotoGrid />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/board">
            <BoardMembers />
          </Route>
          <Route path="/reports">
            <Files />
          </Route>
          <Route path="/contactUs">
            <ContactForm />
          </Route>
          </Suspense>
    </Layout>
  );
}

export default App;

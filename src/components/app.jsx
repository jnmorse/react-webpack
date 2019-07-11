import React from 'react';

import Layout from './Layout';
import SiteHeader from './SiteHeader';

export const App = () => (
  <Layout>
    <SiteHeader />

    <div className="row">
      <p>
        {
          "Time to write some code, and chew bubblegum. Only I'm all out of gum."
        }
      </p>
    </div>
  </Layout>
);

import React from "react";

import { Home } from "pages/home";

import { withProviders } from "./providers";
import { Loader } from "shared/ui";

const App = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Home />
    </React.Suspense>
  );
}

export default withProviders(App);
import React from "react"
import { Provider } from 'react-redux';

import store from "./redux/redux";

import Skeleton from "./views/Skeleton";

function App() {
  return (

    <Provider store={store}>
      <Skeleton />
    </Provider>

  );
}

export default App;

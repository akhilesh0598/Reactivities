import React from "react";
import ReactDOM from "react-dom/client";
import 'react-toastify/ReactToastify.min.css'
import "semantic-ui-css/semantic.min.css";
import "react-datepicker/dist/react-datepicker.css"
import "./app/layout/styles.css";
import { StoreContext, store } from "./app/stores/store";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router/Routes";
import 'react-calendar/dist/Calendar.css'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <RouterProvider router={router}/>
    </StoreContext.Provider>
  </React.StrictMode>
);

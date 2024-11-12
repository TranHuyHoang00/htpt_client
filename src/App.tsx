import { Provider } from "@/providers/Provider";
import { RouterProvider } from "react-router-dom";
import { RoutesApp } from "./routes/Routes";
const App = () => {
  return (
    <Provider>
      <RouterProvider router={RoutesApp()} />
    </Provider>
  );
};

export default App;

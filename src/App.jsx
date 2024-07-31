import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import { PublicRoutes } from "./routes/routes";
import Error from "./components/Error";

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          {PublicRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.Element}
              errorElement={<Error />}
            />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;

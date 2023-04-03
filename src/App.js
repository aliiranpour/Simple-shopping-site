import { BrowserRouter } from "react-router-dom";
import WebRoutes from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <WebRoutes />
    </BrowserRouter>
  );
}

export default App;

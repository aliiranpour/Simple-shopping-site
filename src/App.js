import { BrowserRouter } from "react-router-dom";
import WebRoutes from "./routes/routes";
import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <WebRoutes />
    </BrowserRouter>
  );
}

export default App;

import { useEffect } from "react";
import "./App.css";
import AppRouter from "./routes/AppRouter";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;

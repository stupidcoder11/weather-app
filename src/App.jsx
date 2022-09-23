import { Divider } from "antd";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import WeatherChart from "./components/WeatherChart/WeatherChart";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <h1 className="title">What's the weather?</h1>
        <div className="heroes-container">
          <WeatherCard />
          <Divider type="vertical" style={{ backgroundColor: "#000" }} />
          <WeatherChart />
        </div>
      </div>
    </>
  );
}

export default App;

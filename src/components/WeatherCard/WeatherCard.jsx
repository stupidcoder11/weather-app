import { Avatar, Card } from "antd";
import "./WeatherCard.css";

function WeatherCard() {
  const { Meta } = Card;

  return (
    <div className="weather-card-container">
      <Card
        style={{
          width: 300,
        }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
    </div>
  );
}

export default WeatherCard;

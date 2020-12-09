import { useState } from "react";
import BackgroundImage from "./assert/gooWhereBackground.jpg";
import "./App.css";
import Card from "react-bootstrap/esm/Card";
import Collapse from "react-bootstrap/esm/Collapse";

import "bootstrap/dist/css/bootstrap.min.css";

const PRODUCTS = [
  {
    name: "澳提 | PickTB.com",
    description:
      "為香港澳門用戶提供國內網購後轉運至目的地的服務，使用Web App技術為用戶提供簡單而快捷的包裹管理平台",
    stage: "推廣",
    platform: "Web",
    target: "運輸轉運",
    website: "https://picktb.com",
  },
  {
    name: "小區籃球",
    description: "籃球對戰平台",
    stage: "研發",
    platform: "Mobile",
    target: "社交，運動",
  },
  {
    name: "真.新聞 | Real News",
    description: "為中國大陸中老年人提供真正可信的新聞",
    stage: "開發",
    platform: "WeChat",
    target: "新聞",
  },
];

function App() {
  const products = PRODUCTS.map((product) => <Product {...product} />);
  return (
    <div
      className="App-body"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div style={styles.rootContainer}>
        <h1 style={styles.title}>GooWhere.com 去邊網</h1>
        <div style={styles.products}>
          <h2>產品</h2>
          {products}
        </div>
      </div>
    </div>
  );
}

function Product({ name, description, platform, stage, target, website }) {
  const [open, setOpen] = useState(false);
  return (
    <Card style={styles.productCard} onClick={() => setOpen(!open)}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{target}</Card.Subtitle>
        <Collapse in={open}>
          <div>
            <p style={{ fontSize: 16 }}>{`平台: ${platform}`}</p>
            <Card.Text style={{ fontSize: 16 }}>{description}</Card.Text>
          </div>
        </Collapse>
        <Card.Link href="#" style={{ fontSize: 16 }}>
          {website}
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

const styles = {
  products: {
    backgroundColor: "white",
    borderRadius: 25,
    padding: 20,
  },
  productCard: {
    marginTop: 10,
  },
  rootContainer: {
    margin: 20,
  },
  title: {
    fontWeight: 900,
    color: "white",
    size: 64,
  },
};

export default App;

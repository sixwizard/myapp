import React from "react";
import styles from "./index.less";
import { Card } from "antd";

export default (props) => (
  <div className={styles.container}>
    <div id="components-card-demo-border-less">
      <div className="site-card-border-less-wrapper">
        <Card title="原告信息" bordered={false} style={{ width: 300 }}>
          <p>{JSON.stringify(props.data)}</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
    </div>
  </div>
);

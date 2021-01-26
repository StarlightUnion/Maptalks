import React, { useEffect } from "react";
import { initMapVisual } from "./init";
import "./index.less";

const MapVisual = () => {
  useEffect(() => {
    // 初始化
    initMapVisual();
  });

  return <div id="map"></div>;
};

export default MapVisual;

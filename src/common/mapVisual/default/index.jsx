import React, { useEffect, useRef } from "react";
import store from "../../../store";
import { ACTION_TYPE } from "../../../def";
import { initMapVisual, initPlugins } from "../init";
import { utils } from "../tools";
import "./index.less";


let mapRef = null;
function MapVisual () {
  mapRef = useRef();

  useEffect(() => {
    // 初始化
    const map = initMapVisual();
    initPlugins();

    console.info(map);

    // 保存到redux
    utils.dispatchState("MAP", map);
  });

  return <div id="map" ref={mapRef}></div>;
}

export { MapVisual, mapRef };

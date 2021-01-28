import React, { useEffect } from "react";
import { initMapVisual, initPlugins } from "../init";
import store from "../../../store";
import { ACTION_TYPE } from "../../../def";
import "./index.less";

function MapVisual (props) {
  useEffect(() => {
    // 初始化
    const map = initMapVisual();
    console.info(map);
    initPlugins(map);

    // 保存到redux
    store.dispatch({
      type: ACTION_TYPE.MAP,
      config: map
    });
  });

  return <div id="map"></div>;
}

export default MapVisual;

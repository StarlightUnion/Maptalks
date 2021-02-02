/*
 * @Descripttion: 地图插件方法库
 * @Author: wxc
 * @Date: 2021-01-29 08:43:19
 * @LastEditTime: 2021-02-02 15:18:55
 */
import * as maptalks from "maptalks";
import Stats from "stats.js";
import { CompassControl } from "#/maptalks.plugin/maptalks.control.compass/maptalks.control.compass.es";
import "#/maptalks.plugin/maptalks.control.compass/maptalks.control.compass.css";


// 比例尺
const setScaleBar = (map) => {
  const scaleBar = new maptalks.control.Scale({
    position: {
      bottom: "20",
      right: "60"
    },
    maxWidth: 150,
    metric: true,
    imperial: false
  });

  map.addControl(scaleBar);
};

// 缩放工具
const setZoomBar = (map) => {
  const zoomBar = new maptalks.control.Zoom({
    position: {
      bottom: "20",
      right: "15"
    },
    slider: false,
    zoomLevel: true
  });

  map.addControl(zoomBar);
};

// 指北针
const setCompass = (map) => {
  new CompassControl({
    position: "top-right",
    backgroundColor: "#000",
    transform: "translate(10%, 10%)"
  }).addTo(map);
};

// 帧数和渲染时间
const setStats = () => {
  const stats = new Stats();
  stats.domElement.style.zIndex = 100;
  document.getElementById("map").appendChild(stats.domElement);

  return stats;
};

export { setScaleBar, setZoomBar, setCompass, setStats };
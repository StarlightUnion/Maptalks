import * as maptalks from "maptalks";
import Stats from "stats.js";


// 比例尺
const setScaleBar = (map) => {
  const scaleBar = new maptalks.control.Scale({
    position: "bottom-right",
    maxWidth: 150,
    metric: true,
    imperial: false
  });

  map.addControl(scaleBar);
};

// 缩放工具
const setZoomBar = (map) => {
  const zoomBar = new maptalks.control.Zoom({
    position: "bottom-right",
    slider: false,
    zoomLevel: true
  });

  map.addControl(zoomBar);
};

// 帧数和渲染时间
const setStats = () => {
  const stats = new Stats();
  stats.domElement.style.zIndex = 100;
  document.getElementById("map").appendChild(stats.domElement);

  return stats;
};

export { setScaleBar, setZoomBar, setStats };
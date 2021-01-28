import * as maptalks from "maptalks";
// import * as maptalks from "#/maptalks/maptalks.es";// 本地文件
import mapConfig from "./config/map.config";
import layerConfig from "./config/layer.config";
import variableConfig from "./config/variable.config";


// 初始化地图
export const initMapVisual = () => {
  const _layerConfig = Object.values(layerConfig);
  const {
    center,
    zoom,
    pitch,
    minZoom,
    maxZoom,
    bearing,
    fog,
    spatialReference,
    resolutions
  } = mapConfig.Map;

  variableConfig.swipelayer = layerConfig.Tdt_DXT_Layer;

  const map = new maptalks.Map("map", {
    center: center,
    zoom: zoom,
    pitch: pitch, //俯仰角
    minZoom: minZoom, //最小缩放比例
    maxZoom: maxZoom, //最大缩放比例
    bearing: bearing, //方位
    fog: fog,
    centerCross: false,
    doubleClickZoom: false, //false,
    seamlessZoom: true, //是否使用无缝缩放模式
    attribution: false,
    spatialReference: {
      projection: spatialReference,
      resolutions: resolutions
    },
    baseLayer: layerConfig.Tdt_YXT_Layer,
    layers: _layerConfig,
  });

  return map;
};

// 初始化插件
export const initPlugins = (map) => {
  //比例尺
  // map.addControl(getScale());
  //缩放控件
  // map.addControl(getZoomTools());
  //指北针
  // map.addCompassControl();
};
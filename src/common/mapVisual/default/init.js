import * as maptalks from "maptalks";
import mapConfig from "../config/map.config";
import layerConfig from "../config/layer.config";
import variableConfig from "../config/variable.config";

// 初始化地图
export const initMapVisual = () => {
  const _layerConfig = Object.values(layerConfig);
  _layerConfig.push(new maptalks.VectorLayer('v', {
    minZoom: 10,
    maxZoom: 15,
    forceRenderOnZooming: true,
    enableAltitude: true
  }));

  console.log(_layerConfig);

  variableConfig.swipelayer = layerConfig.Tdt_DXT_Layer;

  const {
    center,
    zoom,
    pitch,
    minZoom,
    maxZoom,
    bearing,
    fog,
    spatialReference
  } = mapConfig.Map;

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
    // "seamlessZoom": true, //是否使用无缝缩放模式
    attribution: false,
    spatialReference: {
      projection: spatialReference,
      resolutions: variableConfig.resolutions,
      fullExtent: { // map's full extent
        top: 6378137 * Math.PI,
        left: -6378137 * Math.PI,
        bottom: -6378137 * Math.PI,
        right: 6378137 * Math.PI
      }
    },
    baseLayer: layerConfig.Tdt_YXT_Layer,
    layers: _layerConfig,
  });
}
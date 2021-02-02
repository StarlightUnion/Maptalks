/*
 * @Descripttion: 地图相关api方法库
 * @Author: wxc
 * @Date: 2021-02-02 14:32:24
 * @LastEditTime: 2021-02-02 15:10:19
 */
import { map } from "../init";
import { mapRef } from "../index";
import mapConfig from "../config/map.config";


const {
  zoom,
  center,
  pitch,
  bearing
} = mapConfig.Map;

// 地图全幅 => 参数来自于默认设置mapConfig
const mapFullExtent = () => {
  map.animateTo({
    zoom: zoom,
    center: center,
    pitch: pitch,
    bearing: bearing
  }, {
    duration: 2000
  });
};

// 2D视角
const mapTo2Dview = () => {
  map.animateTo({
    zoom: zoom - 1,
    center: center,
    pitch: 1,
    bearing: bearing
  }, {
    duration: 2000
  });
};

//3D视角
const mapTo3Dview = () => {
  map.animateTo({
    zoom: zoom,
    center: center,
    pitch: pitch,
    bearing: bearing
  }, {
    duration: 2000
  });
};

//放大
const zoomIn = () => {
  map.animateTo({
    zoom: map.getZoom() + 1,
  }, {
    duration: 1000
  });
};

//缩小
const zoomOut = () => {
  map.animateTo({
    zoom: map.getZoom() - 1,
  }, {
    duration: 1000
  });
};

// 弹框居中拉近动画
const mapToCoordinate = (x, y) => {
  map.animateTo({
    zoom: map.getZoom() + (map.getZoom() > 17 ? 0 : 1),
    center: [x, y],
    pitch: map.getPitch(),
    bearing: map.getBearing()
  }, {
    duration: 1000
  });
};

export { mapFullExtent, mapTo2Dview, mapTo3Dview, zoomIn, zoomOut, mapToCoordinate };
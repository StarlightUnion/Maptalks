/*
 * @Descripttion: 地图相关api方法库
 * @Author: wxc
 * @Date: 2021-02-02 14:32:24
 * @LastEditTime: 2021-02-03 14:06:23
 */
import { map } from "../init";
import { tool } from "../tools";
import mapConfig from "../config/map.config";


const {
  zoom,
  center,
  pitch,
  bearing
} = mapConfig.Map;

export default {
  mapFullExtent() { // 地图全幅 => 参数来自于默认设置mapConfig
    map.animateTo({
      zoom: zoom,
      center: center,
      pitch: pitch,
      bearing: bearing
    }, {
      duration: 2000
    });
  },
  mapTo2Dview() { // 2D视角
    map.animateTo({
      zoom: zoom - 1,
      center: center,
      pitch: 1,
      bearing: bearing
    }, {
      duration: 2000
    });
    map.options.dragPitch = false;
  },
  mapTo3Dview() { // 3D视角
    map.animateTo({
      zoom: zoom,
      center: center,
      pitch: pitch,
      bearing: bearing
    }, {
      duration: 2000
    });
    map.options.dragPitch = true;
  },
  zoomIn() { // 放大
    map.animateTo({
      zoom: map.getZoom() + 1,
    }, {
      duration: 1000
    });
  },
  zoomOut() { // 缩小
    map.animateTo({
      zoom: map.getZoom() - 1,
    }, {
      duration: 1000
    });
  },
  mapToCoordinate(x, y) { // 弹框居中拉近动画
    map.animateTo({
      zoom: map.getZoom() + (map.getZoom() > 17 ? 0 : 1),
      center: [x, y],
      pitch: map.getPitch(),
      bearing: map.getBearing()
    }, {
      duration: 1000
    });
  },
  mapFullScreen(el) { // 地图全屏事件
    return tool.enterFullScreen(el);
  }
};
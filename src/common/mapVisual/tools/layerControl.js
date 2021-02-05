/*
 * @Descripttion: 图层控制方法库
 * @Author: wxc
 * @Date: 2021-02-05 18:39:28
 * @LastEditTime: 2021-02-05 17:01:09
 */
import { baseLayerConfig } from "../config/baseLayer.config";
import { map } from "../init";


export default {
  allBaseLayerId: [], // 所有图层id
  allBaseGroupName: [], // 所有图层组名
  currentGroupShow: "暗黑图", // 默认显示组

  /**
   * @name: getAllBaseGroupName
   * @description: 获取baseLayerConfig所有图层组名
   * @param null
   * @return {array}
   */
  getAllBaseGroupName() {
    return this.allBaseGroupName.length ?
      this.allBaseGroupName :
      (() => {
        this.allBaseGroupName = Object.values(baseLayerConfig)
          .sort((a, b) => a.index - b.index)
          .map(item => item.groupName);

        return this.allBaseGroupName;
      })();
  },

  /**
   * @name: getAllBaseLayerId
   * @description: 获取baseLayerConfig所有图层的id
   * @param null
   * @return {array}
   */
  getAllBaseLayerId() {
    return this.allBaseLayerId.length ?
      this.allBaseLayerId :
      (() => {
        this.allBaseLayerId = Object.values(baseLayerConfig).reduce((prev, item) => {
          return [
            ...prev,
            ...item.layers.map(layer => layer._id)
          ];
        }, []);

        return this.allBaseLayerId;
      })();
  },

  /**
   * @name: getBaseLayerIdByGroupName
   * @description: 获取baseLayerConfig指定组下的所有图层id
   * @param {string} groupName
   * @return {array}
   */
  getBaseLayerIdByGroupName(groupName) {
    const group = Object.values(baseLayerConfig)
      .find(item => item.groupName === groupName);
    return group ? group.layers.map(item => item._id) : [];
  },

  /**
   * @name: hideAllBasicLayer
   * @description: 隐藏所有baseLayer
   * @param null
   * @return null
   */
  hideAllBasicLayer() {
    const allBaseLayerId = this.getAllBaseLayerId();

    allBaseLayerId.forEach(item => {
      map.getLayer(item).options.visible = false;
    });
  },

  /**
   * @name: showLayerByGroupName
   * @description: 显示指定底图
   * @param {string} groupName
   * @return null
   */
  showLayerByGroupName(groupName = this.currentGroupShow) {
    this.currentGroupShow = groupName;
    this.hideAllBasicLayer();

    this.getBaseLayerIdByGroupName(groupName).forEach(item => {
      map.getLayer(item).options.visible = true;
    });
  }
};
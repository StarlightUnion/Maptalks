/*
 * @Descripttion: 图层控制api方法库
 * @Author: wxc
 * @Date: 2021-02-06 14:46:05
 * @LastEditTime: 2021-02-07 10:58:30
 */
import { map } from "../init";
import { utils, layerControl } from "../tools";


export default {
  currentGroupShow: "", // 默认显示组
  allBaseGroupName: [], // 所有图层组名

  /**
   * @name: allBaseGroup
   * @description: 获取所有底图组名称
   * @param null
   * @return {array}
   */
  allBaseGroup() {
    return this.allBaseGroupName.length ?
      this.allBaseGroupName :
      (() => {
        this.allBaseGroupName = layerControl.getAllBaseGroupName();

        return this.allBaseGroupName;
      })();
  },

  /**
   * @name: showLayerByGroupName
   * @description: 显示指定底图组
   * @param {string} groupName
   * @return null
   */
  showLayerByGroupName(groupName = this.currentGroupShow) {
    this.currentGroupShow = groupName;
    utils.dispatchState("CURRENTGROUPSHOW", { currentGroupShow: this.currentGroupShow });
    layerControl.showLayerByGroupName(groupName);
  },

  /**
   * @name: swipe
   * @description: 地图卷帘
   * @param {boolean} state
   * @return null
   */
  swipe(state) {
    if (state) {
      layerControl.hideAllBasicLayer();
      this.currentGroupShow = "影像图";
      utils.dispatchState("CURRENTGROUPSHOW", { currentGroupShow: this.currentGroupShow });

      // 显示指定图层组
      layerControl.showLayerByGroupName("影像图");
      layerControl.showLayerByGroupName("地形图");

      // map.getBaseLayer("天地图影像图").options.visible = true;
      // map.getLayer("天地图地形图").options.visible = true;
      // map.getLayer("天地图标注").options.visible = true;
    }
  }
};
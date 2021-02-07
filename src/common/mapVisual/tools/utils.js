/*
 * @Descripttion: 工具方法库
 * @Author: wxc
 * @Date: 2021-02-02 14:38:43
 * @LastEditTime: 2021-02-06 16:59:48
 */
import { message } from "antd";
import store from "../../../store";
import { ACTION_TYPE } from "../../../def";


export default {
  /**
   * @name: isFullscreen
   * @description: 判断当前浏览器是否处于全屏状态
   * @param null
   * @return {boolean}
   */
  isFullScreen() {
    return window.fullScreen ||
      document.webkitIsFullScreen ||
      document.msFullscreenEnabled ||
      false;
  },

  /**
   * @name: enterFullScreen
   * @description: 进入全屏
   * @param {element} el
   * @return {boolean}
   */
  enterFullScreen(el) {
    const rfs = el.requestFullScreen ||
      el.webkitRequestFullScreen ||
      el.mozRequestFullScreen ||
      el.msRequestFullscreen;

    typeof rfs !== "undefined" ?
      !this.isFullScreen() ?
      rfs.call(el) :
      this.exitFullScreen() :
      message.warning("当前浏览器不支持部分全屏");

    return this.isFullScreen();
  },

  /**
   * @name: exitFullScreen
   * @description: 离开全屏
   * @param null
   * @return null
   */
  exitFullScreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  },

  /**
   * @name: dispatchState
   * @description: 发送状态到store
   * @param {string} type
   * @param {*} state
   * @return null
   */
  dispatchState(type, state) {
    store.dispatch({
      type: ACTION_TYPE[type],
      state
    });
  }
};
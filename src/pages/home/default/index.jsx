import React, { useState, useEffect, useCallback } from "react";
import { Button, Radio } from "antd";
import PageBuilder from "../../../common/pagerBuilder";
// import { mapRef } from "../../../common/mapVisual";
import { mapApi } from "../../../common/mapVisual/api";
import { utils } from "../../../common/mapVisual/tools";
import { layerControl } from "../../../common/mapVisual/tools";
import "./index.less";


const layers = layerControl.getAllBaseGroupName();
const HomePage = PageBuilder(() => {
  const [fstxt, setFstxt] = useState("进入全屏");

  // 监听全屏状态下的esc事件
  const windowChangeEvent = useCallback(() => {
    if (!utils.isFullScreen()) setFstxt("进入全屏");
  }, []);

  useEffect(() => {
    window.addEventListener("resize", windowChangeEvent);

    return () => {
      window.removeEventListener("resize", windowChangeEvent);
    };
  }, [windowChangeEvent]);

  // 进入全屏
  const fullScreen = () => {
    // mapApi.mapFullScreen(mapRef.current);

    const isFull = mapApi.mapFullScreen(document.body);
    setFstxt(!isFull ? "退出全屏" : "进入全屏");
  };

  // 显示隐藏base图层
  const onLayerSelectChange = (e) => {
    layerControl.showLayerByGroupName(e.target.value);
  };

  return (
    <main className="page-content">
      <section className="layer-bar">
        <Radio.Group onChange={onLayerSelectChange} defaultValue={layerControl.currentGroupShow}>
          {
            layers.map(item => <Radio.Button value={item} key={item}>{item}</Radio.Button>)
          }
        </Radio.Group>
      </section>
      <section className="tool-bar">
        <Button onClick={mapApi.mapFullExtent}>{ "全幅" }</Button>
        <Button onClick={mapApi.mapTo2Dview}>{ "2D" }</Button>
        <Button onClick={mapApi.mapTo3Dview}>{ "3D" }</Button>
        <Button onClick={mapApi.zoomIn}>{ "放大" }</Button>
        <Button onClick={mapApi.zoomOut}>{ "缩小" }</Button>
        <Button onClick={fullScreen}>{ fstxt }</Button>
      </section>
    </main>
  );
});

export { HomePage };

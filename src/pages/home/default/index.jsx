import React, { useState } from "react";
import { Button } from "antd";
import PageBuilder from "../../../common/pagerBuilder";
import { mapRef } from "../../../common/mapVisual";
import { mapApi } from "../../../common/mapVisual/api";
import "./index.less";

const HomePage = PageBuilder(() => {
  const [fstxt, setFstxt] = useState("进入全屏");

  // 进入全屏
  const fullScreen = () => {
    // mapApi.mapFullScreen(mapRef.current);

    const isFullScreen = mapApi.mapFullScreen(document.body);
    setFstxt(!isFullScreen ? "退出全屏" : "进入全屏");
  };

  return (
    <main className="page-content">
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

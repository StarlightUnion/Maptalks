import React from "react";
import { Button } from "antd";
import PageBuilder from "../../../common/pagerBuilder";
import { mapFullExtent, mapTo2Dview, mapTo3Dview, zoomIn, zoomOut, } from "../../../common/mapVisual/api";
import "./index.less";

const HomePage = PageBuilder(() => {
  return (
    <main className="page-content">
      <section className="tool-bar">
        <Button onClick={mapFullExtent}>{ "全幅" }</Button>
        <Button onClick={mapTo2Dview}>{ "2D" }</Button>
        <Button onClick={mapTo3Dview}>{ "3D" }</Button>
        <Button onClick={zoomIn}>{ "放大" }</Button>
        <Button onClick={zoomOut}>{ "缩小" }</Button>
      </section>
    </main>
  );
});

export { HomePage };

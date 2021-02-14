import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { Button, Radio, Switch, Slider } from "antd";
import PageBuilder from "../../../common/pagerBuilder";
// import { mapRef } from "../../../common/mapVisual";
import { mapApi, layerApi } from "../../../common/mapVisual/api";
import { utils } from "../../../common/mapVisual/tools";
import "./index.less";


const layers = layerApi.allBaseGroup();

const HomePage = PageBuilder(() => {
  const [fstxt, setFstxt] = useState("进入全屏");
  const [sliderShow, setSliderShow] = useState(false);
  const [disableState, setDisableState] = useState(false);

  // 订阅更新
  const currentGroupShow = useSelector(state => state.currentGroupShow);

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
    layerApi.showLayerByGroupName(e.target.value);
  };

  // 是否开启地图卷帘
  const onSwiperSwitchChange = (state) => {
    setDisableState(state);
    setSliderShow(state);
    layerApi.swipeScaleChange(50, false); // 设置卷帘默认值
    layerApi.swipe(state);
  };

  // 卷帘滑动条滑动
  const onSliderChange = (value) => {
    layerApi.swipeScaleChange(value, true);
  };

  return (
    <main className="page-content">
      <section className="swiper-bar">
        <span className="bar-title">{"地图卷帘"}</span>
        <Switch
          onChange={onSwiperSwitchChange}
          checkedChildren="开启"
          unCheckedChildren="关闭"
          style={{marginRight: ".4rem"}}
        />
        {
          sliderShow ?
            <div className="slider-container">
              <Slider defaultValue={50} min={1} onChange={onSliderChange} />
            </div>
            : null
        }
      </section>
      <section className="layer-bar">
        <Radio.Group
          onChange={onLayerSelectChange}
          value={currentGroupShow}
          disabled={disableState}
          defaultValue={layerApi.currentGroupShow}
        >
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

export default HomePage;

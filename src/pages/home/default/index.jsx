import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { Button, Radio, Switch, Slider } from "antd";
import PageBuilder from "../../../common/pagerBuilder";
// import { mapRef } from "../../../common/mapVisual";
import { mapApi, layerApi } from "../../../common/mapVisual/api";
import { utils } from "../../../common/mapVisual/tools";
import "./index.less";


const mapStateToProps = (state) => {
  return { currentGroupShow: state.currentGroupShow };
};
const layers = layerApi.allBaseGroup();

const HomePage = PageBuilder(connect(mapStateToProps)((props) => {
  console.info(props);

  const [fstxt, setFstxt] = useState("进入全屏");
  const [sliderShow, setSliderShow] = useState(false);

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
    setSliderShow(state);
    layerApi.swipe(state);
  };

  // 卷帘滑动条滑动
  const onSliderChange = (num) => {
    console.info(num);
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
              <Slider defaultValue={50} onChange={onSliderChange} />
            </div>
            : null
        }
      </section>
      <section className="layer-bar">
        <Radio.Group
          onChange={onLayerSelectChange}
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
}));

export { HomePage };

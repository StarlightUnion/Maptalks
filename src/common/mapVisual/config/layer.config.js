import * as maptalks from "maptalks";
// import * as maptalks from "#/maptalks/maptalks.es";// 本地文件
// import { ArcGISTileLayer } from "maptalks.arcgistilelayer";
import { WMTSTileLayer } from "maptalks.wmts";
import "maptalks/dist/maptalks.css";

const tdtKey = process.env.NODE_ENV === "production" ?
  window.API["prod"].tdtKey :
  window.API["dev"].tdtKey;

// 图层配置
const layerConfig = {
  Tdt_YXT_Layer: new maptalks.TileLayer("天地图影像图", {
    visible: false,
    minZoom: 0,
    maxZoom: 18,
    urlTemplate: `https://t{s}.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=${tdtKey}`,
    subdomains: ["0", "1", "2", "3", "4", "5"],
    opacity: 1
  }),
  Tdt_YXT_Layer_Bz: new maptalks.TileLayer("影像图标注", {
    visible: false,
    minZoom: 0,
    maxZoom: 18,
    urlTemplate: `https://t{s}.tianditu.gov.cn/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=${tdtKey}`,
    subdomains: ["1", "2", "3", "4", "5"],
    opacity: 1
  }),
  Tdt_DXT_Layer: new maptalks.TileLayer("天地图地形图", {
    visible: false,
    minZoom: 0,
    maxZoom: 18,
    urlTemplate: `https://t{s}.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=${tdtKey}`,
    subdomains: ["0", "1", "2", "3", "4", "5"],
  }),
  Tdt_DXT_Layer_Bz: new maptalks.TileLayer("天地图标注", {
    visible: false,
    minZoom: 0,
    maxZoom: 18,
    urlTemplate: `https://t{s}.tianditu.gov.cn/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=${tdtKey}`,
    subdomains: ["1", "2", "3", "4", "5"],
    opacity: 1
  }),
  // Dark_CSS_Layer: new WMTSTileLayer("暗黑蓝调地图", { //全国天地图
  //   spatialReference: {
  //     projection: "EPSG:4326",
  //   },
  //   opacity: 0.8,
  //   visible: true,
  //   minZoom: 0,
  //   maxZoom: 18,
  //   tileSystem: [1, -1, -180, 90],
  //   layer: "vec",
  //   tilematrixset: "c",
  //   format: "tiles",
  //   urlTemplate: `https://t{s}.tianditu.gov.cn/vec_c/wmts?T=ter_c&x={x}&y={y}&l={z}&tk=${tdtKey}`,
  //   subdomains: ["1", "2", "3", "4", "5"],
  //   cssFilter: "sepia(100%) invert(90%)",
  // }),
  Dark_CSS_Layer: new WMTSTileLayer("暗黑蓝调地图", { //全国天地图
    opacity: 0.8,
    visible: true,
    minZoom: 0,
    maxZoom: 18,
    urlTemplate: `https://t{s}.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=${tdtKey}`,
    subdomains: ["0", "1", "2", "3", "4", "5"],
    cssFilter: "sepia(100%) invert(90%)",
  }),
  // Dark_CSS_Layer_Bz: new WMTSTileLayer("暗黑蓝调地图标注", { //全国天地图标注
  //   spatialReference: {
  //     projection: "EPSG:4326",
  //   },
  //   opacity: 0.8,
  //   visible: true,
  //   minZoom: 0,
  //   maxZoom: 18,
  //   tileSystem: [1, -1, -180, 90],
  //   layer: "cta",
  //   tilematrixset: "c",
  //   format: "tiles",
  //   urlTemplate: `https://t{s}.tianditu.gov.cn/DataServer?T=cta_c&x={x}&y={y}&l={z}&tk=${tdtKey}`,
  //   subdomains: ["1", "2", "3", "4", "5"],
  //   cssFilter: "sepia(100%) invert(90%)",
  // }),
  Dark_CSS_Layer_Bz: new WMTSTileLayer("暗黑蓝调地图标注", { //全国天地图标注
    opacity: 0.8,
    visible: true,
    minZoom: 0,
    maxZoom: 18,
    urlTemplate: `https://t{s}.tianditu.gov.cn/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=${tdtKey}`,
    subdomains: ["1", "2", "3", "4", "5"],
    cssFilter: "sepia(100%) invert(90%)",
  }),
  // 行政边界
  // v_Layer: new maptalks.VectorLayer("v", {
  //   minZoom: 10,
  //   maxZoom: 15,
  //   forceRenderOnZooming: true,
  //   enableAltitude: true
  // })
};

export default layerConfig;
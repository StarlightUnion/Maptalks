import * as maptalks from "maptalks";
import { ArcGISTileLayer } from "maptalks.arcgistilelayer";
import { WMTSTileLayer } from "maptalks.wmts";
import "maptalks/dist/maptalks.css";

// 图层配置
const layerConfig = {
  Base_Layer: new maptalks.TileLayer('Base_Layer', {
    visible: false,
    minZoom: 0,
    maxZoom: 18,
    urlTemplate: 'https://api.mapbox.com/styles/v1/lgx/ck0ugmm06be381cqr6baf7vlf/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGd4IiwiYSI6ImNqdmtzb3RndjB1b2Y0OWw2N3c1MHB1c3UifQ.gxPbeGiE9o5-D6b2zaH_KA',
    subdomains: ['a', 'b', 'c', 'd'],
    opacity: 1
  }),
  Tdt_YXT_Layer: new maptalks.TileLayer('天地图影像图', {
    visible: false,
    minZoom: 0,
    maxZoom: 18,
    urlTemplate: 'https://t{s}.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=4513b858f412fe66b69158ce7ade62c9',
    subdomains: ['0', '1', '2', '3', '4', '5'],
    opacity: 1
  }),
  Tdt_YXT_Layer_Bz: new maptalks.TileLayer('影像图标注', {
    visible: false,
    minZoom: 0,
    maxZoom: 18,
    urlTemplate: 'https://t{s}.tianditu.gov.cn/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=4513b858f412fe66b69158ce7ade62c9',
    subdomains: ['1', '2', '3', '4', '5'],
    opacity: 1
  }),
  Tdt_DXT_Layer: new maptalks.TileLayer('天地图地形图', {
    visible: false,
    minZoom: 0,
    maxZoom: 18,
    urlTemplate: 'https://t{s}.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=4513b858f412fe66b69158ce7ade62c9',
    subdomains: ['0', '1', '2', '3', '4', '5'],
  }),
  Tdt_DXT_Layer_Bz: new maptalks.TileLayer('天地图标注', {
    visible: false,
    minZoom: 0,
    maxZoom: 18,
    urlTemplate: 'https://t{s}.tianditu.gov.cn/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=4513b858f412fe66b69158ce7ade62c9',
    subdomains: ['1', '2', '3', '4', '5'],
    opacity: 1
  }),
  Dark_CSS_Layer: new WMTSTileLayer('暗黑蓝调地图', { //浙江天地图
    spatialReference: {
      projection: 'EPSG:4326',
    },
    opacity: 0.8,
    tileSystem: [1, -1, -180, 90],
    urlTemplate: 'http://ditu.zjzwfw.gov.cn/services/wmts/emap/default/oss?token=2c92920471b56e640171be7444540073&service=WMTS&request=GetTile&version=1.0.0&layer=emap&style=default&tilematrixSet=esritilematirx&format=image/jpgpng&service=WMTS&request=GetTile&layer=vec&tilematrixset=c&format=tiles&version=1.0.0',
    subdomains: ['1', '2', '3', '4', '5'],
    cssFilter: 'sepia(100%) invert(90%)',
  }),
  Dark_CSS_Layer_Bz: new WMTSTileLayer('暗黑蓝调地图标注', { //浙江天地图标注
    spatialReference: {
      projection: 'EPSG:4326',
    },
    opacity: 0.8,
    tileSystem: [1, -1, -180, 90],
    urlTemplate: 'http://ditu.zjzwfw.gov.cn/services/wmts/emap_lab/default/oss?token=2c92920471b56e640171be7537bd0074&service=WMTS&request=GetTile&version=1.0.0&layer=emap&style=default&tilematrixSet=esritilematirx&format=image/jpgpng&service=WMTS&request=GetTile&layer=vec&tilematrixset=c&format=tiles&version=1.0.0',
    subdomains: ['1', '2', '3', '4', '5'],
    cssFilter: 'sepia(100%) invert(90%)',
  }),
  ArcGIS_GW_label_Layer: new ArcGISTileLayer('ArcGIS_GW_label', {
    urlTemplate: 'http://183.129.204.238:15100/arcgis/rest/services/Lm_LongShan_Gs/MapServer',
    visible: false,
    maxZoom: 25,
    minZoom: 17,
    forceRenderOnMoving: true,
    forceRenderOnRotating: true,
    forceRenderOnZooming: true,
  }),
  ArcGIS_GW_Layer: new ArcGISTileLayer('ArcGIS_GW', {
    urlTemplate: 'http://183.129.204.238:15100/arcgis/rest/services/Lm_LongShan_Gs/MapServer',
    visible: false,
    // maxZoom: 25,
    // minZoom: 5,
    forceRenderOnMoving: true,
    forceRenderOnRotating: true,
    forceRenderOnZooming: true,
  })
};

export default layerConfig;
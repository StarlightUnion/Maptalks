//地图初始化参数配置
const mapConfig = {
  // AppSetting: {
  //   LanIP: "", //内外IP
  //   WanIp: "", //外网IP
  //   Port: "", //端口
  // },
  Map: { //Map 初始化参数
    center: [120.2615506311306, 30.444871538047067], //地图中心点
    centerCity: [120.26072203928175, 30.437086945079926],
    zoom: 14.32, //初始化缩放级别
    maxZoom: 25, //最大缩放比例
    minZoom: 0, //最小缩放比例
    pitch: 0.8, //俯仰角
    bearing: -6.8, //方位
    fog: true, //是否开启雾化
    spatialReference: "EPSG:3857", //空间参考(EPSG) 默认为'EPSG:3857'， 投影坐标系配置为：identity
    resolutions: getResolutions(),
    BasicLayerConfig: { //底图配置 仅支持“切片方式”加载
      DxtConfig: {
        index: 0, //控件排列顺序 非叠加顺序 标注不显示控件  随相应图层进行联动
        Name: "地形图", //名称
        visible: true, //默认是否显示
        SourceType: "", //数据来源   Arcgis_Server/Tian_Di_Tu/MapBox/OpenStreetMap/......
        urlTemplate: "", //数据源
        subdomains: [], //子域替换urlTemplate中的“ {s}”   //数据源为Arcgis_Server可不填
        cssFilter: "sepia(0%) invert(0%)" // css filter  风格滤镜  sepia(100%) invert(90%)
      },
      DxtBzConfig: {
        index: 0,
        Name: "地形图标注",
        visible: true,
        SourceType: "",
        urlTemplate: "",
        subdomains: [],
        cssFilter: "sepia(0%) invert(0%)"
      },
      YxtConfig: {
        index: 1,
        Name: "影像图",
        visible: false,
        SourceType: "",
        urlTemplate: "",
        subdomains: [],
        cssFilter: "sepia(0%) invert(0%)"
      },
      YxtBzConfig: {
        index: 1,
        Name: "影像图标注",
        visible: false,
        SourceType: "",
        urlTemplate: "",
        subdomains: [],
        cssFilter: "sepia(0%) invert(0%)"
      },
      DistrictConfig: { //分区图层
        index: 2,
        Name: "分区",
        visible: true,
        SourceType: "",
        urlTemplate: "",
        subdomains: [],
        cssFilter: "sepia(0%) invert(0%)"
      },
      CADConfig: { //CAD图层
        index: 3,
        Name: "CAD",
        visible: false,
        SourceType: "",
        urlTemplate: "",
        subdomains: [],
        cssFilter: "sepia(0%) invert(0%)"
      },
      CustomOneConfig: { //预留 自定义图层1
        index: 4,
        Name: "自定义图层1",
        visible: false,
        SourceType: "",
        urlTemplate: "",
        subdomains: [],
        cssFilter: "sepia(0%) invert(0%)"
      },
      CustomTwoConfig: { //预留 自定义图层2
        index: 5,
        Name: "自定义图层2",
        visible: false,
        SourceType: "",
        urlTemplate: "",
        subdomains: [],
        cssFilter: "sepia(0%) invert(0%)"
      }
    }
  }
}

function getResolutions(res = []) {
  const d = 2 * 6378137 * Math.PI;
  for (var i = 0; i < 25; i++) {
    res.push(d / (256 * Math.pow(2, i)));
  }
  return res;
}

export default mapConfig;
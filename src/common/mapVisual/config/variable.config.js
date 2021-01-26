// 变量配置
const variableConfig = {
  CurrBaseMap: "Base_Layer", //(默认)当前展示的底图名称
  SwipeBeforeBaseMap: null, //地图卷帘之前显示的底图
  distanceTool: null,
  areaTool: null, //测距和测面积工具
  compassControl: null, //指北针
  locationControl: null, //坐标定位
  selectMesh: null, //选中的管线mesh
  flowpipeFatlineLyer: null, //供水管线
  drainPipe: null, //排水管线
  borderAndregionLayer: null, //边界 区域
  bigValueLayer: null, //大口径阀门
  gwTileLayer: null, //esri管网服务
  buildLayer: null, //建筑
  swipelayer: null, //卷帘图层

  monitorCar: null, //车辆监控
  monitorPeople: null, //人员监控
  monitorPoint: null, //监测点
  monitorPump: null,
  monitorPump_1: null, //监测泵站
  monitorFactory: null, //监测厂站
  alarmPoint: null, //报警点位
  wsDrainPipe: null, //污水
  ysDrainPipe: null, //雨水
  wsDrainPipe_Defec: null, //四色管线_污水
  ysDrainPipe_Defec: null, //四色管线_雨水
  wellPoint: null, //井
  monitorWork: null, //厂区
  monitorMp: null, //监测点
  monitorIw: null, //智慧井盖
  monitorPs: null, //泵站
  networkFault: null //管网缺陷
}

export default variableConfig;
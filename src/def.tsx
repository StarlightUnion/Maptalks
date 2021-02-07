// action type

export
enum ACTION_TYPE {
  CONFIG,
  MAP,
  CURRENTGROUPSHOW
}


export
interface ACTION {
  type: ACTION_TYPE;
  [prop: string]: any;
}

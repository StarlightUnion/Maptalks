// action type

export
enum ACTION_TYPE {
  CONFIG,
  GLOBALCONFIG
}


export
interface ACTION {
  type: ACTION_TYPE;
  [prop: string]: any;
}

// action type

export
enum ACTION_TYPE {
  CONFIG,
  MAP
}


export
interface ACTION {
  type: ACTION_TYPE;
  [prop: string]: any;
}

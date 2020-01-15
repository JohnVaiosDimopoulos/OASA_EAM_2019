
interface Times {
  start?: string;
  end?: string;
}

export interface LinesModel {
  name?: string;
  type?: string;
  times: Times[];
}

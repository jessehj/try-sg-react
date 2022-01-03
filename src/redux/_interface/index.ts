export interface ActionInterface {
  type: string;
  params: ActionParamsInterface;
}
export interface ActionParamsInterface {
  inputId?: string;
  password?: string;
}

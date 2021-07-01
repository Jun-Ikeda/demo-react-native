export interface ITestState {
  name: string
}

export interface ITestStateAction extends ITestState {
  type: string
}

export const INITIAL_STATE: ITestState = {
  name: 'Nanasi',
};

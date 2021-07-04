import { ITestStateAction } from './config';

export const deleteName = (): ITestStateAction => ({
  type: 'DELETE_NAME',
  name: '',
});

// 引数nameをとり、{type: "ADD_NAME", name: name}を返すjsの関数。
export const setName = (name: string): ITestStateAction => ({
  type: 'ADD_NAME',
  name,
});

export const increase = () => ({
  type: 'INCREMENT',
});

export const decrease = () => ({
  type: 'DECREMENT',
});

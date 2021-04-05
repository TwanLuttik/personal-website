import { App } from '../../app';



export const BaseState = {
  TAB: App.State<number>(0),
  SIDEBAR_OPEN: App.State<boolean>(false)
};


export const base = App.Controller({
  state: BaseState
})
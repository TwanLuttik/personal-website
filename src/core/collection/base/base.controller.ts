import { App } from '../../app';



export const BaseState = {
  TAB: App.State<string>('home'),
};


export const base = App.Controller({
  state: BaseState
})
import { makeAutoObservable } from 'mobx';

export class User {
  constructor(
    /**
     * 用户 ID
     */
    public readonly userId: string,
    /**
     * 用户名
     */
    public name: string,
    /**
     * 用户头像
     */
    public avatar: string = ''
  ) {
    makeAutoObservable(this);
  }
}

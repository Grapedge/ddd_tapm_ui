import { flow } from 'mobx';
import { User } from '@/models/User';
import type { RootStore } from './RootStore';

export class AuthStore {
  user?: User = undefined;

  accessToken: string = '';

  constructor(private readonly rootStore: RootStore) {}

  get isSignIn() {
    return !!this.user;
  }

  signIn = flow(function* signIn(this: AuthStore, authCode: string) {
    // 发送授权码到服务器
    // 拿到用户 token
    this.accessToken = '';
    // const { userStore } = this.rootStore;
    // 获取用户信息
    yield;
    const user = new User('201800301001', 'Grapes');
    return user;
  });
}

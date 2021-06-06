import { AuthStore } from './AuthStore';
import { UiStore } from './UiStore';

export class RootStore {
  authStore: AuthStore;

  uiStore: UiStore;

  constructor() {
    this.authStore = new AuthStore(this);
    this.uiStore = new UiStore(this);
  }
}

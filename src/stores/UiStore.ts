import { AppName } from '@/constants/global';
import { makeAutoObservable } from 'mobx';
import { RootStore } from './RootStore';

export enum UiLayout {
  HomeLayout,
  ProductLayout,
}

export class UiStore {
  pageTitle: string = AppName;

  constructor(private readonly rootStore: RootStore) {
    makeAutoObservable(this);
  }

  setPageTitle(title: string) {
    this.pageTitle = title;
  }
}

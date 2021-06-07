import { Product } from '@/models/Product';
import { flow, makeAutoObservable } from 'mobx';
import { RootStore } from './RootStore';

export class ProductStore {
  entities = new Map<string, Product>();

  constructor(private readonly rootStore: RootStore) {
    makeAutoObservable(this);
  }

  findByOwnerId = flow(function* findProductByOwnerId(
    this: ProductStore,
    ownerId: string
  ) {
    yield;
  });
}

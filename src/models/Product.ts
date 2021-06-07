import { makeAutoObservable } from 'mobx';

export class Product {
  constructor(
    public readonly id: string,
    public name: string,
    public description: string,
    public logo: string,
    public productOwnerId: string,
    public readonly createdAt: Date
  ) {
    makeAutoObservable(this);
  }
}

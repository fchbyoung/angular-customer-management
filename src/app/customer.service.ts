import { Injectable } from '@angular/core';
import { Customer } from './customer';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customersList: Customer[] = [
    {
      id: 1,
      fullName: 'James Gosling',
      age: 65,
      address: 'US'
    },
    {
      id: 2,
      fullName: 'Linus Torvalds',
      age: 49,
      address: 'US'
    }
  ];

  constructor() {

  }

  getList(): Customer[] {
    return this.customersList;
  }

  getListRealtime(): Observable<Customer[]> {
    return of(this.customersList);
  }

  getDetail(id: number) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.customersList.length; i++) {
      if (this.customersList[i].id === id) {
        return this.customersList[i];
      }
    }
  }

  add(customer: Customer) {
    this.customersList.push(customer);
  }

  delete(id: number) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.customersList.length; i++) {
      if (this.customersList[i].id === id) {
        this.customersList.splice(i, 1);
        break;
      }
    }
  }
}

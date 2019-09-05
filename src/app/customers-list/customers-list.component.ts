import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CustomerService} from '../customer.service';
import {Customer} from '../customer';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {

  customers: Customer[];
  @Output() customerClick = new EventEmitter<Customer>();

  constructor(private customerService: CustomerService) { }

  ngOnInit() {

    const updateCustomersEvent = this.customerService.getListRealtime();

    updateCustomersEvent.subscribe( newList => {
      this.customers = newList;
    });
  }

  selectCustomer(customer: Customer) {
    this.customerClick.emit(customer);
  }

  deleteCustomer(id: number) {
    this.customerService.delete(id);
  }
}

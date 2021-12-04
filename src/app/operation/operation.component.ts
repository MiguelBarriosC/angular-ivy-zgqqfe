import { Component, OnInit } from '@angular/core';
import { Operation } from '../store/operation/operation.model';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { add } from '../store/operation/operation.action';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css'],
})
export class OperationComponent implements OnInit {
  constructor(private store: Store) {
    this.op = this.store.select((state) => state.operation.operation);
  }
  n1: number = 0;
  n2: number = 0;
  result = 0;
  operator = '';
  op;
  ngOnInit() {
    this.op.subscribe((res) => {
      console.log(res);
    });
  }

  n1Change() {
    const operation: Operation = {
      number1: this.n1,
      number2: this.n2,
      signo: '+',
      result: 0,
    };
    this.store.dispatch(new add(operation));
    this.op.subscribe((res) => {
      console.log(res);
    });
  }

  n2Change() {
    const operation: Operation = {
      number1: this.n1,
      number2: this.n2,
      signo: '+',
      result: 0,
    };
    this.store.dispatch(new add(operation));
  }
}

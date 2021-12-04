import { Operation } from './operation.model';

export class add {
  static readonly type = '[OPERATION] add';
  constructor( public payload: Operation) {}
}

export class sum {
  static readonly type = '[OPERATION] sum';
  constructor( public payload: Operation ) {}
}
export class res {
  static readonly type = '[OPERATION] res';
  constructor( public payload: string ) {}
}
export class multi {
  static readonly type = '[OPERATION] multi';
  constructor( public payload: string ) {}
}
export class poten {
  static readonly type = '[OPERATION] poten';
  constructor( public payload: string ) {}
}
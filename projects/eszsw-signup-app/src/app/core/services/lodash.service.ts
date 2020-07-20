// tslint:disable:typedef
import { Injectable } from '@angular/core';
import {
  forEach,
  isEmpty,
  isArray,
  find,
  every,
  countBy,
  map,
  filter,
  orderBy,
  reduce
} from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class LodashService {

  constructor() { }

  get isEmpty() {
    return isEmpty;
  }
  get isArray() {
    return isArray;
  }
  get forEach() {
    return forEach;
  }
  get find() {
    return find;
  }
  get every() {
    return every;
  }
  get map() {
    return map;
  }
  get countBy() {
    return countBy;
  }
  get filter() {
    return filter;
  }
  get orderBy() {
    return orderBy;
  }
  get reduce() {
    return reduce;
  }
}

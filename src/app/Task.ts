import { Type } from '@angular/core';
import { TYPE } from './TYPE';
import { STATUS } from './STATUS';
import { OCCURRENCE  } from './OCCURRENCE';


export class Task{
  name:string="Task A";
  priority:number;
  startDate:Date;
  endDate:Date;
  parent:String;
  status:STATUS;
  occurrence:OCCURRENCE;
  type:TYPE;
  search:string;
}

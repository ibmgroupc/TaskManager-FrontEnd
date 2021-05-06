export class Task{
  name:string = "Task A";
  priority:number;
  startDate:Date;
  endDate:Date;
  parent:String;
  status:string = "TODO";
  occurrence:string = "ONCE";
  type:string = "DEVELOPMENT";
  search:string;
}

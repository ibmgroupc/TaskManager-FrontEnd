export class Task{
  name:string = "Task A";
  priority:number=15;
  startDate:Date;
  endDate:Date;
  parent:String;
  status:string = "TODO";
  occurance:string = "ONCE";
  type:string = "DEVELOPMENT";
  searchField:string;
  username:string="user1";
}

export class Task{
  id:any;
  name:string = "Task A";
  priority:number=15;
  startDate:Date;
  endDate:Date;
  parent:string="No";
  status:string = "TODO";
  occurance:string = "ONCE";
  type:string = "DEVELOPMENT";
  searchField:string;
  username:string="user1";
  startdate: string;
  enddate: string;
}

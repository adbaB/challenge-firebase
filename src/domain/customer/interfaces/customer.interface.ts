export interface ICustomer {
  id:string;
  name:string;
  lastname:string;
  birthday:Date;
  age?:number | null;

}
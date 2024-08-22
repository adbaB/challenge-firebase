import { uuid } from "uuidv4";
import { IUser } from "../interfaces/user.interface";

export class User {
  constructor(private attributes:IUser){
  }


  static create (createUser: {
    username: string,
    email: string,
    password?:string,
  }):User{
    return new User({
      id: uuid(),
      email:createUser.email,
      username: createUser.username,
      password: createUser.password,
    })
  }

  toValue():IUser{
    return {
      id: this.attributes.id,
      email: this.attributes.email,
      username:this.attributes.username,
      password:this.attributes?.password    
    }
  }
}
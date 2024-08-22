
export class UserNotFoundException extends Error {
  constructor(private readonly id:string){
    super(`User Not found ${id}`)
  }
}
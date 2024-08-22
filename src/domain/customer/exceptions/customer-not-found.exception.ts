export class CustomerNotFoundException extends Error {
  constructor(private readonly id:string){
    super(`Customer not found ${id}`)
  }
}
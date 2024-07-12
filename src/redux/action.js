import { Add_User } from "./constant"

export const Add = (data) =>
{
   return{
    type:Add_User,
    data
   }
}
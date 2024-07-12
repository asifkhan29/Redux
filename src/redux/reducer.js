import { Add_User } from "./constant"

export const User = (data = [] , action) =>
{
   switch(action.type)
   {
     case Add_User :
        return [action.data , ...data]
     default :
        return [...data]
   }
}
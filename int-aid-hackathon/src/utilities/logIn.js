import { dbClient } from "../services/dbClient"

export const logIn = async (email, pass) => {
    
   let {session, user, error} = await dbClient.auth.signIn({email, pass})

   if (user) { 
       let res = {
           user: user,
           session: session
       }
       return res
   } else {
       return error
   }
}
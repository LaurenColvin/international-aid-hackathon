
import { dbClient } from "../services/dbClient";

export const teacherSubmitOne = async ({id, name, country}) => {
    console.log(name, country)
    const {data: user, error} = await dbClient
    .from("teacher_profiles")
    .insert({
        name: `${name}`,
        country: `${country}`,
        owner: id
    })


    //TODO: ERROR HANDLING

if (error) {
    console.error(error)
}
if (user) {
    console.log(user)
    return user
}
    
}



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


//didn't add agerange --grace
export const teacherSubmitTwo = async ({id, schoolName, country, schoolAddress, city, postalCode}) => {
  
    const {data: user, error} = await dbClient
    .from("teacher_profiles")
    .update({
        school: `${schoolName}`,
        country: `${country}`,
        address: `${schoolAddress}`,
        city_town: `${city}`,
        postalcode: `${postalCode}`,
    })
    .match({owner: id})


    //TODO: ERROR HANDLING

if (error) {
    console.error(error)
}
if (user) {
    console.log(user)
    return user
}
    
}

//only made room for 1 image --grace
export const teacherSubmitThree = async ({id, userImg}) => {
    console.log(id, userImg)
    const {data: user, error} = await dbClient
    .from("teacher_profiles")
    .update({
        user_img_url: `${userImg}`,
    })
    .match({owner: id})

    //TODO: ERROR HANDLING

if (error) {
    console.error(error)
}
if (user) {
    console.log(user)
    return user
}
    
}
export const teacherSubmitFour = async ({id, q1, q2, q3}) => {
    console.log(id, q1, q2, q3)
    const {data: user, error} = await dbClient
    .from("teacher_profiles")
    .update({
        q_1: `${q1}`,
        q_2: `${q2}`,
        q_3: `${q3}`,
    })
    .match({owner: id})

    //TODO: ERROR HANDLING

if (error) {
    console.error(error)
}
if (user) {
    console.log(user)
    return user
}
    
}

//no idea what we are doing here
// below is handling bulk create --grace
// const { data, error } = await supabase
//   .from('cities')
//   .insert([
//     { name: 'The Shire', country_id: 554 },
//     { name: 'Rohan', country_id: 555 },
//   ])
export const teacherSubmitFive = async ({id}) => {
 
    const {data: user, error} = await dbClient
    .from("wishlists")
    .insert({
       /*  user_img_url: `${userImg}`, */
    })
    .match({owner: id})

    //TODO: ERROR HANDLING

if (error) {
    console.error(error)
}
if (user) {
    console.log(user)
    return user
}
    
}

export const teacherSubmitFour = async ({id, q1, q2, q3}) => {
    console.log(id, q1, q2, q3)
    const {data: user, error} = await dbClient
    .from("teacher_profiles")
    .update({
        q_1: `${q1}`,
        q_2: `${q2}`,
        q_3: `${q3}`,
    })
    .match({owner: id})

    //TODO: ERROR HANDLING

if (error) {
    console.error(error)
}
if (user) {
    console.log(user)
    return user
}
    
}

//not that important
//form thats prefilled --grace for that edit page
// export default function Form({ bountyForm, setBountyForm, handleSubmit }) {
//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="name">Name:</label>
//       <input
//         type="text"
//         value={bountyForm.name}
//         onChange={(e) => setBountyForm({ ...bountyForm, name: e.target.value })}
//         id="name"
//       />

//       <label htmlFor="watedFor">wanted for:</label>
//       <input
//         type="text"
//         value={bountyForm.wantedFor}
//         onChange={(e) =>
//           setBountyForm({ ...bountyForm, wantedFor: e.target.value })
//         }
//         id="wantedfor"
//       />

//       <label htmlFor="reward">Reward:</label>
//       <input
//         type="text"
//         value={bountyForm.reward}
//         onChange={(e) =>
//           setBountyForm({ ...bountyForm, reward: e.target.value })
//         }
//         id="reward"
//       />

//       <label htmlFor="client">Client:</label>
//       <input
//         type="text"
//         value={bountyForm.client}
//         onChange={(e) =>
//           setBountyForm({ ...bountyForm, client: e.target.value })
//         }
//         id="client"
//       />

//       <label htmlFor="ship">Ship:</label>
//       <input
//         type="text"
//         value={bountyForm.ship}
//         onChange={(e) => setBountyForm({ ...bountyForm, ship: e.target.value })}
//         id="ship"
//       />

//       <label htmlFor="captured">Captured:</label>
//       <input
//         type="text"
//         value={bountyForm.captured}
//         onChange={(e) =>
//           setBountyForm({ ...bountyForm, captured: e.target.value })
//         }
//         id="captured"
//       />

//       <input type="submit" />
//     </form>
//   );
// }

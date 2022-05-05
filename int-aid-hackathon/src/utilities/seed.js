import { dbClient } from "../services/dbClient";

const seed = async() =>{
  const { data, error } = await dbClient.from("teacher_profile").insert([
    {
      name: "Grace",
      user_img_url:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      school: "GSchool",
    },
    //f4879112-cb4e-43e7-a27d-4d9c15a40505
    {
      name: "Lauren",
      user_img_url:
        "https://this-person-does-not-exist.com/img/avatar-cfb5e39ec216f835b8065425b1027e6f.jpg",
      school: "LaurenSchool",
    },
    //34344aa9-1f4d-43d5-ad0e-42c5dd71cf54
    {
      name: "Ben",
      user_img_url:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      school: "BenSchool",
    },
    //491f381f-b956-476f-9596-8950c855227b
    {
      name: "Jordan",
      user_img_url:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      school: "JordanSchool",
    },
    //a1ea1c08-c69a-44e2-bd8a-8d6cdf941a34
    {
      name: "Margaret",
      user_img_url:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      school: "MargeretSchool",
    },
    //dbae6adf-8e33-4db8-9d71-dd2b1d8ad2eb
    {
      name: "Jordan W",
      user_img_url:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      school: "JordanSchool",
    },
    //74465498-fa11-4d44-be8f-17dc826ebcfd
    {
      name: "Art",
      user_img_url:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      school: "ArtSchool",
    },
    //a34e6b70-cd14-4bcd-ac38-923e3f95995b
  ])
}

// const wishlist_seed = async() =>{
//   const { data, error } = await dbClient.rpc

//   //is there a way to get  all the teacher_profiles.id in an array?
//   .from('wishlist')
//   .insert([
//     { owner_id: [
//       {
//         id: teacher_profiles[0].id
//       }
//     ], 
//       item_id: [
//         {
//           id: items[0].id
//         }
//       ],  
//       quantity: 2 },
//     { owner_id: teacher_profiles[0].id, item_id: items[2].id, quantity: 12 },
//     { owner_id: teacher_profiles[0].id, item_id: items[4].id, quantity: 20 },
//     { owner_id: teacher_profiles[0].id, item_id: items[6].id, quantity: 2 },
//     { owner_id: teacher_profiles[0].id, item_id: items[8].id, quantity: 20 },
//     { owner_id: teacher_profiles[0].id, item_id: items[10].id, quantity: 11 },
//     { owner_id: teacher_profiles[0].id, item_id: items[12].id, quantity: 2 },
//     { owner_id: teacher_profiles[1].id, item_id: items[14].id, quantity: 4 },
//     { owner_id: teacher_profiles[1].id, item_id: items[16].id, quantity: 6 },
//     { owner_id: teacher_profiles[1].id, item_id: items[1].id, quantity: 8 },
//     { owner_id: teacher_profiles[1].id, item_id: items[3].id, quantity: 10 },
//     { owner_id: teacher_profiles[1].id, item_id: items[5].id, quantity: 11 },
//     { owner_id: teacher_profiles[1].id, item_id: items[7].id, quantity: 12 },
//     { owner_id: teacher_profiles[1].id, item_id: items[9].id, quantity: 2 },
//     { owner_id: teacher_profiles[2].id, item_id: items[11].id, quantity: 1 },
//     { owner_id: teacher_profiles[2].id, item_id: items[13].id, quantity: 3 },
//     { owner_id: teacher_profiles[2].id, item_id: items[15].id, quantity: 5 },
//     { owner_id: teacher_profiles[2].id, item_id: items[17].id, quantity: 7 },
//     { owner_id: teacher_profiles[2].id, item_id: items[0].id, quantity: 11 },
//     { owner_id: teacher_profiles[2].id, item_id: items[2].id, quantity: 9 },
//     { owner_id: teacher_profiles[2].id, item_id: items[4].id, quantity: 13 },
//     { owner_id: teacher_profiles[3].id, item_id: items[6].id, quantity: 15 },
//     { owner_id: teacher_profiles[3].id, item_id: items[8].id, quantity: 20 },
//     { owner_id: teacher_profiles[3].id, item_id: items[10].id, quantity: 17 },
//     { owner_id: teacher_profiles[3].id, item_id: items[12].id, quantity: 19 },
//     { owner_id: teacher_profiles[3].id, item_id: items[14].id, quantity: 31 },
//     { owner_id: teacher_profiles[3].id, item_id: items[16].id, quantity: 100 },
//     { owner_id: teacher_profiles[3].id, item_id: items[1].id, quantity: 11 },
//     { owner_id: teacher_profiles[4].id, item_id: items[3].id, quantity: 13 },
//     { owner_id: teacher_profiles[4].id, item_id: items[5].id, quantity: 16 },
//     { owner_id: teacher_profiles[4].id, item_id: items[7].id, quantity: 20 },
//     { owner_id: teacher_profiles[4].id, item_id: items[9].id, quantity: 20 },
//     { owner_id: teacher_profiles[4].id, item_id: items[11].id, quantity: 20 },
//     { owner_id: teacher_profiles[4].id, item_id: items[13].id, quantity: 20 },
//     { owner_id: teacher_profiles[4].id, item_id: items[17].id, quantity: 20 },
//     { owner_id: teacher_profiles[5].id, item_id: items[0].id, quantity: 20 },
//     { owner_id: teacher_profiles[5].id, item_id: items[2].id, quantity: 20 },
//     { owner_id: teacher_profiles[5].id, item_id: items[4].id, quantity: 20 },
//     { owner_id: teacher_profiles[5].id, item_id: items[6].id, quantity: 25 },
//     { owner_id: teacher_profiles[5].id, item_id: items[8].id, quantity: 7 },
//     { owner_id: teacher_profiles[5].id, item_id: items[10].id, quantity: 15 },
//     { owner_id: teacher_profiles[5].id, item_id: items[12].id, quantity: 5 },
//     { owner_id: teacher_profiles[6].id, item_id: items[14].id, quantity: 10 },
//     { owner_id: teacher_profiles[6].id, item_id: items[16].id, quantity: 20 },
//     { owner_id: teacher_profiles[6].id, item_id: items[1].id, quantity: 25 },
//     { owner_id: teacher_profiles[6].id, item_id: items[3].id, quantity: 0 },
//     { owner_id: teacher_profiles[6].id, item_id: items[5].id, quantity: 50 },
//     { owner_id: teacher_profiles[6].id, item_id: items[7].id, quantity: 20 },
//     { owner_id: teacher_profiles[6].id, item_id: items[9].id, quantity: 120 },
    

//   ])
// }

// const wishlist_seed = async() =>{
//   const { data, error } = await dbClient.rpc

//   //is there a way to get  all the teacher_profiles.id in an array?
//   .from('wishlist')
//   .insert([
//     { owner_id: [
//       {
//         id: teacher_profiles[0].id
//       }
//     ], 
//       item_id: [
//         {
//           id: items[0].id
//         }
//       ],  
//       quantity: 2 },
//     { owner_id: teacher_profiles[0].id, item_id: items[2].id, quantity: 12 },
//     { owner_id: teacher_profiles[0].id, item_id: items[4].id, quantity: 20 },
//     { owner_id: teacher_profiles[0].id, item_id: items[6].id, quantity: 2 },
//     { owner_id: teacher_profiles[0].id, item_id: items[8].id, quantity: 20 },
//     { owner_id: teacher_profiles[0].id, item_id: items[10].id, quantity: 11 },
//     { owner_id: teacher_profiles[0].id, item_id: items[12].id, quantity: 2 },
//     { owner_id: teacher_profiles[1].id, item_id: items[14].id, quantity: 4 },
//     { owner_id: teacher_profiles[1].id, item_id: items[16].id, quantity: 6 },
//     { owner_id: teacher_profiles[1].id, item_id: items[1].id, quantity: 8 },
//     { owner_id: teacher_profiles[1].id, item_id: items[3].id, quantity: 10 },
//     { owner_id: teacher_profiles[1].id, item_id: items[5].id, quantity: 11 },
//     { owner_id: teacher_profiles[1].id, item_id: items[7].id, quantity: 12 },
//     { owner_id: teacher_profiles[1].id, item_id: items[9].id, quantity: 2 },
//     { owner_id: teacher_profiles[2].id, item_id: items[11].id, quantity: 1 },
//     { owner_id: teacher_profiles[2].id, item_id: items[13].id, quantity: 3 },
//     { owner_id: teacher_profiles[2].id, item_id: items[15].id, quantity: 5 },
//     { owner_id: teacher_profiles[2].id, item_id: items[17].id, quantity: 7 },
//     { owner_id: teacher_profiles[2].id, item_id: items[0].id, quantity: 11 },
//     { owner_id: teacher_profiles[2].id, item_id: items[2].id, quantity: 9 },
//     { owner_id: teacher_profiles[2].id, item_id: items[4].id, quantity: 13 },
//     { owner_id: teacher_profiles[3].id, item_id: items[6].id, quantity: 15 },
//     { owner_id: teacher_profiles[3].id, item_id: items[8].id, quantity: 20 },
//     { owner_id: teacher_profiles[3].id, item_id: items[10].id, quantity: 17 },
//     { owner_id: teacher_profiles[3].id, item_id: items[12].id, quantity: 19 },
//     { owner_id: teacher_profiles[3].id, item_id: items[14].id, quantity: 31 },
//     { owner_id: teacher_profiles[3].id, item_id: items[16].id, quantity: 100 },
//     { owner_id: teacher_profiles[3].id, item_id: items[1].id, quantity: 11 },
//     { owner_id: teacher_profiles[4].id, item_id: items[3].id, quantity: 13 },
//     { owner_id: teacher_profiles[4].id, item_id: items[5].id, quantity: 16 },
//     { owner_id: teacher_profiles[4].id, item_id: items[7].id, quantity: 20 },
//     { owner_id: teacher_profiles[4].id, item_id: items[9].id, quantity: 20 },
//     { owner_id: teacher_profiles[4].id, item_id: items[11].id, quantity: 20 },
//     { owner_id: teacher_profiles[4].id, item_id: items[13].id, quantity: 20 },
//     { owner_id: teacher_profiles[4].id, item_id: items[17].id, quantity: 20 },
//     { owner_id: teacher_profiles[5].id, item_id: items[0].id, quantity: 20 },
//     { owner_id: teacher_profiles[5].id, item_id: items[2].id, quantity: 20 },
//     { owner_id: teacher_profiles[5].id, item_id: items[4].id, quantity: 20 },
//     { owner_id: teacher_profiles[5].id, item_id: items[6].id, quantity: 25 },
//     { owner_id: teacher_profiles[5].id, item_id: items[8].id, quantity: 7 },
//     { owner_id: teacher_profiles[5].id, item_id: items[10].id, quantity: 15 },
//     { owner_id: teacher_profiles[5].id, item_id: items[12].id, quantity: 5 },
//     { owner_id: teacher_profiles[6].id, item_id: items[14].id, quantity: 10 },
//     { owner_id: teacher_profiles[6].id, item_id: items[16].id, quantity: 20 },
//     { owner_id: teacher_profiles[6].id, item_id: items[1].id, quantity: 25 },
//     { owner_id: teacher_profiles[6].id, item_id: items[3].id, quantity: 0 },
//     { owner_id: teacher_profiles[6].id, item_id: items[5].id, quantity: 50 },
//     { owner_id: teacher_profiles[6].id, item_id: items[7].id, quantity: 20 },
//     { owner_id: teacher_profiles[6].id, item_id: items[9].id, quantity: 120 },
    

//   ])
// }
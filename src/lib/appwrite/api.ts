 // here interface is type of INewuser
import { INewUser } from "@/types";
import {ID} from "appwrite" 
import { account, appwriteConfig, avatars, databases } from "./config";


 export async function createUserAccount(user:INewUser) {
    try{
      const newAccount=  await account.create(
           ID.unique(),
           user.email,
           user.password,
           user.name
      )
      
      if(!newAccount) throw Error 
      const avaterUrl = avatars.getInitials(user.name);
      const newUser = await saveUserToDB({
        accountId:newAccount.$id,
        name:newAccount.name,
        email:newAccount.email,
        username:user.username,
        imageurl:avaterUrl
      })


    return newUser
    }
    catch(error){
        console.log(error)
        return error
    }
    
 }

 export async function saveUserToDB(user:
  //destructure
  {accountId:string;
  email:string;
  name:string;
  imageurl:URL;
  username? : string}
 ){
  try{
    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      user,
    )
  }
  catch(error){
    console.log(error)
  }
 }
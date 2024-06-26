import {Client, Account, Databases, Storage, Avatars} from "appwrite"


export const appwriteConfig = {
    projectId : import.meta.env.VITE_APPWRITE_PROJECT_ID,
    url       :import.meta.env.VITE_APPWRITE_URL,
}


//creating instance for every component
export const client = new Client()  

//to configure client 
client.setProject(appwriteConfig.projectId)
client.setEndpoint(appwriteConfig.url)

export const account = new Account(client)  
export const databases = new Databases(client)  
export const storage = new Storage(client)  
export const avatars = new Avatars(client)  
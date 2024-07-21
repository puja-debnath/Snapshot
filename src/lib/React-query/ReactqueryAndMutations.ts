import {useQuery,useMutation,useQueryClient,useInfiniteQuery} from "@tanstack/react-query"
import { createUserAccount } from "../appwrite/api"
// simplify data fetching and mutation , caching , infinite scroll

export const UseCreateUserAccountMutation = () => {
    return useMutation({
        mutationFn: (user:INewUser) => createUserAccount(user)
    })

}
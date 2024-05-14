import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import { UserPost } from "../types"

async function getUserPosts({userId}: Params) {
  const userPosts: UserPost | UserPost[] = await fetch(`https://jsonplaceholder.typicode.com/posts?userID=${userId}`).then(res => res.json()).catch(err => { throw new Error(err.message)})

  return userPosts
}

export default getUserPosts
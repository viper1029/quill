import Dashboard from '@/components/Dashboard'
import { db } from '@/db'
import { getServerAuthSession } from '@/lib/auth'
import { getUserSubscriptionPlan } from '@/lib/stripe'
import { redirect } from 'next/navigation'

const Page = () => {
  console.log("eknjdskjsdakjnsadkjl")
  //const session = await getServerAuthSession();
  //const user = session?.user
  console.log("ajkhsdhjsadjhkdsakjh")
  console.log(user)

  if (!user || !user.id) redirect('/auth-callback?origin=dashboard')

  const dbUser = await db.user.findFirst({
    where: {
      id: user.id
    }
  })

  if(!dbUser) redirect('/auth-callback?origin=dashboard')

  const subscriptionPlan = await getUserSubscriptionPlan()

  return <Dashboard subscriptionPlan={subscriptionPlan} />
}

export default Page

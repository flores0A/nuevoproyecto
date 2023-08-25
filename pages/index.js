
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router'

function HomePage() {

  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === 'loading') {
    return <p>loading............</p>
  }

  if (status === 'unauthenticated') {
    router.push('/login')
  }

  return (
    <div>
      {
      session ? (
        <div>
          <h1>{session.user.name}</h1>
      <p>{session.user.email}</p>
      <image src={session.user.image} alt="" />
        </div>
      ) : (
        <p>skeleton</p>
      )}

    </div>
  );
}
export default HomePage
import { useRouter } from "next/router"

function LoginPage(){

    const router = useRouter()
    return ( 
        <div>
            <button onClick={()=> router.push('/api/auth/signin/github')}>
                signin with github
            </button>
        </div>
    )
}
export default LoginPage
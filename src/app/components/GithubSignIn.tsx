import { signIn } from "@/auth"

export default function GithubSignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github")
      }}
    >
        <button 
        className="text-[20px] cursor-pointer bg-gray-900 px-10 py-5 rounded-2xl text-white" 
        type="submit">
          GitHub
        </button>
    </form>
  )
} 
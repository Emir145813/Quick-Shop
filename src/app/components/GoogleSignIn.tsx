import { signIn } from "@/auth"

export default function GoogleSignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
        <button 
        className="text-[20px] cursor-pointer bg-red-500 px-10 py-5 rounded-2xl text-white" 
        type="submit">
          Google
        </button>
    </form>
  )
} 
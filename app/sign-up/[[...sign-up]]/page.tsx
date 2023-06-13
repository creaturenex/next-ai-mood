import { SignUp } from "@clerk/nextjs";

// this is a server component
// without this you would have to pass it to component
const SignUpPage = () =>{
  return <SignUp
  path="/sign-up"
  routing="path"
  signInUrl="/sign-in"
  redirectUrl="/new-user"
  afterSignUpUrl="/new-user"
  />
}

export default SignUpPage

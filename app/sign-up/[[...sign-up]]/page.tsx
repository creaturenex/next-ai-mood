import { SignUp } from "@clerk/nextjs";

// this is a server component
// without this you would have to pass it to component
const SignUpPage = () => {
  return <SignUp afterSignUpUrl="/new-user" redirectUrl="/new-user" />
}

export default SignUpPage

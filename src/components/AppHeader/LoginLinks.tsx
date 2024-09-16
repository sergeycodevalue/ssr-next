import Link from "next/link";

const LoginLinks = () => (
  <>
    <Link href="/signin" className="mr-2">
      SignIn
    </Link>
    /
    <Link href="/signup" className="ml-2">
      SignUp
    </Link>
  </>
);

export default LoginLinks;

import { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {children}
    </div>
  )
};

export default AuthLayout;

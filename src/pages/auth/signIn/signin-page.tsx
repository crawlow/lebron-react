import Dank from "@assets/img/illlustrations/dank.svg";
import { AuthLayout } from "@shared/auth-layout/auth-layout";
import { SignInForm } from "@widgets/auth/signIn/signIn-form";

export interface ISignInProps {}

export const SignInPage = () => {
  return (
    <div className="page-sign-in">
      <AuthLayout img={Dank} title={"Sign In"}>
        <SignInForm />
      </AuthLayout>
    </div>
  );
};

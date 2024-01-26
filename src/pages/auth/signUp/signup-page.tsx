import Dribbling from "@assets/img/illlustrations/dribbling.svg";
import { AuthLayout } from "@shared/auth-layout/auth-layout";
import { SignUpForm } from "@widgets/auth/signUp/signup-form";

export interface ISignInProps {}

export const SignUpPage = () => {
  return (
    <div className="page-sign-up">
      <AuthLayout img={Dribbling} title={"Sign Up"}>
        <SignUpForm />
      </AuthLayout>
    </div>
  );
};

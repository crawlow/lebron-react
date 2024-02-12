import { Button } from "@shared/button/button";
import { Input } from "@shared/input/input";
import { Validators } from "@shared/common/validators/Validators";
import { useForm } from "react-hook-form";
import s from "./../style/sign-form.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "@router/router";
import { useSignInMutation } from "@entities/api/auth/authApi";
import { useAppDispatch } from "@entities/redux/store";
import { loginAction } from "@entities/redux/authSlice";

interface ISignInForm {
  login: string;
  password: string;
}

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInForm>({
    defaultValues: {
      login: "",
      password: "",
    },
  });

  const [signIn, { isLoading }] = useSignInMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data: ISignInForm) => {
    try {
      const user = await signIn({
        login: data.login,
        password: data.password,
      }).unwrap();
      dispatch(loginAction(user));
      navigate(ROUTES.Teams);
    } catch (err: any) {
      if (err?.status === 401)
        console.log(`User with this credentials doesn't exist`);
      else console.log(`Something went wrong`);
    }
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        id="login"
        label="Login"
        autoComplete="username"
        register={register("login", {
          minLength: Validators.Min(2),
          maxLength: Validators.Max(20),
          required: Validators.Required,
        })}
        error={errors.login}
      />
      <Input
        id="password"
        label="Password"
        type="password"
        autoComplete="current-password"
        register={register("password", {
          minLength: Validators.Min(8),
          maxLength: Validators.Max(20),
          required: Validators.Required,
        })}
        error={errors.password}
      />
      <Button isLoading={isLoading}>Sign In</Button>
      <p className={s.suggestion}>
        Not a member yet?{" "}
        <Link to={ROUTES.SignUp} className={s.link}>
          Sign Up
        </Link>
      </p>
    </form>
  );
};

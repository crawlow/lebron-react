import { Button } from "@shared/button/button";
import { Checkbox } from "@shared/checkbox/checkbox";
import { Validators } from "@shared/common/validators/Validators";
import { Input } from "@shared/input/input";
import { useForm } from "react-hook-form";
import s from "./../style/sign-form.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "@router/router";
import { useSignUpMutation } from "@entities/api/auth/authApi";
import { useAppDispatch } from "@entities/redux/store";
import { loginAction } from "@entities/redux/authSlice";

interface ISignUpForm {
  name: string;
  login: string;
  password: string;
  confirmPassword: string;
  agree: boolean;
}

export const SignUpForm = () => {
  const [signUp, { isLoading }] = useSignUpMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSignUp = async (data: ISignUpForm) => {
    try {
      const user = await signUp({
        login: data.login,
        password: data.password,
        userName: data.name,
      }).unwrap();
      dispatch(loginAction(user));
      navigate(ROUTES.Teams);
    } catch (e: any) {
      if (e?.originalStatus == 409) {
        console.log(`User with this login already exists`);
      } else {
        console.log(`Something went wrong`);
      }
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<ISignUpForm>({
    defaultValues: {
      name: "",
      login: "",
      password: "",
      confirmPassword: "",
      agree: false,
    },
  });
  return (
    <form className={s.form} onSubmit={handleSubmit(onSignUp)}>
      <Input
        id="name"
        label="Name"
        autoComplete="name"
        register={register("name", {
          minLength: Validators.Min(2),
          maxLength: Validators.Max(20),
          required: Validators.Required,
        })}
        error={errors.name}
      />
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
      <Input
        id="confirm-password"
        label="Confirm Password"
        type="password"
        autoComplete="confirm-password"
        register={register("confirmPassword", {
          minLength: Validators.Min(8),
          maxLength: Validators.Max(20),
          validate: (value) => {
            const { password } = getValues();
            return password === value || "Passwords does not match";
          },
        })}
        error={errors.confirmPassword}
      />
      <Checkbox
        register={register("agree", {
          required: Validators.Required,
        })}
        error={errors.agree}
      >
        I accept the agreement
      </Checkbox>
      <Button isLoading={isLoading}>Sign Up</Button>
      <p className={s.suggestion}>
        Already a member?{" "}
        <Link to={ROUTES.SignIn} className={s.link}>
          Sign In
        </Link>
      </p>
    </form>
  );
};

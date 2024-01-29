import { Button } from "@shared/button/button";
import { Checkbox } from "@shared/checkbox/checkbox";
import { Validators } from "@shared/common/validators/Validators";
import { Input } from "@shared/input/input";
import { useForm } from "react-hook-form";
import s from "./../style/sign-form.module.scss";
import { Link } from "react-router-dom";
import { ROUTES } from "@router/router";

interface ISignUpForm {
  name: string;
  login: string;
  password: string;
  confirmPassword: string;
  agree: boolean;
}

export const SignUpForm = () => {
  const onSignUp = (data: any) => {
    console.log("onSignUp", data);
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
            const { password } = getValues()
            return password === value || 'Passwords does not match'
        },
        })}
        error={errors.confirmPassword}
      />
      <Checkbox
        register={register("agree", {
            required: Validators.Required,
        })}
        error={errors.agree}
      >I accept the agreement</Checkbox>
      <Button>Sign Up</Button>
      <p className={s.suggestion}>
        Already a member?{' '}
        <Link to={ROUTES.SignIn} className={s.link}>
            Sign In
        </Link>
    </p>
    </form>
  );
};

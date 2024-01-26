import { Button } from "@shared/button/button";
import { Checkbox } from "@shared/checkbox/checkbox";
import { Validators } from "@shared/common/validators/Validators";
import { Input } from "@shared/input/input";
import { useForm } from "react-hook-form";

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
    <form onSubmit={handleSubmit(onSignUp)}>
    <Input
      id="name"
      label="Name"
      autoComplete="name"
      register={register("login", {
        minLength: Validators.Min(2),
        maxLength: Validators.Max(20),
        required: Validators.Required,
      })}
      error={errors.login}
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
          required: Validators.Required,
        })}
        error={errors.confirmPassword}
      />
      <Checkbox>I Agree</Checkbox>
      <Button>Sign Up</Button>
    </form>
  );
};

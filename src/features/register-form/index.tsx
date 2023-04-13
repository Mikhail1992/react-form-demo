import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Input } from "../../shared/ui";
import c from "./styles.module.css";
import { useState } from "react";

const schema = yup
  .object({
    name: yup.string(),
    email: yup.string().email().required(),
    password1: yup
      .string()
      .required("no password provided")
      .min(8, "password is too short - should be 8 chars minimum"),
    password2: yup
      .string()
      .oneOf([yup.ref("password1")], "passwords must match"),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const RegisterForm = () => {
  const [isSent, setIsSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    // send data
    console.log(data);
    setIsSent(true);
    reset();
  };

  return (
    <form className={c.container} onSubmit={handleSubmit(onSubmit)}>
      <div className={c.title}>Register Form</div>

      <div className={c.field}>
        <Input label="Name" type="text" {...register("name")} />
      </div>
      <div className={c.field}>
        <Input
          label="Email"
          type="email"
          error={!!errors?.email?.message}
          helperText={errors?.email?.message as string}
          {...register("email", { required: true })}
        />
      </div>
      <div className={c.field}>
        <Input
          label="Password"
          type="password"
          error={!!errors?.password1?.message}
          helperText={errors?.password1?.message as string}
          {...register("password1", { required: true })}
        />
      </div>
      <div className={c.field}>
        <Input
          label="Provide password one more time"
          type="password"
          error={!!errors?.password2?.message}
          helperText={errors?.password2?.message as string}
          {...register("password2", { required: true })}
        />
      </div>
      <div className={c.field}>
        <Button type="submit" fullWidth>
          Submit
        </Button>
      </div>
      {isSent && <div className={c.field}>The form has been submitted</div>}
    </form>
  );
};

export default RegisterForm;

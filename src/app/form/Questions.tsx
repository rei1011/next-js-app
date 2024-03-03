"use client";

import {
  FieldError,
  FormProvider,
  SubmitHandler,
  UseFormRegister,
  UseFormRegisterReturn,
  useForm,
  useFormContext,
} from "react-hook-form";

type Inputs = {
  question1: string;
  question2: string;
  question3: string;
};

export function Questions() {
  const methods = useForm<Inputs>({ shouldFocusError: true });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = methods;
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const values = watch();
  console.dir(errors);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <TextQuestion
            fieldName="question1"
            label="直近1年間の間に国外へ渡航しましたか"
            error={errors["question1"]}
          />
          <TextQuestion
            fieldName="question2"
            label="渡航した国を記入してください"
            error={errors["question2"]}
            isShow={values["question1"] === "はい"}
          />
          <TextQuestion
            fieldName="question3"
            label="体温を記入してください"
            error={errors["question3"]}
          />
          <button className="border-2" type="submit">
            送信
          </button>
        </div>
      </form>
    </FormProvider>
  );
}

function TextQuestion({
  fieldName,
  label,
  error,
  isShow = true,
}: {
  fieldName: string;
  label: string;
  error: FieldError | undefined;
  isShow?: boolean;
}) {
  const { register } = useFormContext();
  const _register = {
    ...register(fieldName, { required: true }),
  };
  return (
    <div className={`flex flex-col ${!isShow && "hidden"}`}>
      <label>{label}</label>
      <input className="border-2" {..._register} />
      <span className="text-red-600">
        {error != null ? "入力してください" : ""}
      </span>
    </div>
  );
}

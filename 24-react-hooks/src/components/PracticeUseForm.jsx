import { useForm } from "react-hook-form";

export default function PracticeUseForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onValid = (data) => {
    console.log("제출됨", data);
  };
  const onInvalid = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <input
          type="text"
          placeholder="이름"
          {...register("name", {
            required: "이름은 필수 항목입니다.",
          })}
        />
        {errors.name?.message}
        <br />
        <input
          type="number"
          placeholder="나이"
          {...register("age", {
            validate: {
              positive: (value) => {
                return value > 0 || "0 이상의 숫자만 입력 가능합니다.";
              },
            },
          })}
        />
        {errors.age?.message}
        <br />
        <button type="submit">제출</button>
      </form>
    </>
  );
}

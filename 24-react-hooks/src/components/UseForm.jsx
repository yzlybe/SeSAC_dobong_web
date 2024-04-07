import { useForm } from "react-hook-form";

export default function Form() {
  const forms = useForm();
  const {
    //+ 앞의 셋은 메소드, formState는 객체 형태로 가지고온다
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // 단축평가
  /* 
    &&: 여러 조건 중에 하나라도 false라면 전체값 false
    ||: 여러 조건 중에 하나라도 true라면 전체값 true
  */
  // console.log("단축평가:: false ||", false || "hello"); // hello
  // console.log("단축평가:: true ||", true || "hello"); // true
  // console.log("단축평가:: false &&", false && "hello"); // false
  // console.log("단축평가:: true &&", true && "hello"); // hello

  //   console.log("errors", errors); // {email?, username?}
  //   console.log("email invalid message", errors.email?.message);

  //   console.log("watch username", watch("username"));
  console.log("entire info", watch());

  const onValid = (data) => {
    console.log("valid", data);
    // data={username:"~~"}
    // axios 요청
  };
  const onInvalid = (data) => {
    console.log("invalid", data);
    // console.log(data.username?.message);
  };

  const userNameRegister = register("username");
  //   console.log(userNameRegister);

  return (
    <>
      <h1>useFrom 사용해보기</h1>
      {/* 
      handleSubmit(func1[, func2]) : 인자로 두 개의 함수를 받을 수 있음 //+ 새로고침을 방지해준다
      - func1: 필수, 유효할 때 실행
      - func2: 선택, 유효하지 않을 때 실행
      */}
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <input
          type="text"
          placeholder="username"
          //+   {...userNameRegister} 이렇게는 잘 안 씀
          {...register("username", {
            required: "이름을 입력해주세요.",
            minLength: {
              value: 2,
              message: "이름은 최소 두 글자 이상 작성해주세요.",
            },
          })}
        />
        {errors.username?.message}
        <br />
        <input
          type="email"
          placeholder="email"
          {...register("email", {
            required: "이메일을 입력해주세요.",
            validate: {
              useGmail: (value) => {
                // value: input.value
                // gmail.com이 포함되면 true 리턴, 포함되지 않으면 string 리턴
                return (
                  value.includes("gmail.com") || "gmail로만 가입 가능합니다."
                );
              },
            },
          })}
        />
        {errors.email?.message}
        <br />
        <input
          type="password"
          placeholder="password"
          {...register("password")}
        />
        <button type="submit">제출</button>
      </form>
    </>
  );
}

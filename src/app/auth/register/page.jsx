import CustomInput from "../../../components/auth/customInput";

const RegisterPage = () => {
  return (
    <div className="bg-backgroundSecondary flex flex-col">
      <div>
        <div className="text-3xl font-medium">Welcome Back!</div>
        <div className="text-base font-medium">
          Enter your Credentials to access your account
        </div>
      </div>
      <form className="flex flex-col">
        <CustomInput
          type="text"
          placeholder="Enter your Name"
          name="name"
          label="Name"
        />
        <CustomInput
          type="email"
          placeholder="Enter your Email"
          name="emailAddress"
          label="Email Address"
        />
        <CustomInput
          type="password"
          placeholder="Enter your Password"
          name="password"
          label="Password"
        />
        <input type="checkbox" name="remember" id="remember" />{" "}
        <label htmlFor="remember">Remember for 30 days</label>
      </form>
    </div>
  );
};

export default RegisterPage;

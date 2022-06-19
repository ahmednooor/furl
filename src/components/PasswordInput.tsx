function PasswordInput({
  password,
  setPassword,
  shouldShowPassword,
}: {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  shouldShowPassword: boolean;
}) {
  return (
    <input
      style={{
        marginRight: "12px",
        fontSize: "1em",
        padding: "8px 12px",
        color: "var(--fg-color)",
        backgroundColor: "var(--bg-color)",
        borderRadius: "4px",
      }}
      autoFocus={true}
      type={shouldShowPassword ? "text" : "password"}
      value={password}
      placeholder={"Enter password"}
      onChange={(event) => setPassword(event?.currentTarget.value)}
    />
  );
}

export default PasswordInput;

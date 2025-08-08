function Input({
  type = "text",
  disabled = false,
  placeholder,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      className="border-foreground dark:bg-background text-background font-description bg-background w-full rounded-lg border p-3 placeholder-gray-400"
      {...props}
    />
  );
}

export default Input;

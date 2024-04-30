import { forwardRef, type InputHTMLAttributes } from "react";

// We pass the ref to the input element,
// this is necessary for react-hook-form
// to do it's magic 🪄
const TextInput = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <input
      className="invalid:ring-red-500 w-full border-0 placeholder:opacity-50 invalid:ring-1 focus:ring-secondary"
      {...props}
      ref={ref}
    />
  );
});

TextInput.displayName = "TextInput";
export default TextInput;

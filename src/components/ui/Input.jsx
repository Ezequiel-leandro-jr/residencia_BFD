export default function Input({
  label,
  type = "text",
  placeholder,
}) {
  return (
    <div className="flex flex-col gap-1">
      <label
        className="
        text-xs
        font-medium
        text-green-900
      "
      >
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="
          h-11
          w-80
          rounded-xl
          border
          border-green-500
          px-4
          text-sm
          outline-none
          transition

          focus:border-green-700
          focus:ring-2
          focus:ring-green-200

        "
      />
    </div>
  );
}
export default function LinkButton({
  children,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        text-sm
        font-medium
        text-[var(--color-primary)]
        transition
        hover:underline
      "
    >
      {children}
    </button>
  );
}
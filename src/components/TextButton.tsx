const getSizeClasses = (size: "sm" | "md" | "lg") => {
  switch (size) {
    case "sm":
      return "w-16 p-2 text-sm";
    case "md":
      return "w-32 p-4 text-md";
    case "lg":
      return "w-64 p-8 text-lg";
    default:
      return "w-32 p-4 text-md";
  }
};

export default function TextButton({
  text,
  size,
  hanlderOnClick,
}: {
  text: string;
  size?: "sm" | "md" | "lg";
  hanlderOnClick?: () => void;
}) {
  let sizeClasses = getSizeClasses(size);

  return (
    <button
      onClick={hanlderOnClick}
      className={
        "bg-white rounded-3xl shadow-2xl drop-shadow-2xl text-[#6B21A5] mb-12 hover:opacity-[35%] " +
        sizeClasses
      }
    >
      {text}
    </button>
  );
}

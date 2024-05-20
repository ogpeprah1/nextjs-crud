export default function Input({
  value,
  labelText,
  labelFor,
  id,
  name,
  type,
  placeholder,
  customWidth,
}) {
  return (
    <div className="">
      <label htmlFor={labelFor} className="sr-only">
        {labelText}
      </label>
      <input
        value={value}
        id={id}
        name={name}
        type={type}
        className={`rounded-lg w-${customWidth} px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
        placeholder={placeholder}
      />
    </div>
  );
}

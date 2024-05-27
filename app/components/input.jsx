export default function Input({
  labelText,
  labelFor,
  name,
  type,
  placeholder,
  customWidth,
  handleChange,
}) {
  return (
    <input
      name={name}
      type={type}
      className={`rounded-md w-[100%] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}

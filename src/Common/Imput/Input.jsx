export default function Input({ type, name, placeHolder, className }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeHolder}
      className={className}
    />
  );
}

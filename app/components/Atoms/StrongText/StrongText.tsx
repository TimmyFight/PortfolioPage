interface StrongTextProperties {
  children: string;
}

const StrongText = ({ children }: StrongTextProperties) => {
  return <strong className="text-neutral-300">{children}</strong>;
};

export default StrongText;

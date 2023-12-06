interface StrongTextProperties {
  children: string;
  customClass?: string;
}

const StrongText = ({ children, customClass }: StrongTextProperties) => {
  return (
    <strong data-testid="strongText" className={customClass}>
      {children}
    </strong>
  );
};

StrongText.defaultProps = {
  customClass: "text-neutral-300",
};

export default StrongText;

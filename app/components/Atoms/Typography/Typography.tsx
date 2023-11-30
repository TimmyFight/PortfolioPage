interface TypographyProperties {
  children?: string;
  customClass?: string;
}

const Typography = ({ children, customClass }: TypographyProperties) => {
  return (
    <p data-testid="typography" className={customClass}>
      {children}
    </p>
  );
};

Typography.defaultProps = {
  children: "",
  customClass: "",
};

export default Typography;

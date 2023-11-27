interface TypographyProperties {
  children?: string;
  customClass?: string;
}

const Typography = ({ children, customClass }: TypographyProperties) => {
  return <p className={customClass}>{children}</p>;
};

Typography.defaultProps = {
  children: "",
  customClass: "",
};

export default Typography;

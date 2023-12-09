interface ChipProperties {
  technology: string;
}

const Chip = ({ technology }: ChipProperties) => {
  return <div data-testid="chip">{technology}</div>;
};

export default Chip;

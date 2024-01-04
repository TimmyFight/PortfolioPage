import Typography from '../Typography/Typography';

interface ChipProperties {
  technology: string;
}

const Chip = ({ technology }: ChipProperties) => {
  return (
    <div
      data-testid="chip"
      className="bg-emerald-700 py-1 px-4 rounded-xl"
    >
      <Typography customClass="text-sm text-neutral-300">
        <>{technology}</>
      </Typography>
    </div>
  );
};

export default Chip;

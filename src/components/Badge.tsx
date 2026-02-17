type BadgeProps = {
  text: string;
};
const Badge = (props: BadgeProps) => {
  return (
    <span className="border border-primary px-2.5 py-1.5 rounded-full text-sm w-fit mx-auto">
      {props.text}
    </span>
  );
};

export default Badge;

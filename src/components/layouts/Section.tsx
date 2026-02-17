type SectionProps = {
  id: string;
  className?: string;
  children: React.ReactNode;
};
const Section: React.FC<SectionProps> = (props) => {
  const { id, className, children } = props;
  return (
    <section
      id={id}
      className={`py-20 flex flex-col gap-6 px-6 items-center ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;

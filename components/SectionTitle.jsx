
const SectionTitle = ({title,icon}) => {
  return (
    <div className="glassEffect px-4 py-2 flex items-center gap-x-2">
      {icon}
      <span className="body md:heading-6 font-medium">{title}</span>
    </div>
  );
};

export default SectionTitle;

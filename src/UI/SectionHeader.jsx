const SectionHeader = ({ title, text }) => {
  return (
    <div className="flex items-center justify-center text-center flex-col gap-4 mt-10 mb-8">
      <h1 className="font-bold text-[24px]">{title}</h1>
      <p className="text-[#999999] text-sm w-[600px] max-w-full">{text}</p>
    </div>
  );
};

export default SectionHeader;

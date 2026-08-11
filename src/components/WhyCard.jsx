function WhyCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center gap-2 md:p-4 p-2">
      <div className="text-[#FF8500] w-12 h-12">
        {icon}
      </div>
      <h3 className="text-[#FF8500] font-bold text-sm">{title}</h3>
      <p className="max-w-[400px] text-gray-600 md:text-sm text-[12px] leading-[135%]">{description}</p>
    </div>
  );
}

export default WhyCard;
function IngredientCard({ image, title, description }) {
  return (
    <div className="flex flex-col items-center text-center gap-2 md:p-4 p-2 bg-white rounded-[8px]">
      <div className="text-[#FF8500] w-20 h-20">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>
      <h3 className="text-[#FF8500] font-bold text-sm">{title}</h3>
      <p className="text-gray-600 md:text-sm text-[12px] leading-[135%]">{description}</p>
    </div>
  );
}

export default IngredientCard;
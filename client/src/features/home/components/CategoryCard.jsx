export default function CategoryCard({category}) {
  return (
    <div className="bg-main-yellow-color w-[20rem] h-[6rem] flex flex-col gap-2 justify-center items-center shadow-md hover:bg-main-text-color hover:text-main-yellow-color transition-all group cursor-pointer">
      <h3 className="font-bold text-white text-xl">{category}</h3>
      <p className="text-main-text-color font-semibold group-hover:text-main-yellow-color">1853 skills</p>
    </div>
  );
}

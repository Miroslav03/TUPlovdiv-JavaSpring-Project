export default function Question({queston, answer}) {
  return (
    <div>
      <h1 className="font-bold text-main-yellow-color text-xl">{queston}</h1>
      <p className="text-main-text-color font-semibold sm:text-[0.9rem]">{answer}</p>
    </div>
  );
}

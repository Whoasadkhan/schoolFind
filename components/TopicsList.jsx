import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function TopicsList() {
  const { topics } = await getTopics();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
    {topics.map((t) => (
      <div
        key={t._id}
        className="p-4 border rounded-lg border-slate-300 overflow-hidden group hover:shadow-lg hover:bg-blue-200 transition-transform duration-300 transform hover:scale-105"
      >
        <div className="relative overflow-hidden mb-4 rounded-md group">
          <img
            src={t.image}
            alt={t.title}
            className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
  
        <div >
          <h2 className="font-bold uppercase text-xl mb-2">{t.name}</h2>
          <div>Board: {t.board}</div>
          <div>City: {t.city}</div>
          <div>Address: {t.address}</div>
        </div>
  
        <div className="mt-4  flex items-center justify-between">
          <RemoveBtn id={t._id} />
          <Link href={`/addSchool`}>
            <HiPencilAlt size={24} />
          </Link>
        </div>
      </div>
    ))}
  </div>
  
);
}

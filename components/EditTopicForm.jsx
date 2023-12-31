// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function EditTopicForm({ id,  name, address, board, city, image }) {

//   const [newName, setNewName] = useState(name);
//   const [newAddress, setNewAddress] = useState(address);
//   const [newBoard, setNewBoard] = useState(board);
//   const [newCity, setNewCity] = useState(city);
//   const [newImage, setNewImage] = useState(image);

//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
//         method: "PUT",
//         headers: {
//           "Content-type": "application/json",
//         },
//         body: JSON.stringify({
        
//           newName,
//           newAddress,
//           newBoard,
//           newCity,
//           newImage,
//         }),
//       });

//       if (!res.ok) {
//         throw new Error("Failed to update topic");
//       }

//       router.refresh();
//       router.push("/");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      

//       <input
//         onChange={(e) => setNewName(e.target.value)}
//         value={newName}
//         className="border border-slate-500 px-8 py-2"
//         type="text"
//         placeholder="Name"
//       />

//       <input
//         onChange={(e) => setNewAddress(e.target.value)}
//         value={newAddress}
//         className="border border-slate-500 px-8 py-2"
//         type="text"
//         placeholder="Address"
//       />

//       <input
//         onChange={(e) => setNewBoard(e.target.value)}
//         value={newBoard}
//         className="border border-slate-500 px-8 py-2"
//         type="text"
//         placeholder="Board"
//       />

//       <input
//         onChange={(e) => setNewCity(e.target.value)}
//         value={newCity}
//         className="border border-slate-500 px-8 py-2"
//         type="text"
//         placeholder="City"
//       />

//       <input
//         onChange={(e) => setNewImage(e.target.value)}
//         value={newImage}
//         className="border border-slate-500 px-8 py-2"
//         type="text"
//         placeholder="Image URL"
//       />

//       <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
//         Update Topic
//       </button>
//     </form>
//   );
// }

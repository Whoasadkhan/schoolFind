
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [board, setBoard] = useState("");
  const [city, setCity] = useState("");
  const [image, setImage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !address || !city || !board  || !image) {
      alert("All Fields Are Required");
      return;
    }

    try {
      
      // Make the API request with the image URL
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          address,
          board,
          city,
          image: image ? await convertImageToBase64(image) : null, // Use the uploaded image URL
        }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.error("Error creating a topic:", error);
    }
  };
  // Function to convert an image file to base64
  const convertImageToBase64 = (imageFile) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(imageFile);
    });
  };

  

  return (
    <form encType="multipart/form-data" onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="School Name"
      />

      <input
        onChange={(e) => setAddress(e.target.value)}
        value={address}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Address"
      />

      <input
        onChange={(e) => setBoard(e.target.value)}
        value={board}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Board"
      />

<input
        onChange={(e) => setCity(e.target.value)}
        value={city}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="City"
      />

    

      <input
        onChange={(e) => setImage(e.target.files[0])}
        type="file"
        accept="image/*"
        className="border border-slate-500 px-8 py-2"
      />

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Add School
      </button>
    </form>
  );
}
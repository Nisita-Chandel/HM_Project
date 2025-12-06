import React, { useState } from "react";
import api from "../api";

const AddProductPage = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    stock: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0] || null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setLoading(true);

    try {
      let imageUrl = "";

      // 1️⃣ Pehle image upload karo ImageKit par
      if (imageFile) {
        const formData = new FormData();
        formData.append("image", imageFile);

        const uploadRes = await api.post(
          "/upload/product-image",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        imageUrl = uploadRes.data.url;
        console.log("Uploaded image URL:", imageUrl);
      }

      // 2️⃣ Ab product create karo, imageUrl ke saath
      const res = await api.post("/products", {
        ...form,
        price: Number(form.price),
        stock: Number(form.stock || 0),
        image: imageUrl,
      });

      setMsg("Product created successfully!");
      console.log("Product created:", res.data);
      // optional: form reset
      setForm({
        name: "",
        price: "",
        description: "",
        category: "",
        stock: "",
      });
      setImageFile(null);
    } catch (err) {
      console.error(err);
      setMsg("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-semibold mb-6">Add Product</h1>

      {msg && <p className="mb-4 text-blue-600">{msg}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
        <input
          name="price"
          placeholder="Price"
          type="number"
          value={form.price}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
        <input
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
        <input
          name="stock"
          placeholder="Stock"
          type="number"
          value={form.stock}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full"
        />

        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-black text-white rounded"
        >
          {loading ? "Saving..." : "Add Product"}
        </button>
      </form>
    </main>
  );
};

export default AddProductPage;

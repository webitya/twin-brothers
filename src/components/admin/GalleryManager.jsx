"use client";

import { useState, useEffect } from "react";
import { FaUpload, FaTrash, FaSpinner, FaEdit } from "react-icons/fa";

export default function GalleryManager() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ title: "", description: "", file: null });

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/gallery");
      const data = await res.json();
      setImages(data.images || []);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!formData.file && !editingId) return;

    setUploading(true);

    const data = new FormData();
    if (formData.file) data.append("file", formData.file);
    data.append("title", formData.title);
    data.append("description", formData.description);

    try {
      const url = editingId ? `/api/gallery/${editingId}` : "/api/gallery";
      const method = editingId ? "PUT" : "POST";

      const res = await fetch(url, { method, body: data });

      if (res.ok) {
        fetchImages();
        setFormData({ title: "", description: "", file: null });
        setEditingId(null);
        document.getElementById("fileInput")?.reset();
      }
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this image?")) {
      try {
        await fetch(`/api/gallery/${id}`, { method: "DELETE" });
        fetchImages();
      } catch (error) {
        console.error("Delete error:", error);
      }
    }
  };

  const handleEdit = (image) => {
    setEditingId(image._id);
    setFormData({ title: image.title, description: image.description, file: null });
  };

  return (
    <div className="space-y-10">

      {/* UPLOAD CARD */}
      <div className="bg-white/90 backdrop-blur-xl border border-teal-100 rounded-xl shadow-lg p-8">

        <h2 className="text-3xl font-serif text-teal-900 mb-6 flex items-center gap-2">
          {editingId ? "Edit Image" : "Upload New Image"}
        </h2>

        <form onSubmit={handleUpload} id="fileInput" className="space-y-5">

          <div>
            <label className="text-sm font-semibold text-teal-900 mb-1 block">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              placeholder="Beautiful therapy room"
              className="w-full px-4 py-3 bg-white border border-teal-200 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-teal-900 mb-1 block">
              Description
            </label>
            <textarea
              name="description"
              rows={3}
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Describe the image..."
              className="w-full px-4 py-3 bg-white border border-teal-200 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none resize-none"
            />
          </div>

          {!editingId && (
            <div>
              <label className="text-sm font-semibold text-teal-900 mb-1 block">
                Image File
              </label>
              <input
                type="file"
                accept="image/*"
                required={!editingId}
                onChange={handleFileChange}
                className="w-full cursor-pointer"
              />
            </div>
          )}

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={uploading}
              className="px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold shadow hover:bg-teal-700 transition-all flex items-center gap-2"
            >
              {uploading ? (
                <>
                  <FaSpinner className="animate-spin" /> Uploading...
                </>
              ) : (
                <>
                  <FaUpload /> {editingId ? "Update Image" : "Upload Image"}
                </>
              )}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={() => {
                  setEditingId(null);
                  setFormData({ title: "", description: "", file: null });
                }}
                className="px-6 py-3 border border-teal-600 text-teal-700 rounded-lg hover:bg-teal-50 transition-all"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* GALLERY TABLE */}
      <div className="bg-white/90 backdrop-blur-xl border border-teal-100 rounded-xl shadow-lg p-8">

        <h2 className="text-3xl font-serif text-teal-900 mb-6">
          Gallery Images ({images.length})
        </h2>

        {loading ? (
          <div className="flex justify-center py-10">
            <FaSpinner className="animate-spin text-teal-600 text-4xl" />
          </div>
        ) : images.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-teal-50 border-teal-100">
                  <th className="py-3 px-4 text-left font-semibold text-teal-900">Title</th>
                  <th className="py-3 px-4 text-left font-semibold text-teal-900">Description</th>
                  <th className="py-3 px-4 text-left font-semibold text-teal-900">Image</th>
                  <th className="py-3 px-4 text-center font-semibold text-teal-900">Actions</th>
                </tr>
              </thead>

              <tbody>
                {images.map((image) => (
                  <tr
                    key={image._id}
                    className="border-b border-teal-100 hover:bg-teal-50 transition-all"
                  >
                    <td className="py-3 px-4">{image.title}</td>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      {image.description?.length > 45
                        ? image.description.substring(0, 45) + "..."
                        : image.description}
                    </td>
                    <td className="py-3 px-4">
                      <a
                        href={image.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-600 underline hover:text-teal-800"
                      >
                        View
                      </a>
                    </td>

                    <td className="py-3 px-4 text-center">
                      <div className="flex justify-center gap-3">
                        <button
                          onClick={() => handleEdit(image)}
                          className="text-blue-600 hover:text-blue-800 text-lg"
                          title="Edit"
                        >
                          <FaEdit />
                        </button>

                        <button
                          onClick={() => handleDelete(image._id)}
                          className="text-red-600 hover:text-red-800 text-lg"
                          title="Delete"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        ) : (
          <p className="text-center text-teal-900 py-8">
            No images yet. Upload your first one!
          </p>
        )}
      </div>
    </div>
  );
}

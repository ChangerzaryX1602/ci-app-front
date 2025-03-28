"use client";

import { useState, useCallback } from "react";
import { useDropzone, Accept } from "react-dropzone";
import Image from "next/image";
const mockModelInputs = [
    { id: 1, type: "pdf", name: "Training Guide.pdf", date: "2025-03-20" },
];

export default function AdminPageMock() {
    const [type, setType] = useState<string | null>(null);
    const [link, setLink] = useState<string>("");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [question, setQuestion] = useState<string>("");

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            setSelectedFile(acceptedFiles[0]);
            console.log("File selected:", acceptedFiles[0]);
        }
    }, []);

    const getAcceptTypes = (type: string | null): Accept | undefined => {
        switch (type) {
            case "pdf":
                return { "application/pdf": [".pdf"] };
            case "docx":
                return {
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
                };
            case "json" :
                return { "application/json": [".json"] };
            case "image":
                return { "image/*": [".png", ".jpg", ".jpeg"] };
            default:
                return undefined;
        }
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: getAcceptTypes(type),
        maxFiles: 1, 
        multiple: false, 
        disabled: type === "link" || selectedFile !== null,
      });

    return (
        <div className="min-h-screen bg-gray-950 text-white p-8 space-y-10">
            <h1 className="text-3xl font-bold">Admin - Model Trainer</h1>

            {/* CURRENT MODEL INPUTS */}
            <section className="bg-gray-900 p-6 rounded-xl shadow-md space-y-4">
                <h2 className="text-xl font-semibold">Current Model Inputs</h2>
                <table className="w-full text-left text-sm">
                    <thead>
                        <tr className="border-b border-gray-700">
                            <th className="py-2">Type</th>
                            <th>Name / URL</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockModelInputs.map((item) => (
                            <tr key={item.id} className="border-b border-gray-800">
                                <td className="py-2 capitalize">{item.type}</td>
                                <td className="truncate text-blue-300">{item.name}</td>
                                <td>{item.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            {/* INPUT CONFIG */}
            <section className="bg-gray-900 p-6 rounded-xl shadow-md space-y-6">
                <h2 className="text-xl font-semibold">Add New Input</h2>

                {/* Step 1: Select Type */}
                <div>
                    <label className="block mb-1">1. Select Input Type</label>
                    <select
                        value={type || ""}
                        onChange={(e) => {
                            setType(e.target.value);
                            setSelectedFile(null);
                            setLink("");
                        }}
                        className="w-full p-2 rounded bg-gray-800 border border-gray-700"
                    >
                        <option value="" disabled>Select type</option>
                        <option value="pdf">PDF</option>
                        <option value="docx">DOCX</option>
                        <option value="image">Image</option>
                        <option value="json">Json</option>
                        <option value="link">Website (URL)</option>
                    </select>

                </div>

                {/* Step 2: Input */}
                {type && type !== "link" && !selectedFile && (
                    <div
                        {...getRootProps()}
                        className="border-2 border-dashed border-gray-600 rounded-md p-6 text-center bg-gray-800 hover:border-white transition cursor-pointer"
                    >
                        <input {...getInputProps()} />
                        <div className="space-y-2">
                            <p className="text-gray-400">Drop or Select a {type.toUpperCase()} file</p>
                            <button
                                type="button"
                                className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
                            >
                                Select file
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 3: Preview */}

                {selectedFile && (
                    <div className="bg-gray-800 p-4 rounded space-y-3">
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-300">📎 Selected file: <strong>{selectedFile.name}</strong></p>
                            <button
                                onClick={() => setSelectedFile(null)}
                                className="text-red-400 hover:text-red-600 text-sm"
                            >
                                Remove
                            </button>
                        </div>
                        {type === "image" && (
                            <div className="flex justify-between items-center">
                                <Image
                                    src={URL.createObjectURL(selectedFile)}
                                    alt="preview"
                                    className="rounded border border-gray-700"
                                    width={200}
                                    height={200}
                                />
                            </div>
                        )}
                    </div>
                )}

                {/* Step 2.5: Question for image */}
                {type === "image" && (
                    <div>
                        <label className="block mb-1">Add a question for the image</label>
                        <input
                            type="text"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            placeholder="e.g. What is shown in this diagram?"
                            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
                        />
                    </div>
                )}

                {/* Step 4: Submit */}
                <button
                    disabled={!type || !selectedFile || (type === "link" && !link)}
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded disabled:opacity-50"
                >
                    Submit to Train Model
                </button>
            </section>
        </div>
    );
}

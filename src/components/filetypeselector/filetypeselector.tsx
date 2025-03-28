"use client";

import { useState, useCallback } from "react";
import { useDropzone, Accept } from "react-dropzone";
import Image from "next/image";

export default function FileTypeSelector() {
    const [type, setType] = useState<string | null>(null);
    const [link, setLink] = useState<string>("");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

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
            case "image":
                return { "image/*": [".png", ".jpg", ".jpeg"] };
            default:
                return undefined;
        }
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: getAcceptTypes(type),
        maxFiles: 1,
        disabled: type === "link",
    });

    return (
        <div className="p-6 max-w-md mx-auto bg-gray-900 text-white rounded-xl shadow-md space-y-4">
            <h2 className="text-xl font-semibold">Select input type</h2>

            {/* Type Selector */}
            <select
                value={type || ""}
                onChange={(e) => {
                    setType(e.target.value);
                    setSelectedFile(null); // reset file when changing type
                    setLink(""); // reset link
                }}
                className="w-full p-2 rounded bg-gray-800 border border-gray-700"
            >
                <option value="" disabled>Select type</option>
                <option value="pdf">PDF</option>
                <option value="docx">DOCX</option>
                <option value="image">Image</option>
                <option value="link">Website (URL)</option>
            </select>

            <h2 className="text-xl font-semibold">Insert input</h2>

            {/* Validation */}
            {type === "" || type === null ? (
                <p className="text-gray-500">Please select a type</p>
            ) : null}

            {/* Dropzone for Files */}
            {type && type !== "link" && (
                <div
                    {...getRootProps()}
                    className="border-2 border-dashed border-gray-600 rounded-md p-6 text-center bg-gray-800 hover:border-white transition cursor-pointer"
                >
                    <input {...getInputProps()} />
                    <div className="space-y-2">
                        <p>{isDragActive ? "Drop the file here..." : "Drag and drop file here"}</p>
                        <p>or</p>
                        <button
                            type="button"
                            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
                        >
                            Select file
                        </button>
                    </div>
                </div>  
            )}

            {/* Show file name */}
            {selectedFile && (
                <div className="mt-4 text-sm text-gray-300">
                    Selected file: <strong>{selectedFile.name}</strong>
                </div>
            )}

            {/* Image Preview */}
            {selectedFile && type === "image" && (
                <Image
                    src={URL.createObjectURL(selectedFile)}
                    alt="preview"
                    className="mt-4 max-h-48 rounded border border-gray-700"
                    width={200}
                    height={200}
                />
            )}

            {/* Input for URL */}
            {type === "link" && (
                <input
                    type="url"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    placeholder="Enter website URL"
                    className="w-full p-2 rounded bg-gray-800 border border-gray-700"
                />
            )}
        </div>
    );
}

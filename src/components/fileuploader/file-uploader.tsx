// components/FileUploader.tsx
"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function FileUploader() {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        console.log("Uploaded files:", acceptedFiles);
        // handle your file logic here
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div
            {...getRootProps()}
            className=""
            style={{ cursor: "pointer" }}
        >
            <input {...getInputProps()} />
            <div className="text-center bg-gray-200 border-2 border-dashed border-gray-400 rounded-lg p-32 flex flex-col items-center justify-center h-64 ">
                <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M4 12l8-8m0 0l8 8m-8-8v12"
                    />
                </svg>
                <p>{isDragActive ? "Drop the files here..." : "Drag and Drop File here"}</p>
                <p>or</p>
                <button
                    className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded"
                    type="button"
                >
                    Select file
                </button>
            </div>
        </div>
    );
}

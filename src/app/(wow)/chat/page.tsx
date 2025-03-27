"use client";
import React, { useState } from "react";

interface ChatResponse {
  answer: string;
}

const Page = () => {
  const [question, setPrompt] = useState("");
  const [response, setResponse] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || "Failed to get response");
    }

    const data: ChatResponse = await res.json();
    console.log("data", data);

    setResponse(data.answer || JSON.stringify(data.answer));
    // } catch (err: Error) {
    // setError(err.message || "Something went wrong");
    // console.error("Error:", err);
    // } finally {
    setLoading(false);
    // }
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-2xl font-bold mb-4">AI Chat</h1>

      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label htmlFor="question" className="block mb-2 font-medium">
            Your Question
          </label>
          <textarea
            id="question"
            rows={4}
            className="w-full p-2 border border-gray-300 rounded"
            value={question}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Type your question here..."
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-400"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>

      {error && (
        <div className="p-3 bg-red-100 border border-red-300 text-red-700 rounded mb-4">
          {error}
        </div>
      )}

      {response && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Response:</h2>
          <div className="p-4 bg-gray-50 rounded border border-gray-200 whitespace-pre-wrap">
            {response}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;

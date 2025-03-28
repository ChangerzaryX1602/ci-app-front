export const createHistory = async (token: string, question: string) => {
  const res = await fetch(`${process.env.API_ENDPOINT}/api/v1/ask/history`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ place_holder: question }),
  });

  if (!res.ok) {
    const error = new Error(`Failed to create history: ${res.statusText}`);
    // Add the status property to the error
    (error as any).status = res.status;
    throw error;
  }

  const data = await res.json();
  return data;
};

export const askChatbot = async (
  token: string,
  history_id: number,
  question: string
) => {
  console.log("process.env.API_ENDPOINT", process.env.API_ENDPOINT);
  
  const res = await fetch(`${process.env.API_ENDPOINT}/api/v1/ask/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ history_id, question }),
  });

  console.log("askChatbot", res.status, res.statusText);
  

  if (!res.ok) {
    const error = new Error(`Failed to ask chatbot: ${res.statusText}`);
    // Add the status property to the error
    (error as any).status = res.status;
    throw error;
  }

  const contentType = res.headers.get("content-type");
  
  if (contentType && contentType.includes("application/json")) {
    // If it's JSON, parse it as JSON
    const data = await res.json();
    return data;
  } else {
    // If it's text, get it as text
    const text = await res.text();
    return { answer: text }; // Return in a consistent format
  }
};

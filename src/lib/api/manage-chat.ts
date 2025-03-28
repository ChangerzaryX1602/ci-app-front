export const deleteChat = async (token: string, chatId: number) => {
  const res = await fetch(
    `${process.env.API_ENDPOINT}/api/v1/ask/history/${chatId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) {
    const error = new Error(`Failed to delete chat: ${res.statusText}`);
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
    return { message: text }; // Return in a consistent format
  }
};

export const editChat = async (
  token: string,
  chatId: number,
  place_holder: string
) => {
  const res = await fetch(
    `${process.env.API_ENDPOINT}/api/v1/ask/history/${chatId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ place_holder }),
    }
  );

  if (!res.ok) {
    const error = new Error(`Failed to edit chat: ${res.statusText}`);
    // Add the status property to the error
    (error as any).status = res.status;
    throw error;
  }

  const data = await res.json();
  return data;
};

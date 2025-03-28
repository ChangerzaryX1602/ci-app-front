export const getHistory = async (token: string) => {
  const res = await fetch(`${process.env.API_ENDPOINT}/api/v1/ask/history`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const error = new Error(`Failed to get history: ${res.statusText}`);
    // Add the status property to the error
    (error as any).status = res.status;
    throw error;
  }

  const data = await res.json();
  return data;
};

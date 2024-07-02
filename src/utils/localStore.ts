export const getFromLocalStore = (query: string) => {
  try {
    const res = localStorage.getItem(query);
    if (!res) return null;
    return JSON.parse(res);
  } catch (e) {
    return null;
  }
};

export const saveToLocalStore = (
  query: string,
  payload: Record<string, any>
) => {
  localStorage.setItem(query, JSON.stringify(payload));
};

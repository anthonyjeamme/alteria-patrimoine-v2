export const generateSlug = (text: string) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/ /g, "-")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z\-]/g, "");
};

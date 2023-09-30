export const getAllProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products', { mode: 'cors' });
  if (!response.ok) throw new Error(response.status);
  const json = await response.json();
  return json;
}

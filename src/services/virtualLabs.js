export async function getVirtualLabs() {
  const response = await fetch(
    "https://academy.apnic.net/wp-json/academy/virtual-labs"
  );
  if (response.status !== 200) {
    throw new Error("Service unavailable. Please try again later.");
  }
  const data = await response.json();
  return data.virtualLabs;
}

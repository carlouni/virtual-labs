export async function getVirtualLabs() {
    const response = await fetch("https://academy.apnic.net/wp-json/academy/virtual-labs");
    const data = await response.json();
    return data.virtualLabs;
}
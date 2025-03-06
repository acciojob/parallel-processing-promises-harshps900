// Your JS code here
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");
const loading = document.getElementById("loading");
const errorDiv = document.getElementById("error");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

// Function to download a single image
function downloadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.onload = () => resolve(img);
    img.onerror = () => reject(`Failed to load image: ${url}`);
  });
}

// Function to handle image downloads
async function downloadImages() {
  output.innerHTML = "";
  errorDiv.innerText = "";
  loading.style.display = "block";

  try {
    const imagePromises = images.map((img) => downloadImage(img.url));
    const results = await Promise.all(imagePromises);

    results.forEach((img) => {
      output.appendChild(img);
    });
  } catch (error) {
    errorDiv.innerText = error;
  } finally {
    loading.style.display = "none";
  }
}

// Attach event listener
btn.addEventListener("click", downloadImages);

// Let me know if you want me to add more features or enhance the UI! 🚀
// Function to get the current time in HH:mm:ss format
export const getCurrentTime = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};

// Convert bytes to human-readable format 
export const formBytes = (bytes) => {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "0 Bytes";
  const i = parseInt(String(Math.floor(Math.log(bytes) / Math.log(1024))));
  return Math.round(100 * (bytes / Math.pow(1024, i))) / 100 + " " + sizes[i];
};
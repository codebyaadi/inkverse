import { resetColor, timeColor, errorColor } from "./ansicolors.utils.js";
import { getCurrentTime } from "./calculate.utils.js";

// Function to log information in a structured format
export const logInfo = (message, data, isError = false) => {
  if (isError) {
    console.error(`${timeColor}[${getCurrentTime()}]${resetColor} ${errorColor}Error:${resetColor} ${message}`);
  } else {
    console.log(`${timeColor}[${getCurrentTime()}]${resetColor} ${message}`);
  }

  if (data) {
    console.log(JSON.stringify(data, null, 2));
  }
};

import AVATAR_COLOURS from '@/libs/constants/colours';

/**
 * Generates an SVG string representing a shimmer effect.
 *
 * @param {number} w - The width of the SVG.
 * @param {number} h - The height of the SVG.
 * @param {number} r - The radius of the SVG's rounded corners.
 * @return {string} The SVG string with the shimmer effect.
 */
const shimmerEffect = (w, h, r) => `
<svg width="${w}" height="${h}"  version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="rgb(50, 50, 55)" offset="100%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="rgb(31, 34, 42)" rx="${r || 0}" ry="${
  r || 0
} />
  <rect id="r" width="${w}" height="${h}" rx="${r || 0}" ry="${
  r || 0
} fill="url(#g)" rx="10" ry="10" />
  <animate xlink:href="#r" attributeName="opacity" values="0.4;1;0.4" keyTimes="0;0.5;1" dur="1.7s" repeatCount="indefinite"  />
</svg>`;

/**
 * Converts a string to base64.
 *
 * @param {string} str - The string to be converted.
 * @return {string} The base64 representation of the input string.
 */
const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

/**
 * Generates a random colour from a predefined list of colours.
 *
 * @return {string} The randomly generated colour.
 */
const generateRandomColour = () => {
  const colourValues = Object.values(AVATAR_COLOURS);
  const randomIndex = Math.floor(Math.random() * colourValues.length);
  const newColour = colourValues[randomIndex];
  return newColour;
};

/**
 * Returns a random avatar colour. If a colour is already saved in local storage, it returns that colour.
 * Otherwise, it generates a new random colour, saves it in local storage, and returns it.
 *
 * @return {string} The random avatar colour.
 */
const getRandomAvatarColour = (state) => {
  if (state === 'random') return generateRandomColour();

  const storageKey = 'avatarColor';

  const savedColour = localStorage.getItem(storageKey);

  if (savedColour) return savedColour;

  const newColour = generateRandomColour();
  localStorage.setItem(storageKey, newColour);
  return newColour;
};

/**
 * Generate the URL for the user's avatar image.
 *
 * @param {string} avatarId - The ID of the user's avatar.
 * @param {boolean} isFullBody - Whether to generate a full body image. Defaults to false.
 * @param {boolean} transparent - Whether the image should have a transparent background. Defaults to true.
 * @return {string} The URL of the user's avatar image.
 */
const getUserAvatarImage = (
  avatarId,
  isFullBody = false,
  transparent = true
) => {
  const baseUrl = `https://models.readyplayer.me/${avatarId}.png?`;
  const blendShapeParam = 'blendShapes[Wolf3D_Head][mouthSmile]=0.3';
  const scene = transparent
    ? 'scene=fullbody-posture-v1-transparent'
    : 'scene=fullbody-portrait-v1';

  return `${baseUrl}${isFullBody ? `${scene}&` : ''}${blendShapeParam}`;
};

/**
 * Disables or enables scrolling on the webpage based on the value of the 'open' parameter.
 *
 * @param {boolean} open - A boolean value indicating whether scrolling should be disabled or enabled.
 * @return {function} A function that restores the default scrolling behavior when called.
 */
const disableScroll = (open) => {
  if (open) {
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = 'no';
  } else {
    document.documentElement.style.overflow = 'unset';
    document.body.scroll = 'yes';
  }
  return () => {
    document.documentElement.style.overflow = 'unset';
    document.body.scroll = 'yes';
  };
};

/**
 * Generates a random radial gradient based on predefined colors, angle, and focus points.
 *
 * @return {string} The generated radial gradient.
 */
const getRandomRadialGradient = () => {
  const colors = [
    '#DD57FF',
    '#DE4FE1',
    '#FE2FC4',
    '#A40000',
    '#FF5733',
    '#C70039',
    '#900C3F',
    '#581845',
    '#DAF7A6',
    '#FFC300',
    '#33FFCE',
    '#33FF57',
    '#339FFF',
    '#3333FF',
  ];

  let gradient = 'radial-gradient(134.7% 134.61% at 46.37% 109.73%, ';

  // radial-gradient(, #DD57FF 0%, #DE4FE1 32.5%, #FE2FC4 63.5%, #A40000 100%)

  if (colors === null) {
    throw new Error('Colors array is null');
  }

  const gradientArray = new Array(4).fill(0).map((color, index, arr) => {
    const stop = index !== arr.length - 1 ? index * 32.5 : 100;
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomColorIndex];

    if (randomColor === null) {
      throw new Error('Random color is null');
    }

    return `${randomColor} ${stop}%, `;
  });

  gradient += gradientArray.join('');
  gradient = gradient.slice(0, -2); // Remove the last comma and space
  gradient += ')';

  return gradient;
};

const getRandomBackgroundColor = () => {
  const colors = [
    '#DD57FF',
    '#DE4FE1',
    '#FE2FC4',
    '#A40000',
    '#FF5733',
    '#C70039',
    '#900C3F',
    '#581845',
    '#DAF7A6',
    '#FFC300',
    '#33FFCE',
    '#33FF57',
    '#339FFF',
    '#3333FF',
  ];

  let usedColors = [];

  const getRandomColor = () => {
    let randomColorIndex;
    do {
      randomColorIndex = Math.floor(Math.random() * colors.length);
    } while (usedColors.includes(randomColorIndex));

    const color = colors[randomColorIndex];
    usedColors.push(randomColorIndex);

    if (usedColors.length === colors.length) {
      usedColors = []; // Reset used colors when all colors have been used
    }

    return color;
  };

  return getRandomColor();
};

/**
 * Truncates a string to a specified length and adds an optional suffix.
 *
 * @param {string} str - The string to truncate.
 * @param {number} num - The maximum length of the truncated string.
 * @param {string} [suffix='...'] - The suffix to append to the truncated string.
 * @return {string} The truncated string with the suffix.
 */
function truncateString(str, num, suffix = '...') {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num - suffix.length) + suffix;
}

/**
 * Copies content to the clipboard.
 *
 * @param {Object} params - The parameters containing the content to copy.
 * @param {string} params.createdDate - The date the content was created.
 * @param {string} params.title - The title of the content.
 * @param {string} params.description - The description of the content.
 * @param {Array} params.multipleChoiceList - List of multiple choice questions and answers.
 * @param {Array} params.flashCards - List of flash cards with concepts and definitions.
 * @return {Promise<void>} A promise that resolves when the content is copied to the clipboard.
 */
const copyContentToClipboard = (props) => {
  const { createdDate, title, description, multipleChoiceList, flashCards } =
    props;
  return new Promise((resolve, reject) => {
    let content = `Created Date: ${createdDate}\n`;
    content += `Title: ${title}\n`;
    content += `Description: ${description}\n\n`;

    // Append Multiple Choice Questions and Answers
    if (multipleChoiceList && multipleChoiceList.length > 0) {
      content += 'Questions and Options:\n';
      multipleChoiceList.forEach((item, index) => {
        content += `${index + 1}. ${item.question}\n`;
        item.choices.forEach((choice, qIndex) => {
          content += `   ${String.fromCharCode(65 + qIndex)}. ${
            choice.value
          }\n`;
        });
        content += '\n';
        content += `Answer ${index + 1}: ${String.fromCharCode(
          65 + item.answer.charCodeAt(0) - 'A'.charCodeAt(0)
        )}\n`;
        content += `Explanation: ${item.explanation}\n\n`;
      });
    }

    // Append Flash Cards
    if (flashCards && flashCards.length > 0) {
      content += 'Flash Cards:\n';
      flashCards.forEach((card, index) => {
        content += `${index + 1}. ${card.concept}\n`;
        content += `   - ${card.definition}\n\n`;
      });
    }

    navigator.clipboard.writeText(content).then(resolve, reject);
  });
};

/**
 * Exports content as a CSV file.
 *
 * @param {Object} params - The parameters containing the content to export.
 * @param {string} params.createdDate - The date the content was created.
 * @param {string} params.title - The title of the content.
 * @param {string} params.description - The description of the content.
 * @param {Array} params.multipleChoiceList - List of multiple choice questions and answers.
 * @param {Array} params.flashCards - List of flash cards with concepts and definitions.
 */
const exportContentAsCSV = (props) => {
  const { createdDate, title, description, multipleChoiceList, flashCards } =
    props;
  let csvContent = '"Created Date","Title","Description"\n';
  csvContent += `"${createdDate}","${title}","${description}"\n\n`;

  // Export Multiple Choice List
  if (multipleChoiceList && multipleChoiceList.length > 0) {
    multipleChoiceList.forEach((item, index) => {
      csvContent += `"Question ${index + 1}","${item.question}","\n`;

      item.choices.forEach((choice, choiceIndex) => {
        csvContent += `"","Option ${String.fromCharCode(65 + choiceIndex)}","${
          choice.value
        }"\n`;
      });

      csvContent += '"\n';

      csvContent += `"Answer ${index + 1}","${String.fromCharCode(
        65 + item.answer.charCodeAt(0) - 'A'.charCodeAt(0)
      )}","${item.explanation}"\n\n`;
    });
  }

  // Export Flash Cards
  if (flashCards && flashCards.length > 0) {
    csvContent += '\n\n"Concept","Definition"\n';
    flashCards.forEach((card) => {
      csvContent += `"${card.concept}","${card.definition}"\n`;
    });
  }

  const fileName = `${title
    .replace(/ /g, '_')
    .toLowerCase()}_${createdDate}.csv`;

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(url);
};

export {
  toBase64,
  shimmerEffect,
  generateRandomColour,
  getRandomAvatarColour,
  getUserAvatarImage,
  getRandomRadialGradient,
  getRandomBackgroundColor,
  disableScroll,
  truncateString,
  copyContentToClipboard,
  exportContentAsCSV,
};

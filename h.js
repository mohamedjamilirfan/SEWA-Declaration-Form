const projectInput = document.getElementById('project-input');

// Function to adjust the font size dynamically
function adjustFontSize() {
  const td46 = document.getElementById('td46');
  let fontSize = parseFloat(window.getComputedStyle(projectInput).fontSize);

  // Maximum and minimum font size limits
  const maxFontSize = 9; // Set maximum font size
  const minFontSize = 5; // Set minimum font size

  // Continuously adjust font size until the text fits within the container
  while (
    projectInput.scrollWidth > td46.clientWidth &&
    fontSize > minFontSize
  ) {
    fontSize -= 0.5; // Decrease font size
    projectInput.style.fontSize = `${fontSize}px`;
  }
  while (
    projectInput.scrollWidth <= td46.clientWidth &&
    fontSize < maxFontSize
  ) {
    fontSize += 0.5; // Increase font size
    projectInput.style.fontSize = `${fontSize}px`;
    // Ensure it doesn't overflow again
    if (projectInput.scrollWidth > td46.clientWidth) {
      fontSize -= 0.5;
      projectInput.style.fontSize = `${fontSize}px`;
      break;
    }
  }
}

// Event listener for clearing text letter by letter
projectInput.addEventListener('keydown', (event) => {
  if (event.key === 'Backspace') {
    const currentValue = projectInput.value;
    if (currentValue.length > 0) {
      projectInput.value = currentValue.slice(0, -1); // Remove the last letter
      adjustFontSize(); // Adjust the font size
      event.preventDefault(); // Prevent default backspace behavior
    }
  }
});

// Event listener for typing and font adjustment
projectInput.addEventListener('input', () => {
  adjustFontSize();
});

// Event listener for pasting text
projectInput.addEventListener('paste', (event) => {
  setTimeout(() => {
    adjustFontSize(); // Adjust the font size after the paste event completes
  }, 500);
});

// Initialize font size adjustment on page load
adjustFontSize();

/////////////////////////////////

function handlePasteEvent(event) {
  const projectInput = document.getElementById('project-input');
  let fontSize = parseFloat(window.getComputedStyle(projectInput).fontSize); // Font size in pixels
  const averageCharacterWidth = fontSize * 0.98; // Estimate: 50% of font size
  console.log(averageCharacterWidth);

  // const scrollWidth = projectInput.scrollWidth; // Total content width
  // const clientWidth = projectInput.clientWidth; // Visible width
  // console.log(scrollWidth - clientWidth);

  // const totalCharacters = Math.floor(scrollWidth / averageCharacterWidth); // Total characters
  // const visibleCharacters = Math.floor(clientWidth / averageCharacterWidth); // Visible characters

  // console.log(totalCharacters - visibleCharacters);

  // Define the minimum font size
  const minFontSize = 5;

  // Use a small delay to wait for the content to be pasted
  setTimeout(() => {
    const pastedText = projectInput.value;
    const pastedText1 = Math.floor(pastedText.length * 0.1);

    const scrollWidth = projectInput.scrollWidth; // Total content width
    const clientWidth = projectInput.clientWidth; // Visible width

    const totalCharacters = Math.floor(scrollWidth / averageCharacterWidth); // Total characters
    const visibleCharacters = Math.floor(clientWidth / averageCharacterWidth); // Visible characters

    const km = totalCharacters - visibleCharacters;

    const pastedText2 = 66 * 0.1;

    // Reduce the font size incrementally if the text overflows
    if (
      projectInput.scrollWidth > projectInput.clientWidth &&
      fontSize > minFontSize
    ) {
      fontSize = pastedText1 - pastedText2; // Reduce font size smoothly in small steps
      console.log(pastedText1 - pastedText2);

      projectInput.style.fontSize = `${fontSize}px`;
    }

    // Optionally analyze the sentence length

    console.log('Pasted text length:', pastedText.length);
  }, 0);
}



///////////////////////////

function adjustElecContractorInputFontSize() {
  const elecContractorInput = document.getElementById('elec-contractor-input');
  const td53 = document.getElementById('td53');

  // Get the initial font size
  let fontSize = parseFloat(window.getComputedStyle(elecContractorInput).fontSize);

  // Define the minimum font size
  const minFontSize = 5;

  // Reduce the font size incrementally if the text overflows
  if (
    elecContractorInput.scrollWidth > elecContractorInput.clientWidth &&
    fontSize > minFontSize
  ) {
    fontSize -= 0.01; // Reduce font size smoothly in small steps
    elecContractorInput.style.fontSize = `${fontSize}px`;
  }

  // Increase the font size incrementally if there is extra space
  if (
    elecContractorInput.scrollWidth <= elecContractorInput.clientWidth &&
    fontSize < 9
  ) {
    fontSize += 0.01; // Increase font size smoothly in small steps
    elecContractorInput.style.fontSize = `${fontSize}px`;
  }
}

function handlePasteEvent4(event) {
  const elecContractorInput = document.getElementById('elec-contractor-input');
  let fontSize = parseFloat(window.getComputedStyle(elecContractorInput).fontSize);
  const minFontSize = 5; // Define the minimum font size
  const threshold = 66; // Number of characters before reducing font size

  // Use a small delay to ensure the pasted content is in the input
  setTimeout(() => {
    const pastedText = elecContractorInput.value;
    const textLength = pastedText.length;

    console.log('Pasted text length:', textLength);

    // Reduce the font size incrementally if the text overflows or exceeds the threshold
    if (
      elecContractorInput.scrollWidth > elecContractorInput.clientWidth &&
      fontSize > minFontSize
    ) {
      if (textLength > threshold) {
        // Calculate how much to reduce the font size
        const excessCharacters = textLength - threshold; // Number of extra characters
        const fontSizeReduction = excessCharacters * 0.01; // Reduce 0.01px per character

        fontSize = Math.max(minFontSize, fontSize - fontSizeReduction); // Ensure font size doesn't go below minFontSize
        elecContractorInput.style.fontSize = `${fontSize}px`;

        console.log('Adjusted font size:', fontSize);
      }
    }
  }, 0); // Delay ensures content is pasted before processing
}

// Attach the function to dynamically adjust font size on input or paste
const elecContractorInput = document.getElementById('elec-contractor-input');
elecContractorInput.addEventListener('input', adjustElecContractorInputFontSize); // For typing
elecContractorInput.addEventListener('paste', handlePasteEvent4); // For pasting

// Initialize font size adjustment for any pre-filled values
adjustElecContractorInputFontSize();





/////////////////////////////////////////////


// Define the specific td elements to modify
const specificTdIds2 = ['td31', 'td32', 'td33', 'td99', 'td34', 'td5', 'td35', 'td36', 'td37', 'td38'];

// Apply styles to center-align and set fixed width
specificTdIds2.forEach((id) => {
  const tdElement2 = document.getElementById(id);
  if (tdElement2) {
    // tdElement2.style.position = 'center'; // Center-align text
    tdElement2.style.width = '100px'; // Set fixed width
    // tdElement2.style.wordBreak = 'break-word'; // Enable text wrapping
    // tdElement2.style.overflow = 'hidden'; // Hide overflowing text
  }
});
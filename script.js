window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('pdfDownloaded') === 'true') {
    localStorage.removeItem('pdfDownloaded'); // Clear the flag

    // ✅ Show success popup after reload
    showSuccessPopup();
  }
});

document
  .getElementById('download-pdf')
  .addEventListener('click', async function (e) {
    const checkbox1 = document.getElementById('termsinput1'); // English 1
    const checkbox2 = document.getElementById('termsinput2'); // English 2
    const checkbox3 = document.getElementById('termsinput3'); // Arabic 1
    const checkbox4 = document.getElementById('termsinput4'); // Arabic 2

    const englishChecked = checkbox1.checked && checkbox2.checked;
    const arabicChecked = checkbox3.checked && checkbox4.checked;

    if (!englishChecked && !arabicChecked) {
      e.preventDefault();

      // You can replace this with a styled popup
      showWarningPopup(
        'Please check and agree to the terms and conditions before downloading the PDF.'
      );

      return;
    }

    const spinner = document.getElementById('loading-spinner');
    spinner.style.display = 'flex'; // Show loading spinner

    try {
      // Simulate async task like PDF creation (e.g., 1.5 sec delay)
      await new Promise((resolve) => setTimeout(resolve, 10)); //6100

      // Your existing PDF logic here...
      // e.g., generatePDF(); or jsPDF code

      // Get the entered name
      const nameInput = document.getElementById('name-input');
      const titleSelect = document.getElementById('title-select');
      const areaSearch = document.getElementById('area-search');
      const areaSelect = document.getElementById('area-select');
      const plotnoInput = document.getElementById('plotNo-input');
      const plotno1Input = document.getElementById('plotNo1-input');
      const mulk = document.getElementById('mulk');
      const minha = document.getElementById('minha');
      const projectInput = document.getElementById('project-input');
      const partiesInput = document.getElementById('parties-input');
      const consultantInput = document.getElementById('consultant-input');
      const contractorInput = document.getElementById('contractor-input');
      const elecContractorInput = document.getElementById(
        'elec-contractor-input'
      );
      const td46 = document.getElementById('td46');
      const td47 = document.getElementById('td47');
      const td50 = document.getElementById('td50');
      const td51 = document.getElementById('td51');
      const td52 = document.getElementById('td52');
      const td53 = document.getElementById('td53');
      const td15 = document.getElementById('td15');
      const td16 = document.getElementById('td16');
      const loadInput = document.getElementById('load-input');
      const kw = document.getElementById('kw');
      const kvaSpan = document.getElementById('kva-span');
      const clearButton5 = document.getElementById('clear-button5');
      const sign = document.getElementById('sign');
      const sign1 = document.getElementById('sign1');
      const sign2 = document.getElementById('sign2');

      // Hide elements if conditions are met
      if (plotno1Input.value.trim() === '') {
        plotno1Input.style.display = 'none';
        clearButton5.style.display = 'none';
        mulk.textContent = '';
      } else {
        plotno1Input.style.display = 'inline-block';
        clearButton5.style.display = 'inline-block';
        mulk.style.display = 'inline-block';
      }

      // Get the entered name
      const nameValue = titleSelect.value + ' ' + nameInput.value;
      const areaValue = areaSearch.value;
      const plotnoValue = plotnoInput.value;
      const plotno1Value = plotno1Input.value;
      const loadValue =
        loadInput.value + ' ' + kw.textContent + ' ' + kvaSpan.textContent;

      // Display the entered name on the page
      const td2 = document.getElementById('td2');
      td2.textContent = nameValue; // Replace input with name text
      td2.style.width = '346px';
      td2.style.wordWrap = 'break-word';

      const td44 = document.getElementById('td44');
      td44.textContent = areaValue; // Replace input with name text

      const td45 = document.getElementById('td45');
      td45.textContent =
        plotnoValue +
        ' ' +
        minha.textContent +
        ' ' +
        plotno1Value +
        ' ' +
        mulk.textContent; // Replace input with name text
      td45.style.width = '346px';
      td45.style.wordWrap = 'break-word';

      // Ensure font size adjustments are applied
      const adjustedFontSize = window.getComputedStyle(projectInput).fontSize;
      td46.textContent = projectInput.value; // Set the value in the table cell
      td46.style.fontSize = adjustedFontSize; // Apply the adjusted font size
      // td46.style.width = '346px';
      // td46.style.wordWrap = 'break-word';
      td46.style.position = 'center'; // Center-align text
      td46.style.width = '312px'; // Set fixed width
      td46.style.wordBreak = 'break-word'; // Enable text wrapping
      td46.style.overflow = 'hidden'; // Hide overflowing text
      td46.style.padding = '2px 3px 0.5px 7px';
      // tdElement.style.fontSize = '11px';

      td15.style.width = '107px'; // Set fixed width
      td15.style.padding = '26px 5px 3px 26.5px';
      td15.style.fontSize = '11.5px';

      td16.style.padding = '0px 18px 3px 5px';

      td47.textContent = loadValue; // Replace input with name text
      td47.style.width = '346px';
      td47.style.wordWrap = 'break-word';

      sign.style.marginTop = '20px';

      sign1.style.marginTop = '3px';
      sign1.style.marginBottom = '28px';
      sign1.style.border = 'none';
      sign1.style.boxShadow = 'inset 0 -3px 0 black'; /* bottom */

      sign2.style.position = 'absolute';
      sign2.style.display = 'flex';
      sign2.style.top = '478.5px';

      // const adjustedFontSize1 = window.getComputedStyle(partiesInput).fontSize;
      td50.textContent = partiesInput.value; // Set the value in the table cell
      // td50.style.fontSize = adjustedFontSize1; // Apply the adjusted font size
      td50.style.width = '346px';

      const adjustedFontSize2 =
        window.getComputedStyle(consultantInput).fontSize;
      td51.textContent = consultantInput.value; // Set the value in the table cell
      td51.style.fontSize = adjustedFontSize2; // Apply the adjusted font size
      td51.style.width = '346px';

      const adjustedFontSize3 =
        window.getComputedStyle(contractorInput).fontSize;
      td52.textContent = contractorInput.value; // Set the value in the table cell
      td52.style.fontSize = adjustedFontSize3; // Apply the adjusted font size
      td52.style.width = '346px';

      const adjustedFontSize4 =
        window.getComputedStyle(elecContractorInput).fontSize;
      td53.textContent = elecContractorInput.value; // Set the value in the table cell
      td53.style.fontSize = adjustedFontSize4; // Apply the adjusted font size
      td53.style.width = '346px';

      nameInput.style.display = 'none'; // Hide the input field
      titleSelect.style.display = 'none'; // Hide the dropdown
      areaSearch.style.display = 'none'; // Hide the area-search input box
      areaSelect.style.display = 'none'; // Hide the area-select dropdown
      plotnoInput.style.display = 'none'; // Hide the area-search input box
      plotno1Input.style.display = 'none'; // Hide the area-search input box
      projectInput.style.display = 'none'; // Hide the area-search input box
      partiesInput.style.display = 'none'; // Hide the area-search input box
      consultantInput.style.display = 'none'; // Hide the area-search input box
      contractorInput.style.display = 'none'; // Hide the area-search input box
      elecContractorInput.style.display = 'none'; // Hide the area-search input box

      // Define the specific td elements to modify
      const specificTdIds2 = [
        'td31',
        'td32',
        'td33',
        'td99',
        'td34',
        'td5',
        'td35',
        'td36',
        'td37',
        'td38',
      ];

      // Apply styles to center-align and set fixed width
      specificTdIds2.forEach((id) => {
        const tdElement2 = document.getElementById(id);
        if (tdElement2) {
          // tdElement2.style.position = 'center'; // Center-align text
          tdElement2.style.width = '142px'; // Set fixed width
          tdElement2.style.padding = '3.1px 3px 6.4px 6px';
          tdElement2.style.fontSize = '11.5px';
          tdElement2.style.fontFamily = " 'Times New Roman', Times, serif ";
          tdElement2.style.letterSpacing = '0.1px';
          // tdElement2.style.paddingBottom = '2px 3px 60px 5px'; // Set fixed width
          // tdElement2.style.wordBreak = 'break-word'; // Enable text wrapping
          // tdElement2.style.overflow = 'hidden'; // Hide overflowing text
        }
      });

      // Define the specific td elements to modify
      const specificTdIds = [
        'td2',
        'td44',
        'td45',
        // 'td46',
        'td47',
        'td4',
        'td50',
        'td51',
        'td52',
        'td53',
      ];

      // Apply styles to center-align and set fixed width
      specificTdIds.forEach((id) => {
        const tdElement = document.getElementById(id);
        if (tdElement) {
          tdElement.style.position = 'center'; // Center-align text
          tdElement.style.width = '312px'; // Set fixed width
          tdElement.style.wordBreak = 'break-word'; // Enable text wrapping
          tdElement.style.overflow = 'hidden'; // Hide overflowing text
          tdElement.style.padding = '2.5px 3px 6px 7.2px';
          tdElement.style.fontSize = '11px';
        }
      });

      // Define the specific td elements to modify
      const specificTdIds1 = [
        'td3',
        'td11',
        'td12',
        'td13',
        'td14',
        // 'td15',
        // 'td16',
        'td17',
        'td18',
        'td79',
      ];

      // Apply styles to center-align and set fixed width
      specificTdIds1.forEach((id) => {
        const tdElement1 = document.getElementById(id);
        if (tdElement1) {
          // tdElement1.style.position = 'center'; // Center-align text
          tdElement1.style.width = '107px'; // Set fixed width
          tdElement1.style.padding = '2.1px 6px 6.4px 6px';
          tdElement1.style.fontSize = '11.5px';
          // tdElement1.style.boxShadow = 'inset -1.5px 0 0 black';
        }
      });

      // Define the specific td elements to modify
      const specificTdIds5 = [
        'span131',
        'span132',
        'span133',
        'span134',
        'span135',
        'span136',
        'span137',
        'span138',
        'span139',
        'span140',
      ];

      // Apply styles to center-align and set fixed width
      specificTdIds5.forEach((id) => {
        const span132 = document.getElementById(id);
        if (span132) {
          span132.style.position = 'relative';
          span132.style.bottom = '2px';
        }
      });

      // const span132 = document.getElementById('span132');

      // Dynamically import jsPDF
      const { jsPDF } = window.jspdf;

      // Select the sections for each page
      const page1 = document.querySelector('#page1');
      const page2 = document.querySelector('#page2');

      // Apply a border to all table and td elements
      document.querySelectorAll('table').forEach((element) => {
        element.style.border = 'none';
        element.style.boxShadow = `inset 0 3.8px 0 black,           /* top    */
                                 inset -3.5px 0 0 black,      /* right  */
                                 inset 0 0px 0 black,         /* bottom */
                                 inset 3.8px 0 0 black      /* left   */`;
        // element.style.borderLeft = '0.1px solid black';
      });

      // Apply top and right borders only to all <th> elements
      document.querySelectorAll('th').forEach((th) => {
        th.style.border = 'none'; // Clear existing borders
        th.style.boxShadow = 'inset 0 -3px 0 black'; /* bottom */
        // th.style.borderTop = '0.1px solid black';
        // th.style.borderRight = '0.1px solid black'; // Add right border
      });

      // Apply top and right borders only to all <td> elements
      document.querySelectorAll('td').forEach((td) => {
        td.style.border = 'none'; // Clear existing borders
        td.style.boxShadow = 'inset -1px -1px 0px 0.2px black';
        // td.style.borderTop = '0.1px solid black'; // Add top border
        // td.style.borderRight = '0.1px solid black'; // Add right border
      });

      // Apply top and right borders only to all <td> elements
      document.querySelectorAll('#table2').forEach((table2) => {
        table2.style.border = 'none'; // Clear existing borders
        table2.style.boxShadow = `inset 0 0px 0 black,           /* top    */
                                 inset -4px 0 0 black,      /* right  */
                                 inset 0 -3.8px 0 black,         /* bottom */
                                 inset 4px 0 0 black      /* left   */`;
      });

      // Apply top and right borders only to all <td> elements
      document.querySelectorAll('#table3').forEach((table3) => {
        table3.style.border = 'none'; // Clear existing borders
        table3.style.borderLeft = '0.1px solid black'; // Add top border
        table3.style.borderBottom = '0.1px solid black';
      });

      // Apply top and right borders only to all <td> elements
      document.querySelectorAll('#line1, #line2').forEach((line) => {
        line.style.border = 'none'; // Clear existing borders
        line.style.borderBottom = '0.01px solid #a09d9d';
      });

      // Apply top and right borders only to all <td> elements
      document.querySelectorAll('#terms').forEach((terms) => {
        terms.style.textDecoration = 'none';
        terms.style.borderBottom = '0.1px solid black';
        terms.style.paddingBottom = '1px';
      });

      // Apply top and right borders only to all <td> elements
      document.querySelectorAll('#terms1').forEach((terms1) => {
        terms1.style.textDecoration = 'none';
        terms1.style.borderBottom = '0.1px solid black';
        terms1.style.paddingBottom = '0px';
      });

      // Create a new jsPDF instance
      const pdf = new jsPDF({
        unit: 'in',
        format: 'a4',
        orientation: 'portrait',
      });

      // Render page 1
      const canvas1 = await html2canvas(page1, {
        scale: 6,
        useCORS: true, // Handle cross-origin images
        allowTaint: false,
        dir: 'rtl', // Support RTL
        logging: true,
        onclone: (clonedDoc) => {
          console.log('Cloned document for canvas:', clonedDoc);
        },
      });
      const imgData1 = canvas1.toDataURL('image/jpeg', 4.0);
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData1, 'JPEG', 0, 0, pageWidth, pageHeight);

      // Add a new page and render page 2
      pdf.addPage();
      const canvas2 = await html2canvas(page2, {
        scale: 6,
        useCORS: true,
        allowTaint: false,
        logging: true,
        onclone: (clonedDoc) => {
          console.log('Cloned document for canvas:', clonedDoc);
        },
      });
      const imgData2 = canvas2.toDataURL('image/jpeg', 4.0);
      pdf.addImage(imgData2, 'JPEG', 0, 0, pageWidth, pageHeight);

      // Save the PDF
      const save =
        plotnoValue + '_01.' + ' ' + 'SEWA Declaration & Commitment Form';

      pdf.save(save + '.pdf');

      // Add page refresh
      location.reload();
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      spinner.style.display = 'none'; // Hide loading spinner
    }
    localStorage.setItem('pdfDownloaded', 'true');

    // ===== Replace this with your actual PDF generation logic =====
    console.log('PDF would be generated here.');

    await new Promise((resolve) => setTimeout(resolve, 15000)); // Extra delay before popup
    showSuccessPopup();
  });

// document.getElementById('toggle-view').addEventListener('click', function () {
//   const main = document.getElementById('main21');
//   const icon = document.getElementById('view-icon');

//   if (main.style.flexDirection === 'column') {
//     main.style.flexDirection = 'row';
//     icon.textContent = '📄 Vertical'; // List view
//   } else {
//     main.style.flexDirection = 'column';
//     icon.textContent = '📑 Horizontal'; // Row/grid view
//   }
// });

function showSuccessPopup() {
  const popup = document.createElement('div');
  popup.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span>📥 Your PDF has been downloaded successfully. Thank you for your patience.</span>
        <button id="close-popup" style="
          background: transparent;
          border: none;
          color: white;
          font-size: 18px;
          font-weight: bold;
          margin-left: 15px;
          cursor: pointer;
        ">&times;</button>
      </div>
    `;

  Object.assign(popup.style, {
    position: 'fixed',
    bottom: '80px',
    left: '50%',
    fontFamily: 'Nunito',
    transform: 'translateX(-50%)',
    padding: '18px 30px',
    backgroundColor: 'black',
    color: '#fff',
    borderRadius: '12px',
    boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
    fontSize: '16px',
    zIndex: '10000',
    opacity: '0',
    transition: 'opacity 0.4s ease, transform 0.3s ease',
    maxWidth: '90%',
    width: 'fit-content',
  });

  document.body.appendChild(popup);

  // Fade in
  setTimeout(() => {
    popup.style.opacity = '1';
    popup.style.transform = 'translateX(-50%) translateY(0)';
  }, 10);

  // Close button
  document.getElementById('close-popup').onclick = () => {
    popup.style.opacity = '0';
    setTimeout(() => {
      popup.remove();
    }, 400);
  };

  // Auto close after 5 seconds
  setTimeout(() => {
    if (document.body.contains(popup)) {
      popup.style.opacity = '0';
      setTimeout(() => {
        popup.remove();
      }, 400);
    }
  }, 5000);
}

function showWarningPopup(message) {
  const popup = document.createElement('div');
  popup.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <span>⚠️ ${message}</span>
      <button id="close-warning" style="
        background: transparent;
        border: none;
        color: white;
        font-size: 18px;
        font-weight: bold;
        margin-left: 15px;
        cursor: pointer;
      ">&times;</button>
    </div>
  `;

  Object.assign(popup.style, {
    position: 'fixed',
    bottom: '80px',
    left: '50%',
    fontFamily: 'Nunito',
    transform: 'translateX(-50%)',
    padding: '18px 30px',
    backgroundColor: 'black', // red
    color: '#fff',
    borderRadius: '12px',
    boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
    fontSize: '16px',
    zIndex: '10000',
    opacity: '0',
    transition: 'opacity 0.4s ease, transform 0.3s ease',
    maxWidth: '90%',
    width: 'fit-content',
  });

  document.body.appendChild(popup);

  // Fade in
  setTimeout(() => {
    popup.style.opacity = '1';
    popup.style.transform = 'translateX(-50%) translateY(0)';
  }, 10);

  // Close button
  document.getElementById('close-warning').onclick = () => {
    popup.style.opacity = '0';
    setTimeout(() => {
      popup.remove();
    }, 400);
  };

  // Auto-remove after 5 seconds
  setTimeout(() => {
    if (document.body.contains(popup)) {
      popup.style.opacity = '0';
      setTimeout(() => {
        popup.remove();
      }, 400);
    }
  }, 5000);
}

// function showReminderPopup() {
//   const popup = document.getElementById('reminder-popup');
//   const sound = document.getElementById('reminder-sound');
//   // if (sound) sound.volume = 0.8, sound.play();  // Gentle volume

//   // Slide in
//   popup.style.top = '50px';

//   // Auto-hide after 3 seconds
//   setTimeout(() => {
//     popup.style.top = '-100px';
//   }, 5000);
// }

// Close button logic
document.getElementById('reminder-close').addEventListener('click', () => {
  const popup = document.getElementById('reminder-popup');
  popup.style.top = '-100px';
});

// Initial delay (optional)
setTimeout(showReminderPopup, 5000); // first reminder after 10s

// Repeat every 20 minutes (1,200,000 ms)
setInterval(showReminderPopup, 600000);

document.addEventListener('keydown', function (event) {
  // Ctrl + Shift + D
  if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === 'd') {
    event.preventDefault(); // Prevent browser default behavior
    document.getElementById('download-pdf').click(); // Trigger download
  }
});

document
  .getElementById('clear-button')
  .addEventListener('click', function (event) {
    const nameInput = document.getElementById('name-input');
    nameInput.value = ''; // Clear the input value
    nameInput.focus(); // Optionally refocus the input field
    event.preventDefault(); // Prevent any unexpected behavior
  });

document
  .getElementById('clear-button1')
  .addEventListener('click', function (event) {
    const areaSearch = document.getElementById('area-search');
    areaSearch.value = ''; // Clear the input value
    areaSearch.focus(); // Optionally refocus the input field
    event.preventDefault(); // Prevent any unexpected behavior
  });

document
  .getElementById('clear-button2')
  .addEventListener('click', function (event) {
    const plotnoInput = document.getElementById('plotNo-input');
    plotnoInput.value = ''; // Clear the input value
    plotnoInput.focus(); // Optionally refocus the input field
    event.preventDefault(); // Prevent any unexpected behavior
    // document.getElementById('clear-button2').style.display = 'none'
  });

document
  .getElementById('clear-button3')
  .addEventListener('click', function (event) {
    const projectInput = document.getElementById('project-input');
    projectInput.value = ''; // Clear the input value
    projectInput.focus(); // Optionally refocus the input field
    projectInput.style.fontSize = '9px'; // Reset to the default font size as per the CSS
    event.preventDefault(); // Prevent any unexpected behavior
    // document.getElementById('clear-button2').style.display = 'none'
  });

document
  .getElementById('clear-button4')
  .addEventListener('click', function (event) {
    const loadInput = document.getElementById('load-input');
    loadInput.value = ''; // Clear the input value
    loadInput.focus(); // Optionally refocus the input field
    event.preventDefault(); // Prevent any unexpected behavior
    // document.getElementById('clear-button2').style.display = 'none'
  });

document
  .getElementById('clear-button5')
  .addEventListener('click', function (event) {
    const plotno1Input = document.getElementById('plotNo1-input');
    plotno1Input.value = ''; // Clear the input value
    plotno1Input.focus(); // Optionally refocus the input field
    event.preventDefault(); // Prevent any unexpected behavior
    // document.getElementById('clear-button2').style.display = 'none'
  });

document
  .getElementById('clear-button6')
  .addEventListener('click', function (event) {
    const partiesInput = document.getElementById('parties-input');
    partiesInput.value = ''; // Clear the input value
    partiesInput.focus(); // Optionally refocus the input field
    partiesInput.style.fontSize = '9px'; // Reset to the default font size as per the CSS
    event.preventDefault(); // Prevent any unexpected behavior
    // document.getElementById('clear-button2').style.display = 'none'
  });

document
  .getElementById('clear-button7')
  .addEventListener('click', function (event) {
    const consultantInput = document.getElementById('consultant-input');
    consultantInput.value = ''; // Clear the input value
    consultantInput.focus(); // Optionally refocus the input field
    consultantInput.style.fontSize = '9px'; // Reset to the default font size as per the CSS
    event.preventDefault(); // Prevent any unexpected behavior
    // document.getElementById('clear-button2').style.display = 'none'
  });

document
  .getElementById('clear-button8')
  .addEventListener('click', function (event) {
    const contractorInput = document.getElementById('contractor-input');
    contractorInput.value = ''; // Clear the input value
    contractorInput.focus(); // Optionally refocus the input field
    contractorInput.style.fontSize = '9px'; // Reset to the default font size as per the CSS
    event.preventDefault(); // Prevent any unexpected behavior
    // document.getElementById('clear-button2').style.display = 'none'
  });

document
  .getElementById('clear-button9')
  .addEventListener('click', function (event) {
    const elecContractorInput = document.getElementById(
      'elec-contractor-input'
    );
    elecContractorInput.value = ''; // Clear the input value
    elecContractorInput.focus(); // Optionally refocus the input field
    elecContractorInput.style.fontSize = '9px'; // Reset to the default font size as per the CSS
    event.preventDefault(); // Prevent any unexpected behavior
    // document.getElementById('clear-button2').style.display = 'none'
  });

// Full list of 404 areas
const areas = [
  'Ad Dafain',
  'Ai Butain',
  'Ai Nahda',
  'Al Bahaes North',
  'Al Bhaes South',
  'Al Faw Agricultural/Al Madam',
  'Al Faya',
  'Al Husoon',
  'Al Khawaled',
  'Al Maashi Al Qasimiah',
  'Al Yadia',
  'Al Yafar',
  'Albadayer',
  'An Nad',
  'Ath Thamaid 1',
  'Ath Thamaid 2',
  'Ath Thaqiba',
  'Feli Agricultural',
  'Feli South',
  'Fily North',
  'Free Zone',
  'Madam Commercial',
  'Madam Industrial',
  'Mahrani',
  'Nazwa 1',
  'Nazwa 2',
  'Nazwa 3',
  'Nazwa 4',
  'Nazwa 5',
  'Refada',
  'Refada 2',
  'Seh Algharaif',
  'Tawy Mohamed',
  'Tiwala',
  'Hamriyah',
  'Argoub',
  'Argoub Ind.',
  'Hamriya East',
  'Hamriya Free Zone',
  'Hamriya Phase 2',
  'Hamriya West',
  'Sharjah Main City',
  'Ad Darari',
  'Adhaib',
  'Al Aabar',
  'Al Azra',
  'Al Belaida',
  'Al Faiha',
  'Al Falaj',
  'Al Fisht',
  'Al Fisht 1',
  'Al Ghafiya',
  'Al Ghubaiba',
  'Al Ghuwair',
  'Al Gitanah 1',
  'Al Gitanah 2',
  'Al Gitanah 3',
  'Al Gitanah 4',
  'Al Gitanah 5',
  'Al Gitanah 6',
  'Al Gulaiaah',
  'Al Hazzana',
  'Al Houma',
  'Al Jazzat',
  'Al Jubail',
  'Al Juraina',
  'Al Juraina 1',
  'Al Khalidiya',
  'Al Khan',
  'Al Khan New',
  'Al Khan New 2',
  'Al Khazamiya',
  'Al Layah',
  'Al Mahatta',
  'Al Majaaz 1',
  'Al Majaaz 2',
  'Al Majaaz 3',
  'Al Majarra',
  'Al Mamzar',
  'Al Manakh',
  'Al Mansoora',
  'Al Mirgaab',
  'Al Mitsannid',
  'Al Mowrrada 1',
  'Al Mowrrada 2',
  'Al Mowrrada 3',
  'Al Mowrrada 4',
  'Al Mowrrada 5',
  'Al Mowrrada 6',
  'Al Mowrrada 7',
  'Al Mowrrada 8',
  'Al Mussalla',
  'Al Naasiria',
  'Al Nabaa',
  'Al Nahda',
  'Al Nahdha',
  'Al Nakheilaat',
  'Al Qaadsia',
  'Al Qarrayen 1',
  'Al Qarrayen 2',
  'Al Qarrayen 3',
  'Al Qarrayen 4',
  'Al Qarrayen 5',
  'Al Quoz',
  'Al Ramla',
  'Al Rifaa',
  'Al Ruqa Al Hamra',
  'Al Sajaa Industrial',
  'Al Sajaa Industrial (Al Jaleel)',
  'Al Sajaa',
  'Al Sajaa, Al Saniyya',
  'Al Saniyya',
  'Al Sajaah S',
  'Al Shaahba',
  'Al Shiokh',
  'Al Waha',
  'Al Yaash',
  'Al Yarmook',
  'An Nad',
  'An Noaf 1',
  'An Noaf 2',
  'An Noaf 3',
  'An Noaf 4',
  'Ar Ramtha',
  'Ar Remagiya',
  'Ar Rifaa',
  'Ar Rigayba',
  'Ar Rigayba 1',
  'Ar Rigayba 2',
  'Ar Rigayba 3',
  'Ar Rigayba 4',
  'Ar Rigayba 5',
  'Ar Rigayba 6',
  'Ar Rigayba 7',
  'Ar Rigayba 8',
  'As Sabkha',
  'As Seef',
  'As Sidairah',
  'As Soor',
  'As Swaihat',
  'Ash Shnouf 1',
  'Ash Shnouf 2',
  'Ash Shnouf 3',
  'Ash Shnouf 4',
  'Ash Shnouf 5',
  'Ash Shnouf 6',
  'At Talaa',
  'At Tarfa',
  'Az Zubair',
  'Az Zubair 1',
  'Az Zubair 2',
  'Az Zubair 3',
  'Az Zubair 4',
  'Az Zubair 5',
  'Az Zubair 6',
  'Az Zubair 7',
  'Az Zubair 8',
  'Basateen Alzubair',
  'Bu Dang',
  'Bu Shagara',
  'Bu Tena',
  'Dasmaan',
  'Emirates Indus. City',
  'Falah Agr',
  'Falah Res',
  'Hay Al Atain',
  'Hay Al Badee',
  'Hay Barashi',
  'Hay Hoshi',
  'Industrial Area 1',
  'Industrial Area 2',
  'Industrial Area 3',
  'Industrial Area 4',
  'Industrial Area 5',
  'Industrial Area 6',
  'Industrial Area 7',
  'Industrial Area 8',
  'Industrial Area 9',
  'Industrial Area 10',
  'Industrial Area 11',
  'Industrial Area 12',
  'Industrial Area 13',
  'Industrial Area 14',
  'Industrial Area 15',
  'Industrial Area 16',
  'Industrial Area 17',
  'Institute Land',
  'Khalid Sea Port',
  'Kshisha 1',
  'Kshisha 2',
  'Kshisha 3',
  'Kshisha 4',
  'Kshisha 5',
  'Kshisha 6',
  'Malha',
  'Mareija',
  'Maysaloon',
  'Menhuz',
  'Metraq',
  'Mezairah',
  'Muhathab Agr',
  'Muwafja',
  'Muwaileh Commercial',
  'Qitah Agr',
  'Qitah Res',
  'Rodat Al Qarat',
  'Rodat Alsidr',
  'Saif Zone',
  'Samnaan',
  'Sehma',
  'Shabiat Aldefain',
  'Shaghrafa 1',
  'Shaghrafa 2',
  'Shaghrafa 3',
  'Shaghrafa 4',
  'Sharjah Intl. Airport',
  'Sharqan',
  'Shuwaihiyeen',
  'Tawi Mehathab Agr',
  'Tawi Mehathab Res',
  'Tay East',
  'Tay West',
  'Tilal',
  'Um Altarafa',
  'Um Fanain',
  'University City',
  'Warehouses Lands',
  'Batayih',
  'Al Berair South',
  'Al Berair West',
  'Al Hawyah',
  'Al Kehaif',
  'Al Montathir',
  'Al Wuhoosh',
  'Alberair North',
  'Ar Rafeah',
  'As Sadiah',
  'Ben Rasheed',
  'Ben Rasheed 1',
  'Ben Rasheed 2',
  'Ben Rasheed 3',
  'Taahil',
  'Tawy As Saman',
  'Tawy Muhafez',
  'Dhaid',
  'Abu Sidra',
  'Al Baradi',
  'Al Hasia',
  'Al Husn 2',
  'Al Khabyan',
  'Al Khuroos',
  'Al Malha',
  'Al Muragabat',
  'Al Rajeeba',
  'Al Rig Comm.',
  'Al Rig Ind.',
  'Al Rig Res.',
  'Al Yafar 1',
  'Al Yafar 2',
  'Algashaba',
  'Alhisn 1',
  'Althamamah',
  'Ar Rashidiat',
  'As Sidra',
  'At Taiba 1',
  'At Taiba 2',
  'Hay Albustan',
  'Hay Alseweah',
  "Hay Alsharee'ah",
  'Hay Jabal Omar',
  'Hay Tal Alzzaafaran',
  'Hay Zubaidah',
  'Lawedid',
  'Maghsa',
  'Mughaider',
  'Seh Almahab',
  'Seh Alsadah',
  'Suhaila 1',
  'Suhaila 2',
  'Suhaila 3',
  'Weshah 1',
  'Weshah 2',
  'Zubaidah 2',
  'Khorfakkan',
  'Ai Bardi 1',
  'Al Bardi 2',
  'Al Bardi 3',
  'Al Bardi 4',
  'Al Bardi 5',
  'Al Bardi 6',
  'Al Bardi 7',
  'Al Jaradia',
  'Al Mudeife 1',
  'Al Mudeife 2',
  'Al Mudeife 3',
  'Al Mudeife 4',
  'Al Mudeife 5',
  'Al Mudeife 6',
  'Al Owainat',
  'Bat-Ha 1',
  'Bat-Ha 2',
  'Bat-Ha 3',
  'Bat-Ha 4',
  'Bat-Ha 5',
  'Hay Al Ghazeer',
  'Hay Al Haray Commercial',
  'Hay Al Haray Residential',
  'Hay Al Nakeel',
  'Hay Al Sharg',
  'Hay Al Zubara',
  'Hay Algharb',
  'Hay Alharay Industrial',
  'Hay Alloleya',
  'Hay Shgair',
  'Hayawa 1',
  'Hayawa 2',
  'Hayawa 3',
  'Hayawa 4',
  'Jabal Al Eyoon',
  'Jabal Al Jaradia',
  'Jabal Al Khatim',
  'Jabal Al Manzil',
  'Jabal Al Rabi',
  'Jabal Al Shahs',
  'Nahwa',
  'Saihalwasat',
  'Shees',
  'Wadi Wshee',
  'Kalba',
  'Al Aqola',
  'Al Bahais',
  'Al Burdi',
  'Al Butin',
  'Al Darwishia',
  'Al Fayadah',
  'Al Hafiya Natural Reserve',
  'Al Kharrah',
  'Al Khuwair',
  'Al Mafraq',
  'Al Mahata',
  'Al Manasif',
  'Al Monazafa',
  'Al Mughaider',
  'Al Musalla',
  'Al Oud',
  'Al Qaadsia',
  'Al Qarantia',
  'Al Quram',
  'Al Rukh',
  'Al Sidrah',
  'Al Zuroub',
  'Al Ghail-1',
  'Al Ghail-2',
  'Al Ghail-5',
  'Al Ghail-6',
  'Al Ghail-7',
  'Al Ghail-8',
  'Al Qalaa',
  'Al Saaf-1',
  'Al Saaf-2',
  'Al Saaf-3',
  'Al Saaf-4',
  'Al Saaf-5',
  'Al Saaf-6',
  'Al Saaf-7',
  'Al Saaf-8',
  'Al Soor-1',
  'Al Soor-3',
  'Al Soor-4',
  'Al Tarif-1',
  'Al Tarif-2',
  'Al Tarif-3',
  'Al Tarif-4',
  'Al Tarif-5',
  'Hay Al Jamma',
  'Hay Al Qalaa',
  'Hutin',
  'Jabl Alfaraish',
  'Kalba Commercial',
  'Kalba Industrial',
  'Khatam Melaha',
  "Qa'ab",
  'Seah Al Samer',
  'Shaara',
  'Shabiat Al Al Qulai',
  'Shabiat Al Habli',
  'Shabiat Al Haseen',
  'Shabiat Al Muhtadi',
  'Soor Kalba',
  'Soor Kalba Commercial',
  'Suhaila',
  'Wadi Al Balah',
  'Wadi Al Mudeeq',
  'Wadi Shia',
  'Maliha',
  'Akhider',
  'Al Haferah',
  'Al Lmaileh',
  'Al Madinah',
  'Alkhatim',
  'Ar Ruwaida',
  'Hamdah 1',
  'Khdairah 1',
  'Khdairah 2',
  'Meliha 1',
  'Meliha 2',
  'Tawi Hamdah',
];

// Populate the dropdown
const areaSelect = document.getElementById('area-select');
const areaSearch = document.getElementById('area-search');

// Function to hide the dropdown
function hideAreaSelect() {
  areaSelect.style.display = 'none';
}

// Add event listener for search input
areaSearch.addEventListener('input', (event) => {
  const searchValue = event.target.value.toLowerCase().trim();

  // Show dropdown if input is not empty, otherwise hide it
  if (searchValue) {
    areaSelect.style.display = 'block';
    areaSelect.innerHTML = ''; // Clear current options

    // Populate dropdown with filtered results
    const filteredAreas = areas.filter((area) =>
      area.toLowerCase().includes(searchValue)
    );

    // Separate matches starting with the query
    const startsWithMatches = areas.filter((area) =>
      area.toLowerCase().startsWith(searchValue)
    );

    // Separate matches where any word starts with the query
    const wordStartsWithMatches = areas.filter((area) =>
      area
        .toLowerCase()
        .split(' ')
        .some((word) => word.startsWith(searchValue))
    );

    // Remove duplicates from wordStartsWithMatches
    const uniqueWordMatches = wordStartsWithMatches.filter(
      (area) => !startsWithMatches.includes(area)
    );

    // Combine results, prioritizing startsWithMatches
    const sortedResults = [...startsWithMatches, ...uniqueWordMatches];

    // Populate the dropdown with sorted results
    sortedResults.forEach((filteredArea) => {
      const option = document.createElement('option');
      option.value = filteredArea;
      option.textContent = filteredArea;
      areaSelect.appendChild(option);
    });
    filteredAreas.forEach((filteredArea) => {
      const option = document.createElement('option');
      option.value = filteredArea;
      option.textContent = filteredArea;
      areaSelect.appendChild(option);
    });
  } else {
    hideAreaSelect();
  }
});

// Event listener for blur (losing focus) from input or clicking elsewhere
document.addEventListener('click', (event) => {
  const isClickInside =
    areaSearch.contains(event.target) || areaSelect.contains(event.target);
  if (!isClickInside) {
    hideAreaSelect(); // Hide dropdown if clicked outside
  }
});

// Event listener for dropdown selection
areaSelect.addEventListener('change', () => {
  const selectedValue = areaSelect.value;
  if (selectedValue) {
    areaSearch.value = selectedValue; // Set selected value in input
    hideAreaSelect(); // Hide the dropdown
  }
});

// Update the KVA calculation when the input value changes
document.getElementById('load-input').addEventListener('input', function () {
  const loadInput = document.getElementById('load-input');
  const td47 = document.getElementById('td47');

  // Check if the span element already exists
  let kvaSpan = document.getElementById('kva-span');
  if (!kvaSpan) {
    // Create a new span if it doesn't exist
    kvaSpan = document.createElement('span');
    kvaSpan.id = 'kva-span';
    td47.appendChild(kvaSpan);
  }

  // Update the span's content and make it visible
  const loadValue = parseFloat(loadInput.value);
  if (!isNaN(loadValue)) {
    kvaSpan.textContent = `(${(loadValue / 0.8).toFixed(2)} KVA)`;
    kvaSpan.style.display = 'inline'; // Ensure it's visible
  } else {
    kvaSpan.textContent = '';
  }
});

// Clear button behavior
document.getElementById('clear-button4').addEventListener('click', function () {
  const loadInput = document.getElementById('load-input');
  const kvaSpan = document.getElementById('kva-span');

  // Clear the input value
  loadInput.value = '';

  // Hide the span if it exists
  if (kvaSpan) {
    kvaSpan.style.display = 'none';
  }

  loadInput.focus(); // Optionally refocus the input field
});

function capitalizeWords(input) {
  return input.toLowerCase().replace(/\b\w/g, (match) => match.toUpperCase());
}

// Apply capitalization to specific input fields
document.querySelectorAll('input[type="text"]').forEach((inputField) => {
  inputField.addEventListener('input', (event) => {
    const currentValue = event.target.value;
    event.target.value = capitalizeWords(currentValue);
  });
});

// Create the toggle button
const toggleButton = document.createElement('button');
toggleButton.textContent = 'R';
toggleButton.style.padding = '1px 2.5px';
toggleButton.style.border = '1px solid #ccc';
toggleButton.style.borderRadius = '7px';
toggleButton.style.backgroundColor = '#ddd';
toggleButton.style.cursor = 'pointer';
toggleButton.style.transition = 'all 0.3s';
toggleButton.style.fontSize = '8px';
toggleButton.style.float = 'right';

// Get the td47 element and its first child (kva-span)
const td47 = document.getElementById('td47');
let kvaSpan = document.getElementById('kva-span');
const loadInput = document.getElementById('load-input');
const kw = document.getElementById('kw');

// Ensure kva-span exists; if not, create it dynamically
if (!kvaSpan) {
  kvaSpan = document.createElement('span');
  kvaSpan.id = 'kva-span';
  td47.appendChild(kvaSpan);
}

// Insert the toggle button as the second child
td47.insertBefore(toggleButton, kvaSpan.nextSibling);

// Add click event listener to the toggle button
toggleButton.addEventListener('click', () => {
  const isBold = td47.style.fontWeight === '600';
  td47.style.fontWeight = isBold ? 'normal' : '600';
  loadInput.style.letterSpacing = isBold ? '0px' : '0.6px';
  kvaSpan.style.letterSpacing = isBold ? '0px' : '0.6px';
  kw.style.letterSpacing = isBold ? '0px' : '0.6px';
  toggleButton.textContent = isBold ? 'R' : 'B';
  toggleButton.style.backgroundColor = isBold ? '#ddd' : '#ddd';
  toggleButton.style.color = isBold ? '#000' : '#000';
});

function adjustProjectInputFontSize() {
  const projectInput = document.getElementById('project-input');
  const td46 = document.getElementById('td46');

  // Get the initial font size
  let fontSize = parseFloat(window.getComputedStyle(projectInput).fontSize);

  // Define the minimum font size
  const minFontSize = 5;

  // Reduce the font size incrementally if the text overflows
  if (
    projectInput.scrollWidth > projectInput.clientWidth &&
    fontSize > minFontSize
  ) {
    fontSize -= 0.021; // Reduce font size smoothly in small steps
    projectInput.style.fontSize = `${fontSize}px`;
  }

  // Increase the font size incrementally if there is extra space
  if (projectInput.scrollWidth <= projectInput.clientWidth && fontSize < 9) {
    fontSize += 0.021; // Increase font size smoothly in small steps
    projectInput.style.fontSize = `${fontSize}px`;
  }
}

function handlePasteEvent(event) {
  const projectInput = document.getElementById('project-input');
  let fontSize = parseFloat(window.getComputedStyle(projectInput).fontSize);
  const minFontSize = 5; // Define the minimum font size
  const threshold = 66; // Number of characters before reducing font size

  // Use a small delay to ensure the pasted content is in the input
  setTimeout(() => {
    const pastedText = projectInput.value;
    const textLength = pastedText.length;

    console.log('Pasted text length:', textLength);

    // Reduce the font size incrementally if the text overflows or exceeds the threshold
    if (
      projectInput.scrollWidth > projectInput.clientWidth &&
      fontSize > minFontSize
    ) {
      if (textLength > threshold) {
        // Calculate how much to reduce the font size
        const excessCharacters = textLength - threshold; // Number of extra characters
        const fontSizeReduction = excessCharacters * 0.021; // Reduce 0.021px per character

        fontSize = Math.max(minFontSize, fontSize - fontSizeReduction); // Ensure font size doesn't go below minFontSize
        projectInput.style.fontSize = `${fontSize}px`;

        console.log('Adjusted font size:', fontSize);
      }
    }
  }, 0); // Delay ensures content is pasted before processing
}

// Attach the function to dynamically adjust font size on input or paste
const projectInput = document.getElementById('project-input');
projectInput.addEventListener('input', adjustProjectInputFontSize); // For typing
projectInput.addEventListener('paste', handlePasteEvent); // For pasting

// Initialize font size adjustment for any pre-filled values
adjustProjectInputFontSize();

function adjustPartiesInputFontSize() {
  const partiesInput = document.getElementById('parties-input');
  const td50 = document.getElementById('td50');

  // Get the initial font size
  let fontSize = parseFloat(window.getComputedStyle(partiesInput).fontSize);

  // Define the minimum font size
  const minFontSize = 5;

  // Reduce the font size incrementally if the text overflows
  if (
    partiesInput.scrollWidth > partiesInput.clientWidth &&
    fontSize > minFontSize
  ) {
    fontSize -= 0.01; // Reduce font size smoothly in small steps
    partiesInput.style.fontSize = `${fontSize}px`;
  }

  // Increase the font size incrementally if there is extra space
  if (partiesInput.scrollWidth <= partiesInput.clientWidth && fontSize < 9) {
    fontSize += 0.01; // Increase font size smoothly in small steps
    partiesInput.style.fontSize = `${fontSize}px`;
  }
}

function handlePasteEvent1(event) {
  const partiesInput = document.getElementById('parties-input');
  let fontSize = parseFloat(window.getComputedStyle(partiesInput).fontSize);
  const minFontSize = 5; // Define the minimum font size
  const threshold = 66; // Number of characters before reducing font size

  // Use a small delay to ensure the pasted content is in the input
  setTimeout(() => {
    const pastedText = partiesInput.value;
    const textLength = pastedText.length;

    console.log('Pasted text length:', textLength);

    // Reduce the font size incrementally if the text overflows or exceeds the threshold
    if (
      partiesInput.scrollWidth > partiesInput.clientWidth &&
      fontSize > minFontSize
    ) {
      if (textLength > threshold) {
        // Calculate how much to reduce the font size
        const excessCharacters = textLength - threshold; // Number of extra characters
        const fontSizeReduction = excessCharacters * 0.01; // Reduce 0.01px per character

        fontSize = Math.max(minFontSize, fontSize - fontSizeReduction); // Ensure font size doesn't go below minFontSize
        partiesInput.style.fontSize = `${fontSize}px`;

        console.log('Adjusted font size:', fontSize);
      }
    }
  }, 0); // Delay ensures content is pasted before processing
}

// Attach the function to dynamically adjust font size on input or paste
const partiesInput = document.getElementById('parties-input');
partiesInput.addEventListener('input', adjustPartiesInputFontSize); // For typing
partiesInput.addEventListener('paste', handlePasteEvent1); // For pasting

// Initialize font size adjustment for any pre-filled values
adjustPartiesInputFontSize();

function adjustConsultantInputFontSize() {
  const consultantInput = document.getElementById('consultant-input');
  const td51 = document.getElementById('td51');

  // Get the initial font size
  let fontSize = parseFloat(window.getComputedStyle(consultantInput).fontSize);

  // Define the minimum font size
  const minFontSize = 5;

  // Reduce the font size incrementally if the text overflows
  if (
    consultantInput.scrollWidth > consultantInput.clientWidth &&
    fontSize > minFontSize
  ) {
    fontSize -= 0.01; // Reduce font size smoothly in small steps
    consultantInput.style.fontSize = `${fontSize}px`;
  }

  // Increase the font size incrementally if there is extra space
  if (
    consultantInput.scrollWidth <= consultantInput.clientWidth &&
    fontSize < 9
  ) {
    fontSize += 0.01; // Increase font size smoothly in small steps
    consultantInput.style.fontSize = `${fontSize}px`;
  }
}

function handlePasteEvent2(event) {
  const consultantInput = document.getElementById('consultant-input');
  let fontSize = parseFloat(window.getComputedStyle(consultantInput).fontSize);
  const minFontSize = 5; // Define the minimum font size
  const threshold = 66; // Number of characters before reducing font size

  // Use a small delay to ensure the pasted content is in the input
  setTimeout(() => {
    const pastedText = consultantInput.value;
    const textLength = pastedText.length;

    console.log('Pasted text length:', textLength);

    // Reduce the font size incrementally if the text overflows or exceeds the threshold
    if (
      consultantInput.scrollWidth > consultantInput.clientWidth &&
      fontSize > minFontSize
    ) {
      if (textLength > threshold) {
        // Calculate how much to reduce the font size
        const excessCharacters = textLength - threshold; // Number of extra characters
        const fontSizeReduction = excessCharacters * 0.01; // Reduce 0.01px per character

        fontSize = Math.max(minFontSize, fontSize - fontSizeReduction); // Ensure font size doesn't go below minFontSize
        consultantInput.style.fontSize = `${fontSize}px`;

        console.log('Adjusted font size:', fontSize);
      }
    }
  }, 0); // Delay ensures content is pasted before processing
}

// Attach the function to dynamically adjust font size on input or paste
const consultantInput = document.getElementById('consultant-input');
consultantInput.addEventListener('input', adjustConsultantInputFontSize); // For typing
consultantInput.addEventListener('paste', handlePasteEvent2); // For pasting

// Initialize font size adjustment for any pre-filled values
adjustConsultantInputFontSize();

function adjustContractorInputFontSize() {
  const contractorInput = document.getElementById('contractor-input');
  const td52 = document.getElementById('td52');

  // Get the initial font size
  let fontSize = parseFloat(window.getComputedStyle(contractorInput).fontSize);

  // Define the minimum font size
  const minFontSize = 5;

  // Reduce the font size incrementally if the text overflows
  if (
    contractorInput.scrollWidth > contractorInput.clientWidth &&
    fontSize > minFontSize
  ) {
    fontSize -= 0.01; // Reduce font size smoothly in small steps
    contractorInput.style.fontSize = `${fontSize}px`;
  }

  // Increase the font size incrementally if there is extra space
  if (
    contractorInput.scrollWidth <= contractorInput.clientWidth &&
    fontSize < 9
  ) {
    fontSize += 0.01; // Increase font size smoothly in small steps
    contractorInput.style.fontSize = `${fontSize}px`;
  }
}

function handlePasteEvent3(event) {
  const contractorInput = document.getElementById('contractor-input');
  let fontSize = parseFloat(window.getComputedStyle(contractorInput).fontSize);
  const minFontSize = 5; // Define the minimum font size
  const threshold = 66; // Number of characters before reducing font size

  // Use a small delay to ensure the pasted content is in the input
  setTimeout(() => {
    const pastedText = contractorInput.value;
    const textLength = pastedText.length;

    console.log('Pasted text length:', textLength);

    // Reduce the font size incrementally if the text overflows or exceeds the threshold
    if (
      contractorInput.scrollWidth > contractorInput.clientWidth &&
      fontSize > minFontSize
    ) {
      if (textLength > threshold) {
        // Calculate how much to reduce the font size
        const excessCharacters = textLength - threshold; // Number of extra characters
        const fontSizeReduction = excessCharacters * 0.01; // Reduce 0.01px per character

        fontSize = Math.max(minFontSize, fontSize - fontSizeReduction); // Ensure font size doesn't go below minFontSize
        contractorInput.style.fontSize = `${fontSize}px`;

        console.log('Adjusted font size:', fontSize);
      }
    }
  }, 0); // Delay ensures content is pasted before processing
}

// Attach the function to dynamically adjust font size on input or paste
const contractorInput = document.getElementById('contractor-input');
contractorInput.addEventListener('input', adjustContractorInputFontSize); // For typing
contractorInput.addEventListener('paste', handlePasteEvent3); // For pasting

// Initialize font size adjustment for any pre-filled values
adjustContractorInputFontSize();

function adjustElecContractorInputFontSize() {
  const elecContractorInput = document.getElementById('elec-contractor-input');
  const td53 = document.getElementById('td53');

  // Get the initial font size
  let fontSize = parseFloat(
    window.getComputedStyle(elecContractorInput).fontSize
  );

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
  let fontSize = parseFloat(
    window.getComputedStyle(elecContractorInput).fontSize
  );
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
elecContractorInput.addEventListener(
  'input',
  adjustElecContractorInputFontSize
); // For typing
elecContractorInput.addEventListener('paste', handlePasteEvent4); // For pasting

// Initialize font size adjustment for any pre-filled values
adjustElecContractorInputFontSize();

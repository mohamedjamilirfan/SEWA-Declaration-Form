document
  .getElementById('download-pdf')
  .addEventListener('click', async function () {
    // Get the entered name
    const nameInput = document.getElementById('name-input');
    const titleSelect = document.getElementById('title-select');
    const nameValue = titleSelect.value + ' ' + nameInput.value;

    // if (nameInput.value.trim() === '') {
    //   alert('Please enter a name before downloading the PDF.');
    //   return;
    // }

    // Display the entered name on the page
    const td2 = document.getElementById('td2');
    td2.textContent = nameValue; // Replace input with name text
    nameInput.style.display = 'none'; // Hide the input field
    titleSelect.style.display = 'none'; // Hide the dropdown

    // Dynamically import jsPDF
    const { jsPDF } = window.jspdf;

    // Select the sections for each page
    const page1 = document.querySelector('#page1');
    const page2 = document.querySelector('#page2');

    // Apply a border to all table and td elements
    document.querySelectorAll('table').forEach((element) => {
      element.style.border = 'none';
      element.style.borderLeft = '0.5px solid black';
    });

    // Apply top and right borders only to all <th> elements
    document.querySelectorAll('th').forEach((th) => {
      th.style.border = 'none'; // Clear existing borders
      th.style.borderTop = '0.5px solid black';
      th.style.borderRight = '0.5px solid black'; // Add right border
    });

    // Apply top and right borders only to all <td> elements
    document.querySelectorAll('td').forEach((td) => {
      td.style.border = 'none'; // Clear existing borders
      td.style.borderTop = '0.5px solid black'; // Add top border
      td.style.borderRight = '0.5px solid black'; // Add right border
    });

    // Apply top and right borders only to all <td> elements
    document.querySelectorAll('#table2').forEach((table2) => {
      table2.style.border = 'none'; // Clear existing borders
      table2.style.borderLeft = '0.5px solid black'; // Add top border
      table2.style.borderBottom = '0.5px solid black';
    });

    // Apply top and right borders only to all <td> elements
    document.querySelectorAll('#table3').forEach((table3) => {
      table3.style.border = 'none'; // Clear existing borders
      table3.style.borderLeft = '0.5px solid black'; // Add top border
      table3.style.borderBottom = '0.5px solid black';
    });

    // Apply top and right borders only to all <td> elements
    document.querySelectorAll('#line1, #line2').forEach((line) => {
      line.style.border = 'none'; // Clear existing borders
      line.style.borderBottom = '0.1px solid #a09d9d';
    });

    // Apply top and right borders only to all <td> elements
    document.querySelectorAll('#terms').forEach((terms) => {
      terms.style.textDecoration = 'none';
      terms.style.borderBottom = '0.5px solid black';
      terms.style.paddingBottom = '1px';
    });

    // Apply top and right borders only to all <td> elements
    document.querySelectorAll('#terms1').forEach((terms1) => {
      terms1.style.textDecoration = 'none';
      terms1.style.borderBottom = '0.5px solid black';
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
      dir: 'rtl', // Support RTL
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
    });
    const imgData2 = canvas2.toDataURL('image/jpeg', 4.0);
    pdf.addImage(imgData2, 'JPEG', 0, 0, pageWidth, pageHeight);

    // Save the PDF
    pdf.save('Document.pdf');

    // Add page refresh
    location.reload();
  });

  document.getElementById('clear-button').addEventListener('click', function (event) {
    const nameInput = document.getElementById('name-input');
    nameInput.value = ''; // Clear the input value
    nameInput.focus(); // Optionally refocus the input field
    event.preventDefault(); // Prevent any unexpected behavior
  });
  
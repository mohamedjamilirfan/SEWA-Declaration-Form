document
  .getElementById('download-pdf')
  .addEventListener('click', async function () {
    // Get the entered name
    const nameInput = document.getElementById('name-input');
    const titleSelect = document.getElementById('title-select');
    const areaSearch = document.getElementById('area-search');
    const areaSelect = document.getElementById('area-select');
    const plotnoInput = document.getElementById('plotNo-input');
    const projectInput = document.getElementById('project-input');
    const td47 = document.getElementById('td47');
    const loadInput = document.getElementById('load-input');
    const kw = document.getElementById('kw');
    const kvaSpan = document.getElementById('kva-span');
    

    // Get the entered name
    const nameValue = titleSelect.value + ' ' + nameInput.value;
    const areaValue = areaSearch.value;
    const plotnoValue = plotnoInput.value;
    const projectValue = projectInput.value;
    const loadValue = loadInput.value + ' ' + kw.textContent + ' ' + kvaSpan.textContent;
    

    // if (nameInput.value.trim() === '') {
    //   alert('Please enter a name before downloading the PDF.');
    //   return;
    // }

    // Display the entered name on the page
    const td2 = document.getElementById('td2');
    td2.textContent = nameValue; // Replace input with name text

    const td44 = document.getElementById('td44');
    td44.textContent = areaValue; // Replace input with name text

    const td45 = document.getElementById('td45');
    td45.textContent = plotnoValue; // Replace input with name text

    const td46 = document.getElementById('td46');
    td46.textContent = projectValue; // Replace input with name text

    td47.textContent = loadValue; // Replace input with name text

    nameInput.style.display = 'none'; // Hide the input field
    titleSelect.style.display = 'none'; // Hide the dropdown
    areaSearch.style.display = 'none'; // Hide the area-search input box
    areaSelect.style.display = 'none'; // Hide the area-select dropdown
    plotnoInput.style.display = 'none'; // Hide the area-search input box
    projectInput.style.display = 'none'; // Hide the area-search input box

    // Dynamically import jsPDF
    const { jsPDF } = window.jspdf;

    // Select the sections for each page
    const page1 = document.querySelector('#page1');
    const page2 = document.querySelector('#page2');

    // Apply a border to all table and td elements
    document.querySelectorAll('table').forEach((element) => {
      element.style.border = 'none';
      element.style.borderLeft = '0.3px solid black';
    });

    // Apply top and right borders only to all <th> elements
    document.querySelectorAll('th').forEach((th) => {
      th.style.border = 'none'; // Clear existing borders
      th.style.borderTop = '0.3px solid black';
      th.style.borderRight = '0.3px solid black'; // Add right border
    });

    // Apply top and right borders only to all <td> elements
    document.querySelectorAll('td').forEach((td) => {
      td.style.border = 'none'; // Clear existing borders
      td.style.borderTop = '0.3px solid black'; // Add top border
      td.style.borderRight = '0.3px solid black'; // Add right border
    });

    // Apply top and right borders only to all <td> elements
    document.querySelectorAll('#table2').forEach((table2) => {
      table2.style.border = 'none'; // Clear existing borders
      table2.style.borderLeft = '0.3px solid black'; // Add top border
      table2.style.borderBottom = '0.3px solid black';
    });

    // Apply top and right borders only to all <td> elements
    document.querySelectorAll('#table3').forEach((table3) => {
      table3.style.border = 'none'; // Clear existing borders
      table3.style.borderLeft = '0.3px solid black'; // Add top border
      table3.style.borderBottom = '0.3px solid black';
    });

    // Apply top and right borders only to all <td> elements
    document.querySelectorAll('#line1, #line2').forEach((line) => {
      line.style.border = 'none'; // Clear existing borders
      line.style.borderBottom = '0.1px solid #a09d9d';
    });

    // Apply top and right borders only to all <td> elements
    document.querySelectorAll('#terms').forEach((terms) => {
      terms.style.textDecoration = 'none';
      terms.style.borderBottom = '0.3px solid black';
      terms.style.paddingBottom = '1px';
    });

    // Apply top and right borders only to all <td> elements
    document.querySelectorAll('#terms1').forEach((terms1) => {
      terms1.style.textDecoration = 'none';
      terms1.style.borderBottom = '0.3px solid black';
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

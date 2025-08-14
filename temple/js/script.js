const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  // Added 3 more temples
  {
  templeName: "Salt Lake Utah",
  location: "Salt Lake City, Utah, United States",
  dedicated: "1893, April, 6",
  area: 382207,
  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-utah/400x250/salt-lake-temple-lds-758309-wallpaper.jpg"
},
{
  templeName: "Rome Italy",
  location: "Rome, Italy",
  dedicated: "2019, March, 10",
  area: 41010,
  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/400x250/rome-italy-temple-lds-1012424-wallpaper.jpg"
},
{
  templeName: "Cebu City Philippines",
  location: "Cebu City, Philippines",
  dedicated: "2010, June, 13",
  area: 29661,
  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cebu-city-philippines/400x250/cebu-city-philippines-temple-lds-856823-wallpaper.jpg"
}
];

// Display function
function displayTemples(temples) {
  const templeContainer = document.getElementById('temple-cards'); 
  templeContainer.innerHTML = ''; 

  temples.forEach(temple => {
    const card = `
      <div class="temple-card">
        <h3>${temple.templeName}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area} sqft</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" />
      </div>
    `;
    templeContainer.innerHTML += card;
  });
}

displayTemples(temples);

// Filters
function filterOldTemples(temples) {
  return temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
}
function filterNewTemples(temples) {
  return temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
}
function filterLargeTemples(temples) {
  return temples.filter(temple => temple.area > 90000);
}
function filterSmallTemples(temples) {
  return temples.filter(temple => temple.area < 10000);
}

// Event listeners
document.getElementById('old-filter').addEventListener('click', () => displayTemples(filterOldTemples(temples)));
document.getElementById('new-filter').addEventListener('click', () => displayTemples(filterNewTemples(temples)));
document.getElementById('large-filter').addEventListener('click', () => displayTemples(filterLargeTemples(temples)));
document.getElementById('small-filter').addEventListener('click', () => displayTemples(filterSmallTemples(temples)));
document.getElementById('home-filter').addEventListener('click', () => displayTemples(temples));

// Footer last modified
document.querySelector('#lastModified').textContent = `Last modified: ${document.lastModified}`;
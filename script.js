'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const name = data.name.common;
  const flag = data.flags.svg;
  const region = data.region;
  const language = Object.values(data.languages)[0];
  const currency = Object.values(data.currencies)[0].name;

  const html = `
      <article class="country ${className}">
        <img class="country__img" src="${flag}" />
        <div class="country__data">
          <h3 class="country__name">${name}</h3>
          <h4 class="country__region">${region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} people</p>
          <p class="country__row"><span>🗣️</span>${language}</p>
          <p class="country__row"><span>💰</span>${currency}</p>
        </div>
      </article>
      `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

///////////////////////////////////////
/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const languages = Object.values(data.languages);
    const currencies = Object.values(data.currencies);

    console.log(languages);
    console.log(currencies);

    const html = `
  <article class="country">
    <img class="country__img" src="${data.flags.svg}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${languages[0]}</p>
      <p class="country__row"><span>💰</span>${currencies[0].name}</p>
    </div>
  </article>
  `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('usa');
getCountryData('portugal');
getCountryData('spain');
getCountryData('brasil');

//////////////////////////  


const renderCountry = function (data, className) {
  const languages = Object.values(data.languages);
  const currencies = Object.values(data.currencies);

  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.svg}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${languages[0]}</p>
        <p class="country__row"><span>💰</span>${currencies[0].name}</p>
      </div>
    </article>
    `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    renderCountry(data);

    const neighbour = data.borders?.[0];

    if (!neighbour) return;

    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, ' neighbour');
    });
  });
};

getCountryAndNeighbour('portugal');



'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {

  const name = data.name.common;
  const flag = data.flags.svg;
  const region = data.region;
  const language = Object.values(data.languages)[0];
  const currency = Object.values(data.currencies)[0].name;

  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${flag}" />
    <div class="country__data">
      <h3 class="country__name">${name}</h3>
      <h4 class="country__region">${region}</h4>
      <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
  ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${language}</p>
      <p class="country__row"><span>💰</span>${currency}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};*/

///////////////////////////////////////
// Our First AJAX Call: XMLHttpRequest
/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const name = data.name.common;
    const flag = data.flags.svg;
    const region = data.region;
    const language = Object.values(data.languages)[0];
    const currency = Object.values(data.currencies)[0].name;

    const html = `
  <article class="country">
    <img class="country__img" src="${flag}" />
    <div class="country__data">
      <h3 class="country__name">${name}</h3>
      <h4 class="country__region">${region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${language}</p>
      <p class="country__row"><span>💰</span>${currency}</p>
    </div>
  </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('portugal');
getCountryData('usa');
getCountryData('germany');
*/

///////////////////////////////////////
// Welcome to Callback Hell

/*
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country (2)
    const [neighbour] = data.borders;

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbour('portugal');
//getCountryAndNeighbour('usa');*/
/*
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderCountry(data[0]);
    });
};*/

/*

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=103332397414024e15794585x103662
    `)
    .then(response => {
      if (!response.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(
        `You are in ${data.staddress}, ${data.city}, ${data.country}`
      );

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(response => {
      if (!response.ok) throw new Error(`Country not found (${res.status})`);

      return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => {
      console.error(`${err.message}`);
    });
};

//whereAmI(52.508, 13.381);
//whereAmI(19.037, 72.873);
//whereAmI(-33.933, 18.474);

function success(pos) {
  const crd = pos.coords;
  whereAmI(`${crd.latitude}, ${crd.longitude}`);
}

navigator.geolocation.getCurrentPosition(success);

alert('Olá mundo');


const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening...');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('YOU WIN!');
    } else {
      reject(new Error('YOU LOSE!'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

////////////////////////////////////////////////////

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => console.log('I waited for 1 second'));

Promise.resolve('ABC').then(x => console.log(x));
Promise.reject(new Error('ERRO!')).catch(x => console.error(x));
*/

///////////////////////////////////////////////////////

/*

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

//getPosition().then(pos => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(
        `https://geocode.xyz/${lat},${lng}?geoit=json&auth=103332397414024e15794585x103662`
      );
    })
    .then(response => {
      if (!response.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return response.json();
    })
    .then(data => {
      console.log(
        `You are in ${data.staddress}, ${data.city}, ${data.country}`
      );

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(response => {
      if (!response.ok) throw new Error(`Country not found (${res.status})`);

      return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => {
      console.error(`${err.message}`);
    });
};

btn.addEventListener('click', whereAmI);

*/

//////////////////////////////////////////////////////////////////

/*

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const creatImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;

creatImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    console.log('Image hidden');
    return creatImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    console.log('Image hidden');
    return creatImage('img/img-3.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 3 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    console.log('Image hidden');
  })
  .catch(err => console.error(err));


  */

/*

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    const resGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=103332397414024e15794585x103662`
    );

    if (!resGeo.ok) throw Error('Problem getting country');

    const dataGeo = await resGeo.json();

    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );

    if (!res.ok) throw Error('Problem getting country');

    const data = await res.json();
    renderCountry(data[0]);

    return `You are in ${dataGeo.staddress}, ${dataGeo.city}, ${dataGeo.country}.`;
  } catch (err) {
    console.error(err);
    renderError(`Something went wrong ${err.message}😶‍🌫️`);
    throw err;
  }
};

console.log('1: Getting location...');

// whereAmI()
//   .then(location => console.log(location))
//   .catch(err => console.error(`2: ${err.message}`))
//   .finally(() => console.log('3: Finished getting location!'));

(async function () {
  try {
    const location = await whereAmI();
    console.log(location);
  } catch (err) {
    console.error(`2: ${err.message}`);
  }
  console.log('3: Finished getting location!');
})();

*/

/* const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

    // console.log([...data1.capital, ...data2.capital, ...data3.capital]);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    console.log(data.map(d => d[0].capital[0]));
  } catch (err) {
    console.error(err);
  }
};

get3Countries('portugal', 'spain', 'japan'); */
/* 
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON(`https://restcountries.com/v3.1/name/mexico`),
    getJSON(`https://restcountries.com/v3.1/name/brasil`),
    getJSON(`https://restcountries.com/v3.1/name/argentina`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/germany`),
  timeout(1),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

Promise.allSettled([
  Promise.resolve('Sucesso'),
  Promise.reject('Error'),
  Promise.resolve('Sucess'),
]).then(res => console.log(res));

Promise.all([
  Promise.resolve('Sucesso'),
  Promise.reject('Error'),
  Promise.resolve('Sucess'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

Promise.any([
  Promise.resolve('Sucesso'),
  Promise.reject('Error'),
  Promise.resolve('Sucess'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err)); */

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const creatImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

const loadNPause = async function () {
  try {
    let img = await creatImage('img/img-1.jpg');
    console.log('Image 1 loaded');
    await wait(2);
    img.style.display = 'none';

    img = await creatImage('img/img-2.jpg');
    console.log('Image 2 loaded');
    await wait(2);
    img.style.display = 'none';

    img = await creatImage('img/img-3.jpg');
    console.log('Image 3 loaded');
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.error(err);
  }
};

//loadNPause();

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await creatImage(img));

    const imgsEl = await Promise.all(imgs);

    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

//getPosition().then(pos => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(
        `https://geocode.xyz/${lat},${lng}?geoit=json&auth=103332397414024e15794585x103662`
      );
    })
    .then(response => {
      if (!response.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return response.json();
    })
    .then(data => {
      alert(`You are in ${data.staddress}, ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(response => {
      if (!response.ok) throw new Error(`Country not found (${res.status})`);

      return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => {
      console.error(`${err.message}`);
    });
};

btn.addEventListener('click', whereAmI);
whereAmI();

let apiKey = 'AIzaSyD3_QDaBntX4kwX5mgxTVvTihjg-zZSeOQ';

//TODO: Add Google geolocation typeahead to form address correctly

$('.rep-search').on('submit', function (e) {
  e.preventDefault();
  let address = $('.address').val();
  callApi(address);
});

function callApi(address) {

  $('.officials').empty();

  fetch(`https://www.googleapis.com/civicinfo/v2/representatives?key=${apiKey}&address=${address}`).then(function (response) {
    return response.json();
  })
    .then(function (results) {
      console.log(results)
      let offices = results.offices;
      let officials = results.officials;

      offices.forEach(e => {
        let name = e.name;
        e.officialIndices.forEach(e => {
          officials[e].title = name;
        });
      });

      officials.forEach((e,i) => {
        let officialChannels = e.channels;
        let channels = '';
        let photoRow = '';
        let party = "N/A";
        let website = '';

        if (officialChannels) {
          officialChannels.forEach(e => {
            if (e.type != "GooglePlus") {
              channels += `<li><a href="http://www.${e.type}.com/${e.id}" target="_blank">${e.type}</a></li>`
            }
          });
        }

        if (e.photoUrl != null) {
          photoRow = `<li><img src="${e.photoUrl}"/></li>`
        }

        if (e.party != null) {
          party = e.party;
        }

        if (e.urls != null) {
          website = `<a href="${e.urls}" target="_blank">Website</a>`;
        }

        let encodedName = encodeURI(e.name);

        $('.officials').append(
          `<li class="official"> 
            <div class="container">
              <h2>${e.name}</h2>
              <h3>${e.title}</h3>
              <ul class="official-details">
                ${photoRow}
                <li>Party: ${party}</li>
                <li>Phone: <a href="tel:${e.phones}">${e.phones}</a></li>
                <li>${website}</li>
                ${channels}

                <a href="/send-message.html?rep=${encodedName}">Send ${e.name} A Message</a>
              </ul>
            </div>
          </li>`
        )

        $('.official').fadeIn();
      });
    });
  }
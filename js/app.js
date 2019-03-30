let apiKey = 'AIzaSyD3_QDaBntX4kwX5mgxTVvTihjg-zZSeOQ';




$('.form').on('submit', function(e) {
  e.preventDefault();
 let address = $('.address').val();
 callApi(address);
});

 function callApi(address) {

   fetch(`https://www.googleapis.com/civicinfo/v2/representatives?key=${apiKey}&address=${address}`).then(function(response) {
     return response.json();
    })
    .then(function(results) {
      //console.log(results)
      let offices = results.offices;
      let officials = results.officials;



      officials.forEach(e => {
        let officialChannels = e.channels;
        let channels = '';
        let photoRow = '';

        if(officialChannels != null){
            officialChannels.forEach(e => {
            channels += `<li><a href="http://www.${e.type}.com/${e.id}">${e.type}</a></li>`
          });
        }

        if(e.photoUrl != null) {
          photoRow = `<li><img src="${e.photoUrl}"/></li>`
        }

        $('.officials').append(
          `<li>
            ${e.name}
            <ul>
              ${photoRow}
              <li>Party: ${e.party}</li>
              <li>Phone: ${e.phones}</li>
              <li><a href="${e.urls}">Website</a></li>
              ${channels}
            </ul>
          </li>`
        )
      });
    });
  }

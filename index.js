document.addEventListener("DOMContentLoaded", function () {
    // Verileri almak için fetch kullan
    fetch('https://api.themoviedb.org/3/search/movie?api_key=7e3d70e2d0fc85df0bfb0113024f1a15&query=Titanic')
      .then(response => response.json())
      .then(data => {
        // JSON verilerinden film bilgilerini al
        var results = data.results;
  
        // Film listesini oluştur
        var filmListesi = document.getElementById("film-listesi");
  
        // Her film için HTML oluştur
        results.forEach(function (result) {
          if (result.backdrop_path !== null) {
            var movieDiv = document.createElement("div");
            movieDiv.classList.add("movie");
            movieDiv.innerHTML = `
              <img src="https://image.tmdb.org/t/p/w500${result.backdrop_path}" alt="${result.title}">
              <div class="movie-content">
                <h2 class="movie-title">${result.title}</h2>
                <p class="movie-details">${result.release_date}</p>
              </div>
            `;
            filmListesi.appendChild(movieDiv);
          }
        });
      })
      .catch(error => {
        console.error('Veri alınamadı: ', error);
      });
  });
  
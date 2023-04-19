const clientId = `ccc5b5ecc47c461dbc39db40398a0a65`;
const clientSecret = `5f07f8e3cd6f47acbbed685205e4ce83`;

const getToken = async () => {
  const result = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
      },
      body: "grant_type=client_credentials",
  });

  const data = await result.json();
  return data.access_token;
};

const getGenres = async (token) => {
  const result = await fetch(
      `https://api.spotify.com/v1/browse/categories?locale=sv_US`,
      {
          method: "GET",
          headers: { Authorization: "Bearer " + token },
      }
  );

  const data = await result.json();
  return data.categories.items;
};

const getPlaylistByGenre = async (token, genreId) => {
  const limit = 14;

  const result = await fetch(
      `https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`,
      {
          method: "GET",
          headers: { Authorization: "Bearer " + token },
      }
  );

  const data = await result.json();
  return data.playlists.items;
};

const getTracks = async (token, href) => {
  const limit = 2;
  const result = await fetch(href + `?limit=${limit}`, {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
  });

  const data = await result.json();
  return data.items;
};

const loadGenres = async () => {
  const token = await getToken();
  const genres = await getGenres(token);
  const list = document.getElementById(`genres`);
  genres.map(async ({ name, icons: [icon], id }) => {
      const playlists = await getPlaylistByGenre(token, id);

      if (playlists.length) {
          const playlistsList = Promise.all(
              playlists.map(
                  async ({
                      name,
                      external_urls: { spotify },
                      images: [image],
                      tracks,
                  }) => {
                      const tracksInPlaylists = await getTracks(token, tracks.href);
                      console.log(tracksInPlaylists);

                      if (tracksInPlaylists.length) {
                          tracksInPlaylistsList = tracksInPlaylists
                              .map(({ track }) => {
                                  const artist = track.artists.map(({ name }) => name);
                                  return `
                 <li><a href="${track.external_urls.spotify}"> ${track.name}<br>Artist(s): ${artist}<br>Album: ${track.album.name}<br>Popularity: ${track.popularity}</li><br>`;
                              })
                              .join("");
                      }
                      return `
             <li><a href="${spotify}"><img src="${image.url}" width="180" height="180" alt="${name}"/>
             <ol id=tracks>${tracksInPlaylistsList}</ol></li>`;
                  }
              )
          )
              .then((playlistsList) => playlistsList.join(""))
              .then((playlistsList) => {
                  const html = `
           <article class="genre-card">
           <div class="main-image">
             <img src="${icon.url}" height="250px" width="250px" alt="${name}"/>
            </div>
             <div class="list">
               <h2>${name}</h2>
               <ol>
                 ${playlistsList}
               </ol>
             </div>
           </article>`;

                  list.insertAdjacentHTML("beforeend", html);
              });
      }
  });
};


loadGenres();

const loadFormByGenre= async ()=> {
  var genre_name= document.getElementById("input-filter-term").value;
  console.log("genre_name :"+genre_name);
  const token = await getToken();
  console.log("Token Done ....!");
  const genres = await getGenres(token);
  console.log("genre Done ..!");
  const list = document.getElementById(`genres`);
  genres.map(async ({ name, icons: [icon], id }) => {
    console.log("Inside genrre.map");
    if(name = genre_name){
      console.log("Inside if (name = genre_name) block");
      console.log("name  :"+ name);
      console.log("id :"+id);
      const playlists = await getPlaylistByGenre(token, id);

      if (playlists.length) {
          const playlistsList = Promise.all(
              playlists.map(
                  async ({
                      name,
                      external_urls: { spotify },
                      images: [image],
                      tracks,
                  }) => {
                      const tracksInPlaylists = await getTracks(token, tracks.href);
                      console.log(tracksInPlaylists);

                      if (tracksInPlaylists.length) {
                          tracksInPlaylistsList = tracksInPlaylists
                              .map(({ track }) => {
                                  const artist = track.artists.map(({ name }) => name);
                                  return `
                 <li><a href="${track.external_urls.spotify}"> ${track.name}<br>Artist(s): ${artist}<br>Album: ${track.album.name}<br>Popularity: ${track.popularity}</li><br>`;
                              })
                              .join("");
                      }
                      return `
             <li><a href="${spotify}"><img src="${image.url}" width="180" height="180" alt="${name}"/>
             <ol id=tracks>${tracksInPlaylistsList}</ol></li>`;
                  }
              )
          )
              .then((playlistsList) => playlistsList.join(""))
              .then((playlistsList) => {
                  const html = `
           <article class="genre-card">
           <div class="main-image">
             <img src="${icon.url}" height="250px" width="250px" alt="${name}"/>
            </div>
             <div class="list">
               <h2>${name}</h2>
               <ol>
                 ${playlistsList}
               </ol>
             </div>
           </article>`;

                  list.insertAdjacentHTML("beforeend", html);
              });
      }
    }
  });

};
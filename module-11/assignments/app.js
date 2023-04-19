const clientId = `ccc5b5ecc47c461dbc39db40398a0a65`;
const clientSecret = `5f07f8e3cd6f47acbbed685205e4ce83`;

let _data = [];

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
  const limit = 5;

  const result = await fetch(
    `https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );

  const data = await result.json();
  return data.playlists ? data.playlists.items : [];
};

const loadGenres = async () => {
  const token = await getToken();
  const genres = await getGenres(token);

  _data = await Promise.all(
    genres.map(async (genre) => {
      const playlists = await getPlaylistByGenre(token, genre.id);
      const playlistsList = await Promise.all(
        playlists.map(async (playlist) => {
          const tracks = await getTracksByPlaylist(token, playlist.id);
            return { ...playlist, tracks };
        })
      );
      return { ...genre, playlists: playlistsList };
    })
  );
};

const getTracksByPlaylist = async (token, playlist_id) => {
  const limit = 5;
  const result = await fetch(
    `https://api.spotify.com/v1/playlists/${playlist_id}/tracks?limit=${limit}`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );

  const data = await result.json();
  return data.items;
};

const renderGenres = async (filterTerm,condition) => {
  const token = await getToken();
  const genres = await getGenres(token);
  let source = _data;

  if (filterTerm) {
    const genre_name = filterTerm.toLowerCase();
    source = source.filter(({ name }) => {
      return name.toLowerCase().includes(genre_name);
    });
  }
  const list = document.getElementById(`genres`);
  const html = source.reduce((acc, { name, icons: [icon], playlists }) => {
    if(condition="withPL"){
    const playlistsList = playlists
      .map(({ name, external_urls: { spotify }, images: [image], tracks }) => {

        const trackSongs = tracks.map(
            ({
              track: {
                name: track_name,
                artists,
                external_urls: { spotify },
              },
            }) =>
            `<div class="tracks">
            <a href="${spotify}" target="_blank" class="trackname">${ track_name }</a></div>
             <div class="artist">${artists.map((artist) => artist.name).join(" | ")} </div>
            <br>`
        ).join("");

      return `<li>
        <a href="${spotify}" alt="${name}" target="_blank">
        <div class="img_hover">
    <figure><img class="img-icon" src="${image.url}" width="180" height="180"/></figure>
    </div>
    </a>
          ${trackSongs}
      </li>`;
      }
      );

    if (playlists) {
      return (
        acc +
        `
        <article class="genre-card">
        <h2 class="title_playlist">${ name }</h2>
        <img class="heading" src="${ icon.url }" width="150" height="150" alt="${ name }"/>
            <div>
                <ol>${ playlistsList }</ol>
                
            </div>
        </article>`
      );
    }
  }
  else
  {
    return (
      acc +
      `
      <article class="genre-card">
      <h2 class="title_playlist">${ name }</h2>
      <img class="heading" src="${ icon.url }" width="150" height="150" alt="${ name }"/>
      </article>`
    );

  }
  }, ``);

  list.innerHTML = html;
};

loadGenres().then(renderGenres);

const onSubmit = (event) => {
  event.preventDefault();

  const genre_name = event.target.genre_name.value;
  const radio_button=event.target.radio_button_value.value;
  renderGenres(genre_name,radio_button);
};
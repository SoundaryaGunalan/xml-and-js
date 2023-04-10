const clientId = `ccc5b5ecc47c461dbc39db40398a0a65`;//ccc5b5ecc47c461dbc39db40398a0a65

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
  const limit = 10;

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

const getTracksByPlayList = async (token, playlistId) => {
    const limit = 10;
    console.log("Inside getTracksByPlaylist");
    console.log("token :"+token);
    console.log("PlayList ID :"+playlistId);
    const result = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
        {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }
    );
  
    const data = await result.json();
    console.log("data"+  data);
    //console.log("data.items"+  data.items);
    return data;
  };

const loadGenres = async () => {
  const token = await getToken();
  const genres = await getGenres(token);
  const list = document.getElementById(`genres`);
  genres.map(async ({ name, id, icons: [icon], href }) => {
    const playlists = await getPlaylistByGenre(token, id);
    console.log("Playlist" +playlists );
    const playlistsTable = await Promise.all(playlists
      .map(
        async ({ name,id }) =>{

        console.log("Initiating call to getTracksByPlayList" );
        const tracks= await getTracksByPlayList(token,id);   
        console.log("tracks" + tracks);
       const trackList = tracks
       .map
       (
        ({track: { name: trackName, artists} })=>
          `<td>
          <tr>
          ${trackName} - ${artists.map(artist => artist.name).join(`,`)}
          </tr>
          </td>`
      
      ) .join(``);
       return `
       <li>
       <h3> ${name}</h3>
       <ul>
         ${trackList}
         
       </ul>
       </li>
       `;

       
      }));
     

    if (playlists) {
      if(trackList){
      const html = `
      <article class="genre-card">
        <img src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
        <div>
          <h2>${name}</h2>
          <ol>
            
            ${trackList}
          </ol>
          
        </div>
      </article>`;

      list.insertAdjacentHTML("beforeend", html);
      }
    }
  });
};

loadGenres();




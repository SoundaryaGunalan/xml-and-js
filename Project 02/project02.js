const givenUrl = "https://api.thedogapi.com/v1";
const apiKey = "live_vQznguxccdrWxcKdusoWjEXvTuKvUsfxynMdPEl5R1bPNHDXOazerXyiv6obOPfy";
const limit = 10;

const getDogData = async () => {
  const data = await fetch(givenUrl + `/breeds?limit=${limit}`);
  const dogBreeds = await data.json();
  const selectDog = document.getElementsByClassName("list");
  const breedOptions = dogBreeds.map((dogBreed) => {
    const options = document.createElement("option");
    options.text = dogBreed.name;
    options.value = dogBreed.id;
    return options;
  });
  breedOptions.map((breed) => selectDog[0].appendChild(breed));
};
const setDogImage = (imageUrl) => {
  document.getElementById("dog-image").setAttribute("src", imageUrl);
};

const getDogDetails = (breeds) => {
    console.log("Breeds:"+breeds[0]);
  const name = breeds[0]?.name || "-";
  const lifeSpan = breeds[0]?.life_span || "-";
  const temperament = breeds[0]?.temperament || "-";
  const origin = breeds[0]?.origin || "-";
  const group = breeds[0]?.breed_group || "-";
  const purpose = breeds[0]?.bred_for || "-";
  const height = breeds.map(({ height }) => {
    return `Imperial: ${height.imperial} | Metric: ${height.metric}`;
  });
  const weight = breeds.map(({ weight }) => {
    return `Imperial: ${weight.imperial} | Metric: ${weight.metric}`;
  });

  const dogDetails = document.getElementsByClassName("dogDetails");

  const dogDetailsHtml = `
  <table border="1px solid" class="dogDetailsClass">
        <tr><td>Name:</td><td>${name}</td></tr>
        <tr><td>Life Span:</td><td>${lifeSpan}</td></tr>
        <tr><td>Temperament:</td><td>${temperament}</td></tr>
        <tr><td>Origin:</td><td>${origin}</td></tr>
        <tr><td>Group:</td><td>${group}</td></tr>
        <tr><td>Purpose:</td><td>${purpose}</td></tr>      
        <tr><td>Height:</td><td>${height}</td></tr>
        <tr><td>Weight:</td><td>${weight}</td></tr>
        </table>
    `;
    dogDetails[0].innerHTML = dogDetailsHtml;
};

const getDogByBreedId = async (breedId) => {
    const [data] = await fetch(
    givenUrl + `/images/search?api_key=${apiKey}&breed_id=${breedId}`
  ).then((data) => data.json());
  const { url, breeds } = data;
  setDogImage(url);
  getDogDetails(breeds);
  };
const breedChange = () => {
  const dogBreedId = event.target.value;
  getDogByBreedId(dogBreedId);
};

getDogData();
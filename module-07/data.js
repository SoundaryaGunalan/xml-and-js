const data = 
    {
        "passengers": {
          "totalPages": 11898,
          "totalPassengers": 118972,
          "data": {
            "passenger": [
              {
                "name": "John Doe",
                "trips": 250,
                "airline": {
                  "country": "Taiwan",
                  "established": 1989,
                  "head_quaters": "376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan",
                  "id": 5,
                  "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png",
                  "name": "Eva Air",
                  "slogan": "Sharing the World, Flying Together",
                  "website": "www.evaair.com"
                }
              },
              {
                "name": "John Doe",
                "trips": 250,
                "airline": {
                  "country": "Taiwan",
                  "established": 1989,
                  "head_quaters": "376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan",
                  "id": 5,
                  "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png",
                  "name": "Eva Air",
                  "slogan": "Sharing the World, Flying Together",
                  "website": "www.evaair.com"
                }
              },
              {
                "airline": {
                  "country": "Taiwan",
                  "established": 1989,
                  "head_quaters": "376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan",
                  "id": 5,
                  "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png",
                  "name": "Eva Air",
                  "slogan": "Sharing the World, Flying Together",
                  "website": "www.evaair.com"
                },
                "name": "John Doe",
                "trips": 250
              },
              {
                "name": "John Doe",
                "trips": 250,
                "airline": {
                  "country": "Taiwan",
                  "established": 1989,
                  "head_quaters": "376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan",
                  "id": 5,
                  "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png",
                  "name": "Eva Air",
                  "slogan": "Sharing the World, Flying Together",
                  "website": "www.evaair.com"
                }
              },
              {
                "name": "John Doe",
                "trips": 250,
                "airline": {
                  "country": "Taiwan",
                  "established": 1989,
                  "head_quaters": "376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan",
                  "id": 5,
                  "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png",
                  "name": "Eva Air",
                  "slogan": "Sharing the World, Flying Together",
                  "website": "www.evaair.com"
                }
              },
              {
                "name": "John Doe",
                "trips": 250,
                "airline": {
                  "country": "Taiwan",
                  "established": 1989,
                  "head_quaters": "376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan",
                  "id": 5,
                  "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png",
                  "name": "Eva Air",
                  "slogan": "Sharing the World, Flying Together",
                  "website": "www.evaair.com"
                }
              },
              {
                "name": "John Doe",
                "trips": 250,
                "airline": {
                  "country": "Taiwan",
                  "established": 1989,
                  "head_quaters": "376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan",
                  "id": 5,
                  "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png",
                  "name": "Eva Air",
                  "slogan": "Sharing the World, Flying Together",
                  "website": "www.evaair.com"
                }
              },
              {
                "name": "Muhammad",
                "trips": 2,
                "airline": {
                  "country": "Singapore",
                  "established": 1947,
                  "head_quaters": "Airline House, 25 Airline Road, Singapore 819829",
                  "id": 2,
                  "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Singapore_Airlines_Logo_2.svg/250px-Singapore_Airlines_Logo_2.svg.png",
                  "name": "Singapore Airlines",
                  "slogan": "A Great Way to Fly",
                  "website": "www.singaporeair.com"
                }
              },
              {
                "name": "Muhammad",
                "trips": 2,
                "airline": {
                  "country": "Singapore",
                  "established": 1947,
                  "head_quaters": "Airline House, 25 Airline Road, Singapore 819829",
                  "id": 2,
                  "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Singapore_Airlines_Logo_2.svg/250px-Singapore_Airlines_Logo_2.svg.png",
                  "name": "Singapore Airlines",
                  "slogan": "A Great Way to Fly",
                  "website": "www.singaporeair.com"
                }
              },
              {
                "name": "Hussain",
                "trips": 100,
                "airline": {
                  "country": "Singapore",
                  "established": 1947,
                  "head_quaters": "Airline House, 25 Airline Road, Singapore 819829",
                  "id": 2,
                  "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Singapore_Airlines_Logo_2.svg/250px-Singapore_Airlines_Logo_2.svg.png",
                  "name": "Singapore Airlines",
                  "slogan": "A Great Way to Fly",
                  "website": "www.singaporeair.com"
                }
              }
            ]
          }
        }
      }

console.log("All trips total of all passengers:")
function TotalTrips(data) {
    const pdata = data.passengers.data.passenger;
    return pdata.reduce((Tripsno, passenger) => 
    {
        return Tripsno + Number(passenger.trips);
    }, 0);
}
console.log(TotalTrips(data));
let currentLanguage = "en"; // Default language is English

// Function to load fish data based on the selected language
function loadFishData(language) {
    const englishFishData = {
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        categories: {
          freshwater: "Freshwater",
          sea_fishing: "Sea (Fishing)",
          sea_diving: "Sea (Diving)"
        },
        fishList: [
            {
              "name": "golden trout",
              "months": "3,4,5,9,10,11",
              "price": "15,000",
              "category": "freshwater"
            },
            {
              "name": "stringfish",
              "months": "1,2,3,12",
              "price": "15,000",
              "category": "freshwater"
            },
            {
              "name": "dorado",
              "months": "6,7,8,9",
              "price": "15,000",
              "category": "freshwater"
            },
            {
              "name": "arowana",
              "months": "6,7,8,9",
              "price": "10,000",
              "category": "freshwater"
            },
            {
              "name": "arapaima",
              "months": "6,7,8,9",
              "price": "10,000",
              "category": "freshwater"
            },
            {
              "name": "sturgeon",
              "months": "1,2,3,9,10,11,12",
              "price": "10,000",
              "category": "freshwater"
            },
            {
              "name": "gar",
              "months": "6,7,8,9",
              "price": "6,000",
              "category": "freshwater"
            },
            {
              "name": "giant snake head",
              "months": "6,7,8",
              "price": "5,500",
              "category": "freshwater"
            },
            {
              "name": "snapping turtle",
              "months": "4,5,6,7,8,9,10",
              "price": "5,000",
              "category": "freshwater"
            },
            {
              "name": "ranchu goldfish",
              "months": "1,2,3,4,5,6,7,8,9,10,11,12",
              "price": "4,500",
              "category": "freshwater"
            },
            {
              "name": "saddled bichir",
              "months": "6,7,8,9",
              "price": "4,000",
              "category": "freshwater"
            },
            {
              "name": "koi",
              "months": "1,2,3,4,5,6,7,8,9,10,11,12",
              "price": "4,000",
              "category": "freshwater"
            },
            {
              "name": "char",
              "months": "3,4,5,6,9,10,11",
              "price": "3,800",
              "category": "freshwater"
            },
            {
              "name": "soft-shelled turtle",
              "months": "8,9",
              "price": "3,750",
              "category": "freshwater"
            },
            {
              "name": "angelfish",
              "months": "5,6,7,8,9,10",
              "price": "3,000",
              "category": "freshwater"
            },
            {
              "name": "betta",
              "months": "5,6,7,8,9,10",
              "price": "2,500",
              "category": "freshwater"
            },
            {
              "name": "piranha",
              "months": "6,7,8,9",
              "price": "2,500",
              "category": "freshwater"
            },
            {
              "name": "mitten crab",
              "months": "9,10,11",
              "price": "2,000",
              "category": "freshwater"
            },
            {
              "name": "pike",
              "months": "9,10,11,12",
              "price": "1,800",
              "category": "freshwater"
            },
            {
              "name": "king salmon",
              "months": "9",
              "price": "1,800",
              "category": "freshwater"
            },
            {
              "name": "nibble fish",
              "months": "5,6,7,8,9",
              "price": "1,500",
              "category": "freshwater"
            },
            {
              "name": "guppy",
              "months": "4,5,6,7,8,9,10,11",
              "price": "1,300",
              "category": "freshwater"
            },
            {
              "name": "goldfish",
              "months": "1,2,3,4,5,6,7,8,9,10,11,12",
              "price": "1,300",
              "category": "freshwater"
            },
            {
              "name": "pop-eyed goldfish",
              "months": "1,2,3,4,5,6,7,8,9,10,11,12",
              "price": "1,300",
              "category": "freshwater"
            },
            {
              "name": "cherry salmon",
              "months": "3,4,5,6,9,10,11",
              "price": "1,000",
              "category": "freshwater"
            },
            {
              "name": "sweetfish",
              "months": "7,8,9",
              "price": "900",
              "category": "freshwater"
            },
            {
              "name": "bitterling",
              "months": "1,2,3,11,12",
              "price": "900",
              "category": "freshwater"
            },
            {
              "name": "rainbowfish",
              "months": "5,6,7,8,9,10",
              "price": "800",
              "category": "freshwater"
            },
            {
              "name": "catfish",
              "months": "5,6,7,8,9,10",
              "price": "800",
              "category": "freshwater"
            },
            {
              "name": "tilapia",
              "months": "6,7,8,9,10",
              "price": "800",
              "category": "freshwater"
            },
            {
              "name": "salmon",
              "months": "9",
              "price": "700",
              "category": "freshwater"
            },
            {
              "name": "neon tetra",
              "months": "4,5,6,7,8,9,10,11",
              "price": "500",
              "category": "freshwater"
            },
            {
              "name": "pond smelt",
              "months": "1,2,12",
              "price": "400",
              "category": "freshwater"
            },
            {
              "name": "freshwater goby",
              "months": "1,2,3,4,5,6,7,8,9,10,11,12",
              "price": "400",
              "category": "freshwater"
            },
            {
              "name": "loach",
              "months": "3,4,5",
              "price": "400",
              "category": "freshwater"
            },
            {
              "name": "black bass",
              "months": "1,2,3,4,5,6,7,8,9,10,11,12",
              "price": "400",
              "category": "freshwater"
            },
            {
              "name": "carp",
              "months": "1,2,3,4,5,6,7,8,9,10,11,12",
              "price": "300",
              "category": "freshwater"
            },
            {
              "name": "killifish",
              "months": "4,5,6,7,8",
              "price": "300",
              "category": "freshwater"
            },
            {
              "name": "yellow perch",
              "months": "1,2,3,10,11,12",
              "price": "300",
              "category": "freshwater"
            },
            {
              "name": "dace",
              "months": "1,2,3,4,5,6,7,8,9,10,11,12",
              "price": "240",
              "category": "freshwater"
            },
            {
              "name": "pale chub",
              "months": "1,2,3,4,5,6,7,8,9,10,11,12",
              "price": "200",
              "category": "freshwater"
            },
            {
              "name": "crawfish",
              "months": "4,5,6,7,8,9",
              "price": "200",
              "category": "freshwater"
            },
            {
              "name": "bluegill",
              "months": "1,2,3,4,5,6,7,8,9,10,11,12",
              "price": "180",
              "category": "freshwater"
            },
            {
              "name": "crucian carp ",
              "months": "1,2,3,4,5,6,7,8,9,10,11,12",
              "price": "160",
              "category": "freshwater"
            },
            {
              "name": "frog",
              "months": "5,6,7,8",
              "price": "120",
              "category": "freshwater"
            },
            {
              "name": "tadpole",
              "months": "3,4,5,6,7",
              "price": "100",
              "category": "freshwater"
            },
            {
              "name": "barreleye",
              "months": "1,2,3,4,5,6,7,8,9,10,11,12",
              "price": "15,000",
              "category": "sea_fishing"
            },
            {
              "name": "coelacanth",
              "months": "when it rains",
              "price": "15,000",
              "category": "sea_fishing"
            },
            {
              "name": "great white shark",
              "months": "6,7,8,9",
              "price": "15,000",
              "category": "sea_fishing"
            },
            {
              "name": "whale shark",
              "months": "6,7,8,9",
              "price": "13,000",
              "category": "sea_fishing"
            },
            {
              "name": "saw shark",
              "months": "6,7,8,9",
              "price": "12,000",
              "category": "sea_fishing"
            },
            {
              "name": "blue marlin",
              "months": "1,2,3,4,7,8,9,11,12",
              "price": "10,000",
              "category": "sea_fishing"
            },
            {
              "name": "napoleonfish",
              "months": "7,8",
              "price": "10,000",
              "category": "sea_fishing"
            },
            {
              "name": "oarfish",
              "months": "1,2,3,4,5,12",
              "price": "9,000",
              "category": "sea_fishing"
            },
            {
              "name": "hammerhead shark",
              "months": "6,7,8,9",
              "price": "8,000",
              "category": "sea_fishing"
            },
            {
              "name": "tuna",
              "months": "1,2,3,4,11,12",
              "price": "7,000",
              "category": "sea_fishing"
            },
            {
              "name": "mahi-mahi",
              "months": "5,6,7,8,9,10",
              "price": "6,000",
              "category": "sea_fishing"
            },
            {
              "name": "blowfish",
              "months": "1,2,11,12",
              "price": "5,000",
              "category": "sea_fishing"
            },
            {
              "name": "barred knifejaw",
              "months": "3,4,5,6,7,8,9,10,11",
              "price": "5,000",
              "category": "sea_fishing"
            },
            {
              "name": "giant trevally",
              "months": "5,6,7,8,9,10",
              "price": "4,500",
              "category": "sea_fishing"
            },
            {
              "name": "ocean sunfish",
              "months": "7,8,9",
              "price": "4,000",
              "category": "sea_fishing"
            },
            {
              "name": "ray",
              "months": "8,9,10,11",
              "price": "3,000",
              "category": "sea_fishing"
            },
            {
              "name": "red snapper",
              "months": "1,2,3,4,5,6,7,8,9,10,11,12",
              "price": "3,000",
              "category": "sea_fishing"
            },
            {
              "name": "football fish",
              "months": "1,2,3,11,12",
              "price": "2,500",
              "category": "sea_fishing"
            },
            {
              "name": "moray eel",
              "months": "8,9,10",
              "price": "2,000",
              "category": "sea_fishing"
            },
            {
              "name": "suckerfish",
              "months": "6,7,8,9",
              "price": "1,500",
              "category": "sea_fishing"
            },
            {
              "name": "sea horse",
              "months": "4,5,6,7,8,9,10,11",
              "price": "1,100",
              "category": "sea_fishing"
            },
            {
              "name": "sea butterfly",
              "months": "1,2,3,12",
              "price": "1,000",
              "category": "sea_fishing"
            },
            {
              "name": "surgeonfish",
              "months": "4,5,6,7,8,9",
              "price": "1,000",
              "category": "sea_fishing"
            },
            {
              "name": "butterfly fish",
              "months": "4,5,6,7,8,9",
              "price": "1,000",
              "category": "sea_fishing"
            },
            {
              "name": "olive flounder",
              "months": "1,2,3,4,5,6,7,8,9,10,11,12",
              "price": "800",
              "category": "sea_fishing"
            },
            {
              "name": "clown fish",
              "months": "4,5,6,7,8,9",
              "price": "650",
              "category": "sea_fishing"
            },
            {
              "name": "ribbon eel",
              "months": "6,7,8,9,10",
              "price": "600",
              "category": "sea_fishing"
            },
            {
              "name": "zebra turkeyfish",
              "months": "4,5,6,7,8,9,10,11",
              "price": "500",
              "category": "sea_fishing"
            },
            {
              "name": "squid",
              "months": "1,2,3,4,5,6,7,8,12",
              "price": "500",
              "category": "sea_fishing"
            },
            {
              "name": "sea bass",
              "months": "1,2,3,4,5,6,7,8,9,10,11,12",
              "price": "400",
              "category": "sea_fishing"
            },
            {
              "name": "dab",
              "months": "1,2,3,4,10,11,12",
              "price": "300",
              "category": "sea_fishing"
            },
            {
              "name": "puffer fish",
              "months": "7,8,9",
              "price": "250",
              "category": "sea_fishing"
            },
            {
              "name": "anchovy",
              "months": "1,2,3,4,5,6,7,8,9,10,11,12",
              "price": "200",
              "category": "sea_fishing"
            },
            {
              "name": "horse mackerel",
              "months": "1,2,3,4,5,6,7,8,9,10,11,12",
              "price": "150",
              "category": "sea_fishing"
            },
            {
              "name": "gigas giant clam",
              "months": "5,6,7,8,9",
              "price": "15,000",
              "category": "sea_diving"
            },
            {
              "name": "spider crab",
              "months": "3,4",
              "price": "12,000",
              "category": "sea_diving"
            },
            {
              "name": "giant isopod",
              "months": "7,8,9,10",
              "price": "12,000",
              "category": "sea_diving"
            },
            {
              "name": "vampire squid",
              "months": "5,6,7,8",
              "price": "10,000",
              "category": "sea_diving"
            },
            {
              "name": "sea pig",
              "months": "1,2,11,12",
              "price": "10,000",
              "category": "sea_diving"
            },
            {
              "name": "red king crab",
              "months": "1,2,3,11,12",
              "price": "8,000",
              "category": "sea_diving"
            },
            {
              "name": "snow crab",
              "months": "1,2,3,4,11,12",
              "price": "6,000",
              "category": "sea_diving"
            },
            {
              "name": "umbrella octopus",
              "months": "3,4,5,9,10,11",
              "price": "6,000",
              "category": "sea_diving"
            },
            {
              "name": "spiny lobster",
              "months": "10,11,12",
              "price": "5,000",
              "category": "sea_diving"
            },
            {
              "name": "venus flower basket",
              "months": "1,2,10,11,12",
              "price": "5,000",
              "category": "sea_diving"
            },
            {
              "name": "lobster",
              "months": "1,4,5,6,12",
              "price": "4,500",
              "category": "sea_diving"
            },
            {
              "name": "tiger prawn",
              "months": "6,7,8,9",
              "price": "3,000",
              "category": "sea_diving"
            },
            {
              "name": "pearl oyster",
              "months": "1,2,3,4,5,6,7,8,9,10,11,12",
              "price": "2,800",
              "category": "sea_diving"
            },
            {
              "name": "mantis shrimp",
              "months": "1,2,3,4,5,6,7,8,9,10,11,12",
              "price": "2,500",
              "category": "sea_diving"
            },
            {
              "name": "horseshoe crab",
              "months": "7,8,9",
              "price": "2,500",
              "category": "sea_diving"
            },
            {
              "name": "gazami crab",
              "months": "6,7,8,9,10,11",
              "price": "2,200",
              "category": "sea_diving"
            },
            {
              "name": "abalone",
              "months": "1,6,7,8,9,10,11,12",
              "price": "2,000",
              "category": "sea_diving"
            },
            {
              "name": "slate pencil urchin",
              "months": "5,6,7,8,9",
              "price": "2,000",
              "category": "sea_diving"
            },
            {
              "name": "dungeoness crab",
              "months": "1,2,3,4,5,11,12",
              "price": "1,900",
              "category": "sea_diving"
            },
            {
              "name": "chambered nautilius",
              "months": "3,4,5,6,9,10,11",
              "price": "1,800",
              "category": "sea_diving"
            },
            {
              "name": "sea urchin",
              "months": "5,6,7,8,9",
              "price": "1,700",
              "category": "sea_diving"
            },
            {
              "name": "mussel",
              "months": "6,7,8,9,10,11,12",
              "price": "1,500",
              "category": "sea_diving"
            },
            {
              "name": "sea pineapple",
              "months": "4,5,6,7,8",
              "price": "1,500",
              "category": "sea_diving"
            },
            {
              "name": "sweet shrimp",
              "months": "1,2,9,10,11,12",
              "price": "1,400",
              "category": "sea_diving"
            },
            {
              "name": "firefly squid",
              "months": "3,4,5,6",
              "price": "1,400",
              "category": "sea_diving"
            },
            {
              "name": "octopus",
              "months": "1,2,3,4,5,6,7,8,9,10,11,12",
              "price": "1,200",
              "category": "sea_diving"
            },
            {
              "name": "scallop",
              "months": "1,2,3,4,5,6,7,8,9,10,11,12",
              "price": "1,200",
              "category": "sea_diving"
            },
            {
              "name": "oyster",
              "months": "1,2,9,10,11,12",
              "price": "1,100",
              "category": "sea_diving"
            },
            {
              "name": "spotted garden eel",
              "months": "5,6,7,8,9,10",
              "price": "1,100",
              "category": "sea_diving"
            },
            {
              "name": "whelk",
              "months": "1,2,3,4,5,6,7,8,9,10,11,12",
              "price": "1,000",
              "category": "sea_diving"
            },
            {
              "name": "turban shell",
              "months": "3,4,5,9,10,11,12",
              "price": "1,000",
              "category": "sea_diving"
            },
            {
              "name": "sea grapes",
              "months": "6,7,8,9",
              "price": "900",
              "category": "sea_diving"
            },
            {
              "name": "flatworm",
              "months": "8,9",
              "price": "700",
              "category": "sea_diving"
            },
            {
              "name": "moon jellyfish",
              "months": "7,8,9",
              "price": "600",
              "category": "sea_diving"
            },
            {
              "name": "sea slug",
              "months": "1,2,3,4,5,6,7,8,9,10,11,12",
              "price": "600",
              "category": "sea_diving"
            },
            {
              "name": "acron barnacle",
              "months": "1,2,3,4,5,6,7,8,9,10,11,12",
              "price": "600",
              "category": "sea_diving"
            },
            {
              "name": "seaweed",
              "months": "1,2,3,4,5,6,7,10,11,12",
              "price": "600",
              "category": "sea_diving"
            },
            {
              "name": "sea cucumber",
              "months": "1,2,3,4,11,12",
              "price": "500",
              "category": "sea_diving"
            },
            {
              "name": "sea anemone",
              "months": "1,2,3,4,5,6,7,8,9,10,11,12",
              "price": "500",
              "category": "sea_diving"
            },
            {
              "name": "sea star",
              "months": "1,2,3,4,5,6,7,8,9,10,11,12",
              "price": "500",
              "category": "sea_diving"
            }
        ]
    };

    const koreanFishData = {
        fishList: [
          // Empty array for Korean fish data in the English script
        ]
    };

    return language === "en" ? englishFishData : koreanFishData;
}

// Function to update fish list based on selected month and category
function updateFishList() {
    const selectedMonth = parseInt(document.getElementById('month').value);
    const selectedCategory = document.getElementById('category').value;
  
    // Load fish data for the current language
    const fishData = loadFishData(currentLanguage);
  
    // Filter fish data based on selected month and category
    const filteredFish = fishData.fishList.filter(fish => {
      return fish.months.includes(selectedMonth) && fish.category === selectedCategory;
    });
  
    // Sort the filtered fish data by price (descending order)
    const sortedFish = filteredFish.sort((a, b) => b.price - a.price);
  
    // Display the sorted fish list
    displayFishList(sortedFish);
  }
  
  // Function to display fish list on the UI
  function displayFishList(fishList) {
    const fishListContainer = document.getElementById('fishList');
    fishListContainer.innerHTML = '';
  
    fishList.forEach(fish => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <span class="fish-name">${fish.name}</span>
        <span class="fish-price">$${fish.price}</span>
      `;
      fishListContainer.appendChild(listItem);
    });
  }
let currentLanguage = "ko"; // Default language is Korean

// Function to load fish data based on the selected language
function loadFishData(language) {
    const englishFishData = {
        fishList: [
        // Empty array for English fish data in the Korean script
        ]
    };

    const koreanFishData = {
        months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        categories: {
          freshwater: "민물고기",
          sea_fishing: "바닷물고기",
          sea_diving: "해산물"
        },
        fishList: [
            {
            "name": "금송어",
            "months": "3,4,5,9,10,11",
            "price": "15,000",
            "category": "민물고기"
            },
            {
            "name": "일본연어",
            "months": "1,2,3,12",
            "price": "15,000",
            "category": "민물고기"
            },
            {
            "name": "도라도",
            "months": "6,7,8,9",
            "price": "15,000",
            "category": "민물고기"
            },
            {
            "name": "아로와나",
            "months": "6,7,8,9",
            "price": "10,000",
            "category": "민물고기"
            },
            {
            "name": "피라루쿠",
            "months": "6,7,8,9",
            "price": "10,000",
            "category": "민물고기"
            },
            {
            "name": "철갑상어",
            "months": "1,2,3,9,10,11,12",
            "price": "10,000",
            "category": "민물고기"
            },
            {
            "name": "가아",
            "months": "6,7,8,9",
            "price": "6,000",
            "category": "민물고기"
            },
            {
            "name": "가물치",
            "months": "6,7,8",
            "price": "5,500",
            "category": "민물고기"
            },
            {
            "name": "늑대거북",
            "months": "4,5,6,7,8,9,10",
            "price": "5,000",
            "category": "민물고기"
            },
            {
            "name": "난주",
            "months": "1,2,3,4,5,6,7,8,9,10,11,12",
            "price": "4,500",
            "category": "민물고기"
            },
            {
            "name": "엔드리케리",
            "months": "6,7,8,9",
            "price": "4,000",
            "category": "민물고기"
            },
            {
            "name": "비단잉어",
            "months": "1,2,3,4,5,6,7,8,9,10,11,12",
            "price": "4,000",
            "category": "민물고기"
            },
            {
            "name": "열목어",
            "months": "3,4,5,6,9,10,11",
            "price": "3,800",
            "category": "민물고기"
            },
            {
            "name": "자라",
            "months": "8,9",
            "price": "3,750",
            "category": "민물고기"
            },
            {
            "name": "천사어",
            "months": "5,6,7,8,9,10",
            "price": "3,000",
            "category": "민물고기"
            },
            {
            "name": "베타",
            "months": "5,6,7,8,9,10",
            "price": "2,500",
            "category": "민물고기"
            },
            {
            "name": "피라니아",
            "months": "6,7,8,9",
            "price": "2,500",
            "category": "민물고기"
            },
            {
            "name": "참게",
            "months": "9,10,11",
            "price": "2,000",
            "category": "민물고기"
            },
            {
            "name": "강꼬치고기",
            "months": "9,10,11,12",
            "price": "1,800",
            "category": "민물고기"
            },
            {
            "name": "왕연어",
            "months": "9",
            "price": "1,800",
            "category": "민물고기"
            },
            {
            "name": "닥터피시",
            "months": "5,6,7,8,9",
            "price": "1,500",
            "category": "민물고기"
            },
            {
            "name": "구피",
            "months": "4,5,6,7,8,9,10,11",
            "price": "1,300",
            "category": "민물고기"
            },
            {
            "name": "금붕어",
            "months": "1,2,3,4,5,6,7,8,9,10,11,12",
            "price": "1,300",
            "category": "민물고기"
            },
            {
            "name": "툭눈금붕어",
            "months": "1,2,3,4,5,6,7,8,9,10,11,12",
            "price": "1,300",
            "category": "민물고기"
            },
            {
            "name": "산천어",
            "months": "3,4,5,6,9,10,11",
            "price": "1,000",
            "category": "민물고기"
            },
            {
            "name": "은어",
            "months": "7,8,9",
            "price": "900",
            "category": "민물고기"
            },
            {
            "name": "납줄개",
            "months": "1,2,3,11,12",
            "price": "900",
            "category": "민물고기"
            },
            {
            "name": "레인보우피시",
            "months": "5,6,7,8,9,10",
            "price": "800",
            "category": "민물고기"
            },
            {
            "name": "메기",
            "months": "5,6,7,8,9,10",
            "price": "800",
            "category": "민물고기"
            },
            {
            "name": "틸라피아",
            "months": "6,7,8,9,10",
            "price": "800",
            "category": "민물고기"
            },
            {
            "name": "연어",
            "months": "9",
            "price": "700",
            "category": "민물고기"
            },
            {
            "name": "네온테트라",
            "months": "4,5,6,7,8,9,10,11",
            "price": "500",
            "category": "민물고기"
            },
            {
            "name": "빙어",
            "months": "1,2,12",
            "price": "400",
            "category": "민물고기"
            },
            {
            "name": "동사리",
            "months": "1,2,3,4,5,6,7,8,9,10,11,12",
            "price": "400",
            "category": "민물고기"
            },
            {
            "name": "미꾸라지",
            "months": "3,4,5",
            "price": "400",
            "category": "민물고기"
            },
            {
            "name": "큰입배스",
            "months": "1,2,3,4,5,6,7,8,9,10,11,12",
            "price": "400",
            "category": "민물고기"
            },
            {
            "name": "잉어",
            "months": "1,2,3,4,5,6,7,8,9,10,11,12",
            "price": "300",
            "category": "민물고기"
            },
            {
            "name": "송사리",
            "months": "4,5,6,7,8",
            "price": "300",
            "category": "민물고기"
            },
            {
            "name": "옐로우퍼치",
            "months": "1,2,3,10,11,12",
            "price": "300",
            "category": "민물고기"
            },
            {
            "name": "황어",
            "months": "1,2,3,4,5,6,7,8,9,10,11,12",
            "price": "240",
            "category": "민물고기"
            },
            {
            "name": "피라미",
            "months": "1,2,3,4,5,6,7,8,9,10,11,12",
            "price": "200",
            "category": "민물고기"
            },
            {
            "name": "가재",
            "months": "4,5,6,7,8,9",
            "price": "200",
            "category": "민물고기"
            },
            {
            "name": "블루길",
            "months": "1,2,3,4,5,6,7,8,9,10,11,12",
            "price": "180",
            "category": "민물고기"
            },
            {
            "name": "붕어",
            "months": "1,2,3,4,5,6,7,8,9,10,11,12",
            "price": "160",
            "category": "민물고기"
            },
            {
            "name": "개구리",
            "months": "5,6,7,8",
            "price": "120",
            "category": "민물고기"
            },
            {
            "name": "올챙이",
            "months": "3,4,5,6,7",
            "price": "100",
            "category": "민물고기"
            },
            {
            "name": "데메니기스",
            "months": "1,2,3,4,5,6,7,8,9,10,11,12",
            "price": "15,000",
            "category": "바닷물고기"
            },
            {
            "name": "실러캔스",
            "months": "when it rains",
            "price": "15,000",
            "category": "바닷물고기"
            },
            {
            "name": "상어",
            "months": "6,7,8,9",
            "price": "15,000",
            "category": "바닷물고기"
            },
            {
            "name": "고래상어",
            "months": "6,7,8,9",
            "price": "13,000",
            "category": "바닷물고기"
            },
            {
            "name": "톱상어",
            "months": "6,7,8,9",
            "price": "12,000",
            "category": "바닷물고기"
            },
            {
            "name": "청새치",
            "months": "1,2,3,4,7,8,9,11,12",
            "price": "10,000",
            "category": "바닷물고기"
            },
            {
            "name": "나폴레옹피시",
            "months": "7,8",
            "price": "10,000",
            "category": "바닷물고기"
            },
            {
            "name": "산갈치",
            "months": "1,2,3,4,5,12",
            "price": "9,000",
            "category": "바닷물고기"
            },
            {
            "name": "귀상어",
            "months": "6,7,8,9",
            "price": "8,000",
            "category": "바닷물고기"
            },
            {
            "name": "참치",
            "months": "1,2,3,4,11,12",
            "price": "7,000",
            "category": "바닷물고기"
            },
            {
            "name": "만새기",
            "months": "5,6,7,8,9,10",
            "price": "6,000",
            "category": "바닷물고기"
            },
            {
            "name": "복어",
            "months": "1,2,11,12",
            "price": "5,000",
            "category": "바닷물고기"
            },
            {
            "name": "돌돔",
            "months": "3,4,5,6,7,8,9,10,11",
            "price": "5,000",
            "category": "바닷물고기"
            },
            {
            "name": "무명갈전갱이",
            "months": "5,6,7,8,9,10",
            "price": "4,500",
            "category": "바닷물고기"
            },
            {
            "name": "개복치",
            "months": "7,8,9",
            "price": "4,000",
            "category": "바닷물고기"
            },
            {
            "name": "가오리",
            "months": "8,9,10,11",
            "price": "3,000",
            "category": "바닷물고기"
            },
            {
            "name": "도미",
            "months": "1,2,3,4,5,6,7,8,9,10,11,12",
            "price": "3,000",
            "category": "바닷물고기"
            },
            {
            "name": "초롱아귀",
            "months": "1,2,3,11,12",
            "price": "2,500",
            "category": "바닷물고기"
            },
            {
            "name": "곰치",
            "months": "8,9,10",
            "price": "2,000",
            "category": "바닷물고기"
            },
            {
            "name": "빨판상어",
            "months": "6,7,8,9",
            "price": "1,500",
            "category": "바닷물고기"
            },
            {
            "name": "해마",
            "months": "4,5,6,7,8,9,10,11",
            "price": "1,100",
            "category": "바닷물고기"
            },
            {
            "name": "클리오네",
            "months": "1,2,3,12",
            "price": "1,000",
            "category": "바닷물고기"
            },
            {
            "name": "블루탱",
            "months": "4,5,6,7,8,9",
            "price": "1,000",
            "category": "바닷물고기"
            },
            {
            "name": "나비고기",
            "months": "4,5,6,7,8,9",
            "price": "1,000",
            "category": "바닷물고기"
            },
            {
            "name": "넙치",
            "months": "1,2,3,4,5,6,7,8,9,10,11,12",
            "price": "800",
            "category": "바닷물고기"
            },
            {
            "name": "흰동가리",
            "months": "4,5,6,7,8,9",
            "price": "650",
            "category": "바닷물고기"
            },
            {
            "name": "리본장어",
            "months": "6,7,8,9,10",
            "price": "600",
            "category": "바닷물고기"
            },
            {
            "name": "쏠배감팽",
            "months": "4,5,6,7,8,9,10,11",
            "price": "500",
            "category": "바닷물고기"
            },
            {
            "name": "오징어",
            "months": "1,2,3,4,5,6,7,8,12",
            "price": "500",
            "category": "바닷물고기"
            },
            {
            "name": "농어",
            "months": "1,2,3,4,5,6,7,8,9,10,11,12",
            "price": "400",
            "category": "바닷물고기"
            },
            {
            "name": "가자미",
            "months": "1,2,3,4,10,11,12",
            "price": "300",
            "category": "바닷물고기"
            },
            {
            "name": "가시복",
            "months": "7,8,9",
            "price": "250",
            "category": "바닷물고기"
            },
            {
            "name": "멸치",
            "months": "1,2,3,4,5,6,7,8,9,10,11,12",
            "price": "200",
            "category": "바닷물고기"
            },
            {
            "name": "전갱이",
            "months": "1,2,3,4,5,6,7,8,9,10,11,12",
            "price": "150",
            "category": "바닷물고기"
            },
            {
            "name": "대왕거거",
            "months": "5,6,7,8,9",
            "price": "15,000",
            "category": "해산물"
            },
            {
            "name": "키다리게",
            "months": "3,4",
            "price": "12,000",
            "category": "해산물"
            },
            {
            "name": "흡혈오징어",
            "months": "7,8,9,10",
            "price": "10,000",
            "category": "해산물"
            },
            {
            "name": "바다돼지",
            "months": "5,6,7,8",
            "price": "10,000",
            "category": "해산물"
            },
            {
            "name": "왕게",
            "months": "1,2,11,12",
            "price": "8,000",
            "category": "해산물"
            },
            {
            "name": "대게",
            "months": "1,2,3,11,12",
            "price": "6,000",
            "category": "해산물"
            },
            {
            "name": "우무문어",
            "months": "1,2,3,4,11,12",
            "price": "6,000",
            "category": "해산물"
            },
            {
            "name": "닭새우",
            "months": "3,4,5,9,10,11",
            "price": "5,000",
            "category": "해산물"
            },
            {
            "name": "해로동혈",
            "months": "10,11,12",
            "price": "5,000",
            "category": "해산물"
            },
            {
            "name": "바닷가재",
            "months": "1,2,10,11,12",
            "price": "4,500",
            "category": "해산물"
            },
            {
            "name": "보리새우",
            "months": "1,4,5,6,12",
            "price": "3,000",
            "category": "해산물"
            },
            {
            "name": "진주조개",
            "months": "6,7,8,9",
            "price": "2,800",
            "category": "해산물"
            },
            {
            "name": "갯가재",
            "months": "1,2,3,4,5,6,7,8,9,10,11,12",
            "price": "2,500",
            "category": "해산물"
            },
            {
            "name": "투구게",
            "months": "1,2,3,4,5,6,7,8,9,10,11,12",
            "price": "2,500",
            "category": "해산물"
            },
            {
            "name": "꽃게",
            "months": "7,8,9",
            "price": "2,200",
            "category": "해산물"
            },
            {
            "name": "전복",
            "months": "6,7,8,9,10,11",
            "price": "2,000",
            "category": "해산물"
            },
            {
            "name": "연필성게",
            "months": "1,6,7,8,9,10,11,12",
            "price": "2,000",
            "category": "해산물"
            },
            {
            "name": "던지니스크랩",
            "months": "5,6,7,8,9",
            "price": "1,900",
            "category": "해산물"
            },
            {
            "name": "앵무조개",
            "months": "1,2,3,4,5,11,12",
            "price": "1,800",
            "category": "해산물"
            },
            {
            "name": "성게",
            "months": "3,4,5,6,9,10,11",
            "price": "1,700",
            "category": "해산물"
            },
            {
            "name": "지중해담치",
            "months": "5,6,7,8,9",
            "price": "1,500",
            "category": "해산물"
            },
            {
            "name": "멍게",
            "months": "6,7,8,9,10,11,12",
            "price": "1,500",
            "category": "해산물"
            },
            {
            "name": "북쪽분홍새우",
            "months": "4,5,6,7,8",
            "price": "1,400",
            "category": "해산물"
            },
            {
            "name": "반딧불오징어",
            "months": "1,2,9,10,11,12",
            "price": "1,400",
            "category": "해산물"
            },
            {
            "name": "문어",
            "months": "3,4,5,6",
            "price": "1,200",
            "category": "해산물"
            },
            {
            "name": "가리비",
            "months": "1,2,3,4,5,6,7,8,9,10,11,12",
            "price": "1,200",
            "category": "해산물"
            },
            {
            "name": "자이언트 이소포드",
            "months": "1,2,3,4,5,6,7,8,9,10,11,12",
            "price": "1,200",
            "category": "해산물"
            },
            {
            "name": "굴",
            "months": "1,2,9,10,11,12",
            "price": "1,100",
            "category": "해산물"
            },
            {
            "name": "가든일",
            "months": "5,6,7,8,9,10",
            "price": "1,100",
            "category": "해산물"
            },
            {
            "name": "수랑",
            "months": "1,2,3,4,5,6,7,8,9,10,11,12",
            "price": "1,000",
            "category": "해산물"
            },
            {
            "name": "소라",
            "months": "3,4,5,9,10,11,12",
            "price": "1,000",
            "category": "해산물"
            },
            {
            "name": "바다포도",
            "months": "6,7,8,9",
            "price": "900",
            "category": "해산물"
            },
            {
            "name": "납작벌레",
            "months": "8,9",
            "price": "700",
            "category": "해산물"
            },
            {
            "name": "보름달물해파리",
            "months": "7,8,9",
            "price": "600",
            "category": "해산물"
            },
            {
            "name": "갯민숭달팽이",
            "months": "1,2,3,4,5,6,7,8,9,10,11,12",
            "price": "600",
            "category": "해산물"
            },
            {
            "name": "따개비",
            "months": "1,2,3,4,5,6,7,8,9,10,11,12",
            "price": "600",
            "category": "해산물"
            },
            {
            "name": "미역",
            "months": "1,2,3,4,5,6,7,10,11,12",
            "price": "600",
            "category": "해산물"
            },
            {
            "name": "해삼",
            "months": "1,2,3,4,11,12",
            "price": "500",
            "category": "해산물"
            },
            {
            "name": "말미잘",
            "months": "1,2,3,4,5,6,7,8,9,10,11,12",
            "price": "500",
            "category": "해산물"
            },
            {
            "name": "불가사리",
            "months": "1,2,3,4,5,6,7,8,9,10,11,12",
            "price": "500",
            "category": "해산물"
            }
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
export const categories = [
  {
    id: 1,
    name: "Explore",
    image: require("../assets/images/explore.png"),
  },
  {
    id: 2,
    name: "Holdings",
    image: require("../assets/images/holding.png"),
  },
  {
    id: 3,
    name: "watchlist",
    image: require("../assets/images/watchlist.png"),
  },
  
];

export const risk = [
  {
    id: 1,
    name: "High Returns",
    image: require("../assets/images/high.png"),
  },
  {
    id: 2,
    name: "Mid Returns",
    image: require("../assets/images/mid.png"),
  },
  {
    id: 3,
    name: "Low Returns",
    image: require("../assets/images/low.png"),
  },
  {
    id: 4,
    name: "Suggestion",
    image: require("../assets/images/ai.png"),
  },
  
];
export const featured =[ 
  {
    id: 1,
    title: "Stock Market",
    description: "Investment made easy and secure with Blockchain security.",
    restaurants: [
      {
        id: 1,
        name: "By Capitilization",
        description: "Invest Stocks with Large Market Cap",
      
        address: "433-jamanagar",
        stars: 4,
        reviews: "4.4k",
        category: "Cap Size",
        image:require('../assets/images/largecap.jpg'),
        dishes: [
          {
            id: 1,
            name: "High Returns",
            image: require("../assets/images/solar.png"),
            StockName:"Solar Ind",
            price:'10,007.30'	,
            changePer:'-1.06	',
            weekHigh:"10,450.00",
            weekLow:"3,453.35	",
            marketCap:'90,556.11'

          },
          {
            id: 2,
            name: "High Returns",
            image: require("../assets/images/bosch.jpg"),
            StockName:"Bosch",
            price:'30,840.15'	,
            changePer:'-0.07',
            weekHigh:"32,100.00",
            weekLow:"17,931.15	",
            marketCap:'90,958.83'

          },
          {
            id: 3,
            name: "High Returns",
            image: require("../assets/images/shree-cement.png"),
            StockName:"Shree Cements",
            price:'25,456.45'	,
            changePer:'-0.86	',
            weekHigh:"30,737.75",
            weekLow:"22,605.60",
            marketCap:'91,848.78'

          },
          {
            id: 4,
            name: "High Returns",
            image: require("../assets/images/indus.jpg"),
            StockName:"INDUS TOWERS",
            price:'346.70',
            changePer:'0.84',
            weekHigh:"366.55",
            weekLow:"141.60",
            marketCap:'93,433.46'

          },

          {
            id: 5,
            name: "Mid Returns",
            image: require("../assets/images/zomato.png"),
            StockName:"Zomato",
            price:'182.90'	,
            changePer:'-2.09',
            weekHigh:"207.20",
            weekLow:"61.80",
            marketCap:'161,445.56'

          },
          {
            id: 6,
            name: "Mid Returns",
            image: require("../assets/images/amubuja.jpg"),
            StockName:"Ambuja Cements",
            price:'635.30'	,
            changePer:'-1.73',
            weekHigh:"656.95",
            weekLow:"395.50",
            marketCap:'156,482.23'

          },
          {
            id: 7,
            name: "Mid Returns",
            image: require("../assets/images/pidilite.jpg"),
            StockName:"Pidilite Ind",
            price:"2,972.05"	,
            changePer:'-0.57',
            weekHigh:"3,118.00",
            weekLow:"2,292.55",
            marketCap:'151,161.24'

          },
          {
            id: 8,
            name: "Mid Returns",
            image: require("../assets/images/Hindalco.jpg"),
            StockName:"Hindalco",
            price:'673.25',
            changePer:'-0.52',
            weekHigh:"698.70",
            weekLow:"397.80",
            marketCap:'151,293.85'

          },
          {
            id: 9,
            name: "Low Returns",
            image: require("../assets/images/Reliance.jpg"),
            StockName:"Reliance",
            price:'2,960.50'	,
            changePer:'-0.39',
            weekHigh:"3,024.90",
            weekLow:"2,220.30",
            marketCap:'2,003,043.37'

          },
          {
            id: 10,
            name: "Low Returns",
            image: require("../assets/images/TCS.png"),
            StockName:"TCS",
            price:'3,849.50'	,
            changePer:'-1.13',
            weekHigh:"4,254.75",
            weekLow:"3,156.00",
            marketCap:'1,392,782.79'

          },
          {
            id: 11,
            name: "Low Returns",
            image: require("../assets/images/hdfc.png"),
            StockName:"HDFC Bank",
            price:"1,517.20"	,
            changePer:'1.65',
            weekHigh:"1,757.50",
            weekLow:"1,363.55",
            marketCap:'1,153,547.53'

          },
          {
            id: 12,
            name: "Low Returns",
            image: require("../assets/images/airtel.jpg"),
            StockName:"Bharti Airtel",
            price:'1,388.50',
            changePer:'1.05',
            weekHigh:"1,397.75",
            weekLow:"783.90",
            marketCap:'801,399.26'

          }    


          
         
         
        
        ],
      },
      {
        id: 2,
        name: "By High Profit",
        description: "Invest in stocks with high profit",
        address: "433-jamanagar",
        stars: 4,
        reviews: "4.4k",
        category: "By Net Profit",
        image:require('../assets/images/midcap.jpg'),

        dishes: [
          {
            id: 1,
            name: "High Returns",
            image: "require('../assets/images/TCS.png')",
            StockName: "TCS",
            price: "3849.50",
            change: "-43.95",
            changePer: "-1.13",
            netProfit: "43,559.00"
        },
        {
            id: 2,
            name: "High Returns",
            image: "require('../assets/images/reliance.jpg')",
            StockName: "Reliance",
            price: "2960.50",
            change: "-11.60",
            changePer: "-0.39",
            netProfit: "42,042.00"
        },
        {
            id: 3,
            name: "High Returns",
            image: "require('../assets/images/smallcap.jpg')",
            StockName: "ONGC",
            price: "283.25",
            change: "-0.20",
            changePer: "-0.07",
            netProfit: "40,525.96"
        },
        {
            id: 4,
            name: "High Returns",
            image: "require('../assets/images/IOC.png')",
            StockName: "IOC",
            price: "168.80",
            change: "0.85",
            changePer: "0.51",
            netProfit: "39,618.84"
        },
        {
            id: 5,
            name: "High Returns",
            image: "require('../assets/images/LIC.png')",
            StockName: "LIC India",
            price: "1029.75",
          change: "-1.45",
            changePer: "-0.14",
            netProfit: "36,397.39"
        },
        
       
        {
          id: 2,
          name: "Mid Returns",
        image: "require('../assets/images/airtel.jpg')",
          StockName: "Bharti Airtel",
          price: "1388.50",
          change: "14.45",
          changePer: "1.05",
          netProfit: "4,988.20"
      },
      {
          id: 3,
          name: "Mid Returns",
          image: "require('../assets/images/smallcap.jpg')",
          StockName: "LTIMindtree",
          price: "4839.75",
          change: "8.45",
          changePer: "0.17",
          netProfit: "4,485.90"
      },
      {
          id: 4,
          name: "Mid Returns",
          image: "require('../assets/images/smallcap.jpg')",
          StockName: "Dr Reddys Labs",
          price: "5861.75",
          change: "-35.95",
          changePer: "-0.61",
          netProfit: "4,342.00"
      },
      {
          id: 5,
          name: "Mid Returns",
          image: "require('../assets/images/smallcap.jpg')",
          StockName: "Cipla",
          price: "1486.45",
          change: "-2.70",
          changePer: "-0.18",
          netProfit: "4,077.25"
      },
      {
          id: 6,
          name: "Mid Returns",
          image: "require('../assets/images/smallcap.jpg')",
          StockName: "Bharat Elec",
          price: "297.20",
          change: "8.70",
          changePer: "3.02",
          netProfit: "4,020.00"
      },
{
      id: 11,
      name: "Low Returns",
      image: "require('../assets/images/smallcap.jpg')",
      StockName: "Sun TV Network",
      price: "665.30",
      change: "-2.15",
      changePer: "-0.32",
      netProfit: "1,875.15"
  },
  {
      id: 12,
      name: "Low Returns",
      image: "require('../assets/images/smallcap.jpg')",
      StockName: "NLC India",
      price: "232.70",
      change: "-7.20",
      changePer: "-3.00",
      netProfit: "1,846.58"
  },
  {
      id: 13,
      name: "Low Returns",
      image: "require('../assets/images/smallcap.jpg')",
      StockName: "Mankind Pharma",
      price: "2062.80",
      change: "-37.20",
      changePer: "-1.77",
      netProfit: "1,823.41"
  },
  {
      id: 14,
      name: "Low Returns",
      image: "require('../assets/images/smallcap.jpg')",
    StockName: "Divis Labs",
    price: "4122.40",
      change: "9.40",
      changePer: "0.23",
      netProfit: "1,576.00"
  },
  {
      id: 15,
      name: "Low Returns",
      image: "require('../assets/images/pidilite.jpg')",
      StockName: "Pidilite Ind",
      price: "2972.05",
      change: "-17.15",
      changePer: "-0.57",
      netProfit: "1,799.47"
  }
    
        ],
      },
      {
        id: 3,
        name: "By High Sales",
        description: "Invest in high sale company.",
        address: "433-jamanagar",
        stars: 4,
        reviews: "4.4k",
        category: "Small Cap",
        image:require('../assets/images/smallcap.jpg'),
        dishes: [{
          id:1,
          name: "High Returns",
          image: 'require("../assets/images/LIC.png")',
          StockName: 'LIC India',
          price: '1029.75',
          change: '-1.45',
          changePer: '-0.14',
          netSales: '781,542.56'
      },
    {
          id:2,
          name: "High Returns",
          image: 'require("../assets/images/IOC.png")',
          StockName: 'IOC',
          price: '168.8',
          change: '0.85',
          changePer: '0.51',
          netSales: '774,348.59'
      },
    {
          id:3,
          name: "High Returns",
          image: 'require("../assets/images/reliance.jpg")',
          StockName: 'Reliance',
          price: '2962.5',
          change: '-9.6',
          changePer: '-0.32',
          netSales: '534,534.00'
      },
    {
          id:4,
          name: "High Returns",
          image: 'require("../assets/images/BPCL.png")',
          StockName: 'BPCL',
          price: '654.1',
          change: '6.65',
          changePer: '1.03',
          netSales: '448,013.15'
      },
    {
          id:1,
          name: "Mid Returns",
          image: 'require("../assets/images/indian.png")',
          StockName: 'Indian Bank',
          price: '571.6',
          change: '-4.35',
          changePer: '-0.76',
          netSales: '55,614.78'
      },
    {
          id:2,
          name: "Mid Returns",
          image: 'require("../assets/images/BAJAJ.jpg")',
          StockName: 'Bajaj Auto',
          price: '8948.2',
          change: '-15.25',
          changePer: '-0.17',
          netSales: '44,685.23'
      },
    {
          id:3,
          name: "Mid Returns",
          image: 'require("../assets/images/smallcap.jpg")',
          StockName: 'Power Grid Corp',
          lastprice: '318.8',
          change: '-1.1',
          changePer: '-0.34',
          netSales: '42,391.16'
      },
    {
          id:4,
          name: "Mid Returns",
          image: 'require("../assets/images/vodafone.jpg")',
          StockName: 'Vodafone Idea',
          price: '15.1',
          change: '1.05',
          changePer: '7.47',
          netSales: '42,243.20'
      },
    {
          id:1,
          name: "Low Returns",
          image: 'require("../assets/images/Chambal.png")',
          StockName: 'Chambal Fert',
          price: '405.95',
          change: '10.8',
          changePer: '2.73',
          netSales: '17,966.41'
      },
    {
          id:2,
          name: "Low Returns",
          image: 'require("../assets/images/polycab.png")',
          StockName: 'Polycab',
          price: '6684.15',
          change: '42',
          changePer: '0.63',
          netSales: '18,050.85'
      },
    {
          id:3,
          name: "Low Returns",
          image: 'require("../assets/images/NCC.PNG")',
          StockName: 'NCC',
          lastprice: '281.9',
          change: '-6.3',
          changePer: '-2.19',
          netSales: '18,314.41'
      },
    {
          id:4,
          name: "Low Returns",
          image: 'require("../assets/images/Havells.jpg")',
          StockName: 'Havells India',
          price: '1889.85',
          change: '35.7',
          changePer: '1.93',
          netSales: '18,549.90'
      }
  ]
        
      },
      
    ],
  },
  {
    id: 2,
    title: "Crypto Market",
    description: "Investment made easy and secure with Blockchain security.",
    restaurants: [
      {
        id: 1,
        name: "Top Coins",
        description: "Invest in Top Coins",
      
        address: "433-jamanagar",
        stars: 4,
        reviews: "4.4k",
        category: "Large Cap",
        image:require('../assets/images/largecap.jpg'),
        dishes: [
          {
            StockName: "NEAR Protocol",
            price: "$8.13",
            sevenDay: "2.86%",
            marketCap: "$8,777,212,968",
            volume24h: "$487,950,527",
            circulatingSupply: "59,914,552 NEAR",
            last7days: "1,079,384,578 NEAR",
            name: "Low Returns",

        },
        {
          StockName: "Render",
          price: "$10.02",
            sevenDay: "3.55%",
            marketCap: "$3,895,469,614",
            volume24h: "$165,021,894",
            circulatingSupply: "16,444,777 RNDR",
            last7days: "388,643,224 RNDR",
            name: "High Returns",
        },
        {
          StockName: "The Graph",
          price: "$0.324",
            sevenDay: "4.32%",
            marketCap: "$3,081,035,322",
            volume24h: "$72,015,075",
            circulatingSupply: "222,040,235 GRT",
            last7days: "9,509,073,959 GRT",
            name: "High Returns",
        },
        {
          StockName: "Bittensor",
          price: "$423.10",
            sevenDay: "10.24%",
            marketCap: "$2,889,419,558",
            volume24h: "$18,279,145",
            circulatingSupply: "43,178 TAO",
            last7days: "6,829,205 TAO",
            name: "Mid Returns",
        }
        
        ],
      },
      {
        id: 2,
        name: "Meme Coins",
        description: "Invest in Meme Coins",
        address: "433-jamanagar",
        stars: 4,
        reviews: "4.4k",
        category: "Meme Coins",
        image:require('../assets/images/midcap.jpg'),

        dishes: [
          {
            StockName: "Injective",
            price: "$25.16",
            sevenDay: "0.85%",
            marketCap: "$2,349,643,919",
            volume24h: "$43,600,363",
            circulatingSupply: "1,729,369 INJ",
            last7days: "93,400,000 INJ",
            name: "Mid Returns",

        },
        {
          StockName: "Theta Network",
            price: "$2.33",
            sevenDay: "5.31%",
            marketCap: "$2,330,901,471",
            volume24h: "$19,368,186",
            circulatingSupply: "8,302,929 THETA",
            last7days: "1,000,000,000 THETA",
            name: "Low Returns",

        },
        {
          StockName: "Fetch.ai",
            price: "$2.27",
            sevenDay: "1.57%",
            marketCap: "$1,921,451,763",
            volume24h: "$115,357,101",
            circulatingSupply: "50,851,220 FET",
            last7days: "848,193,896 FET",
            name: "High Returns",

        },
        {
          StockName: "Akash Network",
            price: "$5.29",
            sevenDay: "9.53%",
            marketCap: "$1,258,912,002",
            volume24h: "$10,143,254",
            circulatingSupply: "1,916,756 AKT",
            last7days: "238,081,441 AKT",
            name: "Low Returns",

        }
        ],
      },
      {
        id: 3,
        name: "AI Coins",
        description: "Invest in Coins Works on AI.",
    
        address: "433-jamanagar",
        stars: 4,
        reviews: "4.4k",
        category: "Small Cap",
        image:require('../assets/images/smallcap.jpg'),

        dishes: [
         
          {
            StockName: "SingularityNET",
            price: "$0.947",
            sevenDay: "1.40%",
            marketCap: "$1,215,439,057",
            volume24h: "$63,754,795",
            circulatingSupply: "67,244,517 AGIX",
            last7days: "1,283,425,719 AGIX"
        },
        {
          StockName: "AIOZ Network",
            price: "$0.8212",
            sevenDay: "0.07%",
            marketCap: "$900,025,569",
            volume24h: "$6,132,567",
            circulatingSupply: "7,454,657 AIOZ",
            last7days: "1,095,969,363 AIOZ"
        },
        {
          StockName: "Theta Fuel",
            price: "$0.1054",
            sevenDay: "0.71%",
            marketCap: "$691,378,262",
            volume24h: "$6,599,481",
            circulatingSupply: "62,498,732 TFUEL",
            last7days: "6,559,512,736 TFUEL"
        },
        {
          StockName: "Echelon Prime",
            price: "$17.98",
            sevenDay: "0.20%",
            marketCap: "$643,974,918",
            volume24h: "$6,754,788",
            circulatingSupply: "375,703 PRIME",
            last7days: "35,773,841 PRIME"
        }
        ],
      },
      
    ],
  },
  {
    id: 3,
    title: "Real Estate",
    description: "Investment made easy and secure with Blockchain security.",
    restaurants: [
      {
        id: 1,
        name: "Fractionl RealEstate",
        description: "Invest in Large Cap Stocks",
      
        address: "433-jamanagar",
        stars: 4,
        reviews: "4.4k",
        category: "High Profit",
        image:require('../assets/images/largecap.jpg'),
        dishes: [
          {
            id: 1,
            name: "High Returns",
            StockName:"Land in USA",
            description: "AVL.100qty",
            price: "100/per qty",
            image: require("../assets/images/land1.jpg"),
          },
          {
            id: 2,
            name: "High Returns",
            StockName:"Land in USA",
            description: "AVL.1000qty",
            price: "1/per qty",
            image: require("../assets/images/land5.jpg"),
          },
          {
            id: 3,
            name: "High Returns",
            StockName:"Land in Dubai",
            description: "AVL.100qty",
            price: "10/per qty",
            image: require("../assets/images/land1.jpg"),
          },
          {
            id: 4,
            name: "High Returns",
            StockName:"Land in Russia",
            description: "AVL.400qty",
            price: "200/per qty",
            image: require("../assets/images/land2.jpg"),
          },
          {
            id: 5,
            name: "High Returns",
            StockName:"Land in Mumbai",
            description: "AVL.300qty",
            price: "80/per qty",
            image: require("../assets/images/land3.jpg"),
          },
          {
            id: 6,
            name: "High Returns",
            StockName:"Land in Canada",
            description: "AVL.200qty",
            price: "100/per qty",
            image: require("../assets/images/land4.jpg"),
          },
        
        ],
      },
      {
        id: 2,
        name: "List RealEstate",
        description: "Invest in Mid Cap Stocks",
        address: "433-jamanagar",
        stars: 4,
        reviews: "4.4k",
        category: "List Your RealEstate",
        image:require('../assets/images/midcap.jpg'),

        dishes: [
          {
            id: 1,
            name: "Low Returns",
            description: "sonu word",
            price: 10,
            image: require("../assets/images/smallcap.jpg"),
          },
          {
            id: 2,
            name: "High Returns",
            description: "hello word",
            price: 100,
            image: require("../assets/images/largecap.jpg"),
          },
          {
            id: 3,
            name: "Mid Returns",
            description: "hello word",
            price: 50,
            image: require("../assets/images/midcap.jpg"),
          },
          {
            id: 4,
            name: "Low Returns",
            description: "sonu word",
            price: 10,
            image: require("../assets/images/smallcap.jpg"),
          },
          {
            id: 5,
            name: "High Returns",
            description: "hello word",
            price: 10,
            image: require("../assets/images/largecap.jpg"),
          },
          {
            id: 6,
            name: "Mid Returns",
            description: "hello word",
            price: 10,
            image: require("../assets/images/midcap.jpg"),
          },
        ],
      },
      // {
      //   id: 3,
      //   name: "Small Cap",
      //   description: "Invest in Small Cap Stocks",
    
      //   address: "433-jamanagar",
      //   stars: 4,
      //   reviews: "4.4k",
      //   category: "Small Cap",
      //   image:require('../assets/images/smallcap.jpg'),

      //   dishes: [
      //     {
      //       id: 1,
      //       name: "Low Returns",
      //       description: "sonu word",
      //       price: 10,
      //       image: require("../assets/images/smallcap.jpg"),
      //     },
      //     {
      //       id: 2,
      //       name: "High Returns",
      //       description: "hello word",
      //       price: 10,
      //       image: require("../assets/images/largecap.jpg"),
      //     },
      //     {
      //       id: 3,
      //       name: "Mid Returns",
      //       description: "hello word",
      //       price: 10,
      //       image: require("../assets/images/midcap.jpg"),
      //     },
      //     {
      //       id: 4,
      //       name: "Low Returns",
      //       description: "Invest in Low Cap Stocks",
      //       price: 10,
      //       image: require("../assets/images/smallcap.jpg"),
      //     },
      //     {
      //       id: 5,
      //       name: "High Returns",
      //       description: "Invest in High Cap Stocks",
      //       price: 10,
      //       image: require("../assets/images/largecap.jpg"),
      //     },
      //     {
      //       id: 6,
      //       name: "Mid Returns",
      //       description: "Invest in Mid Cap Stocks",
      //       price: 10,
      //       image: require("../assets/images/midcap.jpg"),
      //     },
      //   ],
      // },
      
    ],
  },

];

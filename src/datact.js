import img1 from "./images/Venue-8.jpg";
import img2 from "./images/Venue-9.jpeg";
import img3 from "./images/Venue-10.jpeg";
import img4 from "./images/Venue-11.jpeg";
import img5 from "./images/Venue-12.jpg";
import img6 from "./images/details-1.jpeg";

export default [
  {
    sys: {
      id: "1"
    },
    fields: {
      name: "Anna Caterers",// used in browse page of all venues(with filters)& and each venue browse title
      location: "Margao",
      beverages: ["Alcoholic", "Non-Alcholic"],
      alc: true,
      nalc: true,
      food: ["Veg only", "Meat", "Seafood"],//Filter
      veg: true,
      nveg: true,
      snveg: true,
      price: 15000,//Filter
      discount: 20,
      capacity: 500,
      description:// Description used in Venue overview page
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      VegMenu: [// Show this under Overview in bullet points
        "Veg Pulao",
        "Mushroom Xacuti",
        "Gobi Manchurian",
        "Mix vegetable",
        "Baby Corn Masala",
        "Papad",
        "Mirchi",
        "Sol Kadi"
      ],
      NVegMenu: [// Show this under Overview in bullet points
        "Chicken Fried Rice",
        "Chicken Xacuti",
        "Mutton Xacuti",
        "Chicken Lolipop",
        "Muglai Chicken",
        "Butter Chicken"
      ],
      SNVegMenu: [// Show this under Overview in bullet points
        "Prawns kadi",
        "Prawns Kishmoor",
        "King Fish",
        "Crab Masala"
      ],
      images: [
        {
          fields: {
            file: {
              url: img1
            }
          }
        },
        {
          fields: {
            file: {
              url: img2
            }
          }
        },
        {
          fields: {
            file: {
              url: img3
            }
          }
        },
        {
          fields: {
            file: {
              url: img4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "2"
    },
    fields: {
      name: "Naik Caterers",// used in browse page of all venues(with filters)& and each venue browse title
      location: "Savordem",
      beverages: ["Alcoholic", "Non-Alcholic"],
      alc: true,
      nalc: true,
      food: ["Veg only", "Meat"],//Filter
      veg: true,
      nveg: true,
      snveg: false,
      price: 12000,//Filter
      discount: 20,
      capacity: 1500,
      description:// Description used in Venue overview page
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      VegMenu: [// Show this under Overview in bullet points
        "Veg Pulao",
        "Mushroom Xacuti",
        "Gobi Manchurian",
        "Mix vegetable",
        "Baby Corn Masala",
        "Papad",
        "Mirchi",
        "Sol Kadi"
      ],
      NVegMenu: [// Show this under Overview in bullet points
        "Chicken Fried Rice",
        "Chicken Xacuti",
        "Mutton Xacuti",
        "Chicken Lolipop",
        "Muglai Chicken",
        "Butter Chicken"
      ],
      images: [
        {
          fields: {
            file: {
              url: img1
            }
          }
        },
        {
          fields: {
            file: {
              url: img2
            }
          }
        },
        {
          fields: {
            file: {
              url: img3
            }
          }
        },
        {
          fields: {
            file: {
              url: img4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "3"
    },
    fields: {
      name: "Chanekar Caterers",// used in browse page of all venues(with filters)& and each venue browse title
      location: "Margao",
      beverages: ["Alcoholic", "Non-Alcholic"],
      alc: true,
      nalc: true,
      food: ["Veg only", "Meat", "Seafood"],//Filter
      veg: true,
      nveg: true,
      snveg: true,
      price: 25000,//Filter
      discount: 20,
      capacity: 3000,
      description:// Description used in Venue overview page
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      VegMenu: [// Show this under Overview in bullet points
        "Veg Pulao",
        "Mushroom Xacuti",
        "Gobi Manchurian",
        "Mix vegetable",
        "Baby Corn Masala",
        "Papad",
        "Mirchi",
        "Sol Kadi"
      ],
      NVegMenu: [// Show this under Overview in bullet points
        "Chicken Fried Rice",
        "Chicken Xacuti",
        "Mutton Xacuti",
        "Chicken Lolipop",
        "Muglai Chicken",
        "Butter Chicken"
      ],
      SNVegMenu: [// Show this under Overview in bullet points
        "Prawns kadi",
        "Prawns Kishmoor",
        "King Fish",
        "Crab Masala"
      ],
      images: [
        {
          fields: {
            file: {
              url: img1
            }
          }
        },
        {
          fields: {
            file: {
              url: img2
            }
          }
        },
        {
          fields: {
            file: {
              url: img3
            }
          }
        },
        {
          fields: {
            file: {
              url: img4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "4"
    },
    fields: {
      name: "Anna Caterers",// used in browse page of all venues(with filters)& and each venue browse title
      location: "Margao",
      beverages: ["Non-Alcholic"],
      alc: false,
      nalc: true,
      food: ["Veg only", "Meat"],//Filter
      veg: true,
      nveg: true,
      snveg: false,
      price: 14000,//Filter
      discount: 10,
      capacity: 1500,
      description:// Description used in Venue overview page
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      VegMenu: [// Show this under Overview in bullet points
        "Veg Pulao",
        "Mushroom Xacuti",
        "Gobi Manchurian",
        "Mix vegetable",
        "Baby Corn Masala",
        "Papad",
        "Mirchi",
        "Sol Kadi"
      ],
      NVegMenu: [// Show this under Overview in bullet points
        "Chicken Fried Rice",
        "Chicken Xacuti",
        "Mutton Xacuti",
        "Chicken Lolipop",
        "Muglai Chicken",
        "Butter Chicken"
      ],
      images: [
        {
          fields: {
            file: {
              url: img1
            }
          }
        },
        {
          fields: {
            file: {
              url: img2
            }
          }
        },
        {
          fields: {
            file: {
              url: img3
            }
          }
        },
        {
          fields: {
            file: {
              url: img4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "5"
    },
    fields: {
      name: "Sai Caterers",// used in browse page of all venues(with filters)& and each venue browse title
      location: "Vasco",
      beverages: ["Non-Alcholic"],
      alc: false,
      nalc: true,
      food: ["Veg only", "Meat", "Seafood"],//Filter
      veg: true,
      nveg: true,
      snveg: true,
      price: 25000,//Filter
      discount: 40,
      capacity: 2000,
      description:// Description used in Venue overview page
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      VegMenu: [// Show this under Overview in bullet points
        "Veg Pulao",
        "Mushroom Xacuti",
        "Gobi Manchurian",
        "Mix vegetable",
        "Baby Corn Masala",
        "Papad",
        "Mirchi",
        "Sol Kadi"
      ],
      NVegMenu: [// Show this under Overview in bullet points
        "Chicken Fried Rice",
        "Chicken Xacuti",
        "Mutton Xacuti",
        "Chicken Lolipop",
        "Muglai Chicken",
        "Butter Chicken"
      ],
      SNVegMenu: [// Show this under Overview in bullet points
        "Prawns kadi",
        "Prawns Kishmoor",
        "King Fish",
        "Crab Masala"
      ],
      images: [
        {
          fields: {
            file: {
              url: img1
            }
          }
        },
        {
          fields: {
            file: {
              url: img2
            }
          }
        },
        {
          fields: {
            file: {
              url: img3
            }
          }
        },
        {
          fields: {
            file: {
              url: img4
            }
          }
        }
      ]
    }
  }
];                

import Venue2 from "./images/details-2.jpg";
import Venue3 from "./images/details-3.jpeg";
import Venue4 from "./images/details-4.jpeg";
import img1 from "./images/Venue-1.jpeg";
import img2 from "./images/Venue-13.jpeg";
import img3 from "./images/Venue-3.jpg";
import img4 from "./images/Venue-4.jpeg";
import img5 from "./images/Venue-5.jpeg";
import img6 from "./images/Venue-6.jpeg";
import img7 from "./images/Venue-7.jpg";



export default [
  {
    sys: {
      id: "1"
    },
    fields: {
      name: "Babu Naik Hall",// used in browse page of all venues(with filters)& and each venue browse title
      Hall: "Babu Naik Hall",// used in browse page of all venues(with filters) & each venue browse page
      type: "Temple Hall", //Filter
      events: ["Wedding", "Birthday","Thread ceremony","Anniversary","Others"],//Filter
      wedding:true,
      birthday: true,
      threadceremony:true,
      anniversary:true,
      others:true,
      officeconferences:false,
      food: ["Veg only", "Veg/NonVeg"],//Filter
      veg: true,
      nveg: true,
      anveg: false,
      price: 15000,//Filter
      discount: 10,// use this for showing discounted rates from original rate
      capacity: 1000,//Filter
      featured: true,// these will show up in main page
      description:// Description used in Venue overview page
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [// Show this under Overview in bullet points
        "Air Conditioned",
        "Spacious sitting  availability",
        "Dedicated space for food arrangements",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet"
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
              url: Venue2
            }
          }
        },
        {
          fields: {
            file: {
              url: Venue3
            }
          }
        },
        {
          fields: {
            file: {
              url: Venue4
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
        name: "Math Hall",// used in browse page of all venues(with filters)& and each venue browse title
        Hall: "Math Hall",// used in browse page of all venues(with filters) & each venue browse page
        type: "Private Hall", //Filter
        events: ["Wedding", "Anniversary","Others"],//Filter      
        wedding:true,
        birthday: false,
        threadceremony:false,
        anniversary:false,
        others:true,
        officeconferences:false,
        food: ["Veg only", "Veg/NonVeg"],//Filter
        veg: true,
        nveg: true,
        anveg: false,
        price: 15000,//Filter
        discount: 10,// use this for showing discounted rates from original rate
        capacity: 1000,//Filter
        featured: false,// these will show up in main page
        description:// Description used in Venue overview page
          "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
        extras: [// Show this under Overview in bullet points
          "Air Conditioned",
          "Spacious sitting  availability",
          "Dedicated space for food arrangements",
          "Complimentary refreshments",
          "Adequate safety/security",
          "Internet"
        ],
      images: [
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
              url: Venue2
            }
          }
        },
        {
          fields: {
            file: {
              url: Venue3
            }
          }
        },
        {
          fields: {
            file: {
              url: Venue4
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
        name: "Holiday Inn Hall",// used in browse page of all venues(with filters)& and each venue browse title
        Hall: "Holiday In the Five start residency",// used in browse page of all venues(with filters) & each venue browse page
        type: "Beach Resort", //Filter
        events: ["Wedding", "Anniversary","Others","Office Conferences","Birthday"],//Filter
        wedding:true,
        birthday: true,
        threadceremony:false,
        anniversary:true,
        others:true,
        officeconferences:true,
        food: ["Veg only", "Veg/NonVeg","Nonveg+Alcohol"],//Filter
        veg: true,
        nveg: true,
        anveg: true,
        price: 15000,//Filter
        discount: 10,// use this for showing discounted rates from original rate
        capacity: 1000,//Filter
        featured: true,// these will show up in main page
        description:// Description used in Venue overview page
          "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
        extras: [// Show this under Overview in bullet points
          "Air Conditioned",
          "Spacious sitting  availability",
          "Dedicated space for food arrangements",
          "Complimentary refreshments",
          "Adequate safety/security",
          "Internet"
        ],
      images: [
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
              url: Venue2
            }
          }
        },
        {
          fields: {
            file: {
              url: Venue3
            }
          }
        },
        {
          fields: {
            file: {
              url: Venue4
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
        name: "Hotel 8 Inn Hall",// used in browse page of all venues(with filters)& and each venue browse title
        Hall: "Hotel 8 affordable residency",// used in browse page of all venues(with filters) & each venue browse page
        type: "Hotel hall", //Filter
        events: ["Wedding", "Anniversary","Others","Office Conferences","Birthday"],//Filter
        wedding:true,
        birthday: true,
        threadceremony:false,
        anniversary:true,
        others:true,
        officeconferences:true,
        food: ["Veg only", "Veg/NonVeg","Nonveg+Alcohol"],//Filter
        veg: true,
        nveg: true,
        anveg: true,
        price: 20000,//Filter
        discount: 15,// use this for showing discounted rates from original rate
        capacity: 1000,//Filter
        featured: true,// these will show up in main page
        description:// Description used in Venue overview page
          "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
        extras: [// Show this under Overview in bullet points
          "Air Conditioned",
          "Spacious sitting  availability",
          "Dedicated space for food arrangements",
          "Complimentary refreshments",
          "Adequate safety/security",
          "Internet"
        ],
      images: [
        {
          fields: {
            file: {
              url: img4
            }
          }
        },
        {
          fields: {
            file: {
              url: Venue2
            }
          }
        },
        {
          fields: {
            file: {
              url: Venue3
            }
          }
        },
        {
          fields: {
            file: {
              url: Venue4
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
        name: "Mangueshi Hall",// used in browse page of all venues(with filters)& and each venue browse title
        Hall: "Mangueshi Temple Hall",// used in browse page of all venues(with filters) & each venue browse page
        type: "Temple Hall", //Filter
        events: ["Wedding", "Thread Ceremony"],//Filter
        wedding:true,
        birthday: false,
        threadceremony:true,
        anniversary:false,
        others:false,
        officeconferences:false,
        food: ["Veg only"],//Filter
        veg: true,
        nveg: false,
        anveg: false,
        // food: ["Veg only"],//Filter
        price: 5000,//Filter
        discount: 15,// use this for showing discounted rates from original rate
        capacity: 1000,//Filter
        featured: false,// these will show up in main page
        description:// Description used in Venue overview page
          "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
        extras: [// Show this under Overview in bullet points
          "Air Conditioned",
          "Spacious sitting  availability",
          "Dedicated space for food arrangements",
          "Complimentary refreshments",
          "Adequate safety/security",
          "Internet"
        ],
      images: [
        {
          fields: {
            file: {
              url: img5
            }
          }
        },
        {
          fields: {
            file: {
              url: Venue2
            }
          }
        },
        {
          fields: {
            file: {
              url: Venue3
            }
          }
        },
        {
          fields: {
            file: {
              url: Venue4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "6"
    },
    fields: {
        name: "Nagueshi Hall",// used in browse page of all venues(with filters)& and each venue browse title
        Hall: "Nagueshi Temple Hall",// used in browse page of all venues(with filters) & each venue browse page
        type: "Temple Hall", //Filter
        events: ["Wedding", "Thread Ceremony"],//Filter
        wedding:true,
        birthday: false,
        threadceremony:true,
        anniversary:false,
        others:false,
        officeconferences:false,
        food: ["Veg only"],//Filter
        veg: true,
        nveg: false,
        anveg: false,
        price: 8000,//Filter
        discount: 15,// use this for showing discounted rates from original rate
        capacity: 500,//Filter
        featured: false,// these will show up in main page
        description:// Description used in Venue overview page
          "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
        extras: [// Show this under Overview in bullet points
          "Air Conditioned",
          "Spacious sitting  availability",
          "Dedicated space for food arrangements",
          "Complimentary refreshments",
          "Adequate safety/security",
          "Internet"
        ],
      images: [
        {
          fields: {
            file: {
              url: img6
            }
          }
        },
        {
          fields: {
            file: {
              url: Venue2
            }
          }
        },
        {
          fields: {
            file: {
              url: Venue3
            }
          }
        },
        {
          fields: {
            file: {
              url: Venue4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "7"
    },
    fields: {
        name: "Dattaraj Hall",// used in browse page of all venues(with filters)& and each venue browse title
        Hall: "Dattaraj Hall",// used in browse page of all venues(with filters) & each venue browse page
        type: "Private Hall", //Filter
        events: ["Wedding", "Thread Ceremony"],//Filter
        wedding:true,
        birthday: false,
        threadceremony:true,
        anniversary:false,
        others:false,
        officeconferences:false,
        food: ["Veg only"],//Filter
        veg: true,
        nveg: false,
        anveg: false,
        price: 5000,//Filter
        discount: 15,// use this for showing discounted rates from original rate
        capacity: 100,//Filter
        featured: false,// these will show up in main page
        description:// Description used in Venue overview page
          "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
        extras: [// Show this under Overview in bullet points
          "Air Conditioned",
          "Spacious sitting  availability",
          "Dedicated space for food arrangements",
          "Complimentary refreshments",
          "Adequate safety/security",
          "Internet"
        ],
      images: [
        {
          fields: {
            file: {
              url: img7
            }
          }
        },
        {
          fields: {
            file: {
              url: Venue2
            }
          }
        },
        {
          fields: {
            file: {
              url: Venue3
            }
          }
        },
        {
          fields: {
            file: {
              url: Venue4
            }
          }
        }
      ]
    }
  }
];

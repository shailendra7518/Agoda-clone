import { useState } from "react";
import "./TopDestination.css";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

export function TopDest() {
  let arr = [
    {
      city: "New Delhi and NCR",
      image:
        "https://pix6.agoda.net/geo/city/14552/1_14552_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      accommodation: "10,790 accommodation",
    },
    {
      city: "Goa",
      image:
        "https://pix6.agoda.net/geo/city/11304/1_11304_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      accommodation: "7,752 accommodation",
    },
    {
      city: "Mumbai",
      image:
        "https://pix6.agoda.net/geo/city/16850/1_16850_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      accommodation: "3,679 accommodation",
    },
    {
      city: "Bangalore",
      image:
        "https://pix6.agoda.net/geo/city/4923/1_4923_02.jpg?ca=8&ce=1&s=345x345&ar=1x1",
      accommodation: "4,683 accommodation",
    },
    {
      city: "Chennai",
      image:
        "https://pix6.agoda.net/geo/city/17269/1_17269_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      accommodation: "2,834 accomodation",
    },
    {
      city: "Hyderabad",
      image:
        "https://pix6.agoda.net/geo/city/8801/1_8801_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      accommodation: "2,225 accommodation",
    },
    {
      city: "Jaipur",
      image:
        "https://pix6.agoda.net/geo/city/8845/1_8845_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      accommodation: "2,620 accommodation",
    },
    {
      city: "Pondicherry",
      image:
        "https://pix6.agoda.net/geo/city/12565/1_12565_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      accommodation: "1,125 accommodation",
    },
    {
      city: "Pune",
      image:
        "https://pix6.agoda.net/geo/city/16854/1_16854_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      accommodation: "2,107 accommodation",
    },
    {
      city: "Ooty",
      image:
        "https://pix6.agoda.net/geo/city/16857/1_16857_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      accommodation: "1,036 accommodation",
    },
    {
      city: "Varanasi",
      image:
        "https://pix6.agoda.net/geo/city/3005/1_3005_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      accommodation: "1,032 accommodation",
    },
    {
      city: "Kolkata",
      image:
        "https://pix6.agoda.net/geo/city/6241/1_6241_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      accommodation: "2,658 accommodation",
    },
  ];
  const [index, setindex] = useState(1);
  const [slideImage, setslideImage] = useState([
    arr[0],
    arr[2],
    arr[3],
    arr[4],
    arr[5],
    arr[6],
  ]);
  function handlchange(text) {
    console.log(text);
    if (text == "next") {
      if (index < 5) {
        setindex(index + 1);
      } else {
        setindex(0);
      }
    }
    if (text == "pre") {
      if (index > 0) {
        setindex(index - 1);
      } else {
        setindex(4);
      }
    }
    setslideImage([
      arr[index],
      arr[index + 1],
      arr[index + 2],
      arr[index + 3],
      arr[index + 5],
      arr[index + 6],
    ]);
    console.log(slideImage);
  }

  return (
    <div className="main_Topdest_div">
      <h2>Top destinations in India</h2>
     
      <div className="all_round_image">
        <div>
          <img src={slideImage[0].image} alt="" />
          <h4>{slideImage[0].city}</h4>
          <p>{slideImage[0].accommodation}</p>
        </div>
        <div>
          <img src={slideImage[1].image} alt="" />
          <h4>{slideImage[1].city}</h4>
          <p>{slideImage[1].accommodation}</p>
        </div>
        <div>
          <img src={slideImage[2].image} alt="" />
          <h4>{slideImage[2].city}</h4>
          <p>{slideImage[2].accommodation}s</p>
        </div>
        <div>
          <img src={slideImage[3].image} alt="" />
          <h4>{slideImage[3].city}</h4>
          <p> {slideImage[3].accommodation}</p>
        </div>
        <div>
          <img src={slideImage[4].image} alt="" />
          <h4>{slideImage[4].city}</h4>
          <p>{slideImage[4].accommodation}</p>
        </div>
        <div>
          <img src={slideImage[5].image} alt="" />
          <h4>{slideImage[5].city}</h4>
          <p>{slideImage[5].accommodation}</p>
        </div>
      </div>
      <div className="slider_button_round ">
        <BsFillArrowLeftCircleFill
          className="left"
          onClick={() => {
            handlchange("next");
          }}
        >
          next
        </BsFillArrowLeftCircleFill>
        <BsFillArrowRightCircleFill
          className="right"
          onClick={() => {
            handlchange("pre");
          }}
        >
          pre
        </BsFillArrowRightCircleFill>
      </div>
    </div>
  );
}

// component for outside india

export function TopDestOutSide() {
  let arr = [
    {
      city: "Dubai",
      image:"https://pix6.agoda.net/geo/city/2994/1_2994_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      accommodation: "9,649 accommodation",
    },
    {
      city: "Bangkok",
      image:"https://pix6.agoda.net/geo/city/9395/1_9395_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      accommodation: "10,660 accommodation",
    },
    {
      city: "Miami Beach (FL)",
      image:
        "https://pix6.agoda.net/geo/city/18720/1_18720_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      accommodation: "1,405 accommodation",
    },
    {
      city: "NEW York (NY)",
      image:
        "https://pix6.agoda.net/geo/city/318/1_318_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      accommodation: "2,334 accommodation",
    },
    {
      city: "Kulala Lumpur",
      image:
        "https://pix6.agoda.net/geo/city/14524/1_14524_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      accommodation: "12,115 accomodation",
    },
    {
      city: "Lahore",
      image:
        "https://pix6.agoda.net/geo/city/2298/1_2298_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      accommodation: "488 accommodation",
    },
    {
      city: "Singapore",
      image:
        "https://pix6.agoda.net/geo/city/4064/1_4064_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      accommodation: "1,279 accommodation",
    },
    {
      city: "Doha",
      image:
        "https://pix6.agoda.net/geo/city/4472/1_4472_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      accommodation: "286 accommodation",
    },
    {
      city: "Abu Dhabi",
      image:
        "https://pix6.agoda.net/geo/city/10182/1_10182_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      accommodation: "319 accommodation",
    },
    {
      city: "Sharjah",
      image:
        "https://pix6.agoda.net/geo/city/8105/1_8105_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      accommodation: "206 accommodation",
    },
    {
      city: "Pattaya",
      image:
        "https://pix6.agoda.net/geo/city/8584/1_8584_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      accommodation: "9,926 accommodation",
    },
    {
      city: "Islamabad",
      image:
        "https://pix6.agoda.net/geo/city/5058/1_5058_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      accommodation: "511 accommodation",
    },
  ];
  const [index, setindex] = useState(1);
  const [slideImage, setslideImage] = useState([
    arr[0],
    arr[2],
    arr[3],
    arr[4],
    arr[5],
    arr[6],
  ]);
  function handlchange(text) {
    console.log(text);
    if (text == "next") {
      if (index < 5) {
        setindex(index + 1);
      } else {
        setindex(0);
      }
    }
    if (text == "pre") {
      if (index > 0) {
        setindex(index - 1);
      } else {
        setindex(4);
      }
    }
    setslideImage([
      arr[index],
      arr[index + 1],
      arr[index + 2],
      arr[index + 3],
      arr[index + 5],
      arr[index + 6],
    ]);
    console.log(slideImage);
  }

  return (
    <div className="main_Topdest_div">
      <h2>Top destinations in India</h2>
     
      <div className="all_round_image">
        <div>
          <img src={slideImage[0].image} alt="" />
          <h4>{slideImage[0].city}</h4>
          <p>{slideImage[0].accommodation}</p>
        </div>
        <div>
          <img src={slideImage[1].image} alt="" />
          <h4>{slideImage[1].city}</h4>
          <p>{slideImage[1].accommodation}</p>
        </div>
        <div>
          <img src={slideImage[2].image} alt="" />
          <h4>{slideImage[2].city}</h4>
          <p>{slideImage[2].accommodation}s</p>
        </div>
        <div>
          <img src={slideImage[3].image} alt="" />
          <h4>{slideImage[3].city}</h4>
          <p> {slideImage[3].accommodation}</p>
        </div>
        <div>
          <img src={slideImage[4].image} alt="" />
          <h4>{slideImage[4].city}</h4>
          <p>{slideImage[4].accommodation}</p>
        </div>
        <div>
          <img src={slideImage[5].image} alt="" />
          <h4>{slideImage[5].city}</h4>
          <p>{slideImage[5].accommodation}</p>
        </div>
      </div>
      <div className="slider_button_round ">
        <BsFillArrowLeftCircleFill
          className="left"
          onClick={() => {
            handlchange("next");
          }}
        >
          next
        </BsFillArrowLeftCircleFill>
        <BsFillArrowRightCircleFill
          className="right"
          onClick={() => {
            handlchange("pre");
          }}
        >
          pre
        </BsFillArrowRightCircleFill>
      </div>
    </div>
  );
}

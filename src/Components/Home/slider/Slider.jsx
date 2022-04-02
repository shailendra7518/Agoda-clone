import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import "./Slider.css";
export function Slider() {
  let arr = [
    "https://www.linkpicture.com/q/download-1_121.jpg",
    "https://www.linkpicture.com/q/download_500.jpg",
    "https://www.linkpicture.com/q/images-1_57.jpg",
    "https://www.linkpicture.com/q/images-2_40.jpg",
    "https://www.linkpicture.com/q/images-3_7.jpg",
    "https://www.linkpicture.com/q/images-4_2.jpg",
    "https://www.linkpicture.com/q/images_217.jpg",
  ];
  const [index, setindex] = useState(1);
  const [slideImage, setslideImage] = useState([arr[3], arr[2]]);
  function handlchange(text) {
    console.log(text);
    if (text == "next") {
      if (index < arr.length - 2) {
        setindex(index + 1);
      } else {
        setindex(0);
      }
    }
    if (text == "pre") {
      if (index > 0) {
        setindex(index - 1);
      } else {
        setindex(arr.length - 2);
      }
    }
    setslideImage([arr[index], arr[index + 1]]);
    console.log(slideImage);
  }

  return (
    <div className="main_slider_div">
      <div className="slider_image">
        <img src={slideImage[0]} alt="first" />
        <img src={slideImage[1]} alt="second" />
      </div>

      <div className="slider_button ">
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

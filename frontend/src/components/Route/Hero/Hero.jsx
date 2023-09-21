import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const images = [
  {
    url:
      "https://ke.jumia.is/cms/2023/W37/CP/Sliders/_SFBJ.jpg",
    title: "",
    description: "",
  },
  {
    url:
      "https://ke.jumia.is/cms/2023/W38/CP/OkoaMwezi/Sliders/KE_OkoaMwezi_Phones_0823_S.jpg",
    title: "",
    description: "",
  },
  {
    url:
      "https://ke.jumia.is/cms/2023/SIS/Adidas/W37/Refresh/712.png",
    title: "",
    description: "",
  },
  {
    url:
      "https://ke.jumia.is/cms/2023/W38/CP/OkoaMwezi/Sliders/KE_FashionWeek_Sneakers_0923_S.jpg",
    title: "",
    description: "",
  },
  {
    url:
      "https://ke.jumia.is/cms/2023/W37/CP/KE_PartyFest_0923_S_rvsd.jpg",
    title: "",
    description: "",
  },
  // add more images as needed
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((currentImage) =>
        currentImage === images.length - 1 ? 0 : currentImage + 1
      );
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  const { url, title, description } = images[currentImage];

  return (
    <div
      className={`relative h-[60vh] w-full bg-no-repeat ${styles.normalFlex}`}
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: "90%",
        backgroundPosition: "center",
      }}
    > 
    
    <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
    <h1
      className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
    >
      {title}
    </h1>
    <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
      {description}
    </p>
    <div className="flex justify-end absolute bottom-0 right-5 mb-1 mr-5">
  <Link to="/products" className={`${styles.btn} ml-auto`}>
    <span className="text-[#fff] font-[Poppins] text-[12px]">
      Shop Now
    </span>
  </Link>
</div>
    
  </div>

 

</div>


  );
};

export default Hero;

/** @format */

import React from "react";
import Section from "../components/Section";
import Photo1 from "../views/img/foto1.jpg";
import Photo2 from "../views/img/foto2.jpg";
import Photo3 from "../views/img/foto3.jpg";
import Photo4 from "../views/img/foto4.jpg";
import Photo5 from "../views/img/foto5.jpg";

const Home = () => {
  const items = [
    {
      id: 1,
      title: "The Shawshank redempiot",
      imgUrl: Photo1,
      desc: "Lorem ipsum dolor sit amet "
    },
    {
      id: 2,
      title: "The Godfather Boy the young",
      imgUrl: Photo2,
      desc: "Lorem  lorem ipsum dolor sit amet   lorem lorem lorem lrem lorem lorem iopsum dolor amne sitipsum dolor sit amet "
        
    },
    {
      id: 3,
      title: "The Godfather: Part II magis",
      imgUrl: Photo3,
      desc: "Lorem ipsum lorem ipsum dolor sit amet   lorem lorem lorem lrem lorem lorem iopsum dolor amne sit dolor sit amet "

    },
    {
      id: 4,
      title: "The Dark Knight",
      imgUrl: Photo4,
      desc: "lorem ipsum dolor sit amet   lorem lorem lorem lrem lorem lorem iopsum dolor amne sit "

    },
    {
      id: 5,
      title: "The RedRedemption",
      imgUrl: Photo5,
      desc: "Lorem lorem7 ipsum dolor sit amet lorem ipsum dolor sit amet   lorem lorem lorem lrem lorem lorem iopsum dolor amne sit"

    },
  ];

  return (
    <div className="grid gap-y-8">
      <Section title="Focus" more="/bbbb" items={items} />
      <Section title="Top tated" more="/bbbb" items={items} />
      <Section title="Show to try" more="/bbbb" items={items} />
      <Section title="Made for Khayal" more="/bbbb" items={items} />
    </div>
  );
};

export default Home;

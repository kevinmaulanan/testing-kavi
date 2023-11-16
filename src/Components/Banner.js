import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import "./css/zoom-in.css";

const banners = [
  `${process.env.REACT_APP_WEB_URL}/image/banner/zeta-banner-1.png`,
  `${process.env.REACT_APP_WEB_URL}/image/banner/zeta-banner-2.png`,
  `${process.env.REACT_APP_WEB_URL}/image/banner/zeta-banner-3.png`,
];

export const DotButton = ({ selected, onClick }) => (
  <Box
    sx={{
      width: selected ? 35 : 15,
      backgroundColor: "white",
      height: 10,
      marginRight: 1,
      borderRadius: 25,
      borderColor: "#DDD",
    }}
    onClick={onClick}
  />
);

const Banner = () => {
  const [emblaRef, embla] = useEmblaCarousel(
    {
      align: "start",
      // aligns the first slide to the start
      // of the viewport else will align it to the middle.

      loop: true,
      // we need the carousel to loop to the
      // first slide once it reaches the last slide.

      skipSnaps: false,
      // Allow the carousel to skip scroll snaps if
      // it's dragged vigorously.

      inViewThreshold: 0.7,
      // percentage of a slide that need's to be visible
      // inorder to be considered in view, 0.7 is 70%.
    },
    [Autoplay({ delay: 3000 })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [image, setImage] = useState(banners[0]);
  const [index, setIndex] = useState(0);
  const [time, setTime] = useState(Date.now());

  // this function allow's us to scroll to the slide whose
  // id correspond's to the id of the navigation dot when we
  // click on it.

  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  // set the id of the current slide to active id
  // we need it to correctly highlight it's corresponding
  // navigation dot.

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      let indexUpdate = 0;
      if (index === banners.length - 1) indexUpdate = 0;
      else indexUpdate = index + 1;

      setImage(banners[indexUpdate]);
      setIndex(indexUpdate);
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, [index]);

  // make sure embla is mounted and return true operation's
  // can be only performed on it if it's successfully mounted.

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <Box
      sx={{
        displat: "flex",
        position: "relative",
        marginBottom: { xs: 0, md: 5 },
      }}>
      <Box
        width={"100%"}
        ref={emblaRef}
        sx={{
          display: "flex",
          width: "100%",
          aspectRatio: "auto 16 / 7.0",
          overflow: "hidden",
        }}>
        <Box sx={{ display: "flex", width: "100%" }}>
          <Link
            underline="hover"
            sx={{
              position: "relative",
              flex: "0 0 100%",
            }}>
            <Box
              component={"img"}
              alt={image}
              width={"100%"}
              height={"100%"}
              key={index}
              src={image}
              className="zoom-in"
            />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;

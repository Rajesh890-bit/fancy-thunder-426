import { Box, Center, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Carousels from "../Components/Carousel/Carousel";
import { Gap } from "../Components/Gap";
import my_pixel from "../scripts/my_pixel";
// import { useNavigate } from "react-router-dom";
import CardComponent from "../Components/Card-Component/CardComponent";
import {
  AUTO,
  CENTER,
  COLUMN,
  FILL_70PARENT,
  FILL_75PARENT,
  FILL_80PARENT,
  FILL_PARENT,
  R1,
  R11,
  R2,
  R3,
  R4,
  R6,
  ROW,
  SB,
} from "../Constants/typography";
import {
  bankImageData,
  circularCategoryData,
  dealsWheelData,
  featuredBrandData,
  mensWearByCliqData,
  newOnCliqData,
  popularpiqsData,
  shoesData,
  trendingNowData,
  westSideData,
  womensWearData,
} from "../Constants/staticData";
import estside_banner_img from "../assets/estside_banner_img.png";
import theweddingedits from "../assets/theweddingedits.png";
import winterstyle_banner from "../assets/winterstyle_banner.png";
import trendingnow_banner from "../assets/trendingnow_banner.png";
import strike_choice_banner from "../assets/strike_choice_banner.png";
import shoes_banner from "../assets/shoes_banner.png";
import trending_men_banner from "../assets/trending_men_banner.png";
import { ERROR_URL, LOADER_URL } from "../Constants/constants";
import Loader from "../Components/Loader/Loader";
import ImageCarousal from "../Components/Cardcarosal/CardCarosal";
import { dummyImages1 } from "../Constants/staticData";
import { dummyImages2 } from "../Constants/staticData";
export default function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  if (loading) return <Loader gif={LOADER_URL} />;
  if (error) return <Loader gif={ERROR_URL} />;
  return (
    <Box w={"100%"} className="container">
      <Carousels />
      <Gap gap={15} />
      {/* category */}
      <Grid gridTemplateColumns={{ base: R3, sm: R6, lg: R11 }}>
        {circularCategoryData.map((el) => (
          <CardComponent key={el.src} {...el} />
        ))}
      </Grid>
      <Gap gap={10} />
      <Box width={FILL_75PARENT} margin={AUTO}>
        <Flex
          direction={{ base: COLUMN, sm: ROW, lg: ROW }}
          alignItems={CENTER}
          justify={CENTER}
          gap={my_pixel(10)}
        >
          {bankImageData.map((el) => (
            <CardComponent key={el.src} {...el} />
          ))}
        </Flex>
        {/* gap component for simple gap */}
        <Gap gap={50} />

        {/* estside image */}
        <CardComponent src={estside_banner_img} width={FILL_PARENT} />

        {/* gap component for simple gap */}
        <Gap gap={50} />

        {/* Category wear Images */}
        <ImageCarousal dummyImages={dummyImages1} />

        {/* gap component for simple gap */}
        <Gap gap={60} />

        {/* heading for Deals Wheel */}
        <Heading h1={"DEALS WHEEL"} h2={"Grab these before they're gone"} />

        {/* gap component for simple gap */}
        <Gap gap={60} />

        {/* New On Cliq */}
        <Grid gap={8} gridTemplateColumns={{ base: R1, sm: R2, lg: R4 }}>
          {newOnCliqData.map((el) => (
            <CardComponent key={el.src} {...el} />
          ))}
        </Grid>
        {/* gap component for simple gap */}
        <Gap gap={60} />

        {/* heading for new on cliq */}
        <Heading h1={"NEW ON CLiQ"} h2={"Fresh PiQs to choose from"} />
        <Gap gap={60} />

        {/* Featured brands */}
        <Grid gap={8} gridTemplateColumns={{ base: R1, sm: R2, lg: R4 }}>
          {featuredBrandData.map((el) => (
            <CardComponent key={el.src} {...el} />
          ))}
        </Grid>
        {/* gap component for simple gap */}
        <Gap gap={60} />

        {/* heading for featured brand */}
        <Heading
          h1={"FEATURED BRANDS"}
          h2={"Celebrating the brands in spolight"}
        />
        <Gap gap={60} />

        {/* POPULAR PiQs*/}
        <Grid gap={8} gridTemplateColumns={{ base: R1, sm: R2, lg: R4 }}>
          {popularpiqsData.map((el) => (
            <CardComponent key={el.src} {...el} />
          ))}
        </Grid>
        {/* gap component for simple gap */}
        <Gap gap={60} />

        {/* heading for popular piqs */}
        <Heading h1={"POPULAR PiQs"} h2={"BestSellers to choose from"} />
        <Gap gap={60} />

        {/* women wears*/}
        <Grid gap={8} gridTemplateColumns={{ base: R1, sm: R2, lg: R4 }}>
          {womensWearData.map((el) => (
            <CardComponent key={el.src} {...el} />
          ))}
        </Grid>
        {/* gap component for simple gap */}
        <Gap gap={60} />
        <CardComponent src={theweddingedits} w={AUTO} />
        <Gap gap={60} />

        {/* heading for womens wear */}
        <Heading h1={"WOMENSWEAR BY CLiQ"} h2={"Curated looks of the season"} />

        <Gap gap={60} />
        <CardComponent src={winterstyle_banner} w={AUTO} />
        <Gap gap={150} />

        {/* Trending now*/}
        <Grid
          gap={8}
          rowGap={40}
          gridTemplateColumns={{ base: R1, sm: R2, lg: R4 }}
        >
          {trendingNowData.map((el) => (
            <CardComponent key={el.src} {...el} />
          ))}
        </Grid>
        {/* gap component for simple gap */}
        <Gap gap={60} />

        {/* heading for trending now */}
        <Heading
          h1={"WHAT'S TRENDING NOW"}
          h2={"Style tips for the contemporary women"}
        />
        <Gap gap={60} />
        <CardComponent src={trendingnow_banner} w={AUTO} />

        <Gap gap={100} />
        <Heading
          h1={"MENSWEAR BY CLiQ"}
          h2={"Season's hottest looks, styled for you"}
        />

        <Gap gap={60} />
        <CardComponent src={strike_choice_banner} w={AUTO} />
        <Gap gap={150} />

        {/* MeansWear by click*/}
        <Grid
          gap={8}
          rowGap={40}
          gridTemplateColumns={{ base: R1, sm: R2, lg: R4 }}
        >
          {mensWearByCliqData.map((el) => (
            <CardComponent key={el.src} {...el} />
          ))}
        </Grid>
        {/* gap component for simple gap */}
        <Gap gap={60} />

        {/* heading for trending now */}
        <Heading
          h1={"WHAT'S TRENDING NOW"}
          h2={"Style tips for the morden men"}
        />
        <Gap gap={60} />

        <CardComponent src={trending_men_banner} w={AUTO} />

        <Gap gap={60} />

        <Heading h1={"ALL ABOUT SHOES"} h2={"Hype-worthy add-ons to buy"} />

        <Gap gap={60} />

        <CardComponent src={shoes_banner} w={AUTO} />
        <Gap gap={150} />

        {/* shoes Data*/}
        <Grid
          gap={8}
          rowGap={40}
          gridTemplateColumns={{ base: R1, sm: R2, lg: R4 }}
        >
          {shoesData.map((el) => (
            <CardComponent key={el.src} {...el} />
          ))}
        </Grid>
        {/* gap component for simple gap */}
        <Gap gap={60} />
        <Heading h1={"THE NEWSIDE STORE"} h2={"New trends, everyday"} />
        <Gap gap={120} />

        {/* westside store*/}
        <Grid gap={8} gridTemplateColumns={{ base: R1, sm: R2, lg: R4 }}>
          {westSideData.map((el) => (
            <CardComponent key={el.src} {...el} />
          ))}
        </Grid>
        {/* gap component for simple gap */}
        <Gap gap={40} />
      </Box>
      <Center m={"14rem"}>
        <ImageCarousal dummyImages={dummyImages2} />
      </Center>
      <Gap gap={30} />
    </Box>
  );
}

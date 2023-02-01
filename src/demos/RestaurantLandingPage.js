import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import TabGrid from "components/cards/TabCardGrid.js";
import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import Header from "../components/headers/light.js";


const fragranceIconImageSrc = "images/features/keunggulan-1.png";
const substanceIconImageSrc = "images/features/keunggulan-2.png"
const moneyIconImageSrc = "images/features/keunggulan-3.png";

export default () => {
  const Subheading = tw.span`tracking-wider text-base font-medium text-primary-400`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature 
        id={"tentang-kami"}
        subheading={<Subheading>Sejak 2017</Subheading>}
        heading={
          <>
            Brand parfum dengan konsentrat asli Eropa
            <br />
            <br />  
            Aroma <HighlightedText>98%</HighlightedText> sama dengan parfum original
          </>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Kunjungi Toko"
        primaryButtonUrl="https://shopee.co.id/semerbak.parfume"
        imageSrc={
          "images/jumbotron/hero.jpg"
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <TabGrid
        id={"katalog"}
        heading={
          <>
            Katalog <HighlightedText>Semerbak</HighlightedText>
          </>
        }
      />
      <Features
        id={"keunggulan"}
        heading={
          <>
            Keunggulan <HighlightedText>Semerbak</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: fragranceIconImageSrc,
            title: "Ketahanan Aroma",
            description: "Aroma parfum tahan hingga 12 sampai 24 Jam",
          },
          {
            imageSrc: substanceIconImageSrc,
            title: "Bahan Berkualitas",
            description: "Terbuat dari konsentrat asli Eropa dan alkohol khusus parfum",
          },
          {
            imageSrc: moneyIconImageSrc,
            title: "Harga Terjangkau",
            description: "Harga yang ramah dikantong dengan isi yang tahan hingga 1 bulan",
          }
        ]}

        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      <Footer />
    </AnimationRevealPage>
  );
}

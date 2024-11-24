import Banner from "@/components/Banner";
import EventPromotion from "@/components/EventPromotion";
import Instagram from "@/components/Instagram";
import News from "@/components/News";
import OurProducts from "@/components/OurProducts";
import OurStory from "@/components/OurStory";
import React from "react";

export const metadata = {
  title: 'Trang chủ',
  description: 'Trang chủ của website',
  openGraph: {
    title: 'Trang chủ',
    description: 'Trang chủ của website',
    images: [
      {
        url: 'https://dummyimage.com/1200x630',
        width: 1200,
        height: 630,
        alt: 'Trang chủ',
      },
    ],
    publicDate: '2021-10-10T00:00:00Z',
    //...
  }
}


export default function Page() {
  return (
    <div>
      <Banner />
      <OurProducts />
      <EventPromotion />
      <OurStory />
      <News />
      <Instagram />
    </div>
  );
}

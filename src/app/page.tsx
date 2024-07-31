"use client";
import Head from "next/head";
import GetLayout from "./shared/layout/GetLayout";
import LOGO from '@/app/assets/img/JSZ.png'

export default function Home() {

  const logoURL =(LOGO);
  return (
    <>
      <Head>
        <title>Joaquín Sebástian Zuin</title>
        <meta name="description" content="Profolio Joaquin Sebastian Zuin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href='../app/assets/img/JSZ.png' />

        {/* <script async id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="4788b5f9-6765-4794-9f34-95ed30b4741a" data-blockingmode="auto" type="text/javascript"></script> */}
      </Head>

      <GetLayout />
    </>
  );
}

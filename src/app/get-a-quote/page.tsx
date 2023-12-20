import Footer from "@/components/native/Footer";
import GetAQuote from "@/components/pages/GetAQuote";
import { rating } from "@material-tailwind/react";
import { time } from "console";
import { ClientRequest } from "http";
import React from "react";

export default function page() {
  return (
    <div>
      <GetAQuote />
      <Footer />
    </div>
  );
}

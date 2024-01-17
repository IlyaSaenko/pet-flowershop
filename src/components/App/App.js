import React from "react";
// import { Routes, Route } from 'react-router-dom';
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import Catalog from "../Сatalog/Сatalog";
import Delivery from "../Delivery/Delivery";
import Examples from "../Examples/Examples";
import Feedback from "../Feedback/Feedback";
import Booking from "../Booking/Booking";
import Footer from "../Footer/Footer";
import galleryImages from "../../utils/galleryImages";

function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Catalog />
      <Delivery />
      <Examples galleryImages={galleryImages} />
      <Feedback />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
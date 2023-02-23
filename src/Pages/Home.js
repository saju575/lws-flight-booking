import React from "react";
import { DestinationFromToList } from "../Components/DestinationFromToList";
import { Header } from "../Components/Header";
import { InputDataSetion } from "../Components/InputDataSetion";

export const Home = () => {
  return (
    <div>
      <Header />
      <section>
        <InputDataSetion />
        <DestinationFromToList />
      </section>
    </div>
  );
};

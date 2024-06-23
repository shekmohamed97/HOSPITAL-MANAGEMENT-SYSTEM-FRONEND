import React,{useContext} from "react";
import Hero from "../Components/Hero";
import Biography from "../Components/Biography";
import MessageForm from "../Components/MessageForm";
import Departments from "../Components/Department";


const Home = () => {
  return (
    <>
      <Hero
        tittle={
          "Welcome to Mr.shekCare Medical Institute | Your Trusted Healthcare Provider"
        }
        imageUrl={"/hero.png"}
      />
      <Biography imageUrl={"/about.png"} />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;
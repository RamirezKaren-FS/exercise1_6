import React from "react";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import Image from "next/image";

export default function NewPost() {
    return <><NavBar></NavBar><Image
        src="/public/useAPI.png"
        alt="Picture of woman writing on whiteboard"
    /> <h1 className="header">NEW POST</h1><p className="post"> When I was first introduced to APIs I couldn't of imagined the range they would have. I enjoy being able to create my own custom layouts for information and knowing what all will and will not make the list. When building an API you’re in charge of all aspects of the data. You decide what all information to include, what type you want it to be , and the requirements for it. You can create an API for pretty much any set of information. My first time working with one was for a joke generator I made for a class. I was so excited when I was able to pull the information and place it exactly where I wanted it. As exciting as it is to be able to create your own databases it can also be very frustrating when the information you worked so hard to collect doesn't show up when called for. There are times when calling for an API results in an error or even a constant looping if you aren’t careful. Being able to successfully create and fetch an API requires a good eye for detail and catching errors. I feel confident about working with APIs but I always end up struggling at some point during the project. Having good skills and gaining the needed knowledge is important for any good programmer. It helps to not only know how to pull the information but also how the information came to be.   </p> <Footer></Footer></>;
}
import React from "react";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import Image from "next/image";
import image from './logo192.png'

export default function NewPost() {
    return <><NavBar></NavBar><Image
        src={image}
        alt="Picture of woman writing on whiteboard"
    /> <h1 className="header">LATEST POST</h1><p className="post">
React native is a completely new concept to me but one I hope to continue to use more in the future. I always wondered how developers made sure their apps would work on the latest devices and the different OS that are there. The layout is a variation of react so it makes it a bit easier to transition to it plus their docs are very informative. Native also has the use of simulators like Expo that make it easy to see what you’re working with. When I watched the video and was introduced I could see why my teacher enjoyed it. It was a simple and easy way to test the app right on a device without the need of having one with you. It can be a bit confusing ensuring you are calling the right operating system and have everything following the correct guidelines but I know with practice it will get easy. I can’t wait to explore more of what native can do and maybe even transfer some old work into it.</p> <Footer></Footer></>;
}
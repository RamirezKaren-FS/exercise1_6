import React from "react";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import Image from "next/image";
import image from './finalpost.png'

export default function FinalPost() {
    return <><NavBar></NavBar><Image
        src={image}
        alt="Right side: Lock and password characters Left side: Figure with coding symbol." className="image"
    /> <h1 className="header">FINAL POST</h1><p className="post">
In this last week, we were shown two different types of security measures. One was password hashing. It is used for the protection of a user’s credentials. It is used to turn sensitive information, such as the password, into a string of characters making it hard to decipher. It is important to use this in applications that require logins and input of sensitive information as it makes it harder for it to be taken by unauthorized users. The second item was the use of JSON tokens. Tokens are unique strings of characters and numbers that are given to users to either grant access or categorize their authorization. I have now used tokens in both aspects of gaining access and giving authorization. I’ve used a token to gain access to a foreign API and in this recent project, we used it to give the user certain authorization to access different aspects of the app. Having these uniquely generated tokens is a great way to add an extra security measure to any project as only those who have them can gain access. </p> <Footer></Footer></>;
}
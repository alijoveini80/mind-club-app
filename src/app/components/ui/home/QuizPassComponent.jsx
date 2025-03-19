"use client";
import { Card, CardFooter, Image, Button } from "@heroui/react";
import Lottie from "lottie-react";
import animationData from "./quizpass.json";

export default function App() {
  return (
    <Card isFooterBlurred className="border-none mx-2" radius="lg">
      {/* <Image
        alt="Woman listing to music"
        className="object-cover w-full h-full"
        height={90}
        src="https://heroui.com/images/hero-card.jpeg"
        // fullWidth={true}
        removeWrapper
      /> */}
      <div className="h-[80px] w-full">
        {" "}
        {/* Adjust size as needed */}
        <Lottie animationData={animationData} loop={false} autoplay={true} />
      </div>

      {/* <CardFooter className="justify-start before:bg-white/10 border-white/20 border-1 overflow-hidden  absolute before:rounded-xl rounded-large  shadow-small  z-10 h-full w-full"> */}
      {/* w-[calc(100%_-_8px)] */}
      <CardFooter className="justify-start before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 mb-1 w-auto shadow-small ml-1 z-10 ">
        <p className="text-tiny text-white/80">Available soon.</p>
        {/* <Button
          className="text-tiny text-white bg-black/20"
          color="default"
          radius="lg"
          size="sm"
          variant="flat"
        >
          Notify me
        </Button> */}
      </CardFooter>
    </Card>
  );
}

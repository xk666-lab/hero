import Image, { StaticImageData } from "next/image";
// import homeSrc from "../../../public/PIXNIO-3177264-3840x2152.png";

interface IProps{
imgUrl:StaticImageData
altText:string
content:string
}

export default function Hero(props:IProps) {
  return (
    <div className=" h-screen relative">
      <div className="absolute inset-0 -z-10">
        <Image
          src={props.imgUrl}
          alt={props.altText}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="flex justify-center pt-60">
        <h1 className="text-white text-6xl"> {props.content}</h1>
      </div>
    </div>
  );
}

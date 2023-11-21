import Image from "next/image";

export default function ImgComponent(dataImg) {
	return <Image src={dataImg.src} width={dataImg.width} height={dataImg.height} alt={dataImg.alt} />;
}

import Image from "next/image";

export default function ConnectingTravelers() {
  return (
    <div id="about" className="relative min-h-screen w-full overflow-hidden">
      <Image
        src="/traveller.png" // use / if the image is in the public folder
        alt="Background image"
        layout="fill" // makes the image cover the parent div
        objectFit="cover" // behaves like `object-cover` in Tailwind
        priority // optional: preload the image for faster load
      />
    </div>
  );
}

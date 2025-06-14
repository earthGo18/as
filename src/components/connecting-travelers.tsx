import Image from "next/image";

export default function ConnectingTravelers() {
  return (
    <div id="about" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      <Image
        src="/traveller.png"
        alt="Background image"
        width={1200} // adjust the size as you want
        height={1000}
        priority
      />
    </div>
  );
}

import Image from "next/image"

export default function ConnectingTravelers() {
  return (
    <div id ="about" className="relative min-h-screen w-full flex items-stretch justify-center overflow-hidden bg-white">
    {/* Background dashed path with text */}
    <img
      src="/tra.jpg"
      alt="Background with dashed path and text"
      className="absolute top-0 left-0 w-full h-full object-cover object-center z-0 select-none pointer-events-none"
    />

    {/* Mountain Overlay */}
    <img
      src="/mou.png"
      alt="Mountain"
      className="absolute z-10 select-none"
      style={{
        top: '5%',
        right: '2%',
        width: '30vw',
        maxWidth: '350px',
        minWidth: '110px',
        height: 'auto',
      }}
    />

    {/* Traveler Overlay */}
    <img
      src="boy.png"
      alt="Traveler Boy"
      className="absolute z-10 select-none"
      style={{
        left: '8%',
        bottom: '8%',
        width: '25vw',
        maxWidth: '110px',
        minWidth: '60px',
        height: 'auto',
      }}
    />
  </div>
)
  
}

import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none relative">
      <Image
        src="/avatar.png"
        alt="Aadhithiyan"
        width={737}
        height={678}
        className="translate-z-0 w-full h-full object-contain"
      />
      {/* Decorative gradient overlay to blend the bottom edge smoothly */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent z-10"></div>
    </div>
  );
};

export default Avatar;

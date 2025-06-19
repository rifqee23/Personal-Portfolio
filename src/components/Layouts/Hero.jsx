import Button from "../Elements/Button";
import SocialMedia from "../Fragments/SocialMedia";
import TechStack from "../Fragments/TechStack";

const Hero = () => {
  return (
    <>
      <div className="w-full lg:h-screen lg:flex lg:justify-center  px-4 lg:px-20">
        <div className="pt-10  lg:flex lg:flex-row-reverse">
          <div className="lg:w-1/2 lg:pt-20 xl:pt-32">
            <div className="flex justify-center mb-10 lg:pl-36">
              <img
                className="rounded-full"
                src="/images/photo.jpg"
                alt=""
                width={400}
                height={400}
              />
            </div>
          </div>

          <div className="lg:w-1/2 lg:pt-20 xl:pt-24">
            <h1 className="text-5xl font-bold text-center lg:text-left ">
              Hi, I'm Rifqi
            </h1>
            <h3 className="text-3xl font-semibold text-center text-gray-600 mt-4 lg:text-left">
              Web Development
            </h3>

            <p className="mt-5 text-md  text-slate-800 leading-normal text-center lg:text-left">
              Hai! Saya Rifqi, web developer asal Indonesia yang sedang
              berkembang dari frontend ke semi full-stack. Saya suka bikin UI
              yang enak dilihat dan juga tertarik ngulik backend pakai Node.js
              dan Express. Proyek-proyek yang saya kerjakan membantu saya
              belajar banyak soal membangun aplikasi dari tampilan sampai
              database. Masih terus belajar, tapi selalu siap buat tantangan
              baru.
            </p>
            <div className="w-full mt-10 flex justify-center gap-4 lg:justify-start">
              <Button
                colors="bg-black"
                widths="w-40"
                textColor="text-white"
                hover="hover:bg-zinc-700"
                onClick={() => (window.location.href = "#project")}
              >
                Get Started
              </Button>
            </div>

            <div className="mt-8">
              <h3 className="text-3xl font-bold">Social Media</h3>
              <SocialMedia />
            </div>
            <div className="my-8">
              <h1 className="text-3xl font-bold">Tech Stack</h1>
              <TechStack />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

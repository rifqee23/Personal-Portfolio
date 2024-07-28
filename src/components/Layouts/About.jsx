import Skills from "../Fragments/Skills";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="w-full px-8 pb-4 pt-10  mx-auto bg-[#0a192f] text-gray-300 "
      >
        <div className="max-w-6xl mx-auto p-4 ">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ms-4">
            About Me
          </p>
        </div>
        <div className="lg:flex lg:flex-row-reverse lgmt-16">
          <div className="lg:w-1/2">
            <p className="mt-4 text-md font-semibold">
              Halo! Nama saya Rifqi Febrianto, seorang pengembang web yang
              berdedikasi dengan hasrat khusus pada pengembangan frontend. Saya
              memiliki keahlian dalam menciptakan antarmuka pengguna yang
              menarik dan responsif. Sebagai mahasiswa, saya telah memulai
              perjalanan saya dalam dunia web development dengan fokus pada
              teknologi terbaru seperti React, HTML, CSS, dan JavaScript. Saya
              telah bekerja pada beberapa proyek akademis dan pribadi yang
              mencakup pembuatan situs web dan aplikasi sederhana. Saya
              berkomitmen untuk terus belajar dan berkembang, baik melalui
              pembelajaran mandiri maupun keterlibatan dalam proyek-proyek baru.
            </p>
          </div>

          <div className="lg:w-1/2 flex justify-center mt-4 lg:mt-0">
            <img
              src="/images/photo.jpg"
              alt="abouts"
              width={400}
              height={400}
            />
          </div>
        </div>
        <Skills />
      </div>
    </>
  );
};

export default About;

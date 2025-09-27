export default function AboutSection() {
  return (
    <section
      className="bg-[#161a1e] px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24 xl:px-40"
      id="about"
    >
      <div className="container mx-auto max-w-screen-lg">
        <h2 className="mb-8 text-center text-3xl font-bold leading-tight tracking-tight sm:mb-12 sm:text-left sm:text-4xl">
          About Me
        </h2>
        <div className="space-y-6">
          <p className="text-lg font-medium leading-relaxed text-white sm:text-xl">
            Hi, I'm Joseph Timothy — a passionate Software Engineer specializing in mobile development.
          </p>
          <p className="text-base font-normal leading-relaxed text-gray-300 sm:text-lg sm:leading-loose">
            I work primarily with Kotlin and Java, applying modern Android practices to deliver apps that are both maintainable and scalable. I enjoy solving challenges that involve API integrations, cross-platform development, and performance optimization, always aiming to make apps feel effortless for the user.
          </p>
          <p className="text-base font-normal leading-relaxed text-gray-300 sm:text-lg sm:leading-loose">
            I’m continuously exploring new tools and frameworks in the Android ecosystem to sharpen my skills and stay current with industry trends.
          </p>
          <p className="text-base font-normal leading-relaxed text-gray-300 sm:text-lg sm:leading-loose">
          </p>
          <div className="pt-4">
            <p className="text-lg font-medium text-primary">
              Always open to connecting with other developers, designers, and tech enthusiasts — if you’re building something exciting or just want to talk tech, let’s connect.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

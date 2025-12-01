import { useEffect, useRef } from "react";

export default function SkillsCarousel() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    let position = 0;

    function move() {
      position -= 1; // speed
      track.style.transform = `translateX(${position}px)`;

      if (Math.abs(position) >= track.scrollWidth / 2) {
        position = 0;
      }

      requestAnimationFrame(move);
    }

    move();
  }, []);

  const skills = [
    "JavaScript",
    "ReactJs",
    "Node",
    "Express",
    "Bootstrap",
    "jQuery",
    "PHP",
    "MySQL",
    "MongoDB",
    "Git",
    "GitHub",
    "Figma",
  ];

  return (
    <div className="relative w-full overflow-hidden py-6">
      {/* LEFT shadow */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-50 bg-linear-to-r from-black to-transparent z-10"></div>

      {/* RIGHT shadow */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-50 bg-linear-to-l from-black to-transparent z-10"></div>

      <div ref={trackRef} className="flex gap-4 w-max">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="bg-gray-800 text-gray-200 px-4 py-2 rounded-lg text-sm"
          >
            {skill}
          </div>
        ))}
        

        {skills.map((skill, i) => (
          <div
            key={"dup-" + i}
            className="bg-gray-800 text-gray-200 px-4 py-2  rounded-lg text-sm"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
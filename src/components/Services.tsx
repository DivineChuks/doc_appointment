import { RiPsychotherapyFill } from "react-icons/ri";
import { BiPodcast, BiSupport } from "react-icons/bi";
import { MdOutlineLocalHospital } from "react-icons/md";

const Services = () => {
  return (
    <div id="services" className="flex flex-col px-[20px] md:px-[50px] pt-[70px] pb-[120px] bg-[#F8F9FA]">
      <div className="w-full md:max-w-[650px] mx-auto mb-[20px]">
        <h2 className="text-center text-[50px] font-bold leading-[50px] md:leading-[80px] mb-[10px]">
          Our Medical Services
        </h2>
        <p className="text-center text-[20px] font-light my-[30px] md:my-[20px]">
          Your mental health is crucial for your overall wellbeing. Our mental
          health AI App is here to support you on your journey to better mental
          health.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-8 mt-[50px]">
        <div className="flex-1">
          <div className="bg-blue-500 flex items-center justify-center w-[40px] h-[40px] rounded-md p-2 mb-[10px]">
            <RiPsychotherapyFill color="white" style={{ fontSize: "40px" }}  />
          </div>
          <h2 className="font-bold text-[26px] mb-[10px]">Psychotherapy</h2>
          <p className="font-light text-[18px]">
            Our experienced team of psychologists and therapists provide
            personalized counseling and therapy services to individuals facing
            emotional, psychological, or behavioral challenges.
          </p>
        </div>
        <div className="flex-1">
          <div className="bg-blue-500 flex items-center justify-center w-[40px] h-[40px] rounded-md p-2 mb-[10px]">
            <BiPodcast color="white" size={40} />
          </div>
          <h2 className="font-bold text-[26px] mb-[10px]">
            Health Education
          </h2>
          <p className="font-light text-[18px]">
            Our educational seminars, and awareness campaigns aim to
            equip individuals, schools, and communities with
            knowledge about mental health issues, their signs and symptoms.
          </p>
        </div>
        <div className="flex-1">
          <div className="bg-blue-500 flex items-center justify-center w-[40px] h-[40px] rounded-md p-2 mb-[10px]">
            <BiSupport color="white" size={40} />
          </div>
          <h2 className="font-bold text-[26px] mb-[10px]">Support Groups</h2>
          <p className="font-light text-[18px]">
            Our support groups provide a safe and supportive space for
            individuals facing similar mental health challenges to connect and
            share their experiences.
          </p>
        </div>
        <div className="flex-1">
          <div className="bg-blue-500 flex items-center justify-center w-[40px] h-[40px] rounded-md p-2 mb-[10px]">
            <MdOutlineLocalHospital color="white" size={40} />
          </div>
          <h2 className="font-bold text-[26px] mb-[10px]">Wellness Workshop</h2>
          <p className="font-light text-[18px]">
            Our wellness workshops and self-care programs are designed to
            empower individuals with the knowledge and tools to prioritize their
            mental health and overall wellness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;

import { InlineWidget } from "react-calendly";

const Appointment = () => {
  return (
    <div className="h-screen pt-[50px] mb-[250px] w-full">
      <InlineWidget url="https://calendly.com/friendnpaldev/flutter" styles={{ height: "700px" }} />
    </div>
  );
};

export default Appointment;

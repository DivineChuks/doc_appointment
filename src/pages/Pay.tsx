import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { PaymentConfig } from "../types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Pay = () => {
  const navigate = useNavigate();
  const flutterKey = process.env.REACT_APP_FLUTTERWAVE_KEY || "";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const config: PaymentConfig = {
    public_key: flutterKey && flutterKey,
    tx_ref: Date.now().toString(),
    amount: 15000,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email,
      name,
      phone_number: phone,
    },
    customizations: {
      title: "Book Appointment",
      description: "Payment for mental health appointment",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };
  const handleFlutterPayment = useFlutterwave(config);

  const isButtonDisabled = !(name && email && phone);

  return (
    <div className="flex relative flex-col items-center justify-center w-full h-screen">
      <div className="bg-book absolute inset-0 z-10 bg-center bg-cover "></div>
      <div className="bg-white bg-opacity-80 z-20 absolute inset-0"></div>
      <div className="flex relative mx-auto px-[20px] md:px-0 w-full md:w-[20%] flex-col gap-2 z-30">
        <input
          type="text"
          placeholder="Name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          className="border w-full border-gray-400 focus:outline-none rounded-md px-2 py-2 mb-4"
        />
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-400 focus:outline-none rounded-md px-2 py-2 mb-4"
        />
         <input
          type="tel"
          placeholder="Phone"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border border-gray-400 focus:outline-none rounded-md px-2 py-2 mb-4"
        />
        <button
          disabled={isButtonDisabled}
          onClick={() => {
            handleFlutterPayment({
              callback: (res) => {
                navigate("/book");
                closePaymentModal();
              },
              onClose: () => {},
            });
          }}
          className={`${
            isButtonDisabled
              ? "opacity-80 bg-blue-500"
              : "bg-blue-500 opacity-100"
          } text-white rounded-lg px-[30px] py-[15px]`}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Pay;

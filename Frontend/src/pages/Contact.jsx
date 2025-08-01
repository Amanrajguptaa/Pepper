import React from "react";

const Contact = () => {
  return (
    <section className="px-6 md:px-0 max-w-6xl mx-auto py-10 bg-white text-black">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600 md:max-w-2xl mx-auto text-xs md:text-lg">
          Whether you have a question, feedback, or just want to say hi, we're
          always here for you. Reach out and let us know how we can make your
          experience even better.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold">New Delhi:</h3>
            <p className="text-gray-600">
              45 Connaught Place, New Delhi, Delhi 110001
            </p>
            <a
              href="mailto:newdelhi@pepper.pizza"
              className="text-gray-600 hover:underline block"
            >
              newdelhi@pepper.pizza
            </a>
            <p className="text-gray-600">+91 11 2345 6789</p>
          </div>

          <div>
            <h3 className="font-semibold">Mumbai:</h3>
            <p className="text-gray-600">
              221 Marine Drive, Churchgate, Mumbai, Maharashtra 400020
            </p>
            <a
              href="mailto:mumbai@pepper.pizza"
              className="text-gray-600 hover:underline block"
            >
              mumbai@pepper.pizza
            </a>
            <p className="text-gray-600">+91 22 9876 5432</p>
          </div>

          <div>
            <h3 className="font-semibold">Bengaluru:</h3>
            <p className="text-gray-600">
              88 MG Road, Ashok Nagar, Bengaluru, Karnataka 560001
            </p>
            <a
              href="mailto:bangalore@pepper.pizza"
              className="text-gray-600 hover:underline block"
            >
              bangalore@pepper.pizza
            </a>
            <p className="text-gray-600">+91 80 7654 3210</p>
          </div>

          <div>
            <h3 className="font-semibold">Hyderabad:</h3>
            <p className="text-gray-600">
              56 Jubilee Hills, Hyderabad, Telangana 500033
            </p>
            <a
              href="mailto:hyderabad@pepper.pizza"
              className="text-gray-600 hover:underline block"
            >
              hyderabad@pepper.pizza
            </a>
            <p className="text-gray-600">+91 40 8899 7766</p>
          </div>

          <div>
            <h3 className="font-semibold">Kolkata:</h3>
            <p className="text-gray-600">
              19 Park Street, Kolkata, West Bengal 700016
            </p>
            <a
              href="mailto:kolkata@pepper.pizza"
              className="text-gray-600 hover:underline block"
            >
              kolkata@pepper.pizza
            </a>
            <p className="text-gray-600">+91 33 4455 6677</p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm h-fit">
          <h3 className="text-lg font-semibold mb-4">Write Us a Message</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF003C]"
            />
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="youremail@email.com"
                className="flex-1 p-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF003C]"
              />
              <input
                type="text"
                placeholder="+91 00000 00000"
                className="flex-1 p-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF003C]"
              />
            </div>
            <textarea
              placeholder="Type your message"
              rows="5"
              className="w-full p-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF003C]"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#FF003C] text-white py-3 rounded-md font-semibold hover:bg-red-600 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

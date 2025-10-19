import React, { useEffect, useState } from "react";

export default function Faq() {
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/faqs/")
      .then((res) => res.json())
      .then((data) => setFaqs(data))
      .catch((err) => console.error("Failed to fetch FAQs:", err));
  }, []);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#b3e6ff] py-10 px-4">
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#03194F] mb-4">
        Frequently asked questions
      </h2>

      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={faq.id}
            className="bg-white rounded-md shadow-sm p-4 cursor-pointer"
            onClick={() => toggle(index)}
          >
            <div className="flex items-start space-x-3">
              {/* + / - Circle Icon */}
              <div
                className="w-6 h-6 flex items-center justify-center bg-orange-500 text-white rounded-full text-sm font-bold mt-1"
              >
                {openIndex === index ? "−" : "+"}
              </div>

              {/* Question & Answer */}
              <div className="flex-1">
                <p className="font-medium text-[#03194F]">{faq.question}</p>
                {openIndex === index && (
                  <p className="mt-2 text-sm text-gray-700">{faq.answer}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

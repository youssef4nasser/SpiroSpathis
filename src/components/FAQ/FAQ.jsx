import { useState } from "react";

const faqData = [
  {
    question: "What is Spiro Spathis?",
    answer:
      "Spiro Spathis Company was established in 1920 by a Greek Foreigner SpiroSpathis, he produced the First ever Soda Drink in Egypt The Lemonade Flavor.",
  },
  {
    question: "Is Spiro Spates Egyptian?",
    answer:
      "Spiro Spathis is an Egyptian carbonated soft drink, which is, which is manufactured by MYMCO (for Food And Beverage Company).",
  },
  {
    question: "What flavors does Spiro Spathis offer?",
    answer:
      "Fanta offers a variety of flavors including apple, grape, pineapple, peach, and more!",
  },
  {
    question: "What is the mission of Spiro Spathis?",
    answer:
    "Our Vision to Innovatively Brining the old and the new Together. Our Mission to Brining innovative fizzing Egyptian.",
  },
  {
    question: "Are Spiro Spathis products available in family sizes?",
    answer:
      "Yes, Spiro Spathis offers some of their products in larger, family-sized packaging.",
  },
];

export const FAQ = () => {
  const [active, setaActive] = useState(null);

  const handleClick = (index) => {
    setaActive(index === active ? null : index);
  };

  return (
    <section id="FAQ">
      <div className="container">
        <div className="max-w-2xl mx-auto mt-20 mb-28 my-4 ">
          <h1 className="text-3xl font-bold text-center pb-8">
            Frequently Asked Questions
          </h1>
          {faqData.map((item, index) => (
            <div key={index} className="mb-4 my-4 border-b border-gray-300">
              <div
                className="flex justify-between items-center cursor-pointer py-4"
                onClick={() => handleClick(index)}
              >
                <h2 className="text-xl font-semibold text-gray-800">
                  {item.question}
                </h2>
                <span>{active === index ? "-" : "+"}</span>
              </div>
              {active === index && (
                <p className="text-gray-600 mb-5">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

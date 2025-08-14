import React from "react";

export default function Pricing() {
  const plans = [
    {
      name: "Small Truck",
      price: "$120 / day",
      features: [
        "Ideal for small moves",
        "Capacity: 10 ft³",
        "Fuel included (50 miles)",
        "Insurance coverage",
      ],
    },
    {
      name: "Medium Truck",
      price: "$180 / day",
      features: [
        "Perfect for 2-3 bedroom moves",
        "Capacity: 16 ft³",
        "Fuel included (100 miles)",
        "Insurance coverage",
      ],
      popular: true,
    },
    {
      name: "Large Truck",
      price: "$250 / day",
      features: [
        "Best for large house or office moves",
        "Capacity: 26 ft³",
        "Fuel included (150 miles)",
        "Premium insurance coverage",
      ],
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-red-500 mb-6 text-center">
          Pricing Plans
        </h1>
        <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto mb-12">
          Choose the perfect truck rental plan for your needs. All prices
          include fuel and basic insurance coverage.
        </p>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-lg p-8 bg-white text-center border-t-4 ${
                plan.popular ? "border-red-500" : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <span className="bg-red-500 text-white px-3 py-1 text-sm rounded-full absolute mt-[-30px]">
                  Most Popular
                </span>
              )}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {plan.name}
              </h2>
              <p className="text-3xl font-bold text-red-500 mb-6">
                {plan.price}
              </p>
              <ul className="text-gray-600 space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i}>✅ {feature}</li>
                ))}
              </ul>
              <button className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition">
                Book Now
              </button>
            </div>
          ))}
        </div>

        {/* Extra Notes */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow text-gray-600">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            Additional Information
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Extra mileage is charged at $0.50 per mile.</li>
            <li>Drivers must be 21+ years old with a valid license.</li>
            <li>Long-term rental discounts available.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

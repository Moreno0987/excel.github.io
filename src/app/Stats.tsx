import React from "react";

interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { value: "15 Y.", label: "Experience" },
  { value: "250+", label: "Projects Completed" },
  { value: "58", label: "Happy Clients" },
];

const Stats: React.FC = () => {
  return (
    <div className="mt-10 flex justify-center md:justify-start space-x-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white shadow-md rounded-xl p-4 text-center w-28">
          <p className="text-xl font-bold text-gray-900">{stat.value}</p>
          <p className="text-gray-500 text-sm">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;

import React, { useState } from "react";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import "./ServicePage.css"; // Adjust the path as necessary

const ServicePage = () => {
  const [filter, setFilter] = useState("all");

  const handleFilterClick = (category) => {
    setFilter(category);
  };

  const categories = [
    "All",
    "Communication",
    "Web Development",
    "Design",
    "Business",
  ];

  return (
    <main className="service_page">
      <h1>Services</h1>
      <h3>
        Bringing your <span>digital</span> vision to life
      </h3>
      <ul className="filter">
        {categories.map((category) => (
          <li
            key={category}
            className={filter === category ? "activefilter" : ""}
            onClick={() => handleFilterClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
      <div className="grid_service">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </main>
  );
};

export default ServicePage;

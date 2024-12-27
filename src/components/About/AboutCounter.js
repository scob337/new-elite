import React from 'react';
import dynamic from "next/dynamic";



const statisticsData = [
  {
    icon: "flaticon-target",
    count: 2563,
    title: "Projects Completed",
  },
  {
    icon: "flaticon-target-audience",
    count: 98.9,
    decimals: 1,
    title: "Client Satisfaction",
  },
  {
    icon: "flaticon-customer-experience",
    count: 35.6,
    decimals: 1,
    title: "Years of Experience",
  },
  {
    icon: "flaticon-medal",
    count: 63,
    title: "Award-Winning Services",
  }
];
const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});
const StatisticsComponent = () => {

  return (
    <section className="statistics-area-two rel z-2">
      <div className="container">
        <div
          className="statistics-inner style-two bgs-cover text-white p-80 pb-20"
          style={{
            backgroundImage: "url(assets/images/background/statistics.jpg)",
          }}
        >
          <div className="row align-items-xl-start align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="statistics-content mb-55 wow fadeInUp delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title mb-15">Company Statistics</span>
                  <h2>Learn About Our Company Statistics</h2>
                </div>
                <a href="/about" className="read-more">
                  Learn More <i className="fas fa-long-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="row">
                {statisticsData.map((stat, index) => (
                  <div key={index} className="col-xl-3 col-small col-6">
                    <div
                      className={`counter-item counter-text-wrap wow fadeIn${
                        index % 2 === 0 ? "Down" : "Up"
                      } delay-0-3s`}
                    >
                      <i className={stat.icon} />
                      <span className="count-text plus" data-speed={3000} data-stop={stat.count}>
                        <Counter end={stat.count} decimals={stat.decimals || 0} />
                      </span>
                      <span className="counter-title">{stat.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsComponent;

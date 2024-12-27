import React from 'react';

const teamData = [
  {
    name: "Johnathan P. Bailey",
    designation: "UX/UI Designer",
    image: "assets/images/team/member1.jpg",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Mark M. Hughes",
    designation: "Web Developer",
    image: "assets/images/team/member2.jpg",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Donald B. Mitchell",
    designation: "Software Engineer",
    image: "assets/images/team/member3.jpg",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Bennie N. Bannister",
    designation: "Senior Consultant",
    image: "assets/images/team/member4.jpg",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  }
];

const TeamComponent = () => {
  return (
    <section className="team-area-two pt-130 rpt-100 pb-100 rpb-70 rel z-1">
      <div className="container">
        <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
          <span className="sub-title mb-15">Team Member</span>
          <h2>Amazing Team Members</h2>
        </div>
        <div className="row justify-content-center">
          {teamData.map((member, index) => (
            <div key={index} className="col-xl-3 col-lg-4 col-md-6">
              <div className={`team-member style-two wow fadeInUp delay-0-${index * 2 + 2}s`}>
                <img src={member.image} alt="Team" />
                <h4>{member.name}</h4>
                <span className="designation">{member.designation}</span>
                <div className="social-style-two">
                  {Object.entries(member.socialLinks).map(([platform, link]) => (
                    <a key={platform} href={link}>
                      <i className={`fab fa-${platform}`} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="team-shapes">
        <img className="shape one" src="assets/images/team/team-shape-one.png" alt="Shape" />
        <img className="shape two" src="assets/images/team/team-shape-two.png" alt="Shape" />
      </div>
    </section>
  );
};

export default TeamComponent;

import React from "react";

const AboutComponent = () => {
  return (
    <section id="about-section">
      <div className="container">
        <div className="about">
          <h1>
            Get to know me better<span>.</span>
            <span>.</span>
            <span>.</span>
          </h1>
          <div className="about-text">
            <p>
              I am Leo, and as a self-taught Web Developer with a passion for programming, personal development, and technology, I am dedicated to continually honing my skills and pushing the boundaries of what is possible. I thrive in team environments and am driven by the challenge of solving complex problems. I am always eager to connect with others in the field and learn from their experiences. With my strong work ethic and desire to create innovative solutions, I am confident in my ability to make a positive impact in the industry.
            </p>
            <p>
              <a href="https://github.com/leostefan27" target="_blank"><span>You can see some of my projects here</span><img src={`${process.env.PUBLIC_URL}/assets/images/github_profile.png`} alt="Github Profile" /></a>
            </p>
          </div>

          <div className="hobbies">
            <h2>Some of my hobbies</h2>
            <div className="hobby">
                <p>I have a passion for fitness and regularly hit the gym to maintain a healthy and active lifestyle. I believe that regular exercise not only improves physical health, but also mental well-being and overall quality of life. I am dedicated to my fitness journey and am always looking for new challenges and ways to improve my strength and endurance.</p>
                <img src={`${process.env.PUBLIC_URL}/assets/images/gym_illustration.png`} alt="Gym" />
            </div>
            <div className="hobby">
                <p>I have a deep love for the game of chess and have been playing for many years. I find the game to be both mentally stimulating and challenging. I enjoy the strategic thinking and problem-solving skills required to excel at chess. I regularly play online or with friends and family, and I am always looking for new opponents to test my skills against. I believe that chess not only improves cognitive abilities, but it also teaches patience, discipline, and sportsmanship.</p>
                <img src={`${process.env.PUBLIC_URL}/assets/images/chess_illustration.png`} alt="Chess" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;

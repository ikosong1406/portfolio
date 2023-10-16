import React from "react";
import Styles from "./page.module.css";
import "boxicons/css/boxicons.min.css";
import Image from "next/image";
import profile from "../assets/alex.jpg";
import profile2 from "../assets/alex2.jpg";
import git from "../assets/icon-git.jpg";
import js from "../assets/icon-javscript.jpg";
import next from "../assets/icon-nextjs.jpg";
import node from "../assets/icon-nodejs.jpg";
import react from "../assets/icon-react.jpg";
import sass from "../assets/icon-sass.jpg";
import fortech from "../assets/fortechub.jpg";
import rivet from "../assets/Rivet.jpg";
import routine from "../assets/routine.jpg";
import sg from "../assets/sg.png";
import user from "../assets/user.png";

function page() {
  return (
    <div className={Styles.body}>
      <div className={Styles.navbar}>
        <a href="/" className={Styles.logo}>
          &lt; A.V.I / &gt;
        </a>
        <div className={Styles.links}>
          <a href="/about"> ABOUT </a>
          <a href="/"> WORK </a>
          <a href="/"> TESTIMONIAL </a>
          <a href="/"> CONTACT </a>
        </div>
        <div className={Styles.vr}></div>
        <button className={Styles.button}> Download CV</button>
      </div>

      <div className={Styles.intro}>
        <div className={Styles.part1}>
          <h1>Hi, I’m Alexandra 👋</h1>
          <h3>
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating <br />
            exceptional digital experiences that are fast, accessible, visually
            appealing, and responsive.
          </h3>
          <div className={Styles.location}>
            <i class="bx bx-current-location" id={Styles.icon}></i>
            <p> Port-Harcourt, Nigeria</p>
          </div>
          <div className={Styles.active}>
            <i class="bx bxs-check-circle" id={Styles.icon}></i>
            <p> Available for new project</p>
          </div>
          <div className={Styles.icons}>
            <i class="bx bxl-github" id={Styles.icon}></i>
            <i class="bx bxl-linkedin-square" id={Styles.icon}></i>
            <i class="bx bxl-twitter" id={Styles.icon}></i>
          </div>
        </div>
        <div className={Styles.part2}>
          <Image src={profile} className={Styles.profile} />
          <div className={Styles.box}></div>
        </div>
      </div>

      <div className={Styles.about} id="/about">
        <h3 className={Styles.header}> About Me </h3>
        <div className={Styles.section}>
          <div className={Styles.part1}>
            <Image src={profile2} className={Styles.profile2} />
            <div className={Styles.box2}></div>
          </div>
          <div className={Styles.part2}>
            <h3 className={Styles.aboutHeader}>
              Curious about me? Here you have it:
            </h3>
            <div className={Styles.aboutText}>
              <p>
                I create compelling and innovative solutions that exceed client
                expectations. With a focus on collaboration, I work closely with
                clients to understand their vision and deliver results that
                capture the essence of their brand. I thrive on challenges and
                push the boundaries to create unique designs that make a lasting
                impact.
              </p>
              <br />
              <p>
                At the core of my work is a commitment to continuous learning
                and staying ahead of trends. I believe that keeping up with the
                latest advancements in Development is crucial for delivering
                cutting-edge solutions. By combining creativity, functionality,
                and attention to detail, I strive to create designs that not
                only meet clients' needs but also inspire and leave a lasting
                impression.
              </p>
              <br />
              <p>
                Beyond my professional life, I find inspiration through
                observations. These activities fuel my creativity and help me
                maintain a balanced perspective in my work. Thank you for
                visiting my portfolio website, and I invite you to explore my
                projects to get a glimpse into my creative journey. If you're
                interested in collaborating or have any questions, I would love
                to hear from you. Let's connect and bring your ideas to life!
              </p>
              <br />
              <p>Finally, some quick bits about me.</p>
              <br />
              <ul>
                <li>B.Sc in Computer Science</li>
                <li>Full-time freelancer</li>
                <li>Avid learner</li>
              </ul>
              <br />
              <p>
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={Styles.skills}>
        <h3 className={Styles.header}> Skills </h3>
        <p className={Styles.text}>
          The skills, tools and technologies I am really good at:
        </p>
        <div className={Styles.imgDiv}>
          <div className={Styles.img}>
            <Image src={git} className={Styles.img1} />
            <Image src={js} className={Styles.img1} />
            <Image src={sass} className={Styles.img1} />
          </div>
          <div className={Styles.img2}>
            <Image src={next} className={Styles.img1} />
            <Image src={node} className={Styles.img1} />
            <Image src={react} className={Styles.img1} />
          </div>
        </div>
      </div>

      <div className={Styles.experience}>
        <h3 className={Styles.header}> Experience </h3>
        <p className={Styles.text}>
          Here is a quick summary of my most recent experiences:
        </p>
        <div className={Styles.container}>
          <Image src={fortech} className={Styles.fortech} />
          <div className={Styles.fortechText}>
            <h3>Full Stack Developer</h3>
            <p>
              During my time as a full stack developer, I gained valuable
              experience in both front-end and back-end development. I worked on
              a variety of projects, collaborating with cross-functional teams
              to design, develop, and maintain web applications. This role
              allowed me to enhance my skills in programming languages such as
              JavaScript, HTML, CSS, and various back-end technologies. I also
              became proficient in using databases, version control systems, and
              deploying applications. Throughout my journey, I learned to
              troubleshoot issues, optimize code, and adapt to new technologies,
              making me a more versatile and effective developer.
            </p>
          </div>
          <p className={Styles.date}>Nov 2022 - Present</p>
        </div>
      </div>

      <div className={Styles.work}>
        <h3 className={Styles.header}> Work </h3>
        <p className={Styles.text}>
          Some of the noteworthy projects I have built:
        </p>
        <div className={Styles.workDisplay}>
          <Image src={rivet} className={Styles.display} />
          <div className={Styles.displayText}>
            <h3>Rivet</h3>
            <p className={Styles.description}> Social Media App</p>
            <p className={Styles.tag}>React Native</p>
            <p className={Styles.tag}>Node js</p>
            <p className={Styles.tag}>Mongo db</p>
            <a href="/">
              <i class="bx bx-link-external" id={Styles.tagIcon}></i>
            </a>
          </div>
        </div>

        <div className={Styles.workDisplay}>
          <div className={Styles.displayText1}>
            <h3>Routine Master</h3>
            <p className={Styles.description}>Task and Reminder App</p>
            <p className={Styles.tag}>React Native</p>
            <p className={Styles.tag}>Node js</p>
            <p className={Styles.tag}>Mongo db</p>
            <a href="/">
              <i class="bx bx-link-external" id={Styles.tagIcon}></i>
            </a>
          </div>
          <Image src={routine} className={Styles.display1} />
        </div>

        <div className={Styles.workDisplay}>
          <Image src={sg} className={Styles.display} />
          <div className={Styles.displayText}>
            <h3>Sg Nolly Films</h3>
            <p className={Styles.description}>
              landing page for a movie website
            </p>
            <p className={Styles.tag}>React js</p>
            <p className={Styles.tag}>css </p>
            <a href="/">
              <i class="bx bx-link-external" id={Styles.tagIcon}></i>
            </a>
          </div>
        </div>
      </div>

      <div className={Styles.testimonials}>
        <h3 className={Styles.header}> Testimonials </h3>
        <p className={Styles.text}>Nice things people have said about me:</p>
        <div className={Styles.test}>
          <div className={Styles.testContainer}>
            <Image src={fortech} className={Styles.testImage} />
            <p className={Styles.text1}>
              “Job well done! I am really impressed. He is very very good at
              what he does:) I would recommend Alexandra and will rehire in the
              future for Frontend development.”
            </p>
            <h3 className={Styles.text2}>King Rawlings</h3>
            <p className={Styles.text3}>Founder - Fortechub</p>
          </div>
          <div className={Styles.testContainer}>
            <Image src={user} className={Styles.testImage} />
            <p className={Styles.text1}>
              “ Their ability to seamlessly transition between front-end and
              back-end tasks was instrumental in the success of our projects. I
              would wholeheartedly recommend Alexandra to any team looking for a
              talented full stack developer."
            </p>
            <h3 className={Styles.text2}>Olivia Anderson</h3>
            <p className={Styles.text3}>Client</p>
          </div>
          <div className={Styles.testContainer}>
            <Image src={user} className={Styles.testImage} />
            <p className={Styles.text1}>
              "I had the privilege of collaborating with Alexandra on several
              web development initiatives, and I must say that their
              contributions were invaluable.”
            </p>
            <h3 className={Styles.text2}>Ifanyichukwu Ehigator</h3>
            <p className={Styles.text3}>Client</p>
          </div>
        </div>
      </div>

      <div className={Styles.contact}>
        <h3 className={Styles.header}> Contact </h3>
        <p className={Styles.text}>
          What’s next? Feel free to reach out to me if you're looking for <br />
          a developer, have a query, or simply want to connect.
        </p>
        <div className={Styles.contactText1}>
          <i class="bx bx-envelope"></i>
          <h4> alexandervirtuous14@gmail.com</h4>
        </div>
        <div className={Styles.contactText2}>
          <i class="bx bxs-phone"></i>
          <h4> +234 701 257 1616</h4>
        </div>
        <p className={Styles.contactText3}>
          You may also find me on these platforms!
        </p>
        <div className={Styles.contactIcons}>
          <i class="bx bxl-github" id={Styles.icon1}></i>
          <i class="bx bxl-linkedin-square" id={Styles.icon1}></i>
          <i class="bx bxl-twitter" id={Styles.icon1}></i>
        </div>
      </div>
    </div>
  );
}

export default page;

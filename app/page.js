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

function page() {
  return (
    <div className={Styles.body}>
      <div className={Styles.navbar}>
        <a href="/" className={Styles.logo}>
          &lt; A.V.I / &gt;
        </a>
        <div className={Styles.links}>
          <a href="/"> ABOUT </a>
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
            creating (and occasionally designing) <br />
            exceptional digital experiences that are fast, accessible, visually
            appealing, and responsive. <br /> Even though I have been creating
            web applications for over 7 years, I still love it as if it was
            something new.
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

      <div className={Styles.about}>
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
                I'm a passionate, self-proclaimed designer who specializes in
                full stack development (React.js & Node.js). I am very
                enthusiastic about bringing the technical and visual aspects of
                digital products to life. User experience, pixel perfect design,
                and writing clear, readable, highly performant code matters to
                me.
              </p>
              <br />
              <p>
                I began my journey as a web developer in 2015, and since then,
                I've continued to grow and evolve as a developer, taking on new
                challenges and learning the latest technologies along the way.
                Now, in my early thirties, 7 years after starting my web
                development journey, I'm building cutting-edge web applications
                using modern technologies such as Next.js, TypeScript, Nestjs,
                Tailwindcss, Supabase and much more.
              </p>
              <br />
              <p>
                I am very much a progressive thinker and enjoy working on
                products end to end, from ideation all the way to development.
              </p>
              <br />
              <p>
                When I'm not in full-on developer mode, you can find me hovering
                around on twitter or on indie hacker, witnessing the journey of
                early startups or enjoying some free time. You can follow me on
                Twitter where I share tech-related bites and build in public, or
                you can follow me on GitHub.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
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
            <p className={Styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>
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
            <h3>Rivet</h3>
            <p className={Styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>
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
            <h3>Rivet</h3>
            <p className={Styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>
            <p className={Styles.tag}>React Native</p>
            <p className={Styles.tag}>Node js</p>
            <p className={Styles.tag}>Mongo db</p>
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
              what he does:) I would recommend Sagar and will rehire in the
              future for Frontend development.”
            </p>
            <h3 className={Styles.text2}>John Doe</h3>
            <p className={Styles.text3}>Founder - xyz.com</p>
          </div>
          <div className={Styles.testContainer}>
            <Image src={fortech} className={Styles.testImage} />
            <p className={Styles.text1}>
              “Job well done! I am really impressed. He is very very good at
              what he does:) I would recommend Sagar and will rehire in the
              future for Frontend development.”
            </p>
            <h3 className={Styles.text2}>John Doe</h3>
            <p className={Styles.text3}>Founder - xyz.com</p>
          </div>
          <div className={Styles.testContainer}>
            <Image src={fortech} className={Styles.testImage} />
            <p className={Styles.text1}>
              “Job well done! I am really impressed. He is very very good at
              what he does:) I would recommend Sagar and will rehire in the
              future for Frontend development.”
            </p>
            <h3 className={Styles.text2}>John Doe</h3>
            <p className={Styles.text3}>Founder - xyz.com</p>
          </div>
        </div>
      </div>

      <div className={Styles.contact}>
        <h3 className={Styles.header}> Testimonials </h3>
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

import React from "react";
// import background.jpg from 'logo'

const Body = () => {
  return (
    <>
      <div>
        <div className="w-75 bg-white mx-auto d-flex gap-3 first-container">
          <nav className="">
            <br />
            <br />
            <br />
            <br />
            <h1 className="fw-bolder">
              Study to <br /> become a <br /> global talent
            </h1>
            <p className="">
              Learn new tech skills using world-class curriculum and top <br />{" "}
              industry experts.
            </p>
            <br />
            <button className="rounded-3">
              <span>Start Now</span>
            </button>
          </nav>

          <img src={require("./logo/sqimodel.png")} alt="logo" />
        </div>

        <br />
        <br />
      </div>

      <main className="bg-dark">
        <div className="w-75 mx-auto d-flex justify-content-end">
          <div className="w-50">
            <h1 className="fs-3 fw-bold text-white">SCICT AT A GLANCE</h1>

            <b className="text-white ">
              SQI College of ICT offers both{" "}
              <b className="text-primary">National Diploma</b> and{" "}
              <b className="text-primary">
                Professional <br />
                Certificate programmes.
              </b>
            </b>

            <br />
            <br />

            <b className="text-white">
              The diploma Certificate conforms with the standard National
              Diploma <br /> Certificate obtained in Polytechnics while the
              Professional certificate is <br /> the certificate you earn after
              taking a professional course here at SQI.
            </b>

            <br />
            <br />

            <b className="text-white">
              You can use the Diploma certificate to seek admissions into the{" "}
              <br />
              University through Direct Entry or for Higher National Diploma
              (HND). <br /> While the professional Certificate is recognized
              worldwide not as a <br /> degree but as a proof of having
              undergone professional training in the <br /> field for which the
              certificate is issued.
            </b>

            <br />
            <br />

            <div className="learnMore-butt pt-2">
              {/* <br /> */}
              <b className="text-white ">Learn More</b>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white">
        <br />
        <br />

        <main className="w-75 mx-auto mt-4">
          <h2>
            Our alumni work at world-class <br /> companies around the world
            including
          </h2>
        </main>
        <br />
        <br />

        <nav className="w-7 mx-auto ">
          <img src={require("./logo/google.png")} alt="logo" />
          <img src={require("./logo/Interswitch.png")} alt="logo" />
          <img
            src={require("./image/Andela-log-landscape-blue-400px.png")}
            alt="image"
          />
          <img src={require("./image/Microsoft_logo.png")} alt="image" />
          <img src={require("./logo/Paystack.png")} alt="logo" />
          <img src={require("./image/brewery.png")} alt="image" />
          <img src={require("./logo/Wema-Bank-Logo.png")} alt="logo" />
          <img src={require("./image/clan-logo.png")} alt="image" />
          <img src={require("./logo/edozzier.png")} alt="logo" />
          <img src={require("./image/moneymie.png")} alt="image" />
          <img src={require("./image/Nigerian_Army.png")} alt="image" />
          <img src={require("./image/aella-credit.png")} alt="image" />
        </nav>

        <br />
        <br />
      </footer>

      <header>
        <br />
        <br />
        <br />

        <main className="d-flex gap-5 ">
          <img src={require("./logo/sqi-graduate1.jpg")} alt="logo" />

          <nav>
            <h1>
              Making Africa a <br /> Tech Continent…
            </h1>

            <p>
              We focus on quality teaching, learning and <br /> training to the
              globally acceptable productivity <br />
              standard in accordance with the requirements of <br /> the
              industry, for which necessary research and <br /> preparation of
              courses are ensured to make <br /> industry-ready professionals.
            </p>

            <p>
              SQI College of ICT is closely watching the <br /> interaction of
              industry and academia, getting <br /> feedback from our industry
              partners to provide <br /> the needed training while concentrating
              to <br /> contribute industry needed professionals in a very{" "}
              <br /> flexible study structure.
            </p>
          </nav>
        </main>

        <br />
        <br />
        <br />
      </header>

      {/* <br /><br /> */}

      <div className="topCourse-con bg-white">
        <br />
        <br />
        <br />
        <nav className="w-75 mx-auto d-flex gap-5">
          <main className="">
            <div className="">
              <h1 className="f">Our Top Courses</h1>

              <p>Take a look at some of our popular courses</p>

              <small className="text-decoration-underline ">
                View all Courses{" "}
                <i
                  class="fa fa-chevron-right fw-light px-3"
                  aria-hidden="true"
                ></i>
              </small>
              <br />
              <br />
            </div>

            <nav className=" software-con">
              <img src={require("./logo/img1.webp")} alt="logo" />
              <br />
              <br />

              <h2>Software Engineering</h2>

              <p className="text-dark">
                Software Engineering is one of the most in-demand jobs across
                the globe today.
              </p>

              <p className="text-dark">
                Software Engineers are also known as programmers, developers or
                coders. They are the ones behind all the apps and software you
                use today either on your phone or computer within your browser.
                Software such as banking apps, booking apps, mailing apps (e.g
                Gmail), Chat apps (e.g WhatsApp) and other Social apps (e.g
                Twitter, Facebook) and many more are created by software
                engineers.
              </p>

              <small className="text-decoration-underline ">
                View all Courses{" "}
                <i
                  class="fa fa-chevron-right fw-light px-3"
                  aria-hidden="true"
                ></i>
              </small>
            </nav>
            <br />
            <br />

            <nav className=" ui-con">
              <img src={require("./logo/img5.jpg")} alt="logo" />
              <br />
              <br />

              <h2>UI/UX – Product Design</h2>

              <p className="text-dark">
                More than ever before individuals and businesses are relying on
                digital products and services. From online meeting tools to
                finance, from e-commerce platforms to healthcare and food apps.
                Making an intuitive digital product design is even more import
                at this time as it determines the overall experience of the
                users.
              </p>

              <p className="text-dark">
                Here, you’ll build your product design skillset from the bottom
                up with lessons, mentorship sessions, and career advice from our
                design professionals.
              </p>

              <small className="text-decoration-underline ">
                View all Courses{" "}
                <i
                  class="fa fa-chevron-right fw-light px-3"
                  aria-hidden="true"
                ></i>
              </small>
            </nav>
          </main>

          <div className="dataDig-con">
            <br />
            <br />
            <nav className="border border-dark">
              <img src={require("./logo/img2.jpg")} alt="logo" />
              <br />
              <br />

              <h2>Data Science & Analysis</h2>

              <p className="text-dark">
                The eruption of data is transforming indiviuals and businesses.
                Companies either big or small are now expecting their business
                decisions to be based on data-led insight.
              </p>

              <p className="text-dark">
                Data specialists have a tremendous impact on business strategies
                and marketing tactics because everyone now depends on data to
                formulate improved strategies for the future of their companies.
              </p>

              <small className="text-decoration-underline ">
                View all Courses{" "}
                <i
                  class="fa fa-chevron-right fw-light px-3"
                  aria-hidden="true"
                ></i>
              </small>
            </nav>
            <br />
            <br />

            <header className="border border-dark">
              <img src={require("./logo/img4.jpg")} alt="logo" />
              <br />
              <br />

              <h2>Digital Literacy</h2>

              <p className="text-dark">
                This course is designed to prepare you for success in a modern
                world full of computers—not only the traditional computers such
                as desktop and notebook PCs but also computers that you interact
                with in other places too, like your bank’s ATM or your
                employer’s computerized cash register. In this course, you will
                learn about the technologies that drive our computerized
                society, including the Internet and local area networks (LANs).
              </p>

              <p className="text-dark">
                Taking this course will help you become a digitally literate
                person—that is, someone who understands how computer technology
                fits into our modern society and knows how to navigate a variety
                of computing environments.
              </p>

              <small className="text-decoration-underline ">
                View all Courses{" "}
                <i
                  class="fa fa-chevron-right fw-light px-3"
                  aria-hidden="true"
                ></i>
              </small>
            </header>
          </div>
        </nav>
      </div>

      <main className="SQI-con">
        <br />
        <br />
        <div className="w-75 mx-auto ">
          <h1>Why study at SQI?</h1>
          <div className="w-auto  d-flex SQI">
            <nav>
              <footer>
                <i class="fa fa-laptop" aria-hidden="true"></i>
              </footer>
              <main>
                <p>Project Based Learning</p>
                <span>
                  Our courses are practical, hands- <br /> on learning. Practice
                  and apply <br /> knowledge faster with real-world <br /> Web
                  Development projects you <br />
                  can show off.
                </span>
              </main>
            </nav>

            <nav>
              <footer>
                <i class="fa fa-laptop" aria-hidden="true"></i>
              </footer>
              <main>
                <p>Project Based Learning</p>
                <span>
                  Our courses are practical, hands- <br /> on learning. Practice
                  and apply <br /> knowledge faster with real-world <br /> Web
                  Development projects you <br />
                  can show off.
                </span>
              </main>
            </nav>

            <nav>
              <footer>
                <i class="fa fa-laptop" aria-hidden="true"></i>
              </footer>
              <main>
                <p>Project Based Learning</p>
                <span>
                  Our courses are practical, hands- <br /> on learning. Practice
                  and apply <br /> knowledge faster with real-world <br /> Web
                  Development projects you <br />
                  can show off.
                </span>
              </main>
            </nav>

            <nav>
              <footer>
                <i class="fa fa-laptop" aria-hidden="true"></i>
              </footer>
              <main>
                <p>Project Based Learning</p>
                <span>
                  Our courses are practical, hands- <br /> on learning. Practice
                  and apply <br /> knowledge faster with real-world <br /> Web
                  Development projects you <br />
                  can show off.
                </span>
              </main>
            </nav>

            <nav>
              <footer>
                <i class="fa fa-laptop" aria-hidden="true"></i>
              </footer>
              <main>
                <p>Project Based Learning</p>
                <span>
                  Our courses are practical, hands- <br /> on learning. Practice
                  and apply <br /> knowledge faster with real-world <br /> Web
                  Development projects you <br />
                  can show off.
                </span>
              </main>
            </nav>

            <nav>
              <footer>
                <i class="fa fa-laptop" aria-hidden="true"></i>
              </footer>
              <main>
                <p>Project Based Learning</p>
                <span>
                  Our courses are practical, hands- <br /> on learning. Practice
                  and apply <br /> knowledge faster with real-world <br /> Web
                  Development projects you <br />
                  can show off.
                </span>
              </main>
            </nav>

            <nav>
              <footer>
                <i class="fa fa-laptop" aria-hidden="true"></i>
              </footer>
              <main>
                <p>Project Based Learning</p>
                <span>
                  Our courses are practical, hands- <br /> on learning. Practice
                  and apply <br /> knowledge faster with real-world <br /> Web
                  Development projects you <br />
                  can show off.
                </span>
              </main>
            </nav>

            <nav>
              <footer>
                <i class="fa fa-laptop" aria-hidden="true"></i>
              </footer>
              <main>
                <p>Project Based Learning</p>
                <span>
                  Our courses are practical, hands- <br /> on learning. Practice
                  and apply <br /> knowledge faster with real-world <br /> Web
                  Development projects you <br />
                  can show off.
                </span>
              </main>
            </nav>

            {/* <br /><br /><br /> */}
          </div>
        </div>
        <br />
        <br />
      </main>

      <nav className="border border-dark">
        <div className="w-75 mx-auto ">
          <h1>Testimonials</h1>
          <span>
            Testimonials Read what our current students and alumni have to say
            about their SQI <br /> experience.
          </span>
          <footer className="d-flex">
            <img src={require("./logo/pic2.png")} alt="logo" />

            <main className="w-50 carousel-con2">
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src={require("./logo/snip1.png")}
                      class="d-block w-100"
                      alt="logo"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src={require("./logo/snip2.png")}
                      class="d-block w-100"
                      alt="logo"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src={require("./logo/snip3.png")}
                      class="d-block w-100"
                      alt="logo"
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </main>
          </footer>
        </div>
      </nav>
    </>
  );
};

export default Body;

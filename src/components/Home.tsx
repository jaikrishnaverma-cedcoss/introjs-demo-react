import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import WrapperIntro from "../HOC/WrapperIntro";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <header className="blog-header py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1">
              <a className="text-muted" href="#">
                Subscribe
              </a>
            </div>
            <div
              className="col-4 text-center btn btn-link"
              onClick={() => navigate("panel")}
            >
              <p className="blog-header-logo text-dark">GO TO PANEL</p>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <a className="text-muted" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="mx-3"
                  role="img"
                  viewBox="0 0 24 24"
                  focusable="false"
                >
                  <title>Search</title>
                  <circle cx="10.5" cy="10.5" r="7.5" />
                  <path d="M21 21l-5.2-5.2" />
                </svg>
              </a>
              <a className="btn btn-sm btn-outline-secondary" href="#">
                Sign up
              </a>
            </div>
          </div>
        </header>
        <div className="nav-scroller py-1 mb-2">
          <nav className="nav d-flex justify-content-between">
            <a className="p-2 text-muted" href="#">
              World
            </a>
            <a className="p-2 text-muted" href="#">
              U.S.
            </a>
            <a className="p-2 text-muted" href="#">
              Technology
            </a>
            <a className="p-2 text-muted" href="#">
              Design
            </a>
            <a className="p-2 text-muted" href="#">
              Culture
            </a>
            <a className="p-2 text-muted" href="#">
              Business
            </a>
            <a className="p-2 text-muted" href="#">
              Politics
            </a>
            <a className="p-2 text-muted" href="#">
              Opinion
            </a>
            <a className="p-2 text-muted" href="#">
              Science
            </a>
            <a className="p-2 text-muted" href="#">
              Health
            </a>
            <a className="p-2 text-muted" href="#">
              Style
            </a>
            <a className="p-2 text-muted" href="#">
              Travel
            </a>
          </nav>
        </div>
        <div
          id="onboarding1"
          className="jumbotron p-4 p-md-5 text-white rounded bg-dark my-5"
        >
          <div className="col-md-6 px-0">
            <h1 className="display-4 font-italic">
              Title of a longer featured blog post
            </h1>
            <p className="lead my-3">
              Multiple lines of text that form the lede, informing new readers
              quickly and efficiently about what’s most interesting in this
              post’s contents.
            </p>
            <p className="lead mb-0">
              <a href="#" className="text-white font-weight-bold">
                Continue reading...
              </a>
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-6">
            <div
              id="onboarding2"
              className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
            >
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">
                  World
                </strong>
                <h3 className="mb-0">Featured post</h3>
                <div className="mb-1 text-muted">Nov 12</div>
                <p className="card-text mb-auto">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <a href="#" className="stretched-link">
                  Continue reading
                </a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <svg
                  className="bd-placeholder-img"
                  width={200}
                  height={250}
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              id="onboarding3"
              className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
            >
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-success">
                  Design
                </strong>
                <h3 className="mb-0">Post title</h3>
                <div className="mb-1 text-muted">Nov 11</div>
                <p className="mb-auto">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <a href="#" className="stretched-link">
                  Continue reading
                </a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <svg
                  className="bd-placeholder-img"
                  width={200}
                  height={250}
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main role="main" className="container">
        <div className="row">
          <div id="onboarding4" className="col-md-8 blog-main">
            <h3 className="pb-4 mb-4 font-italic border-bottom">
              From the Firehose
            </h3>
            <div className="blog-post">
              <h2 className="blog-post-title">Sample blog post</h2>
              <p className="blog-post-meta">
                January 1, 2014 by <a href="#">Mark</a>
              </p>
              <p>
                This blog post shows a few different types of content that’s
                supported and styled with Bootstrap. Basic typography, images,
                and code are all supported.
              </p>
              <hr />
              <p>
                Cum sociis natoque penatibus et magnis{" "}
                <a href="#">dis parturient montes</a>, nascetur ridiculus mus.
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum. Sed posuere consectetur est at lobortis.
                Cras mattis consectetur purus sit amet fermentum.
              </p>
              <blockquote>
                <p>
                  Curabitur blandit tempus porttitor.{" "}
                  <strong>Nullam quis risus eget urna mollis</strong> ornare vel
                  eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
                </p>
              </blockquote>
              <p>
                Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras
                mattis consectetur purus sit amet fermentum. Aenean lacinia
                bibendum nulla sed consectetur.
              </p>
              <h2>Heading</h2>
              <p>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor. Duis mollis, est non commodo luctus, nisi erat porttitor
                ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta
                ac consectetur ac, vestibulum at eros.
              </p>
              <h3>Sub-heading</h3>
              <p>
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus.
              </p>
              <pre>
                <code>Example code block</code>
              </pre>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem
                malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus
                commodo, tortor mauris condimentum nibh, ut fermentum massa.
              </p>
              <h3>Sub-heading</h3>
              <p>
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Aenean lacinia bibendum nulla sed
                consectetur. Etiam porta sem malesuada magna mollis euismod.
                Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus.
              </p>
              <ul>
                <li>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et.
                </li>
                <li>Donec id elit non mi porta gravida at eget metus.</li>
                <li>Nulla vitae elit libero, a pharetra augue.</li>
              </ul>
              <p>
                Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae
                elit libero, a pharetra augue.
              </p>
              <ol>
                <li>Vestibulum id ligula porta felis euismod semper.</li>
                <li>
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus.
                </li>
                <li>
                  Maecenas sed diam eget risus varius blandit sit amet non
                  magna.
                </li>
              </ol>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Sed posuere
                consectetur est at lobortis.
              </p>
            </div>
            {/* /.blog-post */}
            <div className="blog-post">
              <h2 className="blog-post-title">Another blog post</h2>
              <p className="blog-post-meta">
                December 23, 2013 by <a href="#">Jacob</a>
              </p>
              <p>
                Cum sociis natoque penatibus et magnis{" "}
                <a href="#">dis parturient montes</a>, nascetur ridiculus mus.
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum. Sed posuere consectetur est at lobortis.
                Cras mattis consectetur purus sit amet fermentum.
              </p>
              <blockquote>
                <p>
                  Curabitur blandit tempus porttitor.{" "}
                  <strong>Nullam quis risus eget urna mollis</strong> ornare vel
                  eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
                </p>
              </blockquote>
              <p>
                Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras
                mattis consectetur purus sit amet fermentum. Aenean lacinia
                bibendum nulla sed consectetur.
              </p>
              <p>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor. Duis mollis, est non commodo luctus, nisi erat porttitor
                ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta
                ac consectetur ac, vestibulum at eros.
              </p>
            </div>
            {/* /.blog-post */}
            <div className="blog-post">
              <h2 className="blog-post-title">New feature</h2>
              <p className="blog-post-meta">
                December 14, 2013 by <a href="#">Chris</a>
              </p>
              <p>
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Aenean lacinia bibendum nulla sed
                consectetur. Etiam porta sem malesuada magna mollis euismod.
                Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus.
              </p>
              <ul>
                <li>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et.
                </li>
                <li>Donec id elit non mi porta gravida at eget metus.</li>
                <li>Nulla vitae elit libero, a pharetra augue.</li>
              </ul>
              <p>
                Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras
                mattis consectetur purus sit amet fermentum. Aenean lacinia
                bibendum nulla sed consectetur.
              </p>
              <p>
                Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae
                elit libero, a pharetra augue.
              </p>
            </div>
            {/* /.blog-post */}
            <nav className="blog-pagination">
              <a className="btn btn-outline-primary" href="#">
                Older
              </a>
              <a
                className="btn btn-outline-secondary disabled"
                href="#"
                tabIndex={-1}
                aria-disabled="true"
              >
                Newer
              </a>
            </nav>
          </div>
          {/* /.blog-main */}
          <aside className="col-md-4 blog-sidebar">
            <div id="onboarding5" className="p-4 mb-3 bg-light rounded">
              <h4 className="font-italic">About</h4>
              <p className="mb-0">
                Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras
                mattis consectetur purus sit amet fermentum. Aenean lacinia
                bibendum nulla sed consectetur.
              </p>
            </div>
            <div className="p-4">
              <h4 className="font-italic">Archives</h4>
              <ol className="list-unstyled mb-0">
                <li>
                  <a href="#">March 2014</a>
                </li>
                <li>
                  <a href="#">February 2014</a>
                </li>
                <li>
                  <a href="#">January 2014</a>
                </li>
                <li>
                  <a href="#">December 2013</a>
                </li>
                <li>
                  <a href="#">November 2013</a>
                </li>
                <li>
                  <a href="#">October 2013</a>
                </li>
                <li>
                  <a href="#">September 2013</a>
                </li>
                <li>
                  <a href="#">August 2013</a>
                </li>
                <li>
                  <a href="#">July 2013</a>
                </li>
                <li>
                  <a href="#">June 2013</a>
                </li>
                <li>
                  <a href="#">May 2013</a>
                </li>
                <li>
                  <a href="#">April 2013</a>
                </li>
              </ol>
            </div>
            <div className="p-4">
              <h4 className="font-italic">Elsewhere</h4>
              <ol className="list-unstyled">
                <li>
                  <a href="#">GitHub</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
              </ol>
            </div>
          </aside>
          {/* /.blog-sidebar */}
        </div>
        {/* /.row */}
      </main>
      {/* /.container */}
      <footer className="blog-footer bg-warning mt-5 d-flex w-100 justify-content-center p-4">
        <p>
          Blog template built for{" "}
          <a href="https://getbootstrap.com/">Bootstrap</a> by{" "}
          <a href="https://twitter.com/mdo">@mdo</a>.
        </p>
        <p>
          <a href="#">Back to top</a>
        </p>
      </footer>
      <WrapperIntro
        steps={[
          {
            intro: "Lets Start",
            position: "middle-middle",
            tooltipClass: "myTooltipClass",
            highlightClass: "myHighlightClass",
          },
          {
            element: "#onboarding1",
            intro: "test 1",
            position: "right",
            tooltipClass: "myTooltipClass",
            highlightClass: "myHighlightClass",
          },
          {
            element: "#onboarding2",
            intro: "test 2",
            position: "right",
          },
          {
            element: "#onboarding3",
            intro: "test 3",
            position: "right",
          },
          // {
          //   element: "#onboarding4",
          //   intro: "test 4",
          //   position: "right",
          // },
          // {
          //   element: "#onboarding5",
          //   intro: "test 5",
          //   position: "right",
          // }
        ]}
        onComplete={()=>{
          navigate('panel')
        }}
      />
    </>
  );
};

export default Home;

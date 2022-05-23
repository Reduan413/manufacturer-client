import React from "react";

const Banner = () => {
  return (
    <div class="hero h-64 bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
          class="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 class="text-5xl font-bold">Box Office News!</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

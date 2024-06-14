import React from "react";
import TestimonialSlider from "./TestimonialsSlider";
import Partner from "../../components/Partner";

const HomePage = () => {
  return (
    <>
      <section class="bg-center bg-no-repeat bg-[url('https://hypeabis.id/assets/content/202401201711261705745486_crop.jpg')] bg-gray-700 bg-blend-multiply">
        <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            CINEMAKU
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="#"
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get started
              <svg
                class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href="#"
              class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section className="container max-w-screen-lg mx-auto min-w-min">
        <div className="mt-16 mb-8">
          <h1 className="text-4xl font-bold mb-4">Sedang Tayang</h1>
          <button
            type="button"
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Semua
          </button>
          <button
            type="button"
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            XXI
          </button>
          <button
            type="button"
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            CGV
          </button>
          <button
            type="button"
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Cinepolis
          </button>
        </div>

        <div className="flex flex-wrap gap-4 justify-center overflow-x-auto">
          <div className="max-w-60 bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/108/MTA-148697181/no-brand_no-brand_full02.jpg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Shang-Chi Legend of The Ten Rings
                </h5>
              </a>
            </div>
          </div>

          <div className="max-w-60 bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/108/MTA-148697181/no-brand_no-brand_full02.jpg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Shang-Chi Legend of The Ten Rings
                </h5>
              </a>
            </div>
          </div>

          <div className="max-w-60 bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/108/MTA-148697181/no-brand_no-brand_full02.jpg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Shang-Chi Legend of The Ten Rings
                </h5>
              </a>
            </div>
          </div>

          <div className="max-w-60 bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/108/MTA-148697181/no-brand_no-brand_full02.jpg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Shang-Chi Legend of The Ten Rings
                </h5>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container max-w-screen-lg mx-auto min-w-min">
        <div className="mt-16 mb-8">
          <h1 className="text-4xl font-bold mb-4">Akan Tayang</h1>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <div className="max-w-60 bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/108/MTA-148697181/no-brand_no-brand_full02.jpg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Shang-Chi Legend of The Ten Rings
                </h5>
              </a>
            </div>
          </div>

          <div className="max-w-60 bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/108/MTA-148697181/no-brand_no-brand_full02.jpg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Shang-Chi Legend of The Ten Rings
                </h5>
              </a>
            </div>
          </div>

          <div className="max-w-60 bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/108/MTA-148697181/no-brand_no-brand_full02.jpg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Shang-Chi Legend of The Ten Rings
                </h5>
              </a>
            </div>
          </div>

          <div className="max-w-60 bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/108/MTA-148697181/no-brand_no-brand_full02.jpg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Shang-Chi Legend of The Ten Rings
                </h5>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Partner />

      <TestimonialSlider />
    </>
  );
};

export default HomePage;

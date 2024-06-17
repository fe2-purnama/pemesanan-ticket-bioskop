import React from "react";

const PaymentPage = () => {
  return (
    <div className="mt-24 container max-w-screen-lg mx-auto min-w-min ">
      <section className="mb-8 border rounded-lg p-9 bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <a href="#">
            <img
              className="rounded-lg max-w-60"
              src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/108/MTA-148697181/no-brand_no-brand_full02.jpg"
              alt=""
            />
          </a>
          <div className="col-span-2">
            <p>CGV</p>
            <h3 className="text-3xl font-bold">Judul Film yang bagus</h3>
            <div className="flex items-center">
              <svg
                class="w-6 h-6 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <div className="ms-1 text-lg font-medium text-gray-500 dark:text-gray-400">
                <p>4.95</p>
              </div>
            </div>
            <p>GRAND XXI SOLO #5</p>
            <p>Selasa, 4 Mei 2024, 19:05</p>
            <div className="my-3">
              <hr />
              <p className="my-2">Nomor Order : 1234567890</p>
              <hr />
            </div>
            <div className="flex justify-between">
              <div>
                <p>3 Tiket</p>
                <p>Kursi Regular</p>
                <p>Biaya Layanan</p>
              </div>
              <div>
                <p>A1, A2, A3</p>
                <p>Rp.30000 x 3</p>
                <p>Rp.2000 x 3</p>
              </div>
            </div>
            <div className="mt-2">
              <button
                type="button"
                class="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2"
              >
                <svg
                  class="w-4 h-4 me-2 -ms-1"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="paypal"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"
                  ></path>
                </svg>
                Gunakan voucher kamu
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="text-right">
        <button
          type="button"
          class="text-gray-900 w-40 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Bayar Sekarang
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;

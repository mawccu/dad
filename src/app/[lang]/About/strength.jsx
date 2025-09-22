// strength.jsx
'use client'
import React from 'react';
import { Star, Shield, Cog } from 'lucide-react';

export default function StrengthSection({ translation }) {
  return (
    <>
      {/* Content */}
      <div
        className="
          flex flex-col items-start
          py-10 px-4 sm:py-16 sm:px-8
          text-black bg-white
          lg:flex-row lg:justify-between
          lg:items-start lg:py-10 lg:px-10 xl:px-16 xl:px-30 2xl:px-20 2xl:py-40
        "
      >
        {/* Left Text */}
        <div className="w-full lg:max-w-[25ch] xl:max-w-lg 2xl:max-w-xl">
          <h1
            className="
              text-2xl sm:text-3xl
              lg:text-3xl xl:text-4xl 2xl:text-5xl
              mb-6 sm:mb-8 lg:mb-12
              font-400 tracking-[-0.04em]
            "
          >
            {translation.title}
          </h1>

          <p className="text-base sm:text-lg lg:text-md xl:text-lg 2xl:text-xl font-450 leading-relaxed">
            {translation.intro}
          </p>
        </div>

        {/* Right Features */}
        <div
          className="
            w-full lg:w-[55%] 2xl:w-[55%]
            flex flex-col
            space-y-8 sm:space-y-10 lg:space-y-6 xl:space-y-8 2xl:space-y-12
            mt-10 lg:mt-0
          "
        >
          {/* Item 1 */}
          <div>
            <hr className="border-t border-gray-300 mb-4 sm:mb-5 lg:mb-6 w-full" />
            <div className="flex items-start gap-4 sm:gap-6">
              {/* Icon bubble */}
              <div
                className="
                  w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20
                  flex items-center justify-center rounded-full bg-white
                "
              >
                <Star className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-gray-800" />
              </div>

              <div>
                <h2
                  className="
                    text-xl sm:text-2xl
                    lg:text-3xl xl:text-4xl 2xl:text-4.5xl
                    font-400 mb-4 sm:mb-6 lg:mb-6 xl:mb-8 tracking-[-0.04em]
                  "
                >
                  {translation.items[0].title}
                </h2>

                <p className="text-gray-500 text-base sm:text-lg lg:text-base xl:text-xl 2xl:text-xl leading-tight">
                  {translation.items[0].description}
                </p>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div>
            <hr className="border-t border-gray-300 mb-4 sm:mb-5 lg:mb-6 w-full" />
            <div className="flex items-start gap-4 sm:gap-6">
              <div
                className="
                  w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20
                  flex items-center justify-center rounded-full bg-white
                "
              >
                <Shield className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-gray-800" />
              </div>

              <div>
                <h2
                  className="
                    text-xl sm:text-2xl
                    lg:text-3xl xl:text-4xl 2xl:text-4.5xl
                    font-400 mb-4 sm:mb-6 lg:mb-6 xl:mb-8 tracking-[-0.04em]
                  "
                >
                  {translation.items[1].title}
                </h2>
                <p className="text-gray-500 text-base sm:text-lg lg:text-base xl:text-xl 2xl:text-xl leading-tight">
                  {translation.items[1].description}
                </p>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div>
            <hr className="border-t border-gray-300 mb-4 sm:mb-5 lg:mb-6 w-full" />
            <div className="flex items-start gap-4 sm:gap-6">
              <div
                className="
                  w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20
                  flex items-center justify-center rounded-full bg-white
                "
              >
                <Cog className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-gray-800" />
              </div>

              <div>
                <h2
                  className="
                    text-xl sm:text-2xl
                    lg:text-3xl xl:text-4xl 2xl:text-4.5xl
                    font-400 mb-4 sm:mb-6 lg:mb-6 xl:mb-8 tracking-[-0.04em]
                  "
                >
                  {translation.items[2].title}
                </h2>
                <p className="text-gray-500 text-base sm:text-lg lg:text-base xl:text-xl 2xl:text-xl leading-tight">
                  {translation.items[2].description}
                </p>

              </div>
            </div>
            <hr className="border-t border-gray-300 my-4 sm:my-6 lg:my-8 xl:my-10 2xl:my-12 w-full" />

          </div>
        </div>
        {/* end right features */}
      </div>
      {/* end content */}
    </>
  );
}

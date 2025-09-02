//strength.jsx
'use client'
import React from 'react';
import { Star, Shield, Cog } from 'lucide-react';

export default function StrengthSection() {
  return (
    <>
      {/* Content */}
      <div className="flex min-h-screen justify-between items-start py-40 px-20 text-black bg-white">
        {/* Left Text */}
        <div className="max-w-md">
          <h1 className="text-5xl mb-12 font-400 tracking-[-0.04em]">Why New Look??</h1>
          <p className="text-lg font-450 leading-relaxed">
            Our experienced team consists of highly qualified professionals who are characterized by their passion for perfection and their attention to detail.
          </p>
        </div>

        {/* Right Features */}
        <div className="flex flex-col space-y-12 w-[55%] ">
          {/* Item 1 */}
          <div>
            <hr className="border-t border-gray-300 mb-6 w-full" />
            <div className="flex items-start space-x-6">
              <div className="w-20 h-20 flex items-center pr-10 justify-center rounded-full bg-white">
                <Star className="w-8 h-8 text-gray-800" />
              </div>
              <div>
                <h2 className="text-4.5xl font-400 mb-8 tracking-[-0.04em]">Quality</h2>
                <p className="text-gray-500 text-xl">
                  We use only the best materials and state-of-the-art techniques to provide you with long-lasting and aesthetically pleasing results.
                </p>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div>
            <hr className="border-t border-gray-300 mb-6 w-full" />
            <div className="flex items-start space-x-6">
              <div className="w-20 h-20 flex items-center pr-10 justify-center rounded-full bg-white">
                <Shield className="w-8 h-8 text-gray-800" />
              </div>
              <div>
                <h2 className="text-4.5xl font-400 mb-8 tracking-[-0.04em]">Reliability</h2>
                <p className="text-gray-500 text-xl">
                  You can rely on us. We keep our promises, meet deadlines, and deliver work crafted to the highest standards. Every project passes a strict QA process, and we stand behind our work with timely support and rectification if anything falls short of expectations.
                </p>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div>
            <hr className="border-t border-gray-300 mb-6 w-full" />
            <div className="flex items-start space-x-6">
              <div className="w-20 h-20 flex items-center pr-10 justify-center rounded-full bg-white">
                <Cog className="w-8 h-8 text-gray-800" />
              </div>
              <div>
                <h2 className="text-4.5xl font-400 mb-8 tracking-[-0.04em]">Experience</h2>
                <p className="text-gray-500 text-xl">
                  With over 25 years of experience and a deep understanding of the industry, we are ideally equipped to successfully implement your projects.
                </p>
              </div>
            </div>
          </div>
        </div> {/* end right features */}
      </div> {/* end content */}

      
    </>
  );
}

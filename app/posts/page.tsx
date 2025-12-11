"use client";

import Image from "next/image";

export default function SinglePostPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] px-4 md:px-8 py-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">

        {/* LEFT CONTENT */}
        <div className="w-full lg:w-8/12 flex flex-col gap-6">

          {/* Breadcrumb */}
          <p className="text-sm text-gray-600">
            Home / Blog Posts 
          </p>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
            Beautifully Designed Single Blog Post<br />Template #2 for Divi
          </h1>

          {/* White Card */}
          <div className="bg-white shadow-md rounded-md p-6 md:p-8">
            <p className="text-gray-600 mb-4">
              Aut sed dolores est et voluptatibus ...
            </p>

            {/* SAMPLE IMAGE */}
            <div className="w-full mb-6">
              <Image
                src="/image.avif"
                alt="Post Image"
                width={800}
                height={400}
                className="rounded-md object-cover"
              />
            </div>

            <p className="text-gray-600 mb-4">
              Doloribus eum et nihil perspiciatis ...
            </p>

            {/* Bullet List */}
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Reprehendiate est occaecati ratione</li>
              <li>tempora eam amet rerum doloremque.</li>
              <li>Voluptatem qui autem magnam...</li>
              <li>Minus quo commodi consequuntur eius.</li>
            </ul>

            <p className="text-gray-600 mt-6">
              Deluctus asperiores ipsa sint ...
            </p>
          </div>

          {/* About Author */}
          <div className="bg-white shadow-md rounded-md p-6 md:p-8">
            <div className="flex gap-4">
              <Image
                src="/myImage.jpg"
                alt="Author"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <p className="text-gray-800 font-semibold">About Tristan Owen</p>
                <p className="text-gray-600 text-sm">
                  I'm a web developer currently in Cape Town ...
                </p>
              </div>
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="bg-white shadow-md rounded-md p-6 md:p-8">
            <h2 className="font-bold text-gray-800 mb-1">Stay Updated</h2>
            <p className="text-gray-600 text-sm mb-4">
              We'll send updates everytime a new tutorial is published.
            </p>

            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 px-3 py-2 rounded"
              />
              <button className="bg-blue-900 px-6 py-2 text-white rounded">
                SUBSCRIBE
              </button>
            </div>
          </div>

          {/* Comments */}
          <div className="bg-white shadow-md rounded-md p-6 md:p-8">
            <h3 className="font-bold text-gray-800 mb-4">0 Comments</h3>

            <textarea
              className="w-full h-32 border border-gray-300 rounded p-3"
              placeholder="Write a comment..."
            ></textarea>

            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
              SUBMIT COMMENT
            </button>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="w-full lg:w-4/12 flex flex-col gap-6">

          {/* Author */}
          <div className="bg-white shadow-md rounded-md p-6">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/myImage.jpg"
                width={70}
                height={70}
                alt="Author"
                className="rounded-full"
              />
              <p className="font-semibold text-gray-800 mt-3">Tristan Owen</p>
              <p className="text-gray-500 text-sm">on February 17, 2020</p>
            </div>
          </div>

          {/* Featured Posts */}
          <div className="bg-white shadow-md rounded-md p-6">
            <h3 className="font-semibold text-gray-700 mb-4">FEATURED POSTS</h3>

            <div className="space-y-4">
              <p className="text-blue-900 hover:underline cursor-pointer">
                Beautifully Designed Single Blog Post Template #3 for Divi
              </p>
              <p className="text-blue-900 hover:underline cursor-pointer">
                Quidem dolorem et dignissimos
              </p>
              <p className="text-blue-900 hover:underline cursor-pointer">
                Exercitationem laboriosam officiis et ...
              </p>
            </div>
          </div>

          {/* Sidebar Lists */}
          <div className="bg-white shadow-md rounded-md p-6">
            <h3 className="font-semibold text-gray-700 mb-3">RECENT POSTS</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>Beautifully Designed Single Blog Post Template #3 for Divi</li>
              <li>Quidem dolorem et dignissimos</li>
            </ul>
          </div>

        </div>
      </div>
    </main>
  );
}

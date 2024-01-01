// ./components/Posts.tsx

import { urlForImage } from "@/sanity/lib/image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

import { SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

export default function Posts({ posts }: { posts: SanityDocument[] }) {
  return (
    <main className="">
      <hr className="border-[#A7CECB] mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {posts.map((post) => (
          <Link
          href={post.slug.current}
            key={post._id}
            className="flex flex-col group cursor-pointer"
          >
            <div
              className=" relative w-full h-80 drop-shadow-xl 
              group-hover:scale-105 transition-transform duration-200 ease-out"
            >
              <Image
                className="-z-10 object-cover object-left lg:object-center"
                src={urlForImage(post.mainImage)}
                alt={post.author.name}
                fill
              />
              <div
                className="absolute bottom-0 w-full z-10
            bg-opacity-20 bg-black backdrop-blur-lg rounded
            drop-shadow-lg text-[#A7CECB] p-5 flex justify-between"
              >
                <div>
                  <p className="font-bold text-[#A7CECB]">{post.title}</p>

                  <p>
                    {new Date(post._createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>

                <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                  {post.categories.map((category: any) => (
                    <div
                    key={category.title}
                      className="text-center  text-[#A7CECB] px-3 py-1 
                    rounded-full text-sm font-semibold ring-2 ring-[#A7CECB]"
                    >
                      <p>{category.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 flex-1">
                <p className="underline text-lg font-bold text-[#A7CECB]">
                  {post.title}
                </p>
                <p className="line-clamp-2 text-[#A7CECB] font-semibold">
                  {post.description}
                </p>
            </div>

            <p className="mt-5 text-[#907AD6] font-bold flex items-center group-hover:underline">
              Read Post

              <ArrowRightIcon className="ml-2 text-[#907AD6] rotate-45 h-4 w-4"/>
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}

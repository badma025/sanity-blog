// ./components/Post.tsx

import Image from "next/image";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "next-sanity";
import { RichTextComponents } from "./RichTextComponents";

import { dataset, projectId } from "@/sanity/env";
import { urlForImage } from "@/sanity/lib/image";

const builder = imageUrlBuilder({ projectId, dataset });

export default function Post({ post }: { post: SanityDocument }) {

  return (
    <article className="px-10 pb-28 text-[#A7CECB]">
      <section className="space-y-2 text-[#A7CECB]">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full opacity-10
          blur-sm p-10">
          <Image
          className="object-cover object-center mx-auto"
          src={builder.image(post.mainImage).url()}
          fill
          alt={post.mainImage.alt || ''}
        />
          </div>
          <section className="p-5 bg-black bg-opacity-70 w-full">
            <div className="flex flex-col md:flex-row justify-between space-x-4">
              <div className="space-y-4">
                <h1 className="text-4xl font-extrabold">{post.title}</h1>
                <p>{new Date(post._createdAt).toLocaleString("en-US",{
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}</p>
              </div>
              <div className="flex items-center space-x-2">
               {post.author.image && <Image
                  className="rounded-full"
                  alt=""
                  height={40}
                  width={40}
                  src={urlForImage(post.author.image)}/>
               }
                  <div className="w-64 text-[#A7CECB]">
                    <h3 className="text-lg font-bold">{post.author.name}</h3>
                    <div>{/*todo bio*/}</div>
                  </div>
              </div>
            </div>

            <div>
              <h2 className="italic pt-10">{post.description}</h2>
              <div className="flex items-center justify-end mt-auto space-x-2">
                {post.categories.map((category:any) => (
                  <p className="text-[#A7CECB] px-3 py-1 rounded-full
                  text-sm font-semibold mt-4 ring-2 ring-[#A7CECB]" key={category._id}>
                    {category.title}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
      {/* @ts-ignore */}
      <PortableText value={post.body} components={RichTextComponents}/>
    </article>
  );
}

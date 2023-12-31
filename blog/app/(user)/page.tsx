// ./app/page.tsx

import { SanityDocument } from "next-sanity";

import Posts from "@/components/Posts";
import { loadQuery } from "@/sanity/lib/store";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { draftMode } from "next/headers";
import PostsPreview from "@/components/PostPreview";

export default async function Page() {
  const initial = await loadQuery<SanityDocument[]>(POSTS_QUERY, {}, {
    perspective: draftMode().isEnabled ? "previewDrafts" : "published",
  });

  return draftMode().isEnabled ? (
    <PostsPreview initial={initial} />
  ) : (
    <Posts posts={initial.data} />
  )
}
import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

export default async function ImagePage({ params }) {
  const newsSlug = params.slug;
  const newsItem = await getNewsItem(newsSlug);

  // trigger the closest not found page
  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}

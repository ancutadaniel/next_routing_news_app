import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

export default async function LatesNewsPage() {
  const latestNews = await getLatestNews();

  return (
    <>
      <h2>Lates News</h2>
      <NewsList news={latestNews} />
    </>
  );
}

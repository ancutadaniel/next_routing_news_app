import { Suspense } from "react";
import FilteredHeader from "@/components/filtered-header";
import FilteredNews from "@/components/filtered-news";
import LoadingFallback from "@/components/loading-fallback";

export default async function FilterNewsPage({ params }) {
  const filter = params.filter;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  return (
    <>
      <Suspense fallback={<LoadingFallback type="filter" />}>
        <FilteredHeader year={selectedYear} month={selectedMonth} />
      </Suspense>
      <Suspense fallback={<LoadingFallback type="news" />}>
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
}

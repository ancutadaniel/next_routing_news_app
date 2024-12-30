import Link from "next/link";

export default function NewsNotFound() {
  return (
    <div id="error">
      <h2>News Not Found</h2>
      <p>We could not find the news you are looking for.</p>
      <p>
        <Link href="/news">Return to News</Link>
      </p>
    </div>
  );
}

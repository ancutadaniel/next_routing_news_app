"use client";

import Link from "next/link";

export default function FilterError({ error }) {
  return (
    <div id="error">
      <h2>An error occurred</h2>
      <p>{error.message}</p>
      <p>
        <Link
          href="/archive"
          style={{ color: "white", textDecoration: "none" }}
        >
          Return to archive
        </Link>
      </p>
    </div>
  );
}

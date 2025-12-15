"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";

export default function Sidebar({ category, data }: any) {
  const { slug } = useParams();
  const [open, setOpen] = useState<string | null>(data.sidebar[0]?.title);

  return (
    <aside className="w-72 border-r border-white/10 px-4 py-6">
      <h2 className="text-sm text-white/60 mb-4">{data.title}</h2>

      {data.sidebar.map((section: any) => (
        <div key={section.title} className="mb-2">
          <button
            onClick={() =>
              setOpen(open === section.title ? null : section.title)
            }
            className="w-full text-left px-3 py-2 rounded-md hover:bg-white/10"
          >
            {section.title}
          </button>

          {open === section.title && (
            <div className="ml-3 mt-1 space-y-1">
              {section.children.map((item: any) => (
                <Link
                  key={item.slug}
                  href={`/academy/${category}/${item.slug}`}
                  className={clsx(
                    "block px-3 py-2 rounded-md text-sm transition",
                    slug === item.slug
                      ? "bg-blue-600/30 text-blue-400"
                      : "text-white/70 hover:bg-white/10"
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
}

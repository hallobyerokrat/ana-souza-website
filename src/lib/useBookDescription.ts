"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { Locale } from "@/lib/i18n";

export function useBookDescription(slug: string, locale: Locale, fallback: string[]) {
  const [dbText, setDbText] = useState<string | null>(null);

  useEffect(() => {
    setDbText(null);
    const supabase = createClient();
    supabase
      .from("book_descriptions")
      .select("description_pt, description_de")
      .eq("slug", slug)
      .maybeSingle()
      .then(({ data }) => {
        const raw = locale === "pt" ? data?.description_pt : data?.description_de;
        setDbText(raw?.trim() || null);
      });
  }, [slug, locale]);

  if (dbText) {
    return dbText.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
  }
  return fallback;
}

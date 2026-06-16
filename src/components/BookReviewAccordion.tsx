"use client";

import { useState, useEffect } from "react";
import { useT } from "@/lib/i18n";
import { createClient } from "@/lib/supabase/client";

type Review = {
  id: string;
  name: string;
  stars: number;
  comment: string;
  date: string;
};

type DbReview = {
  id: string;
  name: string | null;
  stars: number;
  comment: string;
  created_at: string;
};

export default function BookReviewAccordion({
  bookId,
  seedReviews = [],
}: {
  bookId: string;
  seedReviews?: Review[];
}) {
  const { locale } = useT();
  const [open, setOpen] = useState(false);
  const [reviews, setReviews] = useState<Review[]>(seedReviews);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", stars: 0, comment: "" });
  const [submitted, setSubmitted] = useState(false);
  const supabase = createClient();

  function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString(
      locale === "de" ? "de-DE" : "pt-BR",
      { year: "numeric", month: "long" }
    );
  }

  function dbToReview(r: DbReview): Review {
    return {
      id: r.id,
      name: r.name?.trim() || (locale === "de" ? "Anonym" : "Anônimo"),
      stars: r.stars,
      comment: r.comment,
      date: formatDate(r.created_at),
    };
  }

  useEffect(() => {
    supabase
      .from("reviews")
      .select("*")
      .eq("book_id", bookId)
      .order("created_at", { ascending: false })
      .then(({ data, error }) => {
        if (!error && data && data.length > 0) {
          setReviews((data as DbReview[]).map(dbToReview));
        }
      });
  }, [bookId]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = async () => {
    if (!form.stars || !form.comment.trim()) return;
    const name = form.name.trim() || null;
    const { data, error } = await supabase
      .from("reviews")
      .insert({ book_id: bookId, name, stars: form.stars, comment: form.comment.trim() })
      .select()
      .single();

    if (!error && data) {
      const newReview = dbToReview(data as DbReview);
      setReviews((prev) => {
        const withoutSeeds = prev.filter(r => !seedReviews.find(s => s.id === r.id));
        return [newReview, ...withoutSeeds];
      });
    }
    setForm({ name: "", stars: 0, comment: "" });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const avg =
    reviews.length > 0
      ? (reviews.reduce((s, r) => s + r.stars, 0) / reviews.length).toFixed(1)
      : null;

  const L = {
    toggle:   locale === "de" ? "Bewertungen" : "Avaliações",
    name:     locale === "de" ? "Ihr Name (optional)" : "Seu nome (opcional)",
    comment:  locale === "de" ? "Ihre Bewertung…" : "Sua avaliação…",
    submit:   locale === "de" ? "Senden" : "Enviar",
    thanks:   locale === "de" ? "Danke für Ihre Bewertung!" : "Obrigada pela sua avaliação!",
    empty:    locale === "de" ? "Noch keine Bewertungen." : "Ainda sem avaliações.",
    reviews:  locale === "de" ? "Bewertungen" : "avaliações",
  };

  const canSubmit = form.stars > 0 && form.comment.trim().length > 0;

  return (
    <div style={{ marginTop: 40, paddingBottom: 8 }}>
      {/* Toggle */}
      <div style={{ textAlign: "center" }}>
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={L.toggle}
          style={{
            background: "#f5ede8",
            border: "1px solid rgba(107,80,96,0.2)",
            borderRadius: 9999,
            cursor: "pointer",
            padding: "10px 24px",
            display: "inline-flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            opacity: 0.85,
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.85")}
        >
          <span style={{ fontFamily: "var(--font-inter)", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#6b5060" }}>
            {L.toggle}
          </span>
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none" style={{ transition: "transform 0.35s ease", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>
            <path d="M1 1L7 7L13 1" stroke="#6b5060" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Accordion body */}
      <div style={{ overflow: "hidden", maxHeight: open ? "1400px" : "0", transition: "max-height 0.5s ease" }}>
        <div style={{ maxWidth: 560, margin: "0 auto", padding: "28px 24px 8px" }}>

          {/* Average */}
          {!loading && avg && (
            <p style={{ textAlign: "center", fontFamily: "var(--font-inter)", fontSize: 11, color: "#9b7080", marginBottom: 24, letterSpacing: "0.08em" }}>
              ★ {avg} &nbsp;·&nbsp; {reviews.length} {L.reviews}
            </p>
          )}

          {/* Review list */}
          {loading ? null : reviews.length === 0 ? (
            <p style={{ textAlign: "center", fontFamily: "var(--font-playfair)", fontStyle: "italic", fontSize: 13, color: "#9b7080", marginBottom: 28 }}>
              {L.empty}
            </p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
              {reviews.map((r) => (
                <div key={r.id} style={{ background: "#fdf8f5", border: "1px solid rgba(107,80,96,0.12)", borderRadius: 8, padding: "14px 18px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
                    <span style={{ fontFamily: "var(--font-inter)", fontSize: 12, fontWeight: 600, color: "#3d2b35" }}>{r.name}</span>
                    <span style={{ fontFamily: "var(--font-inter)", fontSize: 10, color: "#9b7080", letterSpacing: "0.04em" }}>{r.date}</span>
                  </div>
                  <div style={{ marginBottom: 6 }}>
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i} style={{ fontSize: 13, color: i < r.stars ? "#9b7080" : "rgba(107,80,96,0.2)" }}>★</span>
                    ))}
                  </div>
                  <p style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", fontSize: 13, color: "#6b5060", margin: 0, lineHeight: 1.65 }}>
                    {r.comment}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Form */}
          {submitted ? (
            <p style={{ textAlign: "center", fontFamily: "var(--font-playfair)", fontStyle: "italic", fontSize: 14, color: "#7a5468", padding: "16px 0" }}>
              {L.thanks}
            </p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 10, borderTop: "1px solid rgba(107,80,96,0.1)", paddingTop: 20 }}>
              <input
                type="text"
                placeholder={L.name}
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                style={{ background: "#fdf8f5", border: "1px solid rgba(107,80,96,0.18)", borderRadius: 6, padding: "9px 13px", fontFamily: "var(--font-inter)", fontSize: 13, color: "#3d2b35", outline: "none", width: "100%" }}
              />
              <div style={{ display: "flex", gap: 4 }}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <button type="button" key={s} onClick={() => setForm((f) => ({ ...f, stars: s }))}
                    style={{ background: "none", border: "none", cursor: "pointer", fontSize: 24, padding: 0, lineHeight: 1, color: s <= form.stars ? "#9b7080" : "rgba(107,80,96,0.22)", transition: "color 0.15s" }}>
                    ★
                  </button>
                ))}
              </div>
              <textarea
                placeholder={L.comment}
                value={form.comment}
                onChange={(e) => setForm((f) => ({ ...f, comment: e.target.value }))}
                rows={3}
                style={{ background: "#fdf8f5", border: "1px solid rgba(107,80,96,0.18)", borderRadius: 6, padding: "9px 13px", fontFamily: "var(--font-playfair)", fontStyle: "italic", fontSize: 13, color: "#3d2b35", outline: "none", resize: "none", width: "100%" }}
              />
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button type="button" onClick={handleSubmit} disabled={!canSubmit}
                  style={{ background: canSubmit ? "#7a5468" : "rgba(107,80,96,0.1)", color: canSubmit ? "#faf6f1" : "#9b7080", border: "none", borderRadius: 40, padding: "9px 24px", fontFamily: "var(--font-inter)", fontSize: 12, letterSpacing: "0.08em", cursor: canSubmit ? "pointer" : "not-allowed", transition: "all 0.2s" }}>
                  {L.submit}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

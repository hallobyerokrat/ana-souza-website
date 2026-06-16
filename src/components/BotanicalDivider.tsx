export default function BotanicalDivider() {
  const c = "#9b7080";
  return (
    <div
      aria-hidden
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "4px 24px",
        overflow: "hidden",
      }}
    >
      <svg
        width="560"
        height="52"
        viewBox="0 0 560 52"
        fill="none"
        style={{ maxWidth: "min(560px, 90vw)", opacity: 0.55 }}
      >
        {/* Center rosette */}
        <circle cx="280" cy="26" r="3" fill={c} />
        <ellipse cx="280" cy="18.5" rx="2" ry="5" fill={c} opacity="0.6" />
        <ellipse cx="280" cy="33.5" rx="2" ry="5" fill={c} opacity="0.6" />
        <ellipse cx="272.5" cy="26" rx="5" ry="2" fill={c} opacity="0.6" />
        <ellipse cx="287.5" cy="26" rx="5" ry="2" fill={c} opacity="0.6" />
        <ellipse cx="274.9" cy="20.9" rx="2" ry="5" fill={c} opacity="0.4" transform="rotate(-45 274.9 20.9)" />
        <ellipse cx="285.1" cy="20.9" rx="2" ry="5" fill={c} opacity="0.4" transform="rotate(45 285.1 20.9)" />
        <ellipse cx="274.9" cy="31.1" rx="2" ry="5" fill={c} opacity="0.4" transform="rotate(45 274.9 31.1)" />
        <ellipse cx="285.1" cy="31.1" rx="2" ry="5" fill={c} opacity="0.4" transform="rotate(-45 285.1 31.1)" />

        {/* Left main branch */}
        <path d="M274 26 Q237 26 200 26 Q162 26 120 26 Q90 26 60 26" stroke={c} strokeWidth="0.9" opacity="0.5" fill="none" />

        {/* Left cluster 1 */}
        <path d="M240 26 Q236 20 230 16" stroke={c} strokeWidth="0.75" opacity="0.45" fill="none" />
        <ellipse cx="228" cy="14.5" rx="5.5" ry="2.3" fill={c} opacity="0.38" transform="rotate(-28 228 14.5)" />
        <path d="M240 26 Q237 32 232 36" stroke={c} strokeWidth="0.75" opacity="0.4" fill="none" />
        <ellipse cx="230" cy="37.5" rx="5.5" ry="2.3" fill={c} opacity="0.32" transform="rotate(25 230 37.5)" />

        {/* Left cluster 2 */}
        <path d="M200 26 Q196 20 190 16" stroke={c} strokeWidth="0.7" opacity="0.4" fill="none" />
        <ellipse cx="188" cy="14.5" rx="5" ry="2" fill={c} opacity="0.33" transform="rotate(-25 188 14.5)" />
        <path d="M200 26 Q197 32 192 36" stroke={c} strokeWidth="0.7" opacity="0.38" fill="none" />
        <ellipse cx="190" cy="37.5" rx="5" ry="2" fill={c} opacity="0.28" transform="rotate(22 190 37.5)" />

        {/* Left cluster 3 */}
        <path d="M160 26 Q156 20 150 16" stroke={c} strokeWidth="0.65" opacity="0.35" fill="none" />
        <ellipse cx="148" cy="14.5" rx="4.5" ry="1.9" fill={c} opacity="0.28" transform="rotate(-22 148 14.5)" />
        <path d="M160 26 Q157 33 152 37" stroke={c} strokeWidth="0.65" opacity="0.32" fill="none" />
        <ellipse cx="150" cy="38.5" rx="4.5" ry="1.9" fill={c} opacity="0.24" transform="rotate(20 150 38.5)" />

        {/* Left cluster 4 fading */}
        <path d="M120 26 Q116 21 111 17" stroke={c} strokeWidth="0.55" opacity="0.28" fill="none" />
        <ellipse cx="109" cy="15.5" rx="4" ry="1.7" fill={c} opacity="0.22" transform="rotate(-18 109 15.5)" />
        <path d="M120 26 Q117 32 112 36" stroke={c} strokeWidth="0.55" opacity="0.26" fill="none" />
        <ellipse cx="110" cy="37.5" rx="4" ry="1.7" fill={c} opacity="0.2" transform="rotate(17 110 37.5)" />
        <circle cx="60" cy="26" r="2" fill={c} opacity="0.2" />

        {/* Right main branch (mirror) */}
        <path d="M286 26 Q323 26 360 26 Q398 26 440 26 Q470 26 500 26" stroke={c} strokeWidth="0.9" opacity="0.5" fill="none" />

        {/* Right cluster 1 */}
        <path d="M320 26 Q324 20 330 16" stroke={c} strokeWidth="0.75" opacity="0.45" fill="none" />
        <ellipse cx="332" cy="14.5" rx="5.5" ry="2.3" fill={c} opacity="0.38" transform="rotate(28 332 14.5)" />
        <path d="M320 26 Q323 32 328 36" stroke={c} strokeWidth="0.75" opacity="0.4" fill="none" />
        <ellipse cx="330" cy="37.5" rx="5.5" ry="2.3" fill={c} opacity="0.32" transform="rotate(-25 330 37.5)" />

        {/* Right cluster 2 */}
        <path d="M360 26 Q364 20 370 16" stroke={c} strokeWidth="0.7" opacity="0.4" fill="none" />
        <ellipse cx="372" cy="14.5" rx="5" ry="2" fill={c} opacity="0.33" transform="rotate(25 372 14.5)" />
        <path d="M360 26 Q363 32 368 36" stroke={c} strokeWidth="0.7" opacity="0.38" fill="none" />
        <ellipse cx="370" cy="37.5" rx="5" ry="2" fill={c} opacity="0.28" transform="rotate(-22 370 37.5)" />

        {/* Right cluster 3 */}
        <path d="M400 26 Q404 20 410 16" stroke={c} strokeWidth="0.65" opacity="0.35" fill="none" />
        <ellipse cx="412" cy="14.5" rx="4.5" ry="1.9" fill={c} opacity="0.28" transform="rotate(22 412 14.5)" />
        <path d="M400 26 Q403 33 408 37" stroke={c} strokeWidth="0.65" opacity="0.32" fill="none" />
        <ellipse cx="410" cy="38.5" rx="4.5" ry="1.9" fill={c} opacity="0.24" transform="rotate(-20 410 38.5)" />

        {/* Right cluster 4 fading */}
        <path d="M440 26 Q444 21 449 17" stroke={c} strokeWidth="0.55" opacity="0.28" fill="none" />
        <ellipse cx="451" cy="15.5" rx="4" ry="1.7" fill={c} opacity="0.22" transform="rotate(18 451 15.5)" />
        <path d="M440 26 Q443 32 448 36" stroke={c} strokeWidth="0.55" opacity="0.26" fill="none" />
        <ellipse cx="450" cy="37.5" rx="4" ry="1.7" fill={c} opacity="0.2" transform="rotate(-17 450 37.5)" />
        <circle cx="500" cy="26" r="2" fill={c} opacity="0.2" />
      </svg>
    </div>
  );
}

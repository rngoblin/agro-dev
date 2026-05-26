type SectionHeaderProps = {
  kicker?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeader({
  kicker,
  title,
  text,
  align = "left",
  tone = "light"
}: SectionHeaderProps) {
  const titleClass = tone === "dark" ? "text-white" : "text-ink";
  const textClass = tone === "dark" ? "text-white/74" : "text-graphite/75";
  const kickerClass = tone === "dark" ? "text-white/64" : "text-accent";

  return (
    <div
      className={[
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : ""
      ].join(" ")}
    >
      {kicker ? (
        <p className={`mb-3 text-xs font-semibold uppercase ${kickerClass}`}>
          {kicker}
        </p>
      ) : null}
      <h2
        className={`text-3xl font-semibold leading-tight md:text-5xl ${titleClass}`}
      >
        {title}
      </h2>
      {text ? (
        <p className={`mt-5 text-base leading-7 md:text-lg ${textClass}`}>
          {text}
        </p>
      ) : null}
    </div>
  );
}

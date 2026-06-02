import Reveal from "../Reveal";

export default function SectionHeading({ eyebrow, title, accent, lead, align = "left" }) {
  return (
    <Reveal
      className="section-head"
      style={{ textAlign: align, alignItems: align === "center" ? "center" : "flex-start" }}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-heading">
        {title} {accent && <span className="accent">{accent}</span>}
      </h2>
      {lead && <p className="section-lead">{lead}</p>}
    </Reveal>
  );
}

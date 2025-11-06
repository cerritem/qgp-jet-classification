import { useState } from "react";
import datasetCover from "../assets/dataset-cover.png"; // adjust path if needed

export default function About() {
  const cards = [
    {
      label: "QGP",
      term: "Quark–Gluon Plasma (QGP)",
      definition:
        "A super-hot state of matter where quarks and gluons move freely instead of being trapped inside protons.",
      relevance:
        "By studying how particles behave in QGP, we can glimpse what the early universe was like microseconds after the Big Bang."
    },
    {
      label: "Pb–Pb",
      term: "Lead–Lead Collisions",
      definition:
        "When two lead nuclei collide at high energy, they can briefly form QGP.",
      relevance:
        "These collisions let us observe how jets lose energy as they pass through extreme matter."
    },
    {
      label: "Jet",
      term: "Jets & Jet Quenching",
      definition:
        "A jet is a spray of particles created from high-energy collisions.",
      relevance:
        "As jets travel through QGP, they lose energy — this 'jet quenching' reveals QGP properties."
    },
    {
      label: "αₛ",
      term: "Strong Coupling Constant (αₛ)",
      definition:
        "A number that measures how strongly quarks stick together.",
      relevance:
        "Different αₛ values help model how jets lose energy inside the plasma."
    },
    {
      label: "Q₀",
      term: "Virtuality Scale (Q₀)",
      definition:
        "A scale showing how quantum or classical a jet’s energy loss is.",
      relevance:
        "Helps define which physical processes dominate a jet’s evolution in the QGP."
    },
    {
      label: "MATTER",
      term: "MATTER Model",
      definition:
        "Describes jets that lose energy mostly through elastic collisions and radiation.",
      relevance:
        "Represents early jet evolution — one of the models used in our dataset."
    },
    {
      label: "MATTER–LBT",
      term: "MATTER–LBT Model",
      definition:
        "A hybrid model where jets lose energy through both radiation and medium scattering.",
      relevance:
        "Used to simulate more realistic QGP interactions for comparison with MATTER jets."
    },
  ];

    return (
      <main
        style={{
          padding: 24,
          fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
          background: "#f3f6ff",
          minHeight: "100vh",
        }}
      >
        <section style={{ maxWidth: 1000, margin: "0 auto" }}>
          <header style={{ textAlign: "center", marginBottom: 18 }}>
            <h1 style={{ fontSize: 32, margin: 0, color: "#5b21b6" }}>
               Learn more about high energy physics!⚛️
            </h1>
            
          </header>

         

          <h2 style={{ marginTop: 28, color: "#5b21b6", textAlign: "center" }}>
            🔍 Key Concepts
          </h2>
          

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 18,
              marginTop: 18,
            }}
          >
            {cards.map((c, i) => (
              <FlipCardInline key={i} {...c} />
            ))}
          </div>
        </section>
      </main>
    );
}

function FlipCardInline({ label, term, definition, relevance }) {
  const [flipped, setFlipped] = useState(false);

  const containerStyle = {
    perspective: 900,
    height: 220,
    cursor: "pointer",
  };

  const innerStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
    transition: "transform 0.6s",
    transformStyle: "preserve-3d",
    transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
  };

  const faceCommon = {
    position: "absolute",
    inset: 0,
    borderRadius: 12,
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    boxShadow: "0 6px 18px rgba(16,24,40,0.08)",
  };

  const frontStyle = {
    ...faceCommon,
    background: "white",
    color: "#0f172a",
    fontWeight: 800,
    fontSize: 26,
  };

  const backStyle = {
    ...faceCommon,
    background: "linear-gradient(135deg,#7c3aed,#2563eb)",
    color: "white",
    transform: "rotateY(180deg)",
    textAlign: "center",
    fontSize: 14,
    lineHeight: 1.35,
  };

  return (
    <div
      style={containerStyle}
      onClick={() => setFlipped((s) => !s)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") setFlipped((s) => !s);
      }}
      aria-pressed={flipped}
    >
      <div style={innerStyle}>
        <div style={frontStyle}>
          <div>
            <div>{label}</div>
            <div
              style={{
                fontSize: 12,
                color: "#94a3b8",
                fontWeight: 500,
                marginTop: 8,
              }}
            >
              click to learn more
            </div>
          </div>
        </div>

        <div style={backStyle}>
          <div>
            <div style={{ fontWeight: 700, marginBottom: 6 }}>{term}</div>
            <div style={{ marginBottom: 6 }}>{definition}</div>
            <div style={{ opacity: 0.9 }}>{relevance}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

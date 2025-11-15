export default function Demo() {
  return (
    <main
      style={{
        padding: 24,
        fontFamily:
          "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
        background: "#f3f6ff",
        minHeight: "100vh",
      }}
    >
      <section style={{ maxWidth: 1000, margin: "0 auto" }}>
        <header style={{ textAlign: "center", marginBottom: 18 }}>
          <h1
            style={{
              fontSize: 32,
              margin: 0,
              color: "#5b21b6",
            }}
          >
            Demo Page
          </h1>
        </header>

        <div
          style={{
            background: "white",
            borderRadius: 12,
            padding: 16,
            boxShadow: "0 8px 24px rgba(16,24,40,0.06)",
          }}
        >
          {/* Embedded Gradio App */}
          <iframe
            src="https://gqp-jet-team-jet-classifier-demo.hf.space"
            title="Model Demo"
            style={{
              width: "100%",
              height: "700px",
              border: "none",
              borderRadius: 12,
            }}
            allow="camera; microphone; clipboard-read; clipboard-write"
          />
        </div>
      </section>
    </main>
  );
}

import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Brendan Falk";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Image generation
export default async function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Main BF logo */}
        <div
          style={{
            fontSize: 200,
            fontWeight: 700,
            color: "white",
            marginBottom: 20,
            letterSpacing: "0.05em",
          }}
        >
          BF
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 48,
            fontWeight: 600,
            color: "white",
            marginBottom: 12,
          }}
        >
          Brendan Falk
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            color: "#888888",
            fontWeight: 400,
          }}
        >
          Founder & CEO @ Zeus
        </div>

        {/* Website */}
        <div
          style={{
            fontSize: 24,
            color: "#666666",
            fontWeight: 400,
            marginTop: 20,
          }}
        >
          brendanfalk.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

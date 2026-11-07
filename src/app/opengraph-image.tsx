import { ImageResponse } from "next/og";

export const alt = "IPTV Brampton Premium High Definition Streaming in Canada";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #000000 0%, #0f0f0f 50%, #200508 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "sans-serif",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #ef4444, #dc2626, #991b1b)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            🍁
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "28px", fontWeight: "900", letterSpacing: "-1px" }}>
              IPTV <span style={{ color: "#ef4444" }}>BRAMPTON</span>
            </span>
            <span style={{ fontSize: "14px", color: "#a3a3a3", textTransform: "uppercase", letterSpacing: "2px" }}>
              Canada HD Streaming
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "900px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px",
              borderRadius: "50px",
              background: "rgba(220, 38, 38, 0.2)",
              border: "1px solid rgba(220, 38, 38, 0.4)",
              color: "#fca5a5",
              fontSize: "16px",
              fontWeight: "600",
              width: "auto",
            }}
          >
            🇨🇦 Serving Brampton & Peel Region, Ontario
          </div>
          <h1
            style={{
              fontSize: "56px",
              fontWeight: "900",
              lineHeight: 1.15,
              margin: 0,
              background: "linear-gradient(to right, #ffffff, #fca5a5, #ef4444)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Premium IPTV Subscription in Brampton, Canada
          </h1>
          <p style={{ fontSize: "22px", color: "#a3a3a3", margin: 0 }}>
            Sports • Live TV • Movies & Series • 4K/HD • Zero Cable Contracts • CAD Pricing
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(255, 255, 255, 0.15)",
            paddingTop: "24px",
            fontSize: "18px",
            color: "#737373",
          }}
        >
          <span>https://iptvbrampton.ca</span>
          <span style={{ color: "#ef4444", fontWeight: "bold" }}>Plans starting at $12.99 CAD / month</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

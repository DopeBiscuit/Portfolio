import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background: "#101316",
          color: "#f4f2ee",
        }}
      >
        <div style={{ fontSize: 56, fontStyle: "italic", color: "#d8b678" }}>ah</div>
        <div style={{ fontSize: 54, marginTop: 28, lineHeight: 1.1 }}>
          Manual work is unclaimed profit.
        </div>
        <div style={{ fontSize: 24, marginTop: 28, color: "#a7adb4" }}>
          Abdelrahman Hany, Automation Engineer
        </div>
      </div>
    ),
    size,
  );
}

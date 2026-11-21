import { ImageResponse } from "next/og";
import { personalInfo } from "@/data/personal";

export const alt = `${personalInfo.name} — Software Engineer Portfolio`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#0B0F19",
          color: "#F8FAFC",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: "#3B82F6",
              letterSpacing: "-0.02em",
            }}
          >
            {"<aml />"}
          </span>
          <span
            style={{
              fontSize: 20,
              color: "#94A3B8",
            }}
          >
            {personalInfo.location}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            {personalInfo.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 34,
              color: "#3B82F6",
              fontWeight: 600,
            }}
          >
            {`${personalInfo.role} · Web, Mobile & Fullstack`}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: "#94A3B8",
              maxWidth: 920,
              lineHeight: 1.4,
            }}
          >
            {"React · Angular · Next.js · TypeScript · Flutter · Node.js · PostgreSQL"}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #1E293B",
            paddingTop: 28,
            fontSize: 20,
            color: "#94A3B8",
          }}
        >
          <span>{personalInfo.company}</span>
          <span>{"arvendoml.vercel.app"}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}

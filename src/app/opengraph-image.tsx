import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

// Image metadata
export const alt = "Harish Robikar | Full Stack Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Image generation
export default async function Image() {
  let imageData: ArrayBuffer | null = null;

  try {
    const filePath = path.join(process.cwd(), "public", "harishpic.PNG");
    if (fs.existsSync(filePath)) {
      const buffer = fs.readFileSync(filePath);
      imageData = buffer.buffer.slice(
        buffer.byteOffset,
        buffer.byteOffset + buffer.byteLength
      ) as ArrayBuffer;
    }
  } catch (error) {
    console.error("Failed to read OG image from filesystem:", error);
  }

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: "linear-gradient(to bottom right, #ffffff, #f3f4f6)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
        }}
      >
        {/* Left Side: Photo */}
        <div
          style={{
            display: "flex",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            overflow: "hidden",
            border: "12px solid #d97706",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          }}
        >
          {imageData ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={imageData as unknown as string}
              alt="Harish"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "#d97706",
                borderRadius: "50%",
              }}
            />
          )}
        </div>

        {/* Right Side: Text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "60px",
            flex: 1,
          }}
        >
          <div
            style={{
              fontSize: "72px",
              fontWeight: "900",
              color: "#111827",
              marginBottom: "16px",
            }}
          >
            Harish Robikar
          </div>
          <div
            style={{
              fontSize: "36px",
              color: "#d97706",
              fontWeight: "600",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            Full Stack Developer
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#4b5563",
              lineHeight: "1.5",
              maxWidth: "500px",
            }}
          >
            Architecting high-performance full-stack ecosystems and scalable digital solutions.
          </div>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}

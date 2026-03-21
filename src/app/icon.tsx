import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default async function Icon() {
  const origin = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  const imageUrl = `${origin}/harishpic.PNG`;

  let imageData: ArrayBuffer | null = null;
  try {
    const response = await fetch(imageUrl);
    if (response.ok) {
      imageData = await response.arrayBuffer();
    }
  } catch (error) {
    console.error("Failed to fetch icon image:", error);
  }

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        {imageData ? (
          <img
            src={imageData as any}
            alt="Harish"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "#d97706",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            H
          </div>
        )}
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}



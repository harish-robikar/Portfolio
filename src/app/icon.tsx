import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default async function Icon() {
  let imageData: ArrayBuffer | null = null;


  try {
    // In Node.js runtime, we can read the file directly from the public directory
    const filePath = path.join(process.cwd(), "public", "harishpic.PNG");
    if (fs.existsSync(filePath)) {
      const buffer = fs.readFileSync(filePath);
      // Convert Node.js Buffer to ArrayBuffer
      imageData = buffer.buffer.slice(
        buffer.byteOffset,
        buffer.byteOffset + buffer.byteLength
      ) as ArrayBuffer;
    }

  } catch (error) {
    console.error("Failed to read icon image from filesystem:", error);
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
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={imageData as unknown as string}
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
              borderRadius: "50%",
            }}
          />
        )}
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}





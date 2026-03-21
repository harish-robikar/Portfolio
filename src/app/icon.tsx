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
  let imageData: ArrayBuffer | null = null;

  try {
    // Reference the image relative to this file's location during the build
    const relativeUrl = new URL("../../public/harishpic.PNG", import.meta.url);
    const response = await fetch(relativeUrl);
    if (response.ok) {
      imageData = await response.arrayBuffer();
    }
  } catch (error) {
    console.error("Failed to load icon image from file:", error);
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




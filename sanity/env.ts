export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";

// dataset is usually "production" unless you created another one
export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET",
);

// projectId comes from your Sanity dashboard → Settings → API
export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "workhard", // replace "workhard" with your real projectId!
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID",
);

// private write token (server-side only)
export const token = process.env.SANITY_WRITE_TOKEN;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}

import type { MetadataRoute } from "next";
import { APP_DESCRIPTION, APP_NAME, APP_TAGLINE } from "@/constants/branding";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${APP_NAME} | ${APP_TAGLINE}`,
    short_name: APP_NAME,
    description: APP_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#f3efe7",
    theme_color: "#d97706",
  };
}

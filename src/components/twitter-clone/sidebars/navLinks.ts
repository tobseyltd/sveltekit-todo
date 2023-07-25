import TiHomeOutline from "svelte-icons/ti/TiHomeOutline.svelte";
import TiGroupOutline from "svelte-icons/ti/TiGroupOutline.svelte";
import TiCogOutline from "svelte-icons/ti/TiCogOutline.svelte";
import TiBell from "svelte-icons/ti/TiBell.svelte";
import TiZoomOutline from "svelte-icons/ti/TiZoomOutline.svelte";

export const navLinks = [
  {
    name: "Home",
    href: "/twitter-clone",
    icon: TiHomeOutline
  },
  {
    name: "Profile",
    href: "/",
    icon: TiGroupOutline
  },
  {
    name: "More",
    href: "/",
    icon: TiCogOutline
  },
  {
    name: "Notifications",
    href: "/",
    icon: TiBell
  },
  {
    name: "Discover",
    href: "/task-manager",
    icon: TiZoomOutline
  }
]
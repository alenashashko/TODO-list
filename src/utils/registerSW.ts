// https://developers.google.com/web/tools/workbox/modules/workbox-window
export async function registerSW() {
  if ("serviceWorker" in navigator) {
    const { Workbox } = await import("workbox-window");

    const wb = new Workbox("/sw.js");

    wb.register();
  }
}

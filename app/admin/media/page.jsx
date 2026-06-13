import fs from "fs";
import path from "path";
import { projects } from "@/lib/projects";
import { services } from "@/lib/services";
import { CmsTopbar } from "@/components/cms/Ui";
import MediaLibrary from "@/components/cms/MediaLibrary";

export const metadata = { title: "Media — Studio CMS" };

const FOLDERS = [
  { name: "Work covers", dir: "img/work", usage: "Project covers & galleries" },
  { name: "Team", dir: "img/team", usage: "About — Team je.design" },
  { name: "Mascots", dir: "img/mascots", usage: "Home — Mascots they remember" },
  { name: "Revenue wall", dir: "img/revenue", usage: "Results sections" },
  { name: "Logo dump", dir: "img/logodump", usage: "Owner-note flashlight wall" },
  { name: "Avatars", dir: "img/avatars", usage: "Review avatars" },
  { name: "Brand", dir: "img", usage: "Logos & badges", flat: true },
  { name: "Video", dir: "video", usage: "Sketch-to-sizzle lightbox" },
];
const IMG_EXT = /\.(jpe?g|png|webp|svg|gif)$/i;
const VID_EXT = /\.(mp4|webm|mov)$/i;

function scan() {
  const base = path.join(process.cwd(), "public/assets");
  const items = [];
  const folders = [];
  for (const f of FOLDERS) {
    const dir = path.join(base, f.dir);
    if (!fs.existsSync(dir)) continue;
    let names = fs.readdirSync(dir).filter((n) => IMG_EXT.test(n) || VID_EXT.test(n));
    if (f.flat) names = names.filter((n) => !fs.statSync(path.join(dir, n)).isDirectory());
    const entries = names.sort().map((n) => ({
      name: n,
      path: `/assets/${f.dir}/${n}`,
      folder: f.name,
      size: fs.statSync(path.join(dir, n)).size,
      type: VID_EXT.test(n) ? "video" : "image",
      usage: f.usage,
    }));
    // enrich work covers with the project/service that uses them
    if (f.name === "Work covers") {
      for (const e of entries) {
        const proj = projects.find((p) => p.img === e.path);
        const svc = services.find((s) => s.img === e.path);
        if (proj) e.usage = `Cover — ${proj.title}`;
        else if (svc) e.usage = `Cover — ${svc.title}`;
      }
    }
    items.push(...entries);
    folders.push({ name: f.name, count: entries.length });
  }
  return { items, folders };
}

export default function MediaAdmin() {
  const { items, folders } = scan();
  const totalMB = (items.reduce((s, i) => s + i.size, 0) / (1024 * 1024)).toFixed(0);
  return (
    <>
      <CmsTopbar
        title="Media"
        subtitle={`${items.length} files · ${totalMB} MB across ${folders.length} folders — read live from /public/assets.`}
        action={<a href="#" className="btn btn--sm btn--solid"><span>Upload</span></a>}
      />
      <div className="cms__content cmsc cmsc--full">
        <MediaLibrary items={items} folders={folders} />
      </div>
    </>
  );
}

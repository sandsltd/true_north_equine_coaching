import { d as decodeKey } from './chunks/astro/server_IYjTNoAt.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BXa76nI2.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/nick/Documents/websites/true_north_equine_coaching/","cacheDir":"file:///Users/nick/Documents/websites/true_north_equine_coaching/node_modules/.astro/","outDir":"file:///Users/nick/Documents/websites/true_north_equine_coaching/dist/","srcDir":"file:///Users/nick/Documents/websites/true_north_equine_coaching/src/","publicDir":"file:///Users/nick/Documents/websites/true_north_equine_coaching/public/","buildClientDir":"file:///Users/nick/Documents/websites/true_north_equine_coaching/dist/client/","buildServerDir":"file:///Users/nick/Documents/websites/true_north_equine_coaching/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.ts","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BUBtaXpG.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/nick/Documents/websites/true_north_equine_coaching/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/api/contact@_@ts":"pages/api/contact.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/Users/nick/Documents/websites/true_north_equine_coaching/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CMbLAzlh.mjs","\u0000@astrojs-manifest":"manifest_rZaMK4Tn.mjs","/Users/nick/Documents/websites/true_north_equine_coaching/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.PxBScl9b.js","/Users/nick/Documents/websites/true_north_equine_coaching/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.WMo_z8AH.js","/Users/nick/Documents/websites/true_north_equine_coaching/src/components/Contact.astro?astro&type=script&index=0&lang.ts":"_astro/Contact.astro_astro_type_script_index_0_lang.BfUB_jF-.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/nick/Documents/websites/true_north_equine_coaching/src/pages/index.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){document.querySelectorAll('a[href^=\"#\"]').forEach(t=>{t.addEventListener(\"click\",function(o){o.preventDefault();const n=this.getAttribute(\"href\"),e=document.querySelector(n);if(e){const r=e.offsetTop-80;window.scrollTo({top:r,behavior:\"smooth\"})}})})});"],["/Users/nick/Documents/websites/true_north_equine_coaching/src/components/Header.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){const u=document.getElementById(\"mobile-menu-button\"),t=document.getElementById(\"mobile-menu\"),s=document.getElementById(\"menu-icon\"),d=document.getElementById(\"close-icon\");u&&t&&s&&d&&(u.addEventListener(\"click\",function(){!t.classList.contains(\"hidden\")?(t.classList.add(\"hidden\"),s.classList.remove(\"hidden\"),d.classList.add(\"hidden\"),document.body.style.overflow=\"\"):(t.classList.remove(\"hidden\"),s.classList.add(\"hidden\"),d.classList.remove(\"hidden\"),window.innerWidth<768&&(document.body.style.overflow=\"hidden\"))}),t.querySelectorAll(\".mobile-nav-link\").forEach(e=>{e.addEventListener(\"click\",function(){t.classList.add(\"hidden\"),s.classList.remove(\"hidden\"),d.classList.add(\"hidden\"),document.body.style.overflow=\"\"})})),document.querySelectorAll('a[href^=\"#\"]').forEach(n=>{n.addEventListener(\"click\",function(e){e.preventDefault();const o=this.getAttribute(\"href\"),c=document.querySelector(o);if(c){const i=document.querySelector(\"header\"),l=i?i.offsetHeight+16:80,r=c.offsetTop-l;window.scrollTo({top:r,behavior:\"smooth\"}),m(o)}})});function m(n){document.querySelectorAll(\".nav-link\").forEach(o=>{o.classList.remove(\"active\")});const e=document.querySelector(`a[href=\"${n}\"]`);e&&e.classList.contains(\"nav-link\")&&e.classList.add(\"active\")}function f(){const n=document.querySelectorAll(\"section[id]\"),e=document.querySelector(\"header\"),o=e?e.offsetHeight:80,c=window.scrollY+o+20;n.forEach(i=>{const l=i.offsetTop,r=i.offsetHeight,h=i.getAttribute(\"id\");c>=l&&c<l+r&&m(`#${h}`)})}let a=!1;window.addEventListener(\"scroll\",function(){a||(requestAnimationFrame(function(){f(),a=!1}),a=!0)}),window.addEventListener(\"resize\",function(){window.innerWidth>=768&&(t.classList.add(\"hidden\"),s.classList.remove(\"hidden\"),d.classList.add(\"hidden\"),document.body.style.overflow=\"\")})});"],["/Users/nick/Documents/websites/true_north_equine_coaching/src/components/Contact.astro?astro&type=script&index=0&lang.ts","const a=document.getElementById(\"contactForm\"),e=document.getElementById(\"formMessage\"),t=e?.querySelector(\"p\");a?.addEventListener(\"submit\",async o=>{o.preventDefault(),e&&t&&(e.className=\"py-3 px-4 rounded-lg mb-4\",t.textContent=\"Sending message...\",e.classList.remove(\"hidden\",\"bg-green-100\",\"bg-red-100\"),e.classList.add(\"bg-blue-100\"),t.className=\"text-center font-medium text-blue-700\");try{const s=new FormData(a),n=await fetch(\"/api/contact\",{method:\"POST\",body:s}),r=await n.json();if(n.ok)e&&t&&(e.classList.remove(\"bg-blue-100\"),e.classList.add(\"bg-green-100\"),t.className=\"text-center font-medium text-green-700\",t.textContent=\"Message sent successfully! We will get back to you soon.\"),a.reset();else throw new Error(r.message||\"Error sending message\")}catch(s){e&&t&&(e.classList.remove(\"bg-blue-100\"),e.classList.add(\"bg-red-100\"),t.className=\"text-center font-medium text-red-700\",t.textContent=s instanceof Error?s.message:\"Error sending message. Please try again.\")}});"]],"assets":["/_astro/index.BUBtaXpG.css","/Screenshot 2025-06-03 at 11.38.23.png","/saunders_simmons_ltd.png","/favicon_io/android-chrome-192x192.png","/favicon_io/android-chrome-512x512.png","/favicon_io/apple-touch-icon.png","/favicon_io/favicon-16x16.png","/favicon_io/favicon-32x32.png","/favicon_io/favicon.ico","/favicon_io/site.webmanifest","/images/landscape_true_north/1.png","/images/landscape_true_north/2.png","/images/landscape_true_north/3.png","/images/landscape_true_north/4.png","/images/landscape_true_north/5.png","/images/landscape_true_north/6.png","/images/potrait_images_true_north/1.png","/images/potrait_images_true_north/2.png","/images/potrait_images_true_north/3.png"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"nZ9UOMhszGoYqUxY0yIPJlTztUzLsFIBcXBUHenGNpw="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };

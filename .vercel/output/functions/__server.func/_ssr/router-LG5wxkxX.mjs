import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { s as streamText, c as convertToModelMessages } from "../_libs/ai.mjs";
import { c as createOpenAICompatible } from "../_libs/ai-sdk__openai-compatible.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/scheduler.mjs";
import "../_libs/isbot.mjs";
import "../_libs/ai-sdk__gateway.mjs";
import "../_libs/ai-sdk__provider-utils.mjs";
import "../_libs/ai-sdk__provider.mjs";
import "../_libs/eventsource-parser.mjs";
import "../_libs/zod.mjs";
import "../_libs/@vercel/oidc.mjs";
import "path";
import "fs";
import "os";
import "../_libs/opentelemetry__api.mjs";
const appCss = "/assets/styles-xPGSOuJb.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-4 bg-red-950/30 border border-red-500/50 rounded text-left overflow-auto max-h-40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-red-400 font-mono text-xs font-bold", children: [
        error.name,
        ": ",
        error.message
      ] }),
      error.stack && /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "text-red-300/70 font-mono text-[10px] mt-2 whitespace-pre-wrap", children: error.stack })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$2 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Debate Coach Toolkit v0.8 — Star Universe" },
      { name: "description", content: "3D debate knowledge universe — Matter, Motion Bank, Roles, Dictionary navigable as a star map. SMANDASH Debate Club × ROJAAKS." },
      { name: "author", content: "ROJAAKS" },
      { property: "og:title", content: "Debate Coach Toolkit v0.8 — Star Universe" },
      { property: "og:description", content: "3D debate knowledge universe — Matter, Motion Bank, Roles, Dictionary navigable as a star map. SMANDASH Debate Club × ROJAAKS." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Debate Coach Toolkit v0.8 — Star Universe" },
      { name: "twitter:description", content: "3D debate knowledge universe — Matter, Motion Bank, Roles, Dictionary navigable as a star map. SMANDASH Debate Club × ROJAAKS." },
      { name: "theme-color", content: "#0a0014" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
      { name: "apple-mobile-web-app-title", content: "Debate Coach" }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,700&display=swap"
      },
      {
        rel: "stylesheet",
        href: appCss
      },
      { rel: "manifest", href: "/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/icon-512.png" },
      { rel: "icon", type: "image/png", href: "/icon-512.png" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$2.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter = () => import("./index-Brxj91dq.mjs");
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Debate Coach Toolkit · Star Universe"
    }, {
      name: "description",
      content: "Navigate the entire debate curriculum as a 3D star map: matter, motion bank, roles, kamus — semua bintang yang saling terhubung."
    }, {
      property: "og:title",
      content: "Debate Coach Toolkit · Star Universe"
    }, {
      property: "og:description",
      content: "3D knowledge graph for SMANDASH Debate Club."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const LOVABLE_AIG_RUN_ID_HEADER = "X-Lovable-AIG-Run-ID";
function createLovableAiGatewayProvider(lovableApiKey, initialRunId) {
  let runId = void 0;
  let resolveRunId = () => {
  };
  let resolved = false;
  const runIdReady = new Promise((res) => {
    resolveRunId = res;
  });
  const publish = (v) => {
    const next = v?.trim() || void 0;
    if (!runId && next) runId = next;
    if (!resolved) {
      resolved = true;
      resolveRunId(runId);
    }
  };
  if (runId) publish(runId);
  const provider = createOpenAICompatible({
    name: "lovable",
    baseURL: "https://ai.gateway.lovable.dev/v1",
    headers: {
      "Lovable-API-Key": lovableApiKey,
      "X-Lovable-AIG-SDK": "vercel-ai-sdk"
    },
    fetch: async (input, init) => {
      const headers = new Headers(init?.headers);
      if (runId && !headers.has(LOVABLE_AIG_RUN_ID_HEADER)) {
        headers.set(LOVABLE_AIG_RUN_ID_HEADER, runId);
      }
      try {
        const response = await fetch(input, { ...init, headers });
        publish(response.headers.get(LOVABLE_AIG_RUN_ID_HEADER) ?? void 0);
        return response;
      } catch (err) {
        publish(void 0);
        throw err;
      }
    }
  });
  return Object.assign(provider, {
    getRunId: () => runId,
    waitForRunId: () => runId ? Promise.resolve(runId) : runIdReady
  });
}
const SYSTEM = `Kamu adalah asisten AI untuk SMANDASH Debate Club, terintegrasi dengan "Debate Star Universe".
Bantu user soal:
- Matter (kerangka argumen filosofis & domain)
- Motion bank (mosi, jenis, framing)
- Vocab debate (istilah)
- Kompetitor sekolah & speaker (riwayat lomba)
- Active member, coach, rotasi team SMANDASH
- Strategi (HALAL/HARAM debate styles, role P1-P3, GR/OR)

Jawab ringkas dan padat dalam Bahasa Indonesia (boleh campur istilah debate inggris).
Format Markdown. Kalau user minta generate motion/matter, kasih structure jelas (point, contoh, weighing).`;
const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const key = process.env.LOVABLE_API_KEY;
        if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });
        const body = await request.json().catch(() => null);
        if (!body?.messages) return new Response("Bad request", { status: 400 });
        const gateway = createLovableAiGatewayProvider(key);
        const model = gateway("google/gemini-3-flash-preview");
        const modeHint = body.mode === "generate" ? "\n\n[MODE: GENERATE] Jika user minta motion/matter baru, balas dalam blok markdown dengan field jelas (Mosi, Type, Pro, Kon, Weighing)." : body.mode === "coach" ? "\n\n[MODE: COACHING] Berikan feedback ala adjudicator: substance, strategy, manner. 3 poin positif, 3 poin perbaikan." : body.mode === "search" ? "\n\n[MODE: SEARCH] Cari node di universe yang relevan dengan query, jelaskan kenapa relevan." : "";
        const sysText = SYSTEM + modeHint + (body.context ? `

[UNIVERSE CONTEXT]
${body.context}` : "");
        try {
          const result = streamText({
            model,
            system: sysText,
            messages: await convertToModelMessages(body.messages)
          });
          return result.toUIMessageStreamResponse();
        } catch (e) {
          const msg = e?.message || "AI error";
          return new Response(JSON.stringify({ error: msg }), { status: 500, headers: { "content-type": "application/json" } });
        }
      }
    }
  }
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$2
});
const ApiChatRoute = Route.update({
  id: "/api/chat",
  path: "/api/chat",
  getParentRoute: () => Route$2
});
const rootRouteChildren = {
  IndexRoute,
  ApiChatRoute
};
const routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};

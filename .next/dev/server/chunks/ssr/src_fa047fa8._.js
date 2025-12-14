module.exports = [
"[project]/src/content/site.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pages",
    ()=>pages,
    "siteMeta",
    ()=>siteMeta,
    "team",
    ()=>team,
    "tracks",
    ()=>tracks
]);
const tracks = [
    {
        id: 'water-night',
        title: 'Water Night, E. Whitacre',
        artist: 'Resonaré Chamber Choir',
        src: '/audio/water-night.mp3'
    },
    {
        id: 'stars',
        title: 'Stars, Ē. Ēšenvalds',
        artist: 'Resonaré Chamber Choir',
        src: '/audio/stars.mp3'
    }
];
const team = [
    {
        id: 'jacob-boland',
        name: 'Jacob Boland',
        role: 'Artistic Director'
    },
    {
        id: 'lissandra-tong',
        name: 'Lissandra Tong',
        role: 'Assistant Conductor'
    },
    {
        id: 'abraham-robles',
        name: 'Abraham Robles',
        role: 'Vocal Coach'
    },
    {
        id: 'connor-smorick',
        name: 'Connor Smorick',
        role: 'Accompanist'
    }
];
const pages = [
    '/',
    '/about',
    '/auditions',
    '/artistic-director',
    '/contact',
    '/privacy',
    '/terms'
];
const siteMeta = {
    title: 'Resonaré Chamber Choir',
    description: 'A modern rebuild of theresonare.org with a focus on choral excellence and accessibility.'
};
}),
"[project]/src/components/TeamList.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TeamList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/site.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function TeamList() {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["team"].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border border-neutral-800 p-4 rounded",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-medium",
                                        children: m.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TeamList.tsx",
                                        lineNumber: 13,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-neutral-400",
                                        children: m.role
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TeamList.tsx",
                                        lineNumber: 14,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TeamList.tsx",
                                lineNumber: 12,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-sm text-accent",
                                onClick: ()=>setOpen(open === m.id ? null : m.id),
                                children: open === m.id ? 'Hide' : 'Read'
                            }, void 0, false, {
                                fileName: "[project]/src/components/TeamList.tsx",
                                lineNumber: 16,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TeamList.tsx",
                        lineNumber: 11,
                        columnNumber: 11
                    }, this),
                    open === m.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 text-neutral-300",
                        children: [
                            "Placeholder bio for ",
                            m.name,
                            ". This is a concise, professional summary of their background, role, and work with Resonaré Chamber Choir. Replace with real copy when available."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TeamList.tsx",
                        lineNumber: 19,
                        columnNumber: 13
                    }, this)
                ]
            }, m.id, true, {
                fileName: "[project]/src/components/TeamList.tsx",
                lineNumber: 10,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/TeamList.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_fa047fa8._.js.map
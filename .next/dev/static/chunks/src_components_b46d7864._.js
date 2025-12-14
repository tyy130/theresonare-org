(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/AudioProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioPlayerProvider",
    ()=>AudioPlayerProvider,
    "useAudio",
    ()=>useAudio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const AudioCtx = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const useAudio = ()=>{
    _s();
    const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AudioCtx);
    if (!c) throw new Error('useAudio must be used within provider');
    return c;
};
_s(useAudio, "rCFJOMMDYLWM7qBzTJAGkiO6eRA=");
const AudioPlayerProvider = ({ children })=>{
    _s1();
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [currentTrack, setCurrentTrack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AudioPlayerProvider.useEffect": ()=>{
            if (!audioRef.current) audioRef.current = new Audio();
            const audio = audioRef.current;
            const onTime = {
                "AudioPlayerProvider.useEffect.onTime": ()=>setCurrentTime(audio.currentTime)
            }["AudioPlayerProvider.useEffect.onTime"];
            const onDuration = {
                "AudioPlayerProvider.useEffect.onDuration": ()=>setDuration(audio.duration || 0)
            }["AudioPlayerProvider.useEffect.onDuration"];
            const onEnd = {
                "AudioPlayerProvider.useEffect.onEnd": ()=>setIsPlaying(false)
            }["AudioPlayerProvider.useEffect.onEnd"];
            audio.addEventListener('timeupdate', onTime);
            audio.addEventListener('loadedmetadata', onDuration);
            audio.addEventListener('ended', onEnd);
            return ({
                "AudioPlayerProvider.useEffect": ()=>{
                    audio.removeEventListener('timeupdate', onTime);
                    audio.removeEventListener('loadedmetadata', onDuration);
                    audio.removeEventListener('ended', onEnd);
                }
            })["AudioPlayerProvider.useEffect"];
        }
    }["AudioPlayerProvider.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AudioPlayerProvider.useEffect": ()=>{
            const onKey = {
                "AudioPlayerProvider.useEffect.onKey": (e)=>{
                    if ([
                        'INPUT',
                        'TEXTAREA'
                    ].includes(e.target?.tagName)) return;
                    if (e.code === 'Space') {
                        e.preventDefault();
                        togglePlay();
                    }
                    if (e.key === 'ArrowRight') seek((audioRef.current?.currentTime || 0) + 5);
                    if (e.key === 'ArrowLeft') seek((audioRef.current?.currentTime || 0) - 5);
                }
            }["AudioPlayerProvider.useEffect.onKey"];
            window.addEventListener('keydown', onKey);
            return ({
                "AudioPlayerProvider.useEffect": ()=>window.removeEventListener('keydown', onKey)
            })["AudioPlayerProvider.useEffect"];
        }
    }["AudioPlayerProvider.useEffect"], [
        currentTrack,
        isPlaying
    ]);
    const playTrack = (t)=>{
        const audio = audioRef.current;
        if (!audio) return;
        if (currentTrack?.src !== t.src) {
            audio.src = t.src;
            setCurrentTrack(t);
        }
        audio.play().then(()=>setIsPlaying(true)).catch(()=>setIsPlaying(false));
    };
    const togglePlay = ()=>{
        const audio = audioRef.current;
        if (!audio) return;
        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            audio.play().then(()=>setIsPlaying(true)).catch(()=>setIsPlaying(false));
        }
    };
    const pause = ()=>{
        audioRef.current?.pause();
        setIsPlaying(false);
    };
    const seek = (t)=>{
        if (audioRef.current) audioRef.current.currentTime = Math.max(0, Math.min(duration || Infinity, t));
    };
    const setVolume = (v)=>{
        if (audioRef.current) audioRef.current.volume = v;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AudioCtx.Provider, {
        value: {
            currentTrack,
            isPlaying,
            playTrack,
            togglePlay,
            pause,
            seek,
            setVolume,
            currentTime,
            duration
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/AudioProvider.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(AudioPlayerProvider, "mgSg/5NF7dg7uHpbPhJ+hbFXK0k=");
_c = AudioPlayerProvider;
var _c;
__turbopack_context__.k.register(_c, "AudioPlayerProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/MiniPlayer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MiniPlayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AudioProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AudioProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function MiniPlayer() {
    _s();
    const { currentTrack, isPlaying, togglePlay, currentTime, duration, seek, setVolume } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AudioProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAudio"])();
    if (!currentTrack) return null;
    const format = (s)=>{
        if (!s || !isFinite(s)) return '0:00';
        const m = Math.floor(s / 60);
        const sec = Math.floor(s % 60).toString().padStart(2, '0');
        return `${m}:${sec}`;
    };
    const pct = duration ? currentTime / duration * 100 : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-neutral-800/90 border border-neutral-700 rounded-md px-4 py-3 shadow-lg z-50 w-[min(48rem,95%)]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm font-medium",
                            children: currentTrack.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/MiniPlayer.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-neutral-400",
                            children: currentTrack.artist
                        }, void 0, false, {
                            fileName: "[project]/src/components/MiniPlayer.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MiniPlayer.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    "aria-label": isPlaying ? 'Pause' : 'Play',
                    onClick: togglePlay,
                    className: "px-3 py-2 bg-neutral-700 rounded focus-ring",
                    children: isPlaying ? 'Pause' : 'Play'
                }, void 0, false, {
                    fileName: "[project]/src/components/MiniPlayer.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            "aria-label": "Seek",
                            className: "w-full",
                            type: "range",
                            min: 0,
                            max: duration || 0,
                            value: currentTime,
                            onChange: (e)=>seek(Number(e.target.value))
                        }, void 0, false, {
                            fileName: "[project]/src/components/MiniPlayer.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between text-xs text-neutral-400 mt-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: format(currentTime)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MiniPlayer.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "-",
                                        format(Math.max(0, duration - currentTime))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MiniPlayer.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MiniPlayer.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MiniPlayer.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    "aria-label": "Volume",
                    type: "range",
                    min: 0,
                    max: 1,
                    step: 0.01,
                    defaultValue: 1,
                    onChange: (e)=>setVolume(Number(e.target.value)),
                    className: "w-24"
                }, void 0, false, {
                    fileName: "[project]/src/components/MiniPlayer.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MiniPlayer.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/MiniPlayer.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(MiniPlayer, "lK2lamt3lPQhdWd0HYY+kYSt9+g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AudioProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAudio"]
    ];
});
_c = MiniPlayer;
var _c;
__turbopack_context__.k.register(_c, "MiniPlayer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_b46d7864._.js.map
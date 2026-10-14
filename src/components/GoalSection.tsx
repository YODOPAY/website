"use client";

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';

// Desktop layout is drawn on the design's 1440×937 canvas and scaled to fit.
const CANVAS_WIDTH = 1440;
const CANVAS_HEIGHT = 937;

// The journey line, traced from the design
const PATH =
    'M 270 274 C 600 268, 980 272, 1090 312 C 1135 328, 1150 352, 1110 375 ' +
    'C 1000 420, 600 470, 400 520 C 330 540, 340 590, 470 610 ' +
    'C 700 640, 1000 670, 1150 705 C 1240 728, 1240 770, 1150 790 ' +
    'C 1000 812, 850 814, 706 814';

// The heading is rendered above the canvas; it fills the canvas' first 190px
const TITLE_HEIGHT = 190;

// Scroll range (canvas y) over which the line fills
const PATH_TOP = 274;
const PATH_BOTTOM = 814;

type Step = { kind: 'step'; icon: string; title: string; text: string; x: number; y: number; anchor: [number, number] };
type Comment = { kind: 'comment'; avatar: string; text: string; x: number; y: number; anchor: [number, number] };
type Item = Step | Comment;

// In reading order. x/y place the item on the canvas; anchor is the point on the
// line where the item lights up as the progress reaches it.
const ITEMS: Item[] = [
    { kind: 'step', icon: '🎯', title: 'Set a goal', text: 'Give your Circle a purpose, set a target, and choose a deadline', x: 72, y: 249, anchor: [270, 274] },
    { kind: 'comment', avatar: '/images/comment1.webp', text: '“Guys, what if we actually plan that\nDecember trip? 🎯”', x: 441, y: 296, anchor: [560, 270] },
    { kind: 'step', icon: '👥', title: 'Bring your people together', text: 'Invite friends and family to contribute towards the same goal', x: 1141, y: 304, anchor: [1107, 319] },
    { kind: 'comment', avatar: '/images/comment2.webp', text: '“I’m adding everybody to the Circle.\nNobody is escaping this one 😂”', x: 861, y: 451, anchor: [880, 440] },
    { kind: 'step', icon: '💸', title: 'Contribute your way', text: 'Choose fixed contributions or let everyone contribute what they can.', x: 102, y: 516, anchor: [370, 534] },
    { kind: 'comment', avatar: '/images/comment3.webp', text: '“I’ve contributed mine. Small small,\nwe go get there.”', x: 514, y: 566, anchor: [600, 628] },
    { kind: 'step', icon: '📈', title: 'Stay in the loop', text: 'Track contributions and see how close your Circle is to its target.', x: 1155, y: 629, anchor: [1172, 711] },
    { kind: 'comment', avatar: '/images/comment4.webp', text: '“Wait, we’re already at 80%? This trip\nis actually happening!”', x: 763, y: 753, anchor: [760, 814] },
];

// Milestone dots sit where steps 2-4 join the line
const MILESTONES: [number, number][] = [[1107, 319], [370, 534], [1172, 711]];

const clamp = (value: number) => Math.min(1, Math.max(0, value));

const StepIcon = ({ icon, lit }: { icon: string; lit: boolean }) => (
    <span
        className={`shrink-0 w-10 h-10 rounded-full bg-[#292800] flex items-center justify-center text-2xl transition-shadow duration-500 ${lit ? 'shadow-[0_0_0_6px_rgba(206,198,0,0.25)]' : ''}`}
        aria-hidden
    >
        {icon}
    </span>
);

const StepCopy = ({ item }: { item: Step }) => (
    <div>
        <h3 className="font-display text-base font-semibold leading-[1.6] text-[#1F1F1F]">{item.title}</h3>
        <p className="mt-1 text-base font-medium leading-[1.6] text-[#7C7C7C]">{item.text}</p>
    </div>
);

const CommentBubble = ({ item }: { item: Comment }) => (
    <div className="flex items-center gap-[9px]">
        <Image src={item.avatar} alt="" width={86} height={86} sizes="44px" className="shrink-0 w-11 h-11" />
        <p className="text-sm font-medium leading-[1.3] text-black whitespace-pre-line">{item.text}</p>
    </div>
);

/** Fades an item in once the progress has reached it. */
const itemStateClass = (lit: boolean) =>
    `transition-[opacity,translate] duration-700 ease-out ${lit ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`;

const GoalSection = () => {
    const canvasWrapRef = useRef<HTMLDivElement>(null);
    const pathRef = useRef<SVGPathElement>(null);
    const fillRef = useRef<SVGPathElement>(null);
    const headRef = useRef<SVGGElement>(null);
    const listRef = useRef<HTMLOListElement>(null);

    const [scale, setScale] = useState(1);
    // Where each item and milestone sits along the line, as a 0-1 fraction
    const [itemAt, setItemAt] = useState<number[]>(() => ITEMS.map(() => 0));
    const [milestoneAt, setMilestoneAt] = useState<number[]>(() => MILESTONES.map(() => 0));
    const [progress, setProgress] = useState(0);
    const [listProgress, setListProgress] = useState(0);

    // Work out where each anchor falls along the line
    useEffect(() => {
        const path = pathRef.current;
        if (!path) return;
        const length = path.getTotalLength();
        const samples = Array.from({ length: 400 }, (_, i) => {
            const point = path.getPointAtLength((i / 399) * length);
            return { at: i / 399, x: point.x, y: point.y };
        });
        const locate = ([x, y]: [number, number]) =>
            samples.reduce((best, s) => ((s.x - x) ** 2 + (s.y - y) ** 2 < (best.x - x) ** 2 + (best.y - y) ** 2 ? s : best)).at;
        setItemAt(ITEMS.map((item) => locate(item.anchor)));
        setMilestoneAt(MILESTONES.map(locate));
    }, []);

    // Scale the desktop canvas to the available width
    useEffect(() => {
        const wrap = canvasWrapRef.current;
        if (!wrap) return;
        const observer = new ResizeObserver(([entry]) => setScale(Math.min(1, entry.contentRect.width / CANVAS_WIDTH)));
        observer.observe(wrap);
        return () => observer.disconnect();
    }, []);

    // Tie the progress to the scroll position
    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setProgress(1);
            setListProgress(1);
            return;
        }
        let frame = 0;
        const update = () => {
            frame = 0;
            const viewport = window.innerHeight;
            const wrap = canvasWrapRef.current;
            if (wrap && wrap.offsetParent) {
                const rect = wrap.getBoundingClientRect();
                const s = rect.width / CANVAS_WIDTH;
                // Canvas y currently sitting at 65% of the viewport height
                const canvasY = (viewport * 0.65 - rect.top) / s;
                setProgress(clamp((canvasY - PATH_TOP) / (PATH_BOTTOM - PATH_TOP)));
            }
            const list = listRef.current;
            if (list && list.offsetParent) {
                const rect = list.getBoundingClientRect();
                setListProgress(clamp((viewport * 0.65 - rect.top) / rect.height));
            }
        };
        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(update);
        };
        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            if (frame) cancelAnimationFrame(frame);
        };
    }, []);

    // Draw the yellow fill and move the glowing head along the line
    useEffect(() => {
        const path = pathRef.current;
        const fill = fillRef.current;
        const head = headRef.current;
        if (!path || !fill || !head) return;
        const length = path.getTotalLength();
        fill.style.strokeDasharray = `${length}`;
        fill.style.strokeDashoffset = `${length * (1 - progress)}`;
        const point = path.getPointAtLength(length * progress);
        head.setAttribute('transform', `translate(${point.x} ${point.y})`);
        head.style.opacity = progress > 0.002 ? '1' : '0';
    }, [progress]);

    const lit = (at: number) => progress >= at - 0.01;

    return (
        <section className="w-full bg-[#F5EFED] font-jakarta overflow-hidden">
            <Reveal className="px-4 pt-20 xl:pt-[80px] text-center">
                <h2 className="font-display text-[30px] min-[370px]:text-[34px] md:text-[46px] font-semibold leading-[1.2] text-[#292800]">
                    One Goal.
                    <br />
                    Everyone Contributes.
                </h2>
            </Reveal>

            {/* Desktop: the winding line from the design */}
            <div ref={canvasWrapRef} className="hidden xl:block relative w-full max-w-[1440px] mx-auto" style={{ height: (CANVAS_HEIGHT - TITLE_HEIGHT) * scale }}>
                <div
                    className="absolute left-0 origin-top-left"
                    style={{ width: CANVAS_WIDTH, height: CANVAS_HEIGHT, top: -TITLE_HEIGHT * scale, transform: `scale(${scale})` }}
                >
                    <svg viewBox={`0 0 ${CANVAS_WIDTH} ${CANVAS_HEIGHT}`} className="absolute inset-0 w-full h-full overflow-visible" aria-hidden>
                        <path ref={pathRef} d={PATH} fill="none" stroke="#EDE6E3" strokeWidth="4" strokeLinecap="round" />
                        <path ref={fillRef} d={PATH} fill="none" stroke="#CEC600" strokeWidth="4" strokeLinecap="round" />
                        {MILESTONES.map(([x, y], index) => (
                            <circle
                                key={index}
                                cx={x}
                                cy={y}
                                r="8"
                                className="transition-[fill] duration-500"
                                fill={lit(milestoneAt[index]) ? '#CEC600' : '#DEDAD8'}
                            />
                        ))}
                        <g ref={headRef} style={{ opacity: 0 }}>
                            <circle r="26" fill="#F5E600" opacity="0.25" className="animate-breathe" />
                            <circle r="13" fill="#F5E600" stroke="#FFFBC2" strokeWidth="3" />
                        </g>
                    </svg>

                    {ITEMS.map((item, index) => (
                        <div
                            key={index}
                            className={`absolute ${itemStateClass(lit(itemAt[index]))}`}
                            style={{ left: item.x, top: item.y, width: item.kind === 'step' ? 290 : 420 }}
                        >
                            {item.kind === 'step' ? (
                                <div className="flex items-start gap-[7px]">
                                    <StepIcon icon={item.icon} lit={lit(itemAt[index])} />
                                    <div className="w-[215px]"><StepCopy item={item} /></div>
                                </div>
                            ) : (
                                <CommentBubble item={item} />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Tablet and phone: the same journey as a vertical timeline */}
            <ol ref={listRef} className="xl:hidden relative mx-auto mt-14 mb-20 w-full max-w-[560px] px-4 flex flex-col gap-9">
                <div className="absolute left-[35px] top-5 bottom-5 w-[5px] -translate-x-1/2 rounded-full bg-[#EDE6E3]" aria-hidden>
                    <div
                        className="relative w-full rounded-full bg-[#CEC600]"
                        style={{ height: `${listProgress * 100}%` }}
                    >
                        <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#F5E600] border-[3px] border-[#FFFBC2] shadow-[0_0_14px_6px_rgba(245,230,0,0.35)]" />
                    </div>
                </div>
                {ITEMS.map((item, index) => {
                    const itemLit = listProgress >= index / (ITEMS.length - 1) - 0.02;
                    return (
                        <li key={index} className={`relative ${itemStateClass(itemLit)}`}>
                            {item.kind === 'step' ? (
                                <div className="flex items-start gap-3">
                                    <StepIcon icon={item.icon} lit={itemLit} />
                                    <StepCopy item={item} />
                                </div>
                            ) : (
                                <div className="pl-[52px]">
                                    <CommentBubble item={item} />
                                </div>
                            )}
                        </li>
                    );
                })}
            </ol>
        </section>
    );
};

export default GoalSection;

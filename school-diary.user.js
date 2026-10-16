// ==UserScript==
// @name         Diary+
// @version      0.0.1
// @downloadURL  https://raw.githubusercontent.com/Devo4kaAlina/school-diary-public/diary-plus.user.js
// @updateURL    https://raw.githubusercontent.com/Devo4kaAlina/school-diary-public/diary-plus.meta.js
// @match        https://vseosvita.ua/go/olp/study/diary*
// @require      https://cdn.jsdelivr.net/npm/preact@10.29.8/dist/preact.min.js
// ==/UserScript==

(function(preact) {
	"use strict";
	var t;
	var r;
	var u$1;
	var i$1;
	var o = 0;
	var f$1 = [];
	var c = preact.options;
	var e = c.__b;
	var a = c.__r;
	var v = c.diffed;
	var l = c.__c;
	var m = c.unmount;
	var p = c.__;
	function s(n, t) {
		c.__h && c.__h(r, n, o || t), o = 0;
		var u = r.__H || (r.__H = {
			__: [],
			__h: []
		});
		return n >= u.__.length && u.__.push({}), u.__[n];
	}
	function d(n) {
		return o = 1, y(D, n);
	}
	function y(n, u, i) {
		var o = s(t++, 2);
		if (o.t = n, !o.__c && (o.__ = [i ? i(u) : D(void 0, u), function(n) {
			var t = o.__N ? o.__N[0] : o.__[0], r = o.t(t, n);
			t !== r && (o.__N = [r, o.__[1]], o.__c.setState({}));
		}], o.__c = r, !r.__f)) {
			var f = function(n, t, r) {
				if (!o.__c.__H) return !0;
				var u = !1, i = o.__c.props !== n;
				if (o.__c.__H.__.some(function(n) {
					if (n.__N) {
						u = !0;
						var t = n.__[0];
						n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
					}
				}), c) {
					var f = c.call(this, n, t, r);
					return u ? f || i : f;
				}
				return !u || i;
			};
			r.__f = !0;
			var c = r.shouldComponentUpdate, e = r.componentWillUpdate;
			r.componentWillUpdate = function(n, t, r) {
				if (this.__e) {
					var u = c;
					c = void 0, f(n, t, r), c = u;
				}
				e && e.call(this, n, t, r);
			}, r.shouldComponentUpdate = f;
		}
		return o.__N || o.__;
	}
	function h(n, u) {
		var i = s(t++, 3);
		!c.__s && C(i.__H, u) && (i.__ = n, i.u = u, r.__H.__h.push(i));
	}
	function A(n) {
		return o = 5, T(function() {
			return { current: n };
		}, []);
	}
	function T(n, r) {
		var u = s(t++, 7);
		return C(u.__H, r) && (u.__ = n(), u.__H = r, u.__h = n), u.__;
	}
	function q(n, t) {
		return o = 8, T(function() {
			return n;
		}, t);
	}
	function x(n) {
		var u = r.context[n.__c], i = s(t++, 9);
		return i.c = n, u ? (i.__ ?? (i.__ = !0, u.sub(r)), u.props.value) : n.__;
	}
	function j() {
		for (var n; n = f$1.shift();) {
			var t = n.__H;
			if (n.__P && t) try {
				t.__h.some(z), t.__h.some(B), t.__h = [];
			} catch (r) {
				t.__h = [], c.__e(r, n.__v);
			}
		}
	}
	c.__b = function(n) {
		r = null, e && e(n);
	}, c.__ = function(n, t) {
		n && t.__k && t.__k.__m && (n.__m = t.__k.__m), p && p(n, t);
	}, c.__r = function(n) {
		a && a(n), t = 0;
		var i = (r = n.__c).__H;
		i && (u$1 === r ? (i.__h = [], r.__h = [], i.__.some(function(n) {
			n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
		})) : (i.__h.some(z), i.__h.some(B), i.__h = [], t = 0)), u$1 = r;
	}, c.diffed = function(n) {
		v && v(n);
		var t = n.__c;
		t && t.__H && (t.__H.__h.length && (1 !== f$1.push(t) && i$1 === c.requestAnimationFrame || ((i$1 = c.requestAnimationFrame) || w)(j)), t.__H.__.some(function(n) {
			n.u && (n.__H = n.u, n.u = void 0);
		})), u$1 = r = null;
	}, c.__c = function(n, t) {
		t.some(function(n) {
			try {
				n.__h.some(z), n.__h = n.__h.filter(function(n) {
					return !n.__ || B(n);
				});
			} catch (r) {
				t.some(function(n) {
					n.__h && (n.__h = []);
				}), t = [], c.__e(r, n.__v);
			}
		}), l && l(n, t);
	}, c.unmount = function(n) {
		m && m(n);
		var t, r = n.__c;
		r && r.__H && (r.__H.__.some(function(n) {
			try {
				z(n);
			} catch (n) {
				t = n;
			}
		}), r.__H = void 0, t && c.__e(t, r.__v));
	};
	var k = "function" == typeof requestAnimationFrame;
	function w(n) {
		var t, r = function() {
			clearTimeout(u), k && cancelAnimationFrame(t), setTimeout(n);
		}, u = setTimeout(r, 35);
		k && (t = requestAnimationFrame(r));
	}
	function z(n) {
		var t = r, u = n.__c;
		"function" == typeof u && (n.__c = void 0, u()), r = t;
	}
	function B(n) {
		var t = r;
		n.__c = n.__(), r = t;
	}
	function C(n, t) {
		return !n || n.length !== t.length || t.some(function(t, r) {
			return t !== n[r];
		});
	}
	function D(n, t) {
		return "function" == typeof t ? t(n) : t;
	}
	var DiaryStateStatus = function(DiaryStateStatus) {
		DiaryStateStatus["idle"] = "idle";
		DiaryStateStatus["loading"] = "loading";
		DiaryStateStatus["error"] = "error";
		DiaryStateStatus["ready"] = "ready";
		return DiaryStateStatus;
	}({});
	var DEFAULT_SEARCH_PARAMS = {
		isAjax: "1",
		isAjaxUrl: "https://vseosvita.ua/go/olp/study/diary",
		user_key: "",
		auth_mode: "pupil"
	};
	var DEFAULT_REQUEST_BODY = {
		access: "",
		year: "2026",
		dt_from: "2026-09-01",
		dt_finish: "2026-12-27"
	};
	var getAPIResults = async (searchParams = DEFAULT_SEARCH_PARAMS, requestBody = DEFAULT_REQUEST_BODY) => {
		const mergedSearchParams = {
			...DEFAULT_SEARCH_PARAMS,
			...searchParams
		};
		const params = new URLSearchParams(mergedSearchParams);
		const mergedRequestBody = {
			...DEFAULT_REQUEST_BODY,
			...requestBody
		};
		const body = new FormData();
		body.append("access", mergedRequestBody.access);
		body.append("year", mergedRequestBody.year);
		body.append("dt_from", mergedRequestBody.dt_from);
		body.append("dt_finish", mergedRequestBody.dt_finish);
		return await (await fetch(`https://school.vseosvita.ua/ext/diary-cabinet/diary/init?${params}`, {
			method: "POST",
			body,
			credentials: "include"
		})).json();
	};
	function normalize(raw) {
		const journals = new Map(raw.journals.map((j) => [j.id, j]));
		const teachers = new Map(raw.teachers.map((t) => [t.id, t.full_name]));
		const cells = new Map(raw.cells.map((c) => [c.id_column, c]));
		const absenceById = new Map(raw.absenceTypes.map((t) => [t.id, t]));
		const absenceByConst = new Map(raw.absenceTypes.map((t) => [t.const_num, t]));
		const lessons = [];
		for (const col of raw.columns) {
			if (col.is_archive) continue;
			const journal = journals.get(col.id_journal);
			if (!journal) {
				console.warn("[diary] journal not found for column", col.id);
				continue;
			}
			const cell = cells.get(col.id);
			const mm = cell?.cellMark;
			const mark = mm && !mm.isDraftMark && typeof mm.cell_mark === "number" ? mm.cell_mark : null;
			let absence = null;
			if (cell?.absence) {
				const t = absenceById.get(cell.absence.id_absence_type) ?? absenceByConst.get(cell.absence.id_absence_type);
				absence = {
					short: t?.title_short ?? "Н",
					title: t?.title ?? "Відсутній"
				};
			}
			const homework = col.homeworks.filter((h) => h.content_text.trim() !== "").map((h) => ({
				id: h.id,
				text: h.content_text.trim()
			}));
			lessons.push({
				id: col.id,
				date: col.ktp_date,
				subjectId: journal.id,
				subject: journal.title,
				colorNum: journal.color_num,
				teacher: teachers.get(col.id_teacher) ?? teachers.get(journal.id_teacher) ?? null,
				topic: col.topics[0]?.title.trim() || null,
				homework,
				mark,
				absence
			});
		}
		const sortNum = (id) => journals.get(id)?.sort_num ?? 0;
		return lessons.sort((a, b) => a.date.localeCompare(b.date) || sortNum(a.subjectId) - sortNum(b.subjectId) || a.id - b.id);
	}
	function normalizeSubjects(raw) {
		return raw.journals.filter((j) => !j.is_archive).map((j) => ({
			id: j.id,
			title: j.title,
			colorNum: j.color_num
		})).sort((a, b) => a.title.localeCompare(b.title, "uk"));
	}
	var USER_KEY_KEY = "userKey";
	var ACCESS_KEY = "accessKey";
	var getAccessItems = () => {
		try {
			return {
				userKey: localStorage.getItem(USER_KEY_KEY),
				accessKey: localStorage.getItem(ACCESS_KEY)
			};
		} catch (error) {
			return null;
		}
	};
	var setAccessItems = (userKey, accessKey) => {
		try {
			if (!userKey || !accessKey) return false;
			localStorage.setItem(USER_KEY_KEY, userKey);
			localStorage.setItem(ACCESS_KEY, accessKey);
			return true;
		} catch (error) {
			return false;
		}
	};
	var buildRequest = () => {
		const accessValues = getAccessItems();
		const key = accessValues?.userKey;
		const access = accessValues?.accessKey;
		const year = new Date().getFullYear().toString();
		return {
			query: { user_key: `${key}@${access}` },
			body: {
				access,
				year
			}
		};
	};
	async function loadDiary(opts) {
		const { query, body } = await buildRequest();
		const raw = await getAPIResults(query, body);
		const lessons = normalize(raw.data);
		const subjects = normalizeSubjects(raw.data);
		console.log("raw", raw);
		console.log("lessons", lessons.length, "with marks", lessons.filter((l) => l.mark != null).length, "absences", lessons.filter((l) => l.absence).length);
		console.table(lessons);
		return {
			lessons,
			subjects
		};
	}
	var f = 0;
	Array.isArray;
	function u(e, t, n, o, i, u) {
		t || (t = {});
		var a, c, p = t;
		if ("ref" in p) for (c in p = {}, t) "ref" == c ? a = t[c] : p[c] = t[c];
		var l = {
			type: e,
			props: p,
			key: n,
			ref: a,
			__k: null,
			__: null,
			__b: 0,
			__e: null,
			__c: null,
			constructor: void 0,
			__v: --f,
			__i: -1,
			__u: 0,
			__source: i,
			__self: u
		};
		if ("function" == typeof e && (a = e.defaultProps)) for (c in a) void 0 === p[c] && (p[c] = a[c]);
		return preact.options.vnode && preact.options.vnode(l), l;
	}
	var initialState = {
		status: DiaryStateStatus.idle,
		message: "",
		lessons: [],
		subjects: [],
		loadedAt: 0
	};
	var DiaryContext = (0, preact.createContext)([initialState, { load: (opts) => {
		throw new Error("DiaryContextProvider is not initialized");
	} }]);
	var useDiaryContext = () => {
		return x(DiaryContext);
	};
	var DiaryContextProvider = ({ children }) => {
		const [state, setState] = d(initialState);
		const requestId = A(0);
		const load = q(async (opts) => {
			const id = ++requestId.current;
			setState((s) => ({
				...s,
				status: DiaryStateStatus.loading,
				message: ""
			}));
			try {
				const data = await loadDiary(opts);
				if (id !== requestId.current) return;
				setState({
					status: DiaryStateStatus.ready,
					message: "",
					lessons: data.lessons,
					subjects: data.subjects,
					loadedAt: Date.now()
				});
			} catch (e) {
				if (id !== requestId.current) return;
				setState((s) => ({
					...s,
					status: DiaryStateStatus.error,
					message: e instanceof Error ? e.message : String(e)
				}));
			}
		}, []);
		const actions = T(() => ({ load }), [load]);
		return u(DiaryContext, {
			value: T(() => [state, actions], [state, actions]),
			children
		});
	};
	var LOCALE = "uk-UA";
	var pad = (n) => String(n).padStart(2, "0");
	function parseISO(iso) {
		const [y, m, d] = iso.split("-").map(Number);
		return new Date(y, m - 1, d);
	}
	function toISO(d) {
		return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
	}
	var todayISO = () => toISO(new Date());
	function addDays(iso, n) {
		const d = parseISO(iso);
		d.setDate(d.getDate() + n);
		return toISO(d);
	}
	var weekdayIndex = (iso) => (parseISO(iso).getDay() + 6) % 7;
	function startOfWeek(iso) {
		return addDays(iso, -weekdayIndex(iso));
	}
	var utcDays = (iso) => {
		const [y, m, d] = iso.split("-").map(Number);
		return Date.UTC(y, m - 1, d) / 864e5;
	};
	var weeksBetween = (a, b) => Math.round((utcDays(b) - utcDays(a)) / 7);
	function monthRange(iso) {
		const [y, m] = iso.split("-").map(Number);
		return {
			from: `${y}-${pad(m)}-01`,
			to: toISO(new Date(y, m, 0))
		};
	}
	var fmtDayMonth = new Intl.DateTimeFormat(LOCALE, {
		day: "numeric",
		month: "long"
	});
	var fmtWeekday = new Intl.DateTimeFormat(LOCALE, { weekday: "long" });
	var formatDayMonth = (iso) => fmtDayMonth.format(parseISO(iso));
	var weekdayName = (iso) => fmtWeekday.format(parseISO(iso));
	function formatWeekTitle(weekStart) {
		const start = parseISO(weekStart);
		const end = parseISO(addDays(weekStart, 5));
		return `${start.getMonth() === end.getMonth() ? String(start.getDate()) : fmtDayMonth.format(start)} – ${fmtDayMonth.format(end)} ${end.getFullYear()}`;
	}
	var emptyWeek = () => Array.from({ length: 6 }, () => []);
	function emptySchedule(today) {
		return {
			version: 1,
			weeks: [emptyWeek(), emptyWeek()],
			anchor: {
				weekStart: startOfWeek(today),
				index: 0
			}
		};
	}
	var isScheduleEmpty = (s) => s.weeks.every((w) => w.every((d) => d.every((x) => x == null)));
	function weekIndex(anchor, weekStart) {
		const shift = (weeksBetween(anchor.weekStart, weekStart) % 2 + 2) % 2;
		return (anchor.index + shift) % 2;
	}
	function slotsForDate(s, date) {
		return s.weeks[weekIndex(s.anchor, startOfWeek(date))][weekdayIndex(date)] ?? [];
	}
	function updateDay(s, week, day, fn) {
		const weeks = s.weeks.map((w, wi) => wi === week ? w.map((d, di) => di === day ? fn(d) : d) : w);
		return {
			...s,
			weeks
		};
	}
	var setSlot = (s, week, day, slot, subjectId) => updateDay(s, week, day, (d) => d.map((v, i) => i === slot ? subjectId : v));
	var addSlot = (s, week, day) => updateDay(s, week, day, (d) => d.length >= 10 ? d : [...d, null]);
	var removeLastSlot = (s, week, day) => updateDay(s, week, day, (d) => d.slice(0, -1));
	function copyWeek(s, from) {
		const clone = (w) => w.map((d) => [...d]);
		return {
			...s,
			weeks: from === 0 ? [s.weeks[0], clone(s.weeks[0])] : [clone(s.weeks[1]), s.weeks[1]]
		};
	}
	var setAnchor = (s, weekStart, index) => ({
		...s,
		anchor: {
			weekStart: startOfWeek(weekStart),
			index
		}
	});
	function parseSchedule(value, today) {
		const fallback = emptySchedule(today);
		if (!value || typeof value !== "object") return fallback;
		const v = value;
		const parseWeek = (w) => Array.from({ length: 6 }, (_, d) => {
			const day = Array.isArray(w) ? w[d] : void 0;
			return Array.isArray(day) ? day.slice(0, 10).map((x) => typeof x === "number" ? x : null) : [];
		});
		const weeks = Array.isArray(v.weeks) ? v.weeks : [];
		const a = v.anchor;
		const anchorOk = !!a && typeof a.weekStart === "string" && /^\d{4}-\d{2}-\d{2}$/.test(a.weekStart) && (a.index === 0 || a.index === 1);
		return {
			version: 1,
			weeks: [parseWeek(weeks[0]), parseWeek(weeks[1])],
			anchor: anchorOk ? {
				weekStart: a.weekStart,
				index: a.index
			} : fallback.anchor
		};
	}
	var KEY$1 = "dp:schedule:v1";
	async function loadSchedule() {
		try {
			const raw = localStorage.getItem(KEY$1);
			return parseSchedule(raw ? JSON.parse(raw) : null, todayISO());
		} catch {
			return parseSchedule(null, todayISO());
		}
	}
	async function saveSchedule(schedule) {
		try {
			localStorage.setItem(KEY$1, JSON.stringify(schedule));
		} catch {}
	}
	var ScheduleContext = (0, preact.createContext)(null);
	var useScheduleContext = () => {
		const ctx = x(ScheduleContext);
		if (!ctx) throw new Error("useScheduleContext must be used inside ScheduleContextProvider");
		return ctx;
	};
	var ScheduleContextProvider = ({ children }) => {
		const [state, setState] = d(() => ({
			loaded: false,
			schedule: emptySchedule(todayISO())
		}));
		const latest = A(state.schedule);
		h(() => {
			let alive = true;
			loadSchedule().then((schedule) => {
				if (!alive) return;
				latest.current = schedule;
				setState({
					loaded: true,
					schedule
				});
			});
			return () => {
				alive = false;
			};
		}, []);
		const update = q((fn) => {
			const next = fn(latest.current);
			latest.current = next;
			setState({
				loaded: true,
				schedule: next
			});
			saveSchedule(next);
		}, []);
		const actions = T(() => ({ update }), [update]);
		const value = T(() => [state, actions], [state, actions]);
		return u(ScheduleContext.Provider, {
			value,
			children
		});
	};
	var KEY = "dp:hw-done:v1";
	function read() {
		try {
			const parsed = JSON.parse(localStorage.getItem(KEY) ?? "[]");
			return new Set(Array.isArray(parsed) ? parsed.map(String) : []);
		} catch {
			return new Set();
		}
	}
	function write(set) {
		try {
			localStorage.setItem(KEY, JSON.stringify([...set]));
		} catch {
			console.warn("Failed to write homework done state to localStorage");
		}
	}
	var hwKey = (lessonId, hwId) => `${lessonId}:${hwId}`;
	function useHomeworkDone() {
		const [done, setDone] = d(read);
		const toggle = (key) => {
			const next = new Set(done);
			if (next.has(key)) next.delete(key);
			else next.add(key);
			write(next);
			setDone(next);
		};
		return {
			done,
			toggle
		};
	}
	function buildHomeworkIndex(lessons) {
		const bySubject = new Map();
		for (const l of lessons) {
			let dates = bySubject.get(l.subjectId);
			if (!dates) {
				dates = new Map();
				bySubject.set(l.subjectId, dates);
			}
			let group = dates.get(l.date);
			if (!group) {
				group = {
					date: l.date,
					items: []
				};
				dates.set(l.date, group);
			}
			for (const h of l.homework) group.items.push({
				lessonId: l.id,
				id: h.id,
				text: h.text
			});
		}
		const index = new Map();
		for (const [subjectId, dates] of bySubject) index.set(subjectId, [...dates.values()].sort((a, b) => a.date.localeCompare(b.date)));
		return index;
	}
	function dueHomework(index, subjectId, date, today) {
		let source;
		for (const g of index.get(subjectId) ?? []) {
			if (g.date >= date || g.date > today) break;
			source = g;
		}
		return {
			sourceDate: source?.date ?? null,
			items: source?.items ?? []
		};
	}
	function groupLessonsByDate(lessons) {
		const byDate = new Map();
		for (const l of lessons) {
			const list = byDate.get(l.date);
			if (list) list.push(l);
			else byDate.set(l.date, [l]);
		}
		return byDate;
	}
	function buildDay(date, ctx) {
		const dayLessons = ctx.lessonsByDate.get(date) ?? [];
		const slotSubjects = isScheduleEmpty(ctx.schedule) ? dayLessons.map((l) => l.subjectId) : slotsForDate(ctx.schedule, date);
		const matched = new Set();
		const shown = new Set();
		return {
			date,
			slots: slotSubjects.map((subjectId, i) => {
				const number = i + 1;
				if (subjectId == null) return {
					number,
					subjectId: null,
					subjectTitle: null,
					colorNum: 0,
					due: null,
					lesson: null
				};
				const lesson = dayLessons.find((l) => l.subjectId === subjectId && !matched.has(l.id)) ?? null;
				if (lesson) matched.add(lesson.id);
				const subject = ctx.subjectsById.get(subjectId);
				const first = !shown.has(subjectId);
				shown.add(subjectId);
				return {
					number,
					subjectId,
					subjectTitle: subject?.title ?? lesson?.subject ?? null,
					colorNum: subject?.colorNum ?? lesson?.colorNum ?? 0,
					due: first ? dueHomework(ctx.homework, subjectId, date, ctx.today) : null,
					lesson
				};
			}),
			extra: dayLessons.filter((l) => !matched.has(l.id))
		};
	}
	var subjectColor = (colorNum) => `hsl(${colorNum * 47 % 360} 55% 36%)`;
	var markTone = (value) => value >= 10 ? "good" : value >= 7 ? "mid" : "low";
	var formatAvg = (value) => value == null ? "—" : value.toFixed(1);
	var capitalize = (s) => s ? s[0].toUpperCase() + s.slice(1) : s;
	function Side({ lesson }) {
		if (!lesson) return null;
		if (lesson.absence) return u("span", {
			class: "dp-abs",
			title: lesson.absence.title,
			children: lesson.absence.short
		});
		if (lesson.mark != null) return u("span", {
			class: `dp-mark dp-mark--${markTone(lesson.mark)}`,
			children: lesson.mark
		});
		return null;
	}
	function SlotRow({ slot, done, onToggle }) {
		const [isInfoOpen, setIsInfoOpen] = d(false);
		const style = slot.subjectId != null ? `--c:${subjectColor(slot.colorNum)}` : void 0;
		const due = slot.due;
		console.log("slot", slot, "due", due, "done", done);
		const handleInfoClick = (e) => {
			e.stopPropagation();
			e.preventDefault();
			setIsInfoOpen((o) => !o);
		};
		const closeInfoModal = (e) => {
			setIsInfoOpen(false);
		};
		const renderLessonTopic = () => {
			if (!slot.lesson?.topic) return null;
			return u(preact.Fragment, { children: [u("span", {
				class: "dp-row-info-icon",
				onClick: handleInfoClick,
				children: "i"
			}), isInfoOpen && u("div", {
				class: "dp-row-info-popup",
				children: [u("p", { children: ["Попередня тема уроку: ", u("span", { children: slot.lesson.topic })] }), u("button", {
					onClick: closeInfoModal,
					children: "Ok"
				})]
			})] });
		};
		return u("div", {
			class: "dp-row",
			children: [
				u("span", {
					class: "dp-num",
					children: slot.number
				}),
				u("span", {
					class: "dp-subject",
					style,
					title: slot.lesson?.topic ?? void 0,
					children: slot.subjectId == null ? "" : slot.subjectTitle ?? "Неизвестный предмет"
				}),
				u("div", {
					class: "dp-hw",
					children: due?.sourceDate && (due.items.length === 0 ? u("span", {
						class: "dp-hw-none",
						children: ["не задано ", renderLessonTopic()]
					}) : u(preact.Fragment, { children: [u("div", {
						class: "dp-hw-from",
						children: [
							"задано ",
							formatDayMonth(due.sourceDate),
							renderLessonTopic()
						]
					}), due.items.map((h) => {
						const key = hwKey(h.lessonId, h.id);
						const isDone = done.has(key);
						return u("div", { children: u("label", {
							class: `dp-hw-item${isDone ? " dp-hw-item--done" : ""}`,
							children: [u("input", {
								type: "checkbox",
								checked: isDone,
								onChange: () => onToggle(key)
							}), u("span", { children: h.text })]
						}, key) });
					})] }))
				}),
				u("div", {
					class: "dp-side",
					children: u(Side, { lesson: slot.lesson })
				})
			]
		});
	}
	function DayBlock({ day, isToday, done, onToggle }) {
		const empty = day.slots.length === 0 && day.extra.length === 0;
		return u("section", {
			class: `dp-day${isToday ? " dp-day--today" : ""}`,
			children: [
				u("header", {
					class: "dp-day-head",
					children: [
						u("span", {
							class: "dp-day-name",
							children: capitalize(weekdayName(day.date))
						}),
						u("span", {
							class: "dp-day-date",
							children: formatDayMonth(day.date)
						}),
						isToday && u("span", {
							class: "dp-today-badge",
							children: "сьогодні"
						})
					]
				}),
				empty && u("div", {
					class: "dp-row dp-row--empty",
					children: "Уроків немає"
				}),
				day.slots.map((s) => u(SlotRow, {
					slot: s,
					done,
					onToggle
				}, s.number)),
				day.extra.length > 0 && u("div", {
					class: "dp-extra",
					children: [u("div", {
						class: "dp-extra-title",
						children: "Поза розкладом"
					}), day.extra.map((l) => u("div", {
						class: "dp-row",
						children: [
							u("span", {
								class: "dp-num",
								children: "•"
							}),
							u("span", {
								class: "dp-subject",
								style: `--c:${subjectColor(l.colorNum)}`,
								title: l.topic ?? void 0,
								children: l.subject
							}),
							u("div", { class: "dp-hw" }),
							u("div", {
								class: "dp-side",
								children: u(Side, { lesson: l })
							})
						]
					}, l.id))]
				})
			]
		});
	}
	function Diary({ onOpenSchedule }) {
		const [{ lessons, subjects }] = useDiaryContext();
		const [{ schedule }] = useScheduleContext();
		const { done, toggle } = useHomeworkDone();
		const today = todayISO();
		const thisWeek = startOfWeek(today);
		const [weekStart, setWeekStart] = d(thisWeek);
		const ctx = T(() => ({
			schedule,
			subjectsById: new Map(subjects.map((s) => [s.id, s])),
			lessonsByDate: groupLessonsByDate(lessons),
			homework: buildHomeworkIndex(lessons),
			today
		}), [
			schedule,
			subjects,
			lessons,
			today
		]);
		const days = T(() => Array.from({ length: 6 }, (_, i) => buildDay(addDays(weekStart, i), ctx)), [ctx, weekStart]);
		const scheduleEmpty = isScheduleEmpty(schedule);
		const parity = weekIndex(schedule.anchor, weekStart) === 0 ? "непарний" : "парний";
		const renderDays = (part) => part.map((d) => u(DayBlock, {
			day: d,
			isToday: d.date === today,
			done,
			onToggle: toggle
		}, d.date));
		return u("div", { children: [
			scheduleEmpty && u("div", {
				class: "dp-banner",
				children: [u("span", { children: "Розклад не заповнений, тому уроки в щоденнику відображаються лише за датами." }), u("button", {
					class: "dp-btn",
					onClick: onOpenSchedule,
					children: "Заповнити розклад"
				})]
			}),
			u("div", {
				class: "dp-weeknav",
				children: [
					u("button", {
						class: "dp-btn",
						"aria-label": "Попередній тиждень",
						onClick: () => setWeekStart(addDays(weekStart, -7)),
						children: "‹"
					}),
					u("div", {
						class: "dp-week-center",
						children: [u("h2", {
							class: "dp-week-title",
							children: formatWeekTitle(weekStart)
						}), !scheduleEmpty && u("span", {
							class: "dp-week-parity",
							children: [parity, " тиждень"]
						})]
					}),
					u("button", {
						class: "dp-btn",
						"aria-label": "Наступний тиждень",
						onClick: () => setWeekStart(addDays(weekStart, 7)),
						children: "›"
					}),
					u("button", {
						class: "dp-btn",
						disabled: weekStart === thisWeek,
						onClick: () => setWeekStart(thisWeek),
						children: "Поточний тиждень"
					})
				]
			}),
			u("div", {
				class: "dp-spread",
				children: [u("div", {
					class: "dp-page",
					children: renderDays(days.slice(0, 3))
				}), u("div", {
					class: "dp-page",
					children: renderDays(days.slice(3))
				})]
			})
		] });
	}
	var average = (values) => values.length ? values.reduce((a, b) => a + b, 0) / values.length : null;
	function gradesBySubject(lessons, from, to) {
		const bySubject = new Map();
		for (const l of lessons) {
			if (l.date < from || l.date > to) continue;
			let s = bySubject.get(l.subjectId);
			if (!s) {
				s = {
					subjectId: l.subjectId,
					subject: l.subject,
					colorNum: l.colorNum,
					marks: [],
					avg: null
				};
				bySubject.set(l.subjectId, s);
			}
			if (l.mark != null) s.marks.push({
				date: l.date,
				value: l.mark
			});
		}
		const subjects = [...bySubject.values()];
		for (const s of subjects) {
			s.marks.sort((a, b) => a.date.localeCompare(b.date));
			s.avg = average(s.marks.map((m) => m.value));
		}
		subjects.sort((a, b) => a.subject.localeCompare(b.subject, "uk"));
		const all = subjects.flatMap((s) => s.marks.map((m) => m.value));
		return {
			subjects,
			total: {
				count: all.length,
				avg: average(all)
			}
		};
	}
	function Average() {
		const [{ lessons }] = useDiaryContext();
		const today = todayISO();
		const [range, setRange] = d(() => monthRange(today));
		const presets = T(() => {
			const list = [{
				label: "Цей місяць",
				range: monthRange(today)
			}, {
				label: "Попередній місяць",
				range: monthRange(addDays(`${today.slice(0, 8)}01`, -1))
			}];
			if (lessons.length) {
				const dates = lessons.map((l) => l.date).sort();
				list.push({
					label: "Весь рік",
					range: {
						from: dates[0],
						to: dates[dates.length - 1]
					}
				});
			}
			return list;
		}, [lessons, today]);
		const report = T(() => gradesBySubject(lessons, range.from, range.to), [lessons, range]);
		const update = (key, value) => {
			if (value) setRange((r) => ({
				...r,
				[key]: value
			}));
		};
		return u("div", {
			class: "dp-card",
			children: [u("div", {
				class: "dp-period",
				children: [
					u("div", {
						class: "dp-presets",
						children: presets.map((p) => u("button", {
							class: `dp-btn${p.range.from === range.from && p.range.to === range.to ? " dp-btn--active" : ""}`,
							onClick: () => setRange(p.range),
							children: p.label
						}, p.label))
					}),
					u("label", {
						class: "dp-date",
						children: [
							"з",
							" ",
							u("input", {
								type: "date",
								value: range.from,
								onInput: (e) => update("from", e.currentTarget.value)
							})
						]
					}),
					u("label", {
						class: "dp-date",
						children: [
							"по",
							" ",
							u("input", {
								type: "date",
								value: range.to,
								onInput: (e) => update("to", e.currentTarget.value)
							})
						]
					})
				]
			}), report.subjects.length === 0 ? u("p", {
				class: "dp-muted dp-empty-note",
				children: "За обраний період уроків немає. Виберіть інший період."
			}) : u("div", {
				class: "dp-table-wrap",
				children: u("table", {
					class: "dp-table",
					children: [
						u("thead", { children: u("tr", { children: [
							u("th", { children: "Предмет" }),
							u("th", { children: "Оцінки" }),
							u("th", {
								class: "dp-th-avg",
								children: "Середня"
							})
						] }) }),
						u("tbody", { children: report.subjects.map((s) => u("tr", { children: [
							u("td", {
								class: "dp-td-subject",
								children: [u("span", {
									class: "dp-dot",
									style: `background:${subjectColor(s.colorNum)}`
								}), s.subject]
							}),
							u("td", { children: s.marks.length ? u("div", {
								class: "dp-chips",
								children: s.marks.map((m, i) => u("span", {
									class: `dp-mark dp-mark--${markTone(m.value)}`,
									title: formatDayMonth(m.date),
									children: m.value
								}, i))
							}) : u("span", {
								class: "dp-muted",
								children: "поки без оцінок"
							}) }),
							u("td", {
								class: "dp-td-avg",
								children: u("span", {
									class: s.avg == null ? "dp-muted" : `dp-avg dp-avg--${markTone(s.avg)}`,
									children: formatAvg(s.avg)
								})
							})
						] }, s.subjectId)) }),
						u("tfoot", { children: u("tr", { children: [
							u("td", { children: "Всі предмети" }),
							u("td", {
								class: "dp-muted",
								children: ["оцінок: ", report.total.count]
							}),
							u("td", {
								class: "dp-td-avg",
								children: u("span", {
									class: report.total.avg == null ? "dp-muted" : `dp-avg dp-avg--${markTone(report.total.avg)}`,
									children: formatAvg(report.total.avg)
								})
							})
						] }) })
					]
				})
			})]
		});
	}
	var WEEK_LABEL = ["Нечётная", "Чётная"];
	function Schedule() {
		const [{ subjects }] = useDiaryContext();
		const [{ schedule }, { update }] = useScheduleContext();
		const thisWeek = startOfWeek(todayISO());
		const currentIdx = weekIndex(schedule.anchor, thisWeek);
		const [week, setWeek] = d(currentIdx);
		const knownIds = T(() => new Set(subjects.map((s) => s.id)), [subjects]);
		const otherWeek = week === 0 ? 1 : 0;
		const onCopy = () => {
			if (window.confirm(`Заменить ${WEEK_LABEL[otherWeek].toLowerCase()} неделю копией ${WEEK_LABEL[week].toLowerCase()}?`)) update((s) => copyWeek(s, week));
		};
		return u("div", {
			class: "dp-card dp-card--wide",
			children: [
				u("p", {
					class: "dp-sched-hint",
					children: "Для каждого дня выберите, какой урок первый, второй и так далее. Если недели отличаются, заполните одну, скопируйте во вторую и поправьте отличия."
				}),
				u("div", {
					class: "dp-sched-controls",
					children: [
						u("div", {
							class: "dp-sched-control",
							children: [u("span", {
								class: "dp-sched-label",
								children: [
									"Эта неделя (",
									formatWeekTitle(thisWeek),
									")"
								]
							}), u("div", {
								class: "dp-seg",
								role: "group",
								"aria-label": "Какая сейчас неделя",
								children: [0, 1].map((i) => u("button", {
									class: `dp-seg-btn${currentIdx === i ? " dp-seg-btn--active" : ""}`,
									"aria-pressed": currentIdx === i,
									onClick: () => update((s) => setAnchor(s, thisWeek, i)),
									children: WEEK_LABEL[i]
								}, i))
							})]
						}),
						u("div", {
							class: "dp-sched-control",
							children: [u("span", {
								class: "dp-sched-label",
								children: "Редактирую"
							}), u("div", {
								class: "dp-seg",
								role: "group",
								"aria-label": "Какую неделю редактировать",
								children: [0, 1].map((i) => u("button", {
									class: `dp-seg-btn${week === i ? " dp-seg-btn--active" : ""}`,
									"aria-pressed": week === i,
									onClick: () => setWeek(i),
									children: [WEEK_LABEL[i], currentIdx === i ? " (сейчас)" : ""]
								}, i))
							})]
						}),
						u("button", {
							class: "dp-btn",
							onClick: onCopy,
							children: [
								"Скопировать в ",
								WEEK_LABEL[otherWeek].toLowerCase(),
								" неделю"
							]
						})
					]
				}),
				u("div", {
					class: "dp-sched-scroll",
					children: u("div", {
						class: "dp-sched-grid",
						children: Array.from({ length: 6 }, (_, d) => {
							const slots = schedule.weeks[week][d];
							return u("div", {
								class: "dp-sched-day",
								children: [
									u("div", {
										class: "dp-sched-day-name",
										children: capitalize(weekdayName(addDays(thisWeek, d)))
									}),
									slots.map((value, i) => u("label", {
										class: "dp-sched-slot",
										children: [u("span", {
											class: "dp-sched-num",
											children: i + 1
										}), u("select", {
											class: "dp-select",
											value: value == null ? "" : String(value),
											onChange: (e) => update((s) => setSlot(s, week, d, i, e.currentTarget.value === "" ? null : Number(e.currentTarget.value))),
											children: [
												u("option", {
													value: "",
													children: "— нет урока —"
												}),
												value != null && !knownIds.has(value) && u("option", {
													value: String(value),
													children: [
														"Неизвестный предмет (",
														value,
														")"
													]
												}),
												subjects.map((s) => u("option", {
													value: String(s.id),
													children: s.title
												}, s.id))
											]
										})]
									}, i)),
									u("div", {
										class: "dp-sched-actions",
										children: [u("button", {
											class: "dp-btn",
											disabled: slots.length >= 10,
											onClick: () => update((s) => addSlot(s, week, d)),
											children: "+ урок"
										}), u("button", {
											class: "dp-btn",
											disabled: slots.length === 0,
											onClick: () => update((s) => removeLastSlot(s, week, d)),
											children: "− последний"
										})]
									})
								]
							}, d);
						})
					})
				})
			]
		});
	}
	var TABS = [
		{
			id: 0,
			label: "Щоденник"
		},
		{
			id: 1,
			label: "Оцінки"
		},
		{
			id: 2,
			label: "Розклад"
		}
	];
	var Tabs = ({ onClose }) => {
		const [state, { load }] = useDiaryContext();
		const [activeTab, setActiveTab] = d(0);
		h(() => {
			if (state.status === DiaryStateStatus.idle) load();
		}, []);
		const loading = state.status === DiaryStateStatus.loading;
		const hasData = state.lessons.length > 0;
		const failed = state.status === DiaryStateStatus.error;
		const showTabs = hasData || state.status === DiaryStateStatus.ready;
		return u("div", {
			class: "tabs dp-root overlay",
			children: [
				u("div", {
					class: "dp-top",
					children: [u("nav", {
						class: "dp-tabs",
						role: "tablist",
						children: TABS.map((t) => u("button", {
							role: "tab",
							"aria-selected": activeTab === t.id,
							class: `dp-tab${activeTab === t.id ? " dp-tab--active" : ""}`,
							onClick: () => setActiveTab(t.id),
							children: t.label
						}, t.id))
					}), u("div", {
						class: "dp-top-right",
						children: [
							loading && hasData && u("span", {
								class: "dp-muted",
								children: "Оновлюю дані…"
							}),
							u("button", {
								class: "dp-btn",
								disabled: loading,
								onClick: () => load({ force: true }),
								children: "Оновити"
							}),
							u("button", {
								class: "dp-btn dp-btn--error",
								onClick: onClose,
								children: "Закрити"
							})
						]
					})]
				}),
				failed && u("div", {
					class: "dp-error",
					role: "alert",
					children: [
						"Не вдалося загрузити дані: ",
						state.message || "невідома помилка",
						". Натисни «Оновити», щоб повторити."
					]
				}),
				!hasData && !failed && !showTabs && u("p", {
					class: "dp-muted dp-state",
					children: "Загрузка щоденника…"
				}),
				showTabs && 0 === activeTab && u(Diary, { onOpenSchedule: () => setActiveTab(2) }),
				showTabs && 1 === activeTab && u(Average, {}),
				showTabs && 2 === activeTab && u(Schedule, {})
			]
		});
	};
	function App() {
		const [open, setOpen] = d(false);
		const [successData, setSuccessData] = d(false);
		const form = A(null);
		const handleSetAccessItems = (e) => {
			e.preventDefault();
			e.stopPropagation();
			const result = setAccessItems(form.current?.user?.value, form.current?.access?.value);
			if (!result) alert("Данні не встановлено! Спробуй ще раз!");
			setSuccessData(result);
		};
		h(() => {
			const accessValues = getAccessItems();
			setSuccessData(Boolean(accessValues?.accessKey && accessValues?.userKey));
		}, []);
		return u(DiaryContextProvider, { children: u(ScheduleContextProvider, { children: [successData ? u("button", {
			class: "fab",
			onClick: () => setOpen(true),
			children: "Щоденник+"
		}) : u("form", {
			class: "fab",
			ref: form,
			onSubmit: handleSetAccessItems,
			children: [
				u("input", {
					id: "user",
					type: "text"
				}),
				u("input", {
					id: "access",
					type: "text"
				}),
				u("button", {
					type: "submit",
					children: "Увійти"
				})
			]
		}), open && u(Tabs, { onClose: () => setOpen(false) })] }) });
	}
	var styles_default = ".fab{z-index:2147483647;color:#fff;background:#e53935;border:0;border-radius:8px;padding:10px 14px;position:fixed;bottom:16px;right:16px}.overlay{z-index:2147483647;color:#222;background:#fff;padding:24px;font-family:sans-serif;position:fixed;inset:0}.dp-root{--dp-desk:#d8d3c5;--dp-paper:#fbf7ea;--dp-line:#bcd0e8;--dp-margin:#e07a7a;--dp-ink:#24408e;--dp-text:#2b2b2b;--dp-muted:#7b7667;--dp-accent:#c8102e;--dp-good:#1f7a3d;--dp-mid:#24408e;--dp-low:#b3261e;--dp-print:\"Iowan Old Style\", \"Palatino Linotype\", Palatino, Georgia, serif;--dp-hand:\"Bradley Hand\", \"Segoe Print\", \"Comic Sans MS\", \"Marker Felt\", cursive;--dp-ui:system-ui, -apple-system, \"Segoe UI\", Roboto, sans-serif;box-sizing:border-box;background:var(--dp-desk);height:100%;color:var(--dp-text);font:15px/1.4 var(--dp-ui);padding:16px 24px 40px;overflow:auto}.dp-root *,.dp-root :before,.dp-root :after{box-sizing:border-box}.dp-root button{font:inherit;color:inherit;cursor:pointer}.dp-root :focus-visible{outline:2px solid var(--dp-accent);outline-offset:2px}.dp-muted{color:var(--dp-muted)}.dp-top{justify-content:space-between;align-items:flex-end;gap:12px;max-width:1200px;margin:0 auto;display:flex}.dp-tabs{gap:4px;display:flex}.dp-tab{font-family:var(--dp-print);background:0 0;border:0;border-bottom:3px solid #0000;padding:8px 18px;font-size:18px}.dp-tab--active{border-bottom-color:var(--dp-accent);font-weight:700}.dp-top-right{align-items:center;gap:10px;padding-bottom:6px;display:flex}.dp-btn{background:var(--dp-paper);border:1px solid #b2ab98;border-radius:6px;padding:6px 12px}.dp-btn--error{background:var(--dp-margin);color:#fff!important}.dp-btn:hover:not(:disabled){background:#fff}.dp-btn--error:hover{background:var(--dp-low)!important;color:#fff!important}.dp-btn:disabled{opacity:.5;cursor:default}.dp-btn--active{border-color:var(--dp-accent);color:var(--dp-accent);font-weight:600}.dp-error{border:1px solid var(--dp-low);color:#6d1510;background:#fbe3e1;border-radius:6px;max-width:1200px;margin:14px auto 0;padding:10px 14px}.dp-state{max-width:1200px;margin:24px auto}.dp-weeknav{flex-wrap:wrap;justify-content:center;align-items:center;gap:12px;max-width:1200px;margin:16px auto 0;display:flex}.dp-week-title{font:italic 700 22px/1.2 var(--dp-print);text-align:center;min-width:17ch;margin:0}.dp-spread{background:var(--dp-paper);border-radius:6px;grid-template-columns:1fr 1fr;max-width:1200px;margin:14px auto 0;display:grid;position:relative;box-shadow:0 8px 28px #3c321e38}.dp-spread:before{content:\"\";pointer-events:none;background:linear-gradient(90deg,#0000,#3c321e21 50%,#0000);width:56px;position:absolute;top:0;bottom:0;left:50%;transform:translate(-50%)}.dp-page{padding:20px 28px 12px 48px;position:relative}.dp-page:before{content:\"\";background:var(--dp-margin);opacity:.75;width:2px;position:absolute;top:0;bottom:0;left:32px}.dp-day{margin-bottom:22px}.dp-day-head{border-bottom:2px solid var(--dp-ink);align-items:baseline;gap:10px;padding-bottom:3px;display:flex}.dp-day--today .dp-day-head{border-bottom-color:var(--dp-accent)}.dp-day-name{font:italic 700 20px/1.2 var(--dp-print)}.dp-day-date{font:14px var(--dp-print);color:var(--dp-muted)}.dp-today-badge{font:17px var(--dp-hand);color:var(--dp-accent);margin-left:auto;transform:rotate(-3deg)}.dp-row{border-bottom:1px solid var(--dp-line);grid-template-columns:22px 9.5em 1fr 40px;align-items:center;gap:8px;min-height:44px;padding:4px 0;display:grid;position:relative}.dp-row--empty{font:italic 14px var(--dp-print);color:var(--dp-muted);padding-top:10px;display:block}.dp-row-info-icon{border:1px solid var(--dp-good);width:16px;height:16px;font:700 14px var(--dp-hand);color:var(--dp-good);text-align:center;cursor:pointer;background:#fff;border-radius:50%;margin-left:4px;display:inline-block}.dp-row-info-popup{z-index:1;background:#fff;border-radius:5px;flex-direction:column;gap:16px;width:300px;padding:16px;font-size:14px;display:flex;position:absolute;top:0;box-shadow:0 8px 28px #3c321e38}.dp-row-info-popup span{color:#000;font-size:16px;font-style:normal}.dp-num{font:13px var(--dp-print);color:var(--dp-muted);text-align:right}.dp-subject{font:600 14px/1.25 var(--dp-print);color:var(--c,var(--dp-text))}.dp-hw{font:17px/1.25 var(--dp-hand);color:var(--dp-ink)}.dp-hw-item{white-space:pre-line;cursor:pointer;align-items:baseline;gap:8px;padding:1px 0;display:flex}.dp-hw-item input{accent-color:var(--dp-accent);flex:none;transform:translateY(2px)}.dp-hw-item--done span{opacity:.45;text-decoration:line-through}.dp-side{justify-content:center;display:flex}.dp-abs{font:700 22px var(--dp-hand);color:var(--dp-low)}.dp-mark{min-width:30px;height:30px;font:700 17px var(--dp-hand);border:2px solid;border-radius:50%;place-items:center;padding:0 4px;display:inline-grid}.dp-mark--good{color:var(--dp-good)}.dp-mark--mid{color:var(--dp-mid)}.dp-mark--low{color:var(--dp-low)}.dp-card{background:var(--dp-paper);border-radius:6px;max-width:1000px;margin:16px auto 0;padding:18px 24px 8px;box-shadow:0 8px 28px #3c321e38}.dp-period{flex-wrap:wrap;align-items:center;gap:10px 16px;margin-bottom:12px;display:flex}.dp-presets{flex-wrap:wrap;gap:8px;display:flex}.dp-date{align-items:center;gap:6px;display:flex}.dp-date input{font:inherit;background:#fff;border:1px solid #b2ab98;border-radius:6px;padding:5px 8px}.dp-empty-note{padding:12px 0 16px}.dp-table-wrap{overflow-x:auto}.dp-table{border-collapse:collapse;width:100%}.dp-table th{text-align:left;font:italic 700 15px var(--dp-print);border-bottom:2px solid var(--dp-ink);padding:8px 10px}.dp-table td{border-bottom:1px solid var(--dp-line);vertical-align:middle;padding:10px}.dp-table tfoot td{border-bottom:0;border-top:2px solid var(--dp-ink);font-weight:600}.dp-th-avg,.dp-td-avg{text-align:right;width:7em}.dp-td-subject{font:600 15px var(--dp-print);white-space:nowrap}.dp-dot{border-radius:50%;width:10px;height:10px;margin-right:8px;display:inline-block}.dp-chips{flex-wrap:wrap;gap:6px;display:flex}.dp-avg{font:700 22px var(--dp-hand)}.dp-avg--good{color:var(--dp-good)}.dp-avg--mid{color:var(--dp-mid)}.dp-avg--low{color:var(--dp-low)}@media (width<=900px){.dp-spread{grid-template-columns:1fr}.dp-spread:before{display:none}.dp-root{padding:12px}.dp-page{padding-right:16px}}@media (width<=500px){.dp-top{flex-direction:column-reverse;align-items:center}.dp-top-right{align-self:flex-end}.dp-page{padding:4px}.dp-page:before{display:none}.dp-row{grid-template-columns:8px 6.5em 1fr 35px}.dp-row-info-popup{width:250px}.dp-row-info-popup p{flex-direction:column;display:flex}}.dp-banner{background:#fff4cf;border:1px solid #d9bd62;border-radius:6px;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px;max-width:1200px;margin:14px auto 0;padding:10px 14px;display:flex}.dp-week-center{justify-items:center;display:grid}.dp-week-parity{font:15px var(--dp-hand);color:var(--dp-ink)}.dp-hw-from{font:italic 12px var(--dp-print);color:var(--dp-muted)}.dp-hw-none{font:italic 14px var(--dp-print);color:var(--dp-muted)}.dp-extra{margin-top:8px}.dp-extra-title{font:italic 13px var(--dp-print);color:var(--dp-muted)}.dp-card--wide{max-width:1200px;padding-bottom:18px}.dp-sched-hint{color:var(--dp-muted);max-width:70ch;margin:0 0 14px}.dp-sched-controls{flex-wrap:wrap;align-items:flex-end;gap:12px 24px;margin-bottom:16px;display:flex}.dp-sched-control{gap:4px;display:grid}.dp-sched-label{font:italic 13px var(--dp-print);color:var(--dp-muted)}.dp-seg{border:1px solid #b2ab98;border-radius:6px;display:inline-flex;overflow:hidden}.dp-seg-btn{background:0 0;border:0;padding:6px 14px}.dp-seg-btn+.dp-seg-btn{border-left:1px solid #b2ab98}.dp-seg-btn--active{background:var(--dp-accent);color:#fff;font-weight:600}.dp-sched-scroll{overflow-x:auto}.dp-sched-grid{grid-template-columns:repeat(6,minmax(170px,1fr));gap:14px;min-width:1050px;display:grid}.dp-sched-day{flex-direction:column;gap:8px;display:flex}.dp-sched-day-name{border-bottom:2px solid var(--dp-ink);font:italic 700 18px/1.2 var(--dp-print);padding-bottom:3px}.dp-sched-slot{grid-template-columns:18px 1fr;align-items:center;gap:6px;display:grid}.dp-sched-num{font:13px var(--dp-print);color:var(--dp-muted);text-align:right}.dp-select{width:100%;min-width:0;font:inherit;background:#fff;border:1px solid #b2ab98;border-radius:6px;padding:5px 6px}.dp-sched-actions{flex-wrap:wrap;gap:6px;margin-top:2px;display:flex}.dp-sched-actions .dp-btn{padding:4px 8px;font-size:13px}";
	var host = document.createElement("div");
	document.body.appendChild(host);
	var shadow = host.attachShadow({ mode: "open" });
	var style = document.createElement("style");
	style.textContent = styles_default;
	shadow.appendChild(style);
	var mount = document.createElement("div");
	shadow.appendChild(mount);
	(0, preact.render)(u(App, {}), mount);
})(preact);

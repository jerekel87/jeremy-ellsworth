"use client";

import {
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis,
  CartesianGrid, Tooltip,
} from "recharts";

const YELLOW = "#FFF600";
const GRID = "rgba(255, 255, 255, 0.06)";
const TICK = { fill: "#6b6c75", fontSize: 11, fontFamily: "inherit" };

function ChartTooltip({ active, payload, label, suffix }) {
  if (!active || !payload || !payload.length) return null;
  return (
    <div className="cms-tip">
      {label ? <span className="cms-tip__label">{label}</span> : null}
      <strong>{payload[0].value.toLocaleString()}{suffix || ""}</strong>
    </div>
  );
}

export function TrafficChart({ data }) {
  return (
    <div className="cms-chart">
      <ResponsiveContainer width="100%" height={260}>
        <AreaChart data={data} margin={{ top: 12, right: 12, bottom: 4, left: 0 }}>
          <defs>
            <linearGradient id="cmsTraffic" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={YELLOW} stopOpacity={0.24} />
              <stop offset="100%" stopColor={YELLOW} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke={GRID} vertical={false} />
          <XAxis
            dataKey="date" tick={TICK} tickLine={false} axisLine={false}
            interval="preserveStartEnd" minTickGap={48} dy={6}
          />
          <YAxis
            tick={TICK} tickLine={false} axisLine={false} width={42}
            tickFormatter={(v) => (v >= 1000 ? `${(v / 1000).toFixed(v % 1000 ? 1 : 0)}k` : v)}
          />
          <Tooltip
            content={<ChartTooltip suffix=" visitors" />}
            cursor={{ stroke: "rgba(255, 246, 0, 0.35)", strokeDasharray: "4 4" }}
          />
          <Area
            type="monotone" dataKey="visitors"
            stroke={YELLOW} strokeWidth={2.5}
            fill="url(#cmsTraffic)"
            activeDot={{ r: 4.5, fill: YELLOW, stroke: "#121214", strokeWidth: 2 }}
            animationDuration={1200}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function LiveSpark({ data }) {
  return (
    <div className="cms-spark">
      <ResponsiveContainer width="100%" height={78}>
        <AreaChart data={data} margin={{ top: 4, right: 2, bottom: 0, left: 2 }}>
          <defs>
            <linearGradient id="cmsSpark" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={YELLOW} stopOpacity={0.18} />
              <stop offset="100%" stopColor={YELLOW} stopOpacity={0} />
            </linearGradient>
          </defs>
          <Tooltip
            content={<ChartTooltip suffix=" active" />}
            cursor={{ stroke: "rgba(255, 246, 0, 0.35)" }}
          />
          <Area
            type="monotone" dataKey="active"
            stroke={YELLOW} strokeWidth={2}
            fill="url(#cmsSpark)"
            activeDot={{ r: 3.5, fill: YELLOW, stroke: "#121214", strokeWidth: 2 }}
            animationDuration={900}
          />
          <XAxis dataKey="time" hide />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

import { useState } from "react";
import "./index.css";

const trails = [
  { name: "Fern Gully Loop", km: 4.2, climb: 120, level: "Easy", hours: "1.5", note: "Shaded the whole way, with a creek crossing on stepping stones. Good for kids and dogs on a leash." },
  { name: "Lookout Ridge", km: 7.8, climb: 540, level: "Moderate", hours: "3", note: "Steady climb to a viewpoint over the valley. Bring water: there is none after the first kilometre." },
  { name: "Cedar Lake Trail", km: 11.5, climb: 310, level: "Moderate", hours: "4", note: "Ends at a lake where swimming is allowed. The last 2 km are muddy after rain." },
  { name: "Granite Peak", km: 16.0, climb: 1250, level: "Hard", hours: "7", note: "Rocky scramble near the top. Start before 8 am in summer, and turn back if storms build." },
  { name: "Old Rail Path", km: 9.0, climb: 40, level: "Easy", hours: "2.5", note: "Flat gravel on a former railway, stroller and wheelchair friendly. Bikes share the path." },
];

export default function App() {
  const [level, setLevel] = useState("All");
  const shown = trails.filter((t) => level === "All" || t.level === level);

  return (
    <main>
      <header>
        <h1>Trailmix</h1>
        <p>Five day hikes near Pine Hollow, picked by local rangers. Parking at every trailhead is free; the visitor centre opens at 7 am.</p>
      </header>
      <div className="filters">
        {["All", "Easy", "Moderate", "Hard"].map((l) => (
          <button key={l} className={l === level ? "on" : ""} onClick={() => setLevel(l)}>{l}</button>
        ))}
      </div>
      <ul className="trails">
        {shown.map((t) => (
          <li key={t.name}>
            <div className="top"><h2>{t.name}</h2><span className={"lvl " + t.level}>{t.level}</span></div>
            <p className="stats">{t.km} km · {t.climb} m climb · about {t.hours} hours</p>
            <p>{t.note}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

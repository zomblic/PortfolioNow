import "./About.css";
import zomblic from "../assets/images/zomblic.png";

export default function About() {
  return (
    <div className="cyberpunk-container">
    <h1 className="cyberpunk-title">Intro to a Zomblic</h1>
    <p className="cyberpunk-text">

    
      <img src={zomblic} alt="Zomblic" className="zombie-gif" />
      <br />
      <br />
      Zomblic is a sleep-deprived zombie who is learning about the world of coding. While their ADHD finds all the different colors amusing, they struggle with retaining information—as they are a zombie. 
      <br /><br />
      Zomblic last tested their general writing speed and was satisfied with reaching the 100-word area. However, they are currently working on coding typing speed. This causes their fingers to get lost on the keyboard.
      <br /><br />
      When not learning to code and facing the horrors of JavaScript (looking at you React), you can find them rediscovering their lack of skill in house building/interior design within *The Sims 4*, or casually learning all the ways they can die via various other video games (Elden is fine, just spray febreeze at this point!).
    <br /><br />
    All joking aside, I'm a beginner to coding, attempting to absorb all the information. A current goal is to make something that has everyone role their eyes in annoyance and wondered who taught me to code! 
    </p>
  </div>
);
}
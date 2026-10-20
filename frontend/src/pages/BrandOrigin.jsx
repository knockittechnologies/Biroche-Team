import InteriorLayout from "../components/InteriorLayout";
import Reveal from "../components/Reveal";
import { INSTA } from "../lib/site";

export default function BrandOrigin() {
  return (
    <InteriorLayout insta={INSTA.origin} breadcrumb="Brand origin">
      <section className="origin-hero sec-bg-orange">
        <div className="wrap">
          <Reveal dir="up">
            <span className="eyebrow">&#10022; Our Story</span>
            <h1>Where It All Began</h1>
          </Reveal>
        </div>
      </section>

      <section className="story-block sec-bg-orange" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal className="story-img" dir="left">
            <img src="/brioche/where-it-all-began.png" alt="From redundancy to the first Brioche Team food truck" loading="lazy" style={{ width: "100%", height: "auto", objectFit: "contain", display: "block", borderRadius: 22 }} />
          </Reveal>
          <Reveal className="story-text center-only" dir="right">
            <p>Every remarkable story begins with a defining moment. Ours began not in a bustling kitchen or a grand bakery, but in uncertainty. Two brothers, united by ambition, suddenly found themselves without the careers they had spent years building. What many would call an ending, redundancy, became the beginning of something extraordinary.</p>
            <p>Instead of searching for another path, they chose to create one, guided by a lifelong passion that had quietly lived within them since childhood.</p>
          </Reveal>
        </div>
      </section>

      <section className="story-block reverse sec-bg-peach">
        <div className="wrap">
          <Reveal className="story-text" dir="left">
            <h2>A Passion Perfected</h2>
            <p>Long before The Brioche Team had a name, countless evenings were spent perfecting recipes that would never leave the family table. Every loaf, every dessert, every carefully crafted bite was shared with those closest to them. Years of refinement transformed treasured family traditions into something truly exceptional.</p>
            <p>It was friends and family, captivated by every taste, who insisted these creations deserved to be experienced far beyond their own home.</p>
          </Reveal>
          <Reveal className="story-img" dir="right">
            <img src="/brioche/brand-origin-1.jpg" alt="Family gathered around the dinner table" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="story-block sec-bg-orange">
        <div className="wrap">
          <Reveal className="story-img" dir="left">
            <img src="/brioche/brand-origin-2.jpg" alt="Brioche loaf, cubed brioche, and Brioche Bites being made" loading="lazy" />
          </Reveal>
          <Reveal className="story-text center-only" dir="right">
            <h2>The Courage to Create</h2>
            <p>Encouraged by those who believed in them, the brothers made a decision that would change everything. They stepped into the unknown with one simple promise: never compromise on quality, craftsmanship, or imagination.</p>
            <p>From that promise came something the dessert world had never seen before. Their invention of the original Brioche Bites. Golden, buttery, delicately crisp on the outside and irresistibly soft within, they redefined what comfort and indulgence could become.</p>
          </Reveal>
        </div>
      </section>

      <section className="story-block reverse sec-bg-peach">
        <div className="wrap">
          <Reveal className="story-text" dir="left">
            <h2>A Legacy of Indulgence</h2>
            <p>Innovation did not stop there. Alongside the creation of Brioche Bites came a dessert that would become our signature. Our legendary Banana Pudding. Crafted from a closely guarded recipe and layered with exceptional ingredients, it quickly earned a reputation unlike any other.</p>
            <p>Rich yet delicate, nostalgic yet refined, every spoonful became an experience that guests returned for time and time again. For us, luxury has never been about excess. It has always been about unforgettable flavour.</p>
          </Reveal>
          <Reveal className="story-img" dir="right" style={{ maxWidth: "72%", marginLeft: "auto", marginRight: "auto" }}>
            <img src="/brioche/brand-origin-3.jpg" alt="Banana Pudding cup, The Brioche Team" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <Reveal dir="none" amount={0.05}>
        <img className="story-photo-full" src="/brioche/brand-origin-4.jpg" alt="The Brioche Team restaurant interior" loading="lazy" />
      </Reveal>

      <section className="more-dessert sec-bg-peach">
        <div className="wrap">
          <Reveal dir="up">
            <h2>More Than Dessert</h2>
            <p>Today, The Brioche Team is more than a dessert brand. It is a celebration of courage, family, craftsmanship, and the belief that life's greatest moments are often shared around exceptional food.</p>
            <p>Every Brioche Bite we create carries the journey of two brothers who dared to begin again, transforming adversity into artistry. This is only the beginning of our story, and we invite you to become part of the next chapter.</p>
          </Reveal>
        </div>
      </section>
    </InteriorLayout>
  );
}

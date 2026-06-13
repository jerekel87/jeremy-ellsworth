import { reviews } from "@/lib/reviews";

function Card({ r }) {
  return (
    <article className="review" data-cursor="view" data-full={r.full} data-name={r.name} data-co={r.company}>
      <div className="review__stars">★★★★★ <em>5.0</em></div>
      <p>“{r.short}”</p>
      <footer>
        <span className="review__avatar">{r.name[0]}</span>
        <div><strong>{r.name}</strong><span>{r.company}</span></div>
      </footer>
    </article>
  );
}

export default function ReviewsStrip() {
  return (
    <div className="reviews__rows">
      <div className="reviews__row">
        <div className="reviews__track">
          <div className="reviews__group">
            {reviews.map((r) => <Card key={r.name} r={r} />)}
          </div>
          <div className="reviews__group" aria-hidden="true">
            {reviews.map((r) => <Card key={r.name} r={r} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

import { ReviewCard } from "@/components/ReviewCard";
import { REVIEWS } from "@/constants/data";

export const Reviews = () => {
  return (
    <section
      id="reviews"
      className="py-20 px-4 bg-gradient-to-br from-pink-50 to-cyan-50"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Отзывы клиентов
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

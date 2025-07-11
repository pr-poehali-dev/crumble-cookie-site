import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Review } from "@/types";

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <Card className="p-6 border-pink-100">
      <div className="flex items-center mb-4">
        <div className="flex text-yellow-400 mr-2">
          {[...Array(5)].map((_, i) => (
            <Icon
              key={i}
              name="Star"
              size={16}
              className={i < review.rating ? "fill-current" : ""}
            />
          ))}
        </div>
        <span className="text-sm text-gray-500">{review.date}</span>
      </div>
      <p className="text-gray-700 mb-4">"{review.text}"</p>
      <p className="font-semibold text-gray-800">{review.name}</p>
    </Card>
  );
};

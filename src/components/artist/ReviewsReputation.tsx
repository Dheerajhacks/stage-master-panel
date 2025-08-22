import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Textarea } from "../ui/textarea";

export const ReviewsReputation = () => {
  const mockReviews = [
    {
      id: "1",
      client: "Sarah Johnson",
      rating: 5,
      review: "Absolutely amazing work! The photos exceeded our expectations and captured every beautiful moment of our wedding day.",
      date: "2024-01-10",
      event: "Wedding Photography",
      replied: false
    },
    {
      id: "2",
      client: "Mike Chen", 
      rating: 5,
      review: "Professional, punctual, and delivered high-quality headshots for our entire team. Highly recommend!",
      date: "2024-01-08",
      event: "Corporate Headshots",
      replied: true
    }
  ];

  const badges = [
    { name: "Top Rated", earned: true, description: "Maintain 4.8+ rating" },
    { name: "Verified Artist", earned: true, description: "Complete verification process" },
    { name: "Trending", earned: false, description: "Be in top 10% bookings this month" },
    { name: "Quick Responder", earned: true, description: "Reply within 2 hours" }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Reviews & Reputation</h2>
      
      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600">Average Rating</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">4.9</div>
            <div className="text-sm text-gray-600">Based on 47 reviews</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600">Total Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">47</div>
            <div className="text-sm text-gray-600">+3 this month</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600">Response Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">89%</div>
            <div className="text-sm text-gray-600">Average reply time: 4 hours</div>
          </CardContent>
        </Card>
      </div>

      {/* Achievement Badges */}
      <Card>
        <CardHeader>
          <CardTitle>Achievement Badges</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {badges.map((badge) => (
              <div key={badge.name} className={`p-4 border rounded-lg text-center ${badge.earned ? 'bg-green-50 border-green-200' : 'bg-gray-50'}`}>
                <div className={`w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center ${badge.earned ? 'bg-green-500' : 'bg-gray-300'}`}>
                  <span className="text-white font-bold">✓</span>
                </div>
                <h4 className="font-medium">{badge.name}</h4>
                <p className="text-xs text-gray-600 mt-1">{badge.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Reviews */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Reviews</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {mockReviews.map((review) => (
              <div key={review.id} className="border-b pb-6 last:border-b-0">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-medium">{review.client}</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(review.rating)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{review.event} • {review.date}</p>
                  </div>
                  <Badge variant={review.replied ? "default" : "outline"}>
                    {review.replied ? "Replied" : "Pending Reply"}
                  </Badge>
                </div>
                
                <p className="text-gray-800 mb-4">{review.review}</p>
                
                {!review.replied && (
                  <div className="space-y-3">
                    <Textarea 
                      placeholder="Write a reply to this review..."
                      className="min-h-[80px]"
                    />
                    <Button size="sm">Send Reply</Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
import { useState } from "react";
import { Star, MessageSquare, Award, TrendingUp, Reply, ThumbsUp } from "lucide-react";
import * as AvatarPrimitive from "@radix-ui/react-avatar"

export const ReviewsReputation = () => {
  const [replyText, setReplyText] = useState("");
  const [selectedReview, setSelectedReview] = useState<any>(null);

  const stats = {
    averageRating: 4.8,
    totalReviews: 87,
    responseRate: 92,
    repeatClients: 68
  };

  const recentReviews = [
    {
      id: 1,
      client: "Sarah Johnson",
      rating: 5,
      date: "Dec 10, 2024",
      event: "Wedding Photography",
      review: "Absolutely amazing work! The photos captured every precious moment of our special day. Professional, creative, and so easy to work with.",
      replied: false,
      helpful: 12
    },
    {
      id: 2,
      client: "Michael Chen",
      rating: 5,
      date: "Dec 8, 2024",
      event: "Corporate Event",
      review: "Outstanding photography for our company event. Great attention to detail and delivered photos quickly. Highly recommend!",
      replied: true,
      reply: "Thank you so much for the kind words! It was a pleasure working with your team.",
      helpful: 8
    },
    {
      id: 3,
      client: "Emma Davis",
      rating: 4,
      date: "Dec 5, 2024",
      event: "Portrait Session",
      review: "Great experience overall. The photographer was professional and the photos turned out beautiful. Would book again!",
      replied: false,
      helpful: 5
    }
  ];

  const badges = [
    { name: "Top Rated", icon: Award, description: "Consistently high ratings", earned: true },
    { name: "Quick Responder", icon: Reply, description: "Responds within 1 hour", earned: true },
    { name: "Repeat Client Favorite", icon: ThumbsUp, description: "High repeat booking rate", earned: true },
    { name: "Rising Star", icon: TrendingUp, description: "Growing popularity", earned: false }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ));
  };

  const handleReply = (reviewId: number) => {
    console.log("Replying to review:", reviewId, "with:", replyText);
    setReplyText("");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
          <Star className="mr-2 h-6 w-6" />
          Reviews & Reputation
        </h2>
        <p className="text-gray-500">Manage your reviews and track your reputation badges</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="text-2xl font-semibold leading-none tracking-tight text-sm font-medium">Average Rating</h3>
            <Star className="h-4 w-4 text-yellow-400" />
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">{stats.averageRating}</div>
            <div className="flex items-center space-x-1 mt-1">
              {renderStars(Math.floor(stats.averageRating))}
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="text-2xl font-semibold leading-none tracking-tight text-sm font-medium">Total Reviews</h3>
            <MessageSquare className="h-4 w-4 text-blue-500" />
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">{stats.totalReviews}</div>
            <p className="text-xs text-gray-500 mt-1">+12 this month</p>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="text-2xl font-semibold leading-none tracking-tight text-sm font-medium">Response Rate</h3>
            <Reply className="h-4 w-4 text-green-500" />
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">{stats.responseRate}%</div>
            <p className="text-xs text-gray-500 mt-1">Within 24 hours</p>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="text-2xl font-semibold leading-none tracking-tight text-sm font-medium">Repeat Clients</h3>
            <ThumbsUp className="h-4 w-4 text-purple-500" />
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">{stats.repeatClients}%</div>
            <p className="text-xs text-gray-500 mt-1">Book again</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Reviews */}
        <div className="lg:col-span-2">
          <div className="rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight text-lg">Recent Reviews</h3>
              <p className="text-sm text-gray-500">Latest feedback from your clients</p>
            </div>
            <div className="p-6 pt-0 space-y-6">
              {recentReviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <AvatarPrimitive.Root className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                        <AvatarPrimitive.Image className="aspect-square h-full w-full" src={`/api/placeholder/40/40`} alt={review.client} />
                        <AvatarPrimitive.Fallback className="flex h-full w-full items-center justify-center rounded-full bg-gray-100">{review.client.split(' ').map(n => n[0]).join('')}</AvatarPrimitive.Fallback>
                      </AvatarPrimitive.Root>
                      <div>
                        <div className="font-medium">{review.client}</div>
                        <div className="text-sm text-gray-500">{review.event} • {review.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        {renderStars(review.rating)}
                      </div>
                      <span className="text-sm text-gray-500">{review.helpful} helpful</span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-3">{review.review}</p>

                  {review.replied ? (
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Reply className="h-4 w-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-600">Your Reply</span>
                      </div>
                      <p className="text-sm text-gray-700">{review.reply}</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <textarea
                        className="flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[80px]"
                        placeholder="Write a thoughtful reply to this review..."
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                      />
                      <div className="flex justify-end space-x-2">
                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900 h-9 rounded-md px-3">
                          Save Draft
                        </button>
                        <button onClick={() => handleReply(review.id)} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-9 rounded-md px-3">
                          <Reply className="h-4 w-4 mr-2" />
                          Reply
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900 h-10 px-4 py-2 w-full">
                View All Reviews
              </button>
            </div>
          </div>
        </div>

        {/* Reputation Badges */}
        <div>
          <div className="rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight text-lg">Reputation Badges</h3>
              <p className="text-sm text-gray-500">Your earned achievements</p>
            </div>
            <div className="p-6 pt-0 space-y-4">
              {badges.map((badge, index) => (
                <div key={index} className={`p-3 rounded-lg border ${badge.earned ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-full ${badge.earned ? 'bg-green-100' : 'bg-gray-100'}`}>
                      <badge.icon className={`h-4 w-4 ${badge.earned ? 'text-green-600' : 'text-gray-400'}`} />
                    </div>
                    <div className="flex-1">
                      <div className={`font-medium ${badge.earned ? 'text-green-900' : 'text-gray-500'}`}>
                        {badge.name}
                      </div>
                      <div className="text-sm text-gray-500">{badge.description}</div>
                    </div>
                    {badge.earned && (
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-100 text-green-800 border-green-200">
                        Earned
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rating Distribution */}
          <div className="rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm mt-6">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight text-lg">Rating Distribution</h3>
            </div>
            <div className="p-6 pt-0 space-y-3">
              {[5, 4, 3, 2, 1].map((rating) => {
                const percentage = rating === 5 ? 75 : rating === 4 ? 20 : rating === 3 ? 3 : rating === 2 ? 1 : 1;
                return (
                  <div key={rating} className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1 w-12">
                      <span className="text-sm">{rating}</span>
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-yellow-400 h-2 rounded-full" 
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-500 w-10">{percentage}%</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
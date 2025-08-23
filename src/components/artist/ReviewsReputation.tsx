import * as React from "react"
import { useState } from "react";
import { Star, MessageSquare, Award, TrendingUp, Reply, ThumbsUp } from "lucide-react";
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cn } from "../../lib/utils"

// Inline UI components with direct Tailwind classes
const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: string; size?: string }>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    const variants = {
      default: "bg-blue-600 text-white hover:bg-blue-700",
      outline: "border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900",
      ghost: "hover:bg-gray-100 hover:text-gray-900"
    }
    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3"
    }
    return (
      <button
        className={cn(baseStyles, variants[variant as keyof typeof variants], sizes[size as keyof typeof sizes], className)}
        ref={ref}
        {...props}
      />
    )
  }
)

const Card = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm", className)} {...props} />
)

const CardHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
)

const CardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
)

const CardDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("text-sm text-gray-500", className)} {...props} />
)

const CardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-6 pt-0", className)} {...props} />
)

const Badge = ({ className, variant = "default", ...props }: React.HTMLAttributes<HTMLDivElement> & { variant?: string }) => {
  const variants = {
    default: "border-transparent bg-blue-600 text-white hover:bg-blue-700",
    secondary: "border-transparent bg-gray-100 text-gray-900 hover:bg-gray-200"
  }
  return (
    <div className={cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold", variants[variant as keyof typeof variants], className)} {...props} />
  )
}

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

const Avatar = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Root>, React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>>(
  ({ className, ...props }, ref) => (
    <AvatarPrimitive.Root ref={ref} className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)} {...props} />
  )
)

const AvatarImage = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Image>, React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>>(
  ({ className, ...props }, ref) => (
    <AvatarPrimitive.Image ref={ref} className={cn("aspect-square h-full w-full", className)} {...props} />
  )
)

const AvatarFallback = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Fallback>, React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>>(
  ({ className, ...props }, ref) => (
    <AvatarPrimitive.Fallback ref={ref} className={cn("flex h-full w-full items-center justify-center rounded-full bg-gray-100", className)} {...props} />
  )
)

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
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
            <Star className="h-4 w-4 text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.averageRating}</div>
            <div className="flex items-center space-x-1 mt-1">
              {renderStars(Math.floor(stats.averageRating))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Reviews</CardTitle>
            <MessageSquare className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalReviews}</div>
            <p className="text-xs text-gray-500 mt-1">+12 this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
            <Reply className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.responseRate}%</div>
            <p className="text-xs text-gray-500 mt-1">Within 24 hours</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Repeat Clients</CardTitle>
            <ThumbsUp className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.repeatClients}%</div>
            <p className="text-xs text-gray-500 mt-1">Book again</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Reviews */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recent Reviews</CardTitle>
              <CardDescription>Latest feedback from your clients</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {recentReviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={`/api/placeholder/40/40`} alt={review.client} />
                        <AvatarFallback>{review.client.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
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
                      <Textarea
                        placeholder="Write a thoughtful reply to this review..."
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        className="min-h-[80px]"
                      />
                      <div className="flex justify-end space-x-2">
                        <Button variant="outline" size="sm">
                          Save Draft
                        </Button>
                        <Button size="sm" onClick={() => handleReply(review.id)}>
                          <Reply className="h-4 w-4 mr-2" />
                          Reply
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <Button variant="outline" className="w-full">
                View All Reviews
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Reputation Badges */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Reputation Badges</CardTitle>
              <CardDescription>Your earned achievements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
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
                      <Badge variant="default" className="bg-green-100 text-green-800 border-green-200">
                        Earned
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Rating Distribution */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">Rating Distribution</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
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
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

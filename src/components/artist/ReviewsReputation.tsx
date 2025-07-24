import { useState } from "react";
import { Star, MessageSquare, Award, TrendingUp, Reply, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export const ReviewsReputation = () => {
  const [replyText, setReplyText] = useState("");
  const [selectedReview, setSelectedReview] = useState<any>(null);

  // Mock reviews data
  const reviews = [
    {
      id: 1,
      client: "Sarah Johnson",
      rating: 5,
      event: "Wedding Photography",
      date: "December 10, 2024",
      review: "Absolutely amazing work! The photographer captured every moment perfectly. The photos are stunning and we couldn't be happier with the results. Highly recommend!",
      avatar: "/api/placeholder/40/40",
      helpful: 12,
      reply: null
    },
    {
      id: 2,
      client: "Tech Corp Inc.",
      rating: 5,
      event: "Corporate Event",
      date: "December 8, 2024",
      review: "Professional, punctual, and delivered exceptional quality photos for our corporate event. Great communication throughout the process.",
      avatar: "/api/placeholder/40/40",
      helpful: 8,
      reply: "Thank you for the wonderful review! It was a pleasure working with your team."
    },
    {
      id: 3,
      client: "Emma Davis",
      rating: 4,
      event: "Portrait Session",
      date: "December 5, 2024",
      review: "Great experience! The photographer was very patient and helped me feel comfortable during the shoot. The final photos turned out beautifully.",
      avatar: "/api/placeholder/40/40",
      helpful: 5,
      reply: null
    },
    {
      id: 4,
      client: "Michael Brown",
      rating: 5,
      event: "Birthday Party",
      date: "December 3, 2024",
      review: "Fantastic photographer! Captured all the special moments of our celebration. Kids loved working with them too. Will definitely book again!",
      avatar: "/api/placeholder/40/40",
      helpful: 15,
      reply: "Thank you so much! Your family was wonderful to work with. Looking forward to future events!"
    },
    {
      id: 5,
      client: "Lisa Chen",
      rating: 4,
      event: "Engagement Photos",
      date: "November 28, 2024",
      review: "Beautiful photos and great locations suggested by the photographer. Only minor feedback would be faster delivery time, but overall very satisfied.",
      avatar: "/api/placeholder/40/40",
      helpful: 7,
      reply: null
    }
  ];

  const badges = [
    { name: "Top Rated", icon: Star, description: "Consistently high ratings", earned: true },
    { name: "Trending", icon: TrendingUp, description: "Popular this month", earned: true },
    { name: "Verified", icon: Award, description: "Identity verified", earned: true },
    { name: "Quick Response", icon: MessageSquare, description: "Responds within 1 hour", earned: false },
    { name: "100+ Reviews", icon: ThumbsUp, description: "Over 100 positive reviews", earned: false }
  ];

  const stats = {
    averageRating: 4.8,
    totalReviews: 87,
    responseRate: 92,
    repeatClients: 68
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating 
            ? "fill-yellow-400 text-yellow-400" 
            : "text-gray-300"
        }`}
      />
    ));
  };

  const handleReply = (reviewId: number) => {
    console.log("Replying to review:", reviewId, "with:", replyText);
    setReplyText("");
    setSelectedReview(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-foreground flex items-center">
          <Star className="mr-2 h-6 w-6" />
          Reviews & Reputation
        </h2>
        <p className="text-muted-foreground">Manage your reviews and track your reputation badges</p>
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
            <p className="text-xs text-muted-foreground">+5 this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
            <Reply className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.responseRate}%</div>
            <p className="text-xs text-muted-foreground">Within 24 hours</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Repeat Clients</CardTitle>
            <ThumbsUp className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.repeatClients}%</div>
            <p className="text-xs text-muted-foreground">Client retention</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Reviews List */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Reviews</CardTitle>
              <CardDescription>Your latest client feedback</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border-b border-border last:border-b-0 pb-6 last:pb-0">
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={review.avatar} alt={review.client} />
                      <AvatarFallback>{review.client.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">{review.client}</div>
                          <div className="text-sm text-muted-foreground">{review.event} • {review.date}</div>
                        </div>
                        <div className="flex items-center space-x-1">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground">{review.review}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <span className="flex items-center space-x-1">
                            <ThumbsUp className="h-3 w-3" />
                            <span>{review.helpful} helpful</span>
                          </span>
                        </div>
                        
                        {!review.reply ? (
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => setSelectedReview(review)}
                          >
                            <Reply className="h-3 w-3 mr-1" />
                            Reply
                          </Button>
                        ) : (
                          <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                            Replied
                          </Badge>
                        )}
                      </div>
                      
                      {review.reply && (
                        <div className="mt-3 p-3 bg-muted rounded-lg">
                          <div className="text-sm font-medium mb-1">Your reply:</div>
                          <p className="text-sm text-muted-foreground">{review.reply}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="text-center pt-4">
                <Button variant="outline">Load More Reviews</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Badges & Achievements */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Achievement Badges</CardTitle>
              <CardDescription>Track your progress and reputation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {badges.map((badge, index) => (
                <div 
                  key={index} 
                  className={`flex items-center space-x-3 p-3 rounded-lg border ${
                    badge.earned 
                      ? "border-primary bg-primary/5" 
                      : "border-border bg-muted/30"
                  }`}
                >
                  <badge.icon className={`h-5 w-5 ${
                    badge.earned ? "text-primary" : "text-muted-foreground"
                  }`} />
                  <div className="flex-1">
                    <div className={`font-medium text-sm ${
                      badge.earned ? "text-foreground" : "text-muted-foreground"
                    }`}>
                      {badge.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {badge.description}
                    </div>
                  </div>
                  {badge.earned && (
                    <Badge variant="default" className="bg-primary text-primary-foreground">
                      Earned
                    </Badge>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Reply Modal */}
      {selectedReview && (
        <Dialog open={!!selectedReview} onOpenChange={() => setSelectedReview(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Reply to Review</DialogTitle>
              <DialogDescription>
                Respond to {selectedReview.client}'s review
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4">
              <div className="p-4 bg-muted rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="font-medium">{selectedReview.client}</span>
                  <div className="flex items-center space-x-1">
                    {renderStars(selectedReview.rating)}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{selectedReview.review}</p>
              </div>
              
              <div>
                <label className="text-sm font-medium">Your Reply</label>
                <Textarea
                  placeholder="Thank you for your review..."
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  className="mt-1"
                />
              </div>
              
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedReview(null)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button 
                  onClick={() => handleReply(selectedReview.id)}
                  className="flex-1"
                  disabled={!replyText.trim()}
                >
                  Send Reply
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};
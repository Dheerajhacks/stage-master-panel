import { useState } from "react";
import { Calendar, DollarSign, MessageSquare, Star, BarChart3, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarView } from "./CalendarView";
import { BookingManagement } from "./BookingManagement";
import { EarningsPayments } from "./EarningsPayments";
import { ReviewsReputation } from "./ReviewsReputation";

interface ArtistDashboardProps {
  onBackToMain: () => void;
}

export const ArtistDashboard = ({ onBackToMain }: ArtistDashboardProps) => {
  const [activeTab, setActiveTab] = useState("calendar");

  const stats = [
    { title: "Total Bookings", value: "24", icon: Calendar, color: "text-blue-500" },
    { title: "This Month Earnings", value: "$3,240", icon: DollarSign, color: "text-green-500" },
    { title: "Avg. Rating", value: "4.8", icon: Star, color: "text-yellow-500" },
    { title: "Pending Requests", value: "7", icon: MessageSquare, color: "text-purple-500" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Artist Dashboard</h1>
              <p className="text-muted-foreground">Manage your bookings, earnings, and reputation</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={onBackToMain}>
                Back to Platform
              </Button>
              <Button variant="outline" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Dashboard Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            <TabsTrigger value="calendar" className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span className="hidden sm:inline">Calendar</span>
            </TabsTrigger>
            <TabsTrigger value="bookings" className="flex items-center space-x-2">
              <MessageSquare className="h-4 w-4" />
              <span className="hidden sm:inline">Bookings</span>
            </TabsTrigger>
            <TabsTrigger value="earnings" className="flex items-center space-x-2">
              <DollarSign className="h-4 w-4" />
              <span className="hidden sm:inline">Earnings</span>
            </TabsTrigger>
            <TabsTrigger value="reviews" className="flex items-center space-x-2">
              <Star className="h-4 w-4" />
              <span className="hidden sm:inline">Reviews</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="calendar" className="space-y-6">
            <CalendarView />
          </TabsContent>

          <TabsContent value="bookings" className="space-y-6">
            <BookingManagement />
          </TabsContent>

          <TabsContent value="earnings" className="space-y-6">
            <EarningsPayments />
          </TabsContent>

          <TabsContent value="reviews" className="space-y-6">
            <ReviewsReputation />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
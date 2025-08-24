import { useState } from "react";
import { Calendar, DollarSign, MessageSquare, Star, Settings } from "lucide-react";
import * as TabsPrimitive from "@radix-ui/react-tabs"
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Artist Dashboard</h1>
              <p className="text-gray-500">Manage your bookings, earnings, and reputation</p>
            </div>
            <div className="flex items-center space-x-4">
              <button onClick={onBackToMain} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900 h-10 px-4 py-2">
                Back to Platform
              </button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900 h-10 w-10">
                <Settings className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col space-y-1.5 p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="text-2xl font-semibold leading-none tracking-tight text-sm font-medium text-gray-500">
                  {stat.title}
                </h3>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
              <div className="p-6 pt-0">
                <div className="text-2xl font-bold">{stat.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Dashboard Content */}
        <TabsPrimitive.Root value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsPrimitive.List className="inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-gray-500 grid w-full grid-cols-2 lg:grid-cols-4">
            <TabsPrimitive.Trigger value="calendar" className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-gray-950 data-[state=active]:shadow-sm flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span className="hidden sm:inline">Calendar</span>
            </TabsPrimitive.Trigger>
            <TabsPrimitive.Trigger value="bookings" className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-gray-950 data-[state=active]:shadow-sm flex items-center space-x-2">
              <MessageSquare className="h-4 w-4" />
              <span className="hidden sm:inline">Bookings</span>
            </TabsPrimitive.Trigger>
            <TabsPrimitive.Trigger value="earnings" className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-gray-950 data-[state=active]:shadow-sm flex items-center space-x-2">
              <DollarSign className="h-4 w-4" />
              <span className="hidden sm:inline">Earnings</span>
            </TabsPrimitive.Trigger>
            <TabsPrimitive.Trigger value="reviews" className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-gray-950 data-[state=active]:shadow-sm flex items-center space-x-2">
              <Star className="h-4 w-4" />
              <span className="hidden sm:inline">Reviews</span>
            </TabsPrimitive.Trigger>
          </TabsPrimitive.List>

          <TabsPrimitive.Content value="calendar" className="mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 space-y-6">
            <CalendarView />
          </TabsPrimitive.Content>

          <TabsPrimitive.Content value="bookings" className="mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 space-y-6">
            <BookingManagement />
          </TabsPrimitive.Content>

          <TabsPrimitive.Content value="earnings" className="mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 space-y-6">
            <EarningsPayments />
          </TabsPrimitive.Content>

          <TabsPrimitive.Content value="reviews" className="mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 space-y-6">
            <ReviewsReputation />
          </TabsPrimitive.Content>
        </TabsPrimitive.Root>
      </div>
    </div>
  );
};
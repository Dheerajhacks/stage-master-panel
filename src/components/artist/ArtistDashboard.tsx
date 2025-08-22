import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { CalendarView } from "./CalendarView";
import { BookingManagement } from "./BookingManagement";
import { EarningsPayments } from "./EarningsPayments";
import { ReviewsReputation } from "./ReviewsReputation";

export const ArtistDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Artist Dashboard</h1>
        
        <Tabs defaultValue="calendar" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          
          <TabsContent value="calendar">
            <CalendarView />
          </TabsContent>
          
          <TabsContent value="bookings">
            <BookingManagement />
          </TabsContent>
          
          <TabsContent value="earnings">
            <EarningsPayments />
          </TabsContent>
          
          <TabsContent value="reviews">
            <ReviewsReputation />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
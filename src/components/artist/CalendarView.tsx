import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export const CalendarView = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const mockAvailability = [
    { date: "2024-01-15", slots: ["10:00-12:00", "14:00-16:00"], bookings: ["18:00-20:00"] },
    { date: "2024-01-16", slots: ["09:00-11:00"], bookings: [] },
    { date: "2024-01-17", slots: [], bookings: ["15:00-17:00", "19:00-21:00"] },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Calendar & Availability</h2>
        <Button>Add Availability</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar Grid */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>January 2024</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-2 mb-4">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day} className="p-2 text-center font-medium text-gray-500">
                    {day}
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 31 }, (_, i) => {
                  const date = `2024-01-${(i + 1).toString().padStart(2, '0')}`;
                  const dayData = mockAvailability.find(d => d.date === date);
                  
                  return (
                    <button
                      key={i}
                      onClick={() => setSelectedDate(date)}
                      className={`
                        p-2 h-12 text-sm border rounded-md transition-colors
                        ${selectedDate === date ? 'bg-blue-100 border-blue-500' : 'hover:bg-gray-100'}
                        ${dayData?.bookings.length ? 'bg-green-50 border-green-200' : ''}
                        ${dayData?.slots.length && !dayData.bookings.length ? 'bg-yellow-50 border-yellow-200' : ''}
                      `}
                    >
                      {i + 1}
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Day Details */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>
                {selectedDate ? `Day Details - ${selectedDate}` : "Select a Date"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {selectedDate ? (
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-green-700 mb-2">Available Slots</h4>
                    {mockAvailability.find(d => d.date === selectedDate)?.slots.map((slot, index) => (
                      <Badge key={index} variant="outline" className="mr-2 mb-2">
                        {slot}
                      </Badge>
                    ))}
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-blue-700 mb-2">Confirmed Bookings</h4>
                    {mockAvailability.find(d => d.date === selectedDate)?.bookings.map((booking, index) => (
                      <Badge key={index} className="mr-2 mb-2">
                        {booking}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button className="w-full" size="sm">Edit Day</Button>
                </div>
              ) : (
                <p className="text-gray-500">Click on a date to see details</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
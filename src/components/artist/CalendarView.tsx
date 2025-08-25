import { useState } from "react";
import { Calendar, Clock, Plus, ChevronLeft, ChevronRight } from "lucide-react";

export const CalendarView = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<"week" | "month">("week");

  // Mock data for availability and bookings
  const availabilitySlots = [
    { day: "Monday", time: "9:00 AM - 12:00 PM", available: true },
    { day: "Monday", time: "2:00 PM - 6:00 PM", available: true },
    { day: "Tuesday", time: "10:00 AM - 4:00 PM", available: false, booking: "Wedding Photography" },
    { day: "Wednesday", time: "9:00 AM - 1:00 PM", available: true },
    { day: "Thursday", time: "3:00 PM - 8:00 PM", available: false, booking: "Portrait Session" },
    { day: "Friday", time: "10:00 AM - 6:00 PM", available: true },
  ];

  const upcomingBookings = [
    { date: "Dec 15", time: "2:00 PM", event: "Wedding Photography", client: "Sarah & John", status: "confirmed" },
    { date: "Dec 18", time: "3:00 PM", event: "Portrait Session", client: "Emma Davis", status: "confirmed" },
    { date: "Dec 22", time: "10:00 AM", event: "Corporate Event", client: "Tech Corp", status: "pending" },
  ];

  const formatMonth = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  return (
    <div className="space-y-6">
      {/* Calendar Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <Calendar className="mr-2 h-6 w-6" />
            Calendar & Availability
          </h2>
          <p className="text-gray-500">Manage your availability and view upcoming bookings</p>
        </div>
        <div className="flex items-center space-x-2">
          <button
            className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 ${
              viewMode === "week" 
                ? "bg-blue-600 text-white hover:bg-blue-700" 
                : "border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900"
            }`}
            onClick={() => setViewMode("week")}
          >
            Week
          </button>
          <button
            className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 ${
              viewMode === "month" 
                ? "bg-blue-600 text-white hover:bg-blue-700" 
                : "border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900"
            }`}
            onClick={() => setViewMode("month")}
          >
            Month
          </button>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2 ml-4">
            <Plus className="h-4 w-4 mr-2" />
            Add Availability
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar Navigation */}
        <div className="lg:col-span-2">
          <div className="rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold leading-none tracking-tight text-lg">{formatMonth(currentDate)}</h3>
                <div className="flex items-center space-x-2">
                  <button onClick={() => navigateMonth('prev')} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900 h-10 w-10">
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button onClick={() => navigateMonth('next')} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900 h-10 w-10">
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className="p-6 pt-0">
              {/* Weekly View */}
              {viewMode === "week" && (
                <div className="space-y-4">
                  {availabilitySlots.map((slot, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex-1">
                        <div className="font-medium">{slot.day}</div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {slot.time}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {slot.available ? (
                          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-green-100 text-green-800 border-green-200">
                            Available
                          </div>
                        ) : (
                          <>
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-red-100 text-red-800 border-red-200">
                              Booked
                            </div>
                            {slot.booking && (
                              <span className="text-sm text-gray-500">{slot.booking}</span>
                            )}
                          </>
                        )}
                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-100 hover:text-gray-900 h-9 rounded-md px-3">Edit</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Monthly View */}
              {viewMode === "month" && (
                <div className="grid grid-cols-7 gap-2">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
                      {day}
                    </div>
                  ))}
                  {Array.from({ length: 35 }, (_, i) => (
                    <div key={i} className="aspect-square p-1">
                      <div className="w-full h-full border border-gray-200 rounded flex items-center justify-center text-sm hover:bg-gray-50 cursor-pointer">
                        {Math.floor(Math.random() * 28) + 1}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Upcoming Bookings Sidebar */}
        <div>
          <div className="rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight text-lg">Upcoming Bookings</h3>
              <p className="text-sm text-gray-500">Your confirmed and pending events</p>
            </div>
            <div className="p-6 pt-0 space-y-4">
              {upcomingBookings.map((booking, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium text-sm">{booking.event}</div>
                    <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${
                      booking.status === "confirmed" 
                        ? "border-transparent bg-blue-600 text-white hover:bg-blue-700" 
                        : "border-transparent bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}>
                      {booking.status}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    <div>{booking.client}</div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {booking.date} at {booking.time}
                    </div>
                  </div>
                </div>
              ))}
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900 h-10 px-4 py-2 w-full">
                View All Bookings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
import { useState } from "react";
import { DollarSign, Download, TrendingUp, Calendar, CreditCard, FileText, ChevronDown, Check } from "lucide-react";
import * as SelectPrimitive from "@radix-ui/react-select"

export const EarningsPayments = () => {
  const [timeframe, setTimeframe] = useState("monthly");

  // Mock data for earnings
  const totalEarnings = {
    thisWeek: 850,
    lastWeek: 720,
    thisMonth: 3240,
    lastMonth: 2890,
    thisYear: 28650,
    lastYear: 22100
  };

  const monthlyBreakdown = [
    { month: "December", earnings: 3240, bookings: 8, avgPerBooking: 405 },
    { month: "November", earnings: 2890, bookings: 7, avgPerBooking: 413 },
    { month: "October", earnings: 3150, bookings: 9, avgPerBooking: 350 },
    { month: "September", earnings: 2750, bookings: 6, avgPerBooking: 458 },
  ];

  const recentTransactions = [
    {
      id: 1,
      event: "Wedding Photography - Sarah & John",
      amount: 1500,
      type: "final",
      date: "Dec 10, 2024",
      status: "completed",
      invoice: "INV-001"
    },
    {
      id: 2,
      event: "Corporate Event - Tech Corp",
      amount: 800,
      type: "deposit",
      date: "Dec 8, 2024",
      status: "completed",
      invoice: "INV-002"
    },
    {
      id: 3,
      event: "Portrait Session - Emma Davis",
      amount: 300,
      type: "final",
      date: "Dec 5, 2024",
      status: "completed",
      invoice: "INV-003"
    },
    {
      id: 4,
      event: "Wedding Photography - Mike & Lisa",
      amount: 750,
      type: "deposit",
      date: "Dec 3, 2024",
      status: "pending",
      invoice: "INV-004"
    },
  ];

  const paymentMethods = [
    { type: "Bank Transfer", account: "****1234", isDefault: true },
    { type: "PayPal", account: "john@example.com", isDefault: false },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-100 text-green-800 border-green-200">Completed</div>;
      case "pending":
        return <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-yellow-100 text-yellow-800 border-yellow-200">Pending</div>;
      case "failed":
        return <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-red-100 text-red-800 border-red-200">Failed</div>;
      default:
        return <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-gray-100 text-gray-900 hover:bg-gray-200">{status}</div>;
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "deposit":
        return <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-gray-100 text-gray-900 hover:bg-gray-200">Deposit</div>;
      case "final":
        return <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-blue-600 text-white hover:bg-blue-700">Final Payment</div>;
      case "refund":
        return <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-orange-100 text-orange-800 border-orange-200">Refund</div>;
      default:
        return <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-gray-100 text-gray-900 hover:bg-gray-200">{type}</div>;
    }
  };

  const currentEarnings = timeframe === "weekly" ? totalEarnings.thisWeek : timeframe === "monthly" ? totalEarnings.thisMonth : totalEarnings.thisYear;
  const previousEarnings = timeframe === "weekly" ? totalEarnings.lastWeek : timeframe === "monthly" ? totalEarnings.lastMonth : totalEarnings.lastYear;
  const growthPercentage = ((currentEarnings - previousEarnings) / previousEarnings * 100).toFixed(1);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <DollarSign className="mr-2 h-6 w-6" />
            Earnings & Payments
          </h2>
          <p className="text-gray-500">Track your earnings, payments, and download invoices</p>
        </div>
        <div className="flex items-center space-x-2">
          <SelectPrimitive.Root value={timeframe} onValueChange={setTimeframe}>
            <SelectPrimitive.Trigger className="flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm w-[140px]">
              <SelectPrimitive.Value />
              <SelectPrimitive.Icon asChild>
                <ChevronDown className="h-4 w-4 opacity-50" />
              </SelectPrimitive.Icon>
            </SelectPrimitive.Trigger>
            <SelectPrimitive.Portal>
              <SelectPrimitive.Content className="relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white text-gray-950 shadow-md" position="popper">
                <SelectPrimitive.Viewport className="p-1">
                  <SelectPrimitive.Item value="weekly" className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-gray-100">
                    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                      <SelectPrimitive.ItemIndicator>
                        <Check className="h-4 w-4" />
                      </SelectPrimitive.ItemIndicator>
                    </span>
                    <SelectPrimitive.ItemText>Weekly</SelectPrimitive.ItemText>
                  </SelectPrimitive.Item>
                  <SelectPrimitive.Item value="monthly" className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-gray-100">
                    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                      <SelectPrimitive.ItemIndicator>
                        <Check className="h-4 w-4" />
                      </SelectPrimitive.ItemIndicator>
                    </span>
                    <SelectPrimitive.ItemText>Monthly</SelectPrimitive.ItemText>
                  </SelectPrimitive.Item>
                  <SelectPrimitive.Item value="yearly" className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-gray-100">
                    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                      <SelectPrimitive.ItemIndicator>
                        <Check className="h-4 w-4" />
                      </SelectPrimitive.ItemIndicator>
                    </span>
                    <SelectPrimitive.ItemText>Yearly</SelectPrimitive.ItemText>
                  </SelectPrimitive.Item>
                </SelectPrimitive.Viewport>
              </SelectPrimitive.Content>
            </SelectPrimitive.Portal>
          </SelectPrimitive.Root>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900 h-10 px-4 py-2">
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Earnings Overview */}
      <div className="rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-semibold leading-none tracking-tight text-lg">Earnings Overview</h3>
          <p className="text-sm text-gray-500">
            Your {timeframe} earnings performance
          </p>
        </div>
        <div className="p-6 pt-0">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">${currentEarnings.toLocaleString()}</div>
                <div className="text-sm text-gray-500">
                  {timeframe === "weekly" ? "This Week" : timeframe === "monthly" ? "This Month" : "This Year"}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className={`h-4 w-4 ${parseFloat(growthPercentage) >= 0 ? "text-green-500" : "text-red-500"}`} />
                <span className={`text-sm font-medium ${parseFloat(growthPercentage) >= 0 ? "text-green-500" : "text-red-500"}`}>
                  {parseFloat(growthPercentage) >= 0 ? "+" : ""}{growthPercentage}%
                </span>
                <span className="text-sm text-gray-500">
                  vs {timeframe === "weekly" ? "last week" : timeframe === "monthly" ? "last month" : "last year"}
                </span>
              </div>
            </div>

            {timeframe === "monthly" && (
              <div className="space-y-4">
                <h4 className="font-medium">Monthly Breakdown</h4>
                {monthlyBreakdown.map((month, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium">{month.month}</div>
                      <div className="text-sm text-gray-500">{month.bookings} bookings</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">${month.earnings.toLocaleString()}</div>
                      <div className="text-sm text-gray-500">${month.avgPerBooking} avg</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-semibold leading-none tracking-tight text-lg">Recent Transactions</h3>
              <p className="text-sm text-gray-500">Your latest payments and invoices</p>
            </div>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900 h-10 px-4 py-2">
              <FileText className="h-4 w-4 mr-2" />
              View All
            </button>
          </div>
        </div>
        <div className="p-6 pt-0">
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-1">
                  <div className="font-medium">{transaction.event}</div>
                  <div className="text-sm text-gray-500 flex items-center space-x-4 mt-1">
                    <span className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {transaction.date}
                    </span>
                    <span>Invoice: {transaction.invoice}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="font-medium">${transaction.amount}</div>
                    <div className="flex items-center space-x-2 mt-1">
                      {getTypeBadge(transaction.type)}
                      {getStatusBadge(transaction.status)}
                    </div>
                  </div>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900 h-9 rounded-md px-3">
                    <Download className="h-3 w-3 mr-1" />
                    Invoice
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};
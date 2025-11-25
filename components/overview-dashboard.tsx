"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts"

const pageStats = [
  { page: "Homepage", views: 2400, visits: 2210 },
  { page: "Services", views: 1398, visits: 2290 },
  { page: "About", views: 9800, visits: 2000 },
  { page: "Contact", views: 3908, visits: 2108 },
  { page: "Blog", views: 4800, visits: 2200 },
]

const trafficData = [
  { day: "Mon", traffic: 400 },
  { day: "Tue", traffic: 300 },
  { day: "Wed", traffic: 500 },
  { day: "Thu", traffic: 490 },
  { day: "Fri", traffic: 890 },
  { day: "Sat", traffic: 690 },
  { day: "Sun", traffic: 780 },
]

const stats = [
  { label: "Total Pages", value: "5", change: "+2 this month" },
  { label: "Active Services", value: "8", change: "+1 updated" },
  { label: "Team Members", value: "12", change: "+3 recent" },
  { label: "Monthly Visitors", value: "12.5K", change: "+24% vs last month" },
]

export function OverviewDashboard() {
  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="border-border bg-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Traffic Chart */}
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle>Weekly Traffic</CardTitle>
            <CardDescription>Visitor traffic over the last 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="day" stroke="var(--color-muted-foreground)" />
                <YAxis stroke="var(--color-muted-foreground)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--color-card)",
                    border: `1px solid var(--color-border)`,
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="traffic"
                  stroke="var(--color-primary)"
                  strokeWidth={2}
                  dot={{ fill: "var(--color-primary)", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Page Stats Chart */}
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle>Page Performance</CardTitle>
            <CardDescription>Views and visits by page</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={pageStats}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="page" stroke="var(--color-muted-foreground)" />
                <YAxis stroke="var(--color-muted-foreground)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--color-card)",
                    border: `1px solid var(--color-border)`,
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Bar dataKey="views" fill="var(--color-primary)" />
                <Bar dataKey="visits" fill="var(--color-accent)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

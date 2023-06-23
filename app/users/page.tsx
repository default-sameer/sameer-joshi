"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

import { User } from "@/types/user"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function AboutPage() {
  const { data, isLoading } = useQuery<User[]>({
    queryKey: ["dashboard"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      )
      return data
    },
  })

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
        JSONPlaceholder API is used to fetch data with react-query
      </p>
      <div
        className={cn(
          "flex flex-col items-start gap-2",
          isLoading && "items-center justify-center"
        )}
      >
        {isLoading ? (
          <p className="text-lg text-muted-foreground sm:text-xl">Loading...</p>
        ) : (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-10">
            {data?.map((user) => (
              <Card
                key={user.id}
                className="flex w-[300px] flex-col items-start justify-center gap-2"
              >
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">{user.username}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between space-x-4">
                    <div className="flex items-center space-x-4">
                      {isLoading ? (
                        <Skeleton className="h-10 w-10 rounded-full" />
                      ) : (
                        <Avatar className="flex h-10 w-10 items-center justify-center rounded-full bg-black dark:bg-white">
                          <AvatarFallback className="font-bold text-white dark:text-black">
                            {user.name.split(" ")[0][0] +
                              user.name.split(" ")[1][0]}
                          </AvatarFallback>
                        </Avatar>
                      )}
                      <div>
                        <p className="text-sm font-medium leading-none">
                          {user.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

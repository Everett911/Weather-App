import Card from "../cards/Cards";
import { Skeleton } from "@/components/ui/skeleton";

export default function SideCardSkeleton() {
  return (
    <Card
      childrenClassName="flex flex-col gap-3"
      className="hover:scale-105 transition-transform duration-300 from-sidebar-accent to-sidebar-accent/60 gap-0!"
    >
      <div className="flex justify-between">
        <Skeleton className="h-7 w-12 dark:bg-sidebar" />
        <Skeleton className="h-7 w-12 dark:bg-sidebar" />
      </div>
      <Skeleton className="h-1.5 w-full dark:bg-sidebar" />
      <div className="flex justify-between text-xs">
        <Skeleton className="h-4 w-2 dark:bg-sidebar" />
        <Skeleton className="h-4 w-2 dark:bg-sidebar" />
      </div>
      <div className="flex justify-between">
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton key={index} className="h-6 w-15 dark:bg-sidebar" />
        ))}
      </div>
    </Card>
  );
}

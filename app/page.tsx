"use client"
import AddTasks from "@/components/AddTasks";
import CreatedTask from "@/components/CreatedTask";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
      <div className="space-y-8 md:space-y-12 lg:space-y-16">
          <AddTasks/>
          <div className="space-y-4 md:space-y-6">
             <CreatedTask/>
          </div>
      </div>
    </main>
  );
}

import AddTasks from "@/components/AddTasks";
import CreatedTask from "@/components/CreatedTask";


export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="space-y-20">
          <AddTasks/>
          <div className="space-y-10">
             <CreatedTask/>
          </div>
      </div>
    </main>
  );
}

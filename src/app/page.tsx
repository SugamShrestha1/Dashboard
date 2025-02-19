
import { Button } from '@/components/ui/button'
import Dashboardcard from '@/components/dashboard/dashboardcard';
export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
<Dashboardcard/>
      </div>
    </>
  );
}


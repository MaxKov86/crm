// import StatusLabel, { Status } from './components/StatusLabel/StatusLabel';
// import { headers } from 'next/headers';
import AddCompanyButton from './components/AddCompanyButton';

export default function Home() {
  // console.log(headers());
  return (
    <main>
      {/* <h2 className="text-red-600 font-bold">
        Home page{new Date().toTimeString()}
      </h2>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel> */}
      <AddCompanyButton />
    </main>
  );
}

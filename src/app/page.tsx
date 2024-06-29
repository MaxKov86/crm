import StatusLabel, { Status } from './components/StatusLabel/StatusLabel';

export default function Home() {
  return (
    <main>
      <h2 className="text-red-600 font-bold">Home page</h2>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
    </main>
  );
}

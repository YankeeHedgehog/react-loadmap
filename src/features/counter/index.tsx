import Counter from './Counter'

export default function CounterSamples() {
  return (
    <>
      <h2>Default Counter</h2>
      <Counter />
      <h2>Initialized 100 Counter</h2>
      <Counter initialCount={100} initialResetCount={50} />
    </>
  )
}

import { Counter } from "./Counter"

export const Component = ({ title }) => {
  return (
    <div className="block">
      Component :{title}
      <Counter />
    </div>
  )
}
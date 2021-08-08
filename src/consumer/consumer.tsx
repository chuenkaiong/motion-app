import { InputCard } from "./InputCard"

export function Consumer() {
  return (
    <>
      <div className="h-screen flex bg-gray-200">
        <div className="w-64 px-8 bg-white border-r-2 border-gray-300">Navbar</div>
        <div class="bg-gray-100 flex-1">
          <div className="h-16 bg-white border-b-2 border-gray-300 py-2 px-4">
            <h1 className="text-3xl">Curator</h1>
          </div>
          <h1>hi</h1>
          <div className="p-16 border-2">
            <InputCard />
          </div>
        </div>
      </div>
    </>
  )
}

import { SchemaEditor } from "./SchemaEditor"
import { RulesetEditor } from "./RulesetEditor"
import { useState } from "preact/hooks"

export function Curator() {
  const [editmode, setEditMode] = useState(0)
  return (
    <>
      <div className="h-screen flex bg-gray-200">
        <div className="w-64 px-8 bg-white border-r-2 border-gray-300">Navbar</div>
        <div className="nav-and-main bg-gray-100 flex-1">
          <div className="nav h-16 bg-white border-b-2 border-gray-300 py-2 px-4">
              <h1 className="text-3xl">Curator</h1>
            </div>
          <div className="canvas p-16 border-2">
            <div className="toggle w-full">
              <div className="border-2 border-gray-400 rounded-md h-8 w-48 mx-auto flex">
                <span className={"flex-1 text-center cursor-pointer" + (editmode === 0 ? " bg-gray-400" : "")} onClick={() => setEditMode(0)}>Schema</span>
                <span className={"flex-1 text-center cursor-pointer" + (editmode === 1 ? " bg-gray-400" : "")} onClick={() => setEditMode(1)}>Ruleset</span>
              </div>
            </div>
            <div className="editor mt-6">
              {editmode === 0 ? <SchemaEditor /> :  <RulesetEditor />}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

import { useState } from "preact/hooks"
import {
  Attribute,
  AttributeType,
  Model
} from "../lib/schema_types";

// FOR TESTING -----------------------------------
const person: Model = {
  attributes: [
    { label: "vaccinated", type: AttributeType.Boolean },
    { label: "age", type: AttributeType.Number },
  ],
  type: AttributeType.Model,
  label: "person",
};

const groupInstance: Model = {
  attributes: [
    {
      label: "collection of persons",
      type: AttributeType.Collection,
      subtype: person
    },
    { label: "same household", type: AttributeType.Boolean },
  ],
  type: AttributeType.Model,
  label: "Group",
};
// FOR TESTING -----------------------------------

export function SchemaEditor() {
  const [schema, setSchema] = useState(groupInstance)

  const children = []
  for (let attribute of schema.attributes) {
    if (attribute.type === AttributeType.Collection && attribute.subtype.type === AttributeType.Model) {
      children.push(
        <>
          <div class="h-2/4 w-9-12 bg-white rounded-md p-4 ml-1 border-2">
            <input type="text" class="w-2/4 pl-7 py-2 text-2xl border-2 border-gray-300 rounded-md" value={attribute.subtype.label}></input>
            

          </div>
        </>
      )
    }
    if (attribute.type === AttributeType.Collection) {

    }
  }

  return (
    <>
      <h1>SCHEMA EDITOR</h1>
      <div class="h-2/4 w-9-12 bg-white rounded-md p-4 ml-1 border-2">
        <input type="text" class="w-2/4 pl-7 py-2 text-2xl border-2 border-gray-300 rounded-md" value={groupInstance.label}></input>
        {children}

      </div>

      <div class="h-2/4 w-9-12 bg-white rounded-md p-4 ml-1 border-2 mt-16">
        <input type="text" class="w-2/4 pl-7 py-2 text-2xl border-2 border-gray-300 rounded-md" value="Group"></input>
        <div className="my-8 flex space-x-1">
          <div className="flex-1 border-2">
            <span className="block">Attribute</span>
            <input type="text" class="w-42 pl-3 py-1 text-md border-2 border-gray-300 rounded-md" value="All same household"></input>
          </div>
          <div className="flex-1 border-2">
            <span className="block">Condition</span>
            <select class="ml-4 text-md border-2 border-gray-300 rounded-md" >
              <option>Boolean</option>
              <option>Number</option>
              <option>Etc.</option>
            </select>
          </div>
        </div>
        <div class="h-2/4 w-9/12 bg-white rounded-md p-4 ml-2 border-2">
          <input type="text" class="w-2/4 pl-7 py-2 text-2xl border-2 border-gray-300 rounded-md" value="Person"></input>
          <div className="my-8 flex space-x-1">
            <div className="flex-1 border-2">
              <span className="block">Attribute</span>
              <input type="text" class="w-42 pl-3 py-1 text-md border-2 border-gray-300 rounded-md" value="Age"></input>
            </div>
            <div className="flex-1 border-2">
              <span className="block">Condition</span>
              <select class="ml-4 text-md border-2 border-gray-300 rounded-md" >
                <option>Boolean</option>
                <option>Number</option>
                <option>Etc.</option>
              </select>
            </div>
          </div>
          <div className="my-8 flex space-x-1">
            <div className="flex-1 border-2">
              <span className="block">Attribute</span>
              <input type="text" class="w-42 pl-3 py-1 text-md border-2 border-gray-300 rounded-md" value="Vaccinated"></input>
            </div>
            <div className="flex-1 border-2">
              <span className="block">Condition</span>
              <select class="ml-4 text-md border-2 border-gray-300 rounded-md" >
                <option>Boolean</option>
                <option>Number</option>
                <option>Etc.</option>
              </select>
            </div>
          </div>
          <div class="py-4">
            <button class="w-10 h-10 rounded-full bg-blue-500 text-5xl px-1 text-white inline-flex justify-center items-center align-middle">
              <svg class="w-8 h-8 fill-current" viewBox="0 0 20 20"><path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
            </button>
            <span class="text-lg align-middle ml-6">Add attribute/entity</span>
          </div>
        </div>
        <div class="py-4">
          <button class="w-10 h-10 rounded-full bg-blue-500 text-5xl px-1 text-white inline-flex justify-center items-center align-middle">
            <svg class="w-8 h-8 fill-current" viewBox="0 0 20 20"><path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
          </button>
          <span class="text-lg align-middle ml-6">Add attribute/entity</span>
        </div>
      </div>
    </>
  )
}

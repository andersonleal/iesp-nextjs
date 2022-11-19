import {useState} from "react";

type TEntry = {
  name?: string
  level?: number
  children?: TEntry[]
}
const files: TEntry = {
  children: [
    {
      name: "package.json"
    },
    {
      name: 'node_modules',
      children: [
        {
          name: '@babel',
          children: [
            {name: 'index.js'},
            {
              name: 'node_modules',
              children: [
                {
                  name: 'nextjs',
                  children: [
                    {name: 'index.js'}
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

function Entry({name, children, level = 1}: TEntry) {
  const [isOpen, setOpen] = useState(false)

  function handleClick() {
    setOpen((state) => !state)
  }

  return (
    <div style={{paddingLeft: `${level * 10}px`}}>
      <div>{children && (
        <button onClick={handleClick}>{isOpen ? '-' : '+'}</button>
      )} {name}</div>
      {isOpen && children?.map((item) => <Entry key={item.name} level={level + 1} {...item}/>)}
    </div>
  )
}

export default function App() {
  return <div>
    {files.children?.map((item: TEntry, idx) => {
      return <Entry key={idx} {...item} level={1} />
    })}
  </div>
}

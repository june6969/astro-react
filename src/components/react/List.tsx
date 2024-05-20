interface ListItem {
  id:string,
  name:string,
  description:string,
}
interface Props{
  data:ListItem[]
}

export default function List({data}:Props){


  return <ul className="w-full border border-solid border-blue-400 p-5">
    {
      data.map(item=>(<li className="flex items-center py-2 border-b border-solid border-pink-200 odd:bg-blue-200 last:border-b-0">

        <div className="w-10 h-10 rounded-full bg-red-300"></div>
        <div className="flex-1 ml-4">
          <div>{item.name}</div>
          <div>{item.description}</div>
        </div>
      </li>))
    }
    
  </ul>
}
import Btn from "./components/Btn";
import Display from "./components/Display";

export default function App(){
  return (
    <div className="bg-gray-900 h-screen w-full text-white">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold underline">Counter App </h1>

      </div>
      <div className="flex items-center justify-center">
        <Display/>
        <Btn/>
      </div>
    </div>
  )
}
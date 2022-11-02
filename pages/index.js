import Navbar from "../components/Navbar"
import InputDiv from "../components/InputDiv"
export default function Home() {
  // const callAPI = async () => {
  //   try {
  //     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
  //     const data = await res.json();
  //     console.log(data);
  //     console.log("success")
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  return (
    <>
    <Navbar/>
    <div>
      <InputDiv/>
    </div>
    </>
    

      )
}

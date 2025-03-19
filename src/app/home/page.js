import NavbarComponent from "@/app/components/ui/home/NavbarComponent";
import DarkModeButton from "@/app/components/DarkModeButton";
import QuizPassComponent from "@/app/components/ui/home/QuizPassComponent";
// import LeaderboardComponent from "@/app/components/ui/home/LeaderboardComponent";
import CreateJoinRoom from "@/app/components/ui/home/CreateJoinRoomComponent";
import CardSlider from "@/app/components/ui/home/CardSlider";
import StartMatchButton from "@/app/components/ui/home/StartMatchButton";
export default function Home() {
  return (
    <div className="text-base [@media(max-width:410px)]:scale-[0.95] origin-top">
      <NavbarComponent />
      <QuizPassComponent />
      <div className="flex flex-row gap-2 p-2">
        {/* <LeaderboardComponent /> */}
        {/* <div className="flex flex-col gap-2 w-[40%] [@media(max-width:410px)]:w-[30%]"> */}
        <div className="flex flex-col gap-2 w-full">
          <CreateJoinRoom />
        </div>
      </div>
      <CardSlider />
      <StartMatchButton />
      <DarkModeButton />
    </div>
  );
}

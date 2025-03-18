import NavbarComponent from "@/app/components/NavbarComponent";
import DarkModeButton from "@/app/components/DarkModeButton";
import QuizPassComponent from "@/app/components/QuizPassComponent";
import LeaderboardComponent from "@/app/components/LeaderboardComponent";
import CreateJoinRoom from "@/app/components/CreateJoinRoomComponent";
import CardSlider from "@/app/components/CardSlider";
export default function Home() {
  return (
    <div>
      <NavbarComponent />
      <QuizPassComponent />
      <div className="flex flex-row gap-2 p-2">
        <LeaderboardComponent />
        <div className="flex flex-col gap-2 w-[45%]">
          <CreateJoinRoom />
        </div>
      </div>
      <CardSlider />

      <DarkModeButton />
    </div>
  );
}

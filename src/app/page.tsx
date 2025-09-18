import BestTalent from "@/components/Home/BestTalent";
import DeliveringRealResults from "@/components/Home/DeliveringRealResults";
import ManageDistributed from "@/components/Home/ManageDistributed";
import GetStarted from "@/components/Navigation/GetStarted";

export default function Home() {
  return (
    <>
      <BestTalent />
      <ManageDistributed />
      <DeliveringRealResults />
      <GetStarted />
    </>
  );
}

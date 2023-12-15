import { getRecommended } from "@/lib/recommended-service";
import Recommend from "./recommend";
import Toggle from "./toggle";
import Wrapper from "./wrapper";

const Sidebar = async () => {
  const recommend = await getRecommended();
  return (
    <Wrapper>
      <Toggle />
      <div className="space-y-4 pt-4 lg:pt-0">
        <Recommend data={recommend} />
      </div>
    </Wrapper>
  );
};

export default Sidebar;

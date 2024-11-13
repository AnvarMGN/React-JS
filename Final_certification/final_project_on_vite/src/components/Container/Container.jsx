import { LeftMenu } from "../LeftMenu/LeftMenu";
import { MainBlock } from "../MainBlock/MainBlock.jsx";
import { RightMenu } from "../RightMenu/RightMenu";
import "./Container.scss";

export const Container = () => {
  
  return (
    <>
      <div className="container center">
        <LeftMenu />
        <MainBlock />
        <RightMenu />
      </div>
    </>
  )
}

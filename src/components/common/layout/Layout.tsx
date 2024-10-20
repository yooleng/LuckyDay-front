import * as S from "./Layout.styled";
import * as S from "./Layout.styled";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./header";
import { TutorialLayout, useTutorial } from "components/tutorial";
import { TutorialLayout, useTutorial } from "components/tutorial";

export default function Layout() {
  export default function Layout() {
    const { pathname } = useLocation();
    const { isTutorialActive } = useTutorial();
    const { isTutorialActive } = useTutorial();

    return (
      <S.LayoutContainer>
        <S.Layout>
          {!(pathname === "/loading" || pathname === "/404") && <Header />}
          {!(pathname === "/loading" || pathname === "/404") && <Header />}
          <Outlet />
          {isTutorialActive && <TutorialLayout />}
        </S.Layout>
      </S.LayoutContainer>
    );
  }
}

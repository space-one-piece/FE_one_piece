import Flower from "@/assets/images/footer/flower.svg"
import type { FileRoutesByFullPath } from "@/routeTree.gen"
import { FlexOneContainer, RoundBox, Vstack } from "@/shared/components"
import { useNavigate } from "@tanstack/react-router"
import clsx from "clsx"

type FooterButtonProps = {
  to: keyof FileRoutesByFullPath
  isDim?: boolean
  children: string
}
const FooterButton = ({ to, isDim, children }: FooterButtonProps) => {
  const navigate = useNavigate()
  return (
    <button
      className={clsx(
        "text-sm text-left cursor-pointer",
        isDim ? "text-text-disabled" : "text-text-footer"
      )}
      onClick={() => navigate({ to })}
    >
      {children}
    </button>
  )
}

const Footer = () => {
  return (
    <RoundBox
      padding="2xl"
      radius="none"
      className="bg-surface-default grid grid-cols-4 gap-xl"
    >
      <Vstack gap="none" className="col-span-2">
        <FlexOneContainer>
          <Vstack gap="sm">
            <h3 className="text-xl font-league-gothic">fragmnt</h3>
            <p className="text-text-sub">Where scent meets space.</p>
            <p className="text-text-sub">
              A quiet invitation to breathe, feel, and belong.
            </p>
          </Vstack>
        </FlexOneContainer>
        <Vstack>
          <img src={Flower} className="max-w-17.5 mt-17.5" />
          <p className="text-text-disabled text-sm">
            © 2026 fragmnt. All rights reserved.
          </p>
        </Vstack>
      </Vstack>

      <Vstack>
        <FlexOneContainer>
          <Vstack>
            <h3 className="text-text-disabled text-sm">EXPLORE</h3>
            <FooterButton to="/">About</FooterButton>
            <FooterButton to="/">Scent Recommendation</FooterButton>
            <FooterButton to="/">Feed</FooterButton>
            <FooterButton to="/">My Page</FooterButton>
          </Vstack>
        </FlexOneContainer>
        <FooterButton to="/" isDim>
          Privacy Policy
        </FooterButton>
      </Vstack>

      <Vstack>
        <FlexOneContainer>
          <Vstack>
            <h3 className="text-text-disabled text-sm">CONNECT</h3>
            <FooterButton to="/">fragmnt studio</FooterButton>
            <FooterButton to="/">Onepiece@fragmnt.co</FooterButton>
          </Vstack>
        </FlexOneContainer>
        <FooterButton to="/" isDim>
          Terms of Service
        </FooterButton>
      </Vstack>
    </RoundBox>
  )
}

export default Footer

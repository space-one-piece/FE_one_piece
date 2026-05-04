import Instagram from "@/assets/images/footer/Instagram.svg.tsx"
import Kakao from "@/assets/images/footer/Kakao.svg.tsx"
import Youtube from "@/assets/images/footer/Youtube.svg.tsx"
import { Hstack, RoundBox, Vstack } from "@/shared/components"
import type { SvgProps } from "@/shared/types"
import { Link, type LinkProps } from "@tanstack/react-router"
import clsx from "clsx"
import type { JSX } from "react"

type SnsLinkProps = {
  SvgInReact: (props: SvgProps) => JSX.Element
  to: string
}
const SnsLink = ({ SvgInReact, to }: SnsLinkProps) => {
  // NOTE: BackButton과 SnsButton이 형태적으로 많이 유사합니다
  // NOTE: 비슷한 또 다른 동그라미 버튼이 있다면 공통 컴포넌트로 만드는 것도 고려할만 할 것 같습니다
  const handleClick = () => {
    window.location.href = to
  }
  return (
    <Link
      onClick={handleClick}
      className="transition text-button/50 hover:bg-button hover:text-card rounded-full border border-border p-xs"
      to={to}
    >
      <SvgInReact className="size-6" />
    </Link>
  )
}

type FooterButtonProps = {
  to: LinkProps["to"]
  isDim?: boolean
  children: string
}
const FooterLink = ({ to, isDim, children }: FooterButtonProps) => {
  return (
    <Link
      className={clsx(
        "text-sm text-left cursor-pointer",
        isDim ? "text-text-disabled" : "text-text-footer"
      )}
      to={to}
    >
      {children}
    </Link>
  )
}

const NarrowFooter = () => {
  // TODO: 외부 url 연결해야
  // TODO: 내부 navigate 연결해야
  return (
    <RoundBox padding="2xl" radius="none" className="bg-surface-default">
      <Vstack className="col-span-2">
        <h3 className="text-xl font-league-gothic">fragmnt</h3>

        <Hstack>
          <Vstack gap="sm" className="flex-1">
            <h3 className="text-text-disabled text-sm">EXPLORE</h3>
            <FooterLink to="/">About</FooterLink>
            <FooterLink to="/">Scent Recommendation</FooterLink>
            <FooterLink to="/">Feed</FooterLink>
            <FooterLink to="/">My Page</FooterLink>
          </Vstack>

          <Vstack gap="sm" className="flex-1">
            <h3 className="text-text-disabled text-sm">CONNECT</h3>
            <FooterLink to="/">fragmnt studio</FooterLink>
            <FooterLink to="/">Onepiece@fragmnt.co</FooterLink>
            <Hstack className="justify-start">
              <SnsLink to="https://www.google.com" SvgInReact={Instagram} />
              <SnsLink to="https://www.google.com" SvgInReact={Kakao} />
              <SnsLink to="https://www.google.com" SvgInReact={Youtube} />
            </Hstack>
          </Vstack>
        </Hstack>

        <Vstack gap="xs">
          <FooterLink to="/" isDim>
            Privacy Policy
          </FooterLink>
          <FooterLink to="/" isDim>
            Terms of Service
          </FooterLink>
          <p className="text-text-disabled text-sm">
            © 2026 fragmnt. All rights reserved.
          </p>
        </Vstack>
      </Vstack>
    </RoundBox>
  )
}

export default NarrowFooter

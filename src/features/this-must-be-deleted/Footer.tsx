import { FlexOneContainer, RoundBox, Vstack } from "@/shared/components"

const Footer = () => {
  return (
    <RoundBox padding="xl" radius="none" className="bg-gray-40 grid-cols-4">
      <Vstack>
        <FlexOneContainer>
          <Vstack>
            <h3>Fragmnt</h3>
            <p>Where scent meets space.</p>
            <p>A quiet invitation to breathe, feel, and belong.</p>
          </Vstack>
        </FlexOneContainer>
        <Vstack>
          <p>flower image placeholder</p>
          <p>© 2026 fragmnt. All rights reserved.</p>
        </Vstack>
      </Vstack>

      <Vstack>
        <FlexOneContainer>
          <Vstack>
            <h3>EXPLORE</h3>
            <p>Where scent meets space.</p>
            <p>A quiet invitation to breathe, feel, and belong.</p>
          </Vstack>
        </FlexOneContainer>
        <p>Privacy Policy</p>
      </Vstack>

      <Vstack>
        <FlexOneContainer>
          <Vstack>
            <h3>CONNECT</h3>
            <p>fragmnt studio</p>
            <p>Onepiece@fragmnt.co</p>
          </Vstack>
        </FlexOneContainer>
        <p>Terms Of Service</p>
      </Vstack>
    </RoundBox>
  )
}

export default Footer

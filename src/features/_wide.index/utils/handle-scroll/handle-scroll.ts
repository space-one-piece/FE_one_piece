export const handleScroll = (selector: string) => {
  const quickStartDiv = document.querySelector(selector)
  quickStartDiv.scrollIntoView({
    behavior: "smooth",
    block: "center",
  })
}

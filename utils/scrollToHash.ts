export default function scrollToHash(elementId: string) {
  const element = document.getElementById(elementId);
  element?.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "start",
  });
}

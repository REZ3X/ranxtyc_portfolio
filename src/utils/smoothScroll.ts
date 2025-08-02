export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId.replace('#', ''));
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

export const handleNavClick = (href: string) => {
  const targetId = href.replace('#', '');
  smoothScrollTo(targetId);
  
  // history.replaceState(null, '', `#${targetId}`);
};
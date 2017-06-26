
/**
 * Analytics.
 */

window.addEventListener('click', (e) => {
  if (e.target.hasAttribute('data-track-link')) {
    trackLink(e.target);
  }

  // no, get out!
  return;
});

/**
 * trackLink
 * Track the click of a link in page body copy
 * @param  {Node} anchor - the clicked anchor
 */

function trackLink(anchor) {
  window.analytics.trackLink(anchor, 'Link Clicked', {
    href: anchor.href,
    location: anchor.getAttribute('data-link-location'),
    style: anchor.getAttribute('data-link-style'),
    text: anchor.title
  });
}


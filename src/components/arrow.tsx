/** The drawn arrow of the dealt `arrow` button look (system.md): the primary's last child. */
export function Arrow() {
  return (
    <svg aria-hidden="true" className="m-arrow" viewBox="0 0 12 12">
      <path className="m-arrow__stem" d="M1 6h8" />
      <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
    </svg>
  );
}

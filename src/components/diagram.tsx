/**
 * A kit diagram card (references/diagrams.md): the spec as JSON on data-diagram, drawn by
 * /assets/diagrams/mount.js after hydration. Labels hold no apostrophes, so the attribute form is safe.
 */
export function Diagram({ spec, still = false }: { spec: object; still?: boolean }) {
  return <div className="dg" data-diagram={JSON.stringify(spec)} data-dg-still={still ? '' : undefined} />;
}
